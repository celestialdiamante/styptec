/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React from 'react';
import { FaChevronRight, FaRegStar, FaSmile, FaStar } from 'react-icons/fa';
import { FaRegFaceSmile } from 'react-icons/fa6';
import { CiTimer } from 'react-icons/ci';
import { LuEuro } from 'react-icons/lu';
import { submitEstimationForm, estimationFormType } from '@/helpers/postData';
import { countries } from '@/Lib/countries';
import { MdOutlineSimCardDownload } from 'react-icons/md';
import { typeOfFormSettings } from '@/helpers/getData';
import { useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { URLS } from '@/helpers/URLs';
import Loader from '@/components/Loader';
import Swal from 'sweetalert2';

interface Country {
    id: number;
    name: string;
    flag: string;
}


type deviceType = {
    appCodeName?: string,
    appName?: string,
    appVersion?: string,
    userAgent?: string
}

const EstimationForm = ({ form_settings, params }: { form_settings: typeOfFormSettings, params: { locale: string } }) => {

    const [loading, setLoading] = React.useState(false);

    const lang = useTranslations('estimationForm');

    const searchParams = useSearchParams();

    const percents = form_settings;

    const [membershipOptions, setMembershipOptions] = React.useState([
        {
            value: 'Basic',
            label: 'Basic',
            icon: <FaRegFaceSmile className="size-6" />,
            iconSelected: <FaSmile className="size-6 text-teal-500" />,
            disabled: false,
        },
        {
            value: 'Premium',
            label: 'Premium',
            icon: <FaRegStar className="size-6" />,
            iconSelected: <FaStar className="size-6 text-teal-500" />,
            disabled: true,
        },
    ]);


    const [invoiceAmount, setInvoiceAmount] = React.useState<any>(0.00);
    const [grossIncome, setGrossIncome] = React.useState<any>(0.00);
    const [netPayable, setNetPayable] = React.useState<any>(0.00);

    const [estForm, setestForm] = React.useState<estimationFormType>({
        membership_type: 'Basic',
        hourly_rate: searchParams.get('hourly_rate')?.toString() ?? '',
        hours_worked: parseInt(searchParams.get('hours_worked') ?? ''),
        age: 0,
        pension: false,
        social_charges: false,
        paid_fast_forward: false,
        expenses: '',
        name: '',
        email: '',
        phone_number: '',
        country_id: 156,
        device: {}
    });

    React.useEffect(() => {

        if (estForm.hours_worked < 130) {
            setMembershipOptions((prevData) => {
                return [
                    { ...prevData[0] },
                    {
                        ...prevData[1],
                        disabled: true
                    }
                ]
            })
        } else {
            setMembershipOptions((prevData) => {
                return [
                    { ...prevData[0] },
                    {
                        ...prevData[1],
                        disabled: false
                    }
                ]
            })
        }
    }, [estForm.hours_worked])

    React.useEffect(() => {
        if (parseInt(estForm.hourly_rate + '') > 0 && parseInt(estForm.hours_worked + '') > 0) {

            const newInvoiceAmount = parseInt(estForm.hourly_rate) * parseInt(estForm.hours_worked + '');
            setInvoiceAmount(newInvoiceAmount);
            const percent = newInvoiceAmount / 100;
            // console.log('percent: ', percent)

            const deduction = percents.service_charge * percent;
            // console.log('deduction: ', deduction)

            const newGrossIncome = newInvoiceAmount - deduction
            setGrossIncome(newGrossIncome);
            setNetPayable(newGrossIncome);

            const grossPercent = newGrossIncome / 100;

            let otherDeductions = 0;
            if (estForm.pension) {
                const pensionCharges = grossPercent * percents.pension;
                otherDeductions += pensionCharges;
            }

            if (estForm.paid_fast_forward) {
                const pffCharges = grossPercent * percents.paid_fast_forward;
                otherDeductions += pffCharges;
            }

            if (estForm.social_charges) {
                const socialCharge = grossPercent * percents.social_charges;
                otherDeductions += socialCharge;
            }

            let newNetPayable = newGrossIncome - otherDeductions;

            if (estForm.membership_type?.toLowerCase() == 'premium' && estForm.hours_worked >= 130) {
                const discount = grossPercent * percents.premium_discount;
                newNetPayable += discount;
            }

            setNetPayable(newNetPayable);

        }

    }, [
        estForm.hourly_rate,
        estForm.hours_worked,
        estForm.pension,
        estForm.paid_fast_forward,
        estForm.social_charges,
        estForm.membership_type,
    ])

    async function updateEstForm(event: any) {
        const name: keyof estimationFormType = event.target.name;
        const value = event.target.value;

        const newFormData: any = {};
        if (name == 'pension' || name == 'social_charges' || name == 'paid_fast_forward') {
            newFormData[name] = estForm[name] == true ? false : true;
        } else {
            if (name == 'membership_type' && estForm.hours_worked < 130) {
                newFormData[name] = 'Basic';
            } else {
                newFormData[name] = value;
            }
        }

        // console.log('updateEstForm: ', value, name)

        setestForm((prevForm) => {
            return {
                ...prevForm,
                ...newFormData
            }
        })
    }

    const [device, setDevice] = React.useState<deviceType>({})

    React.useEffect(() => {
        setTimeout(() => {
            const navigator = window?.navigator
            setDevice({
                appCodeName: navigator.appCodeName ?? '',
                appName: navigator.appName ?? '',
                appVersion: navigator.appVersion ?? '',
                userAgent: navigator.userAgent ?? ''
            });
        }, 1000);
    }, [])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        closeModal();
        setLoading(true);

        try {
            const formData: any = {
                membership_type: estForm.membership_type,
                hourly_rate: parseInt(estForm.hourly_rate).toFixed(2),
                hours_worked: estForm.hours_worked,
                age: estForm.age,
                pension: estForm.pension,
                social_charges: estForm.social_charges,
                paid_fast_forward: estForm.paid_fast_forward,
                expenses: (parseInt(estForm.expenses + '') || 0).toFixed(2),
                name: estForm.name,
                email: estForm.email,
                phone_number: estForm.phone_number,
                country_id: estForm.country_id,
                device: device,
                language: params.locale
            };
            // console.log('form data: ', formData);
            const response = await submitEstimationForm({ ...formData })
            console.log('form data response: ', response);
            setLoading(false);
            if (response && response.success) {
                if (response.pdf_base64) {
                    // Decode base64 back into binary data
                    const byteCharacters = atob(response.pdf_base64); // Decode base64 string
                    const byteNumbers = new Array(byteCharacters.length);
                    for (let i = 0; i < byteCharacters.length; i++) {
                        byteNumbers[i] = byteCharacters.charCodeAt(i);
                    }
                    const byteArray = await new Uint8Array(byteNumbers);

                    // Create a Blob from the binary data
                    const blob = new Blob([byteArray], { type: 'application/pdf' });
                    const url = window.URL.createObjectURL(blob);

                    // Trigger the download
                    const link = document.createElement('a');
                    link.href = url;
                    const fileName = 'estimation-' + Date.now() + '.pdf'; // Use timestamp as filename
                    link.setAttribute('download', fileName); // Set the file name
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);

                    // Clean up the URL
                    window.URL.revokeObjectURL(url);
                }
                const estimationID = response.estimation.id;
                const pdfUrl = URLS.DOWNLOAD_PDF + estimationID;
                Swal.fire({
                    title: "<strong>PDF downloading ...</strong>",
                    icon: "success",
                    html: `You PDF will be download soon <br />, Click the <a href="${pdfUrl}" class="text-blue-700 font-semibold" target="_blank">link</a> if download not started.`
                }).then(() => {
                    // After successfully downloading, reload the page or navigate to a new URL
                    // Option 1: Reload the current page
                    // window.location.reload();

                    setLoading(false);
                    // Option 2: Redirect to another URL (uncomment the following line if needed)
                    window.location.href = '/';
                })
            } else {
                setLoading(false);
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: response.message ? response.message : 'Server error, please try after some time.',
                });
            }
            // console.log('form response: ', response)
        } catch (error) {
            setLoading(false);
            // Swal.fire({
            //     icon: "error",
            //     title: "Error",
            //     text: response.message ? response.message : 'Server error, please try after some time.',
            // });
            console.log('form error: ', error)
        }
    };

    const closeModal = () => {
        const modal = document?.getElementById('my_modal');
        if (modal instanceof HTMLDialogElement) {
            modal.close();
        }
    }
    const openModal = (e: any) => {
        e.preventDefault();

        if (
            !estForm.membership_type ||
            estForm.hourly_rate === undefined || parseInt(estForm.hourly_rate) < 1 ||
            estForm.hours_worked === undefined || estForm.hours_worked < 1 ||
            estForm.age === undefined || estForm.age < 18
        ) {
            alert('Please fill in all required fields correctly before proceeding.');
            return;
        }

        const modal = document?.getElementById('my_modal');
        if (modal instanceof HTMLDialogElement) {
            modal.showModal();
        }
    };



    return (
        <div className="grid lg:grid-cols-6 gap-6">
            {loading && <Loader />}
            <div className="col-span-3 p-4 bg-base-100 relative rounded-2xl border border-gray-50 shadow-xl">
                <div>

                    <div className="*:text-base *:font-semibold">
                        <label className="label">{lang('membership.label')}</label>
                        <div className="flex flex-row gap-2 my-2">

                            {membershipOptions.map((option, index) => {

                                return (
                                    <label
                                        key={index}
                                        htmlFor={`membership-${index}`}
                                        className={`cursor-pointer flex flex-grow max-w-[49%] justify-between rounded-xl py-4 px-3 border 
                                                    ${estForm.membership_type === option.value ? 'border-teal-500' : 'border-gray-200'}
                                                    ${option.disabled ? 'opacity-10 cursor-not-allowed border-red-950' : ''}
                                                `}
                                    >
                                        <div className="space-y-3">
                                            <div>{estForm.membership_type === option.value ? option.iconSelected : option.icon}</div>
                                            <div className={`${estForm.membership_type === option.value ? 'text-teal-500' : 'text-gray-600'}`}>
                                                {option.label}
                                            </div>
                                        </div>

                                        <div className="flex items-center">
                                            <input
                                                type="radio"
                                                id={`membership-${index}`}
                                                value={option.value}
                                                onChange={updateEstForm}
                                                name='membership_type'
                                                className={`radio ${estForm.membership_type === option.value ? 'checked:bg-teal-500' : ''}`}
                                                checked={estForm.membership_type === option.value}
                                            />
                                        </div>
                                    </label>
                                );
                            })}
                        </div>
                    </div>


                    <div className="text-base font-semibold grid grid-cols-1 gap-5 *:grid *:grid-cols-2 mt-4">
                        <div className="">
                            <div className="">{lang('features.earning.label')}</div>
                            <div className="flex flex-col md:flex-row flex-grow gap-3">
                                <div>
                                    <label className="label text-sm">{lang('features.hourlyRate.label')}</label>
                                    <div className="flex items-center">
                                        <div className="text-gray-500 border border-gray-300 rounded-l-lg px-1 py-2">
                                            <LuEuro size={24} className="py-1" />
                                        </div>
                                        <input
                                            type="number"
                                            name="hourly_rate"
                                            onChange={updateEstForm}
                                            value={parseInt(estForm.hourly_rate) > 0 ? estForm.hourly_rate : ''}
                                            className="w-full focus:outline-none border border-l-0 border-gray-300 rounded-r-lg px-3 py-2"
                                            step={0.01}
                                        />
                                    </div>
                                    {estForm.hourly_rate !== undefined && parseInt(estForm.hourly_rate) < 1 && (
                                        <p className="text-red-500">{lang('messages.hourlyRateError')}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="label text-sm">{lang('features.hoursWorked.label')}</label>
                                    <div className="flex items-center">
                                        <div className="text-gray-500 border border-gray-300 rounded-l-lg px-1 py-2">
                                            <CiTimer size={24} className="py-1" />
                                        </div>
                                        <input
                                            type="number"
                                            name="hours_worked"
                                            onChange={updateEstForm}
                                            value={estForm.hours_worked > 0 ? estForm.hours_worked : ''}
                                            className="w-full focus:outline-none border border-l-0 border-gray-300 rounded-r-lg px-3 py-2"
                                        />
                                    </div>

                                    {estForm.hours_worked !== undefined && estForm.hours_worked < 1 && (
                                        <p className="text-red-500">{lang('messages.hoursWorkedError')}</p>
                                    )}
                                </div>

                            </div>
                        </div>

                        <div className="items-center">
                            <label className="label text-sm">{lang('features.age.label')}</label>
                            <div>
                                <input
                                    type="number"
                                    name="age"
                                    onChange={updateEstForm}
                                    value={estForm.age > 0 ? estForm.age : ''}
                                    className="w-full focus:outline-none border border-gray-300 rounded-lg px-3 py-2"
                                />

                                {estForm.age !== undefined && estForm.age < 18 && (
                                    <p className="text-red-500">{lang('messages.ageError')}</p>
                                )}
                            </div>
                        </div>

                        <div className="items-center">
                            <div className="">{lang('features.socialCharge.label')}</div>
                            <label className="cursor-pointer flex items-center">
                                <input type="checkbox" className="checkbox"
                                    name="social_charges"
                                    onChange={updateEstForm}
                                    checked={estForm.social_charges}
                                />
                            </label>
                        </div>

                        <div className="items-center">
                            <div className="">{lang('features.pff.label')}</div>
                            <label className="cursor-pointer flex items-center">
                                <input type="checkbox"
                                    // checked={estForm.paid_fast_forward} 
                                    className="checkbox"
                                    name="paid_fast_forward"
                                    onChange={updateEstForm} />
                                <small className="ml-2 font-normal">{lang('features.pff.description')}</small>
                            </label>
                        </div>

                        <div className="items-center">
                            <div className="">{lang('features.pension.label')}</div>
                            <label className="cursor-pointer flex items-center">
                                <input type="checkbox" checked={estForm.pension} className="checkbox"
                                    name="pension"
                                    onChange={updateEstForm} />
                            </label>
                        </div>

                        <div className="items-center">
                            <label className="label text-sm">{lang('features.expenses.label')}</label>
                            <div className="flex items-center">
                                <div className="text-gray-500 border border-gray-300 rounded-l-lg px-1 py-2">
                                    <LuEuro size={24} className="py-1" />
                                </div>
                                <input
                                    type="number"
                                    value={parseInt(estForm.expenses) > 0 ? estForm.expenses : ''}
                                    name="expenses"
                                    onChange={updateEstForm}
                                    className="w-full focus:outline-none border border-l-0 border-gray-300 rounded-r-lg px-3 py-2"
                                    step={0.01}
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="col-span-3 p-4 rounded-lg">
                <div>
                    <h3 className="lg:text-[40px] lg:leading-[48px] font-bold   mb-4">
                        {lang('leftSection.title')}
                    </h3>
                    <p className="text-base lg:text-lg text-black mb-2 last:mb-0">
                        {lang('leftSection.description')}
                    </p>
                    <p className="text-base lg:text-lg text-black mb-2 last:mb-0">
                        {lang('leftSection.description2')}
                    </p>

                    <div className="flex flex-col mt-6 bg-white rounded-2xl shadow-xl border border-gray-200">
                        <div className="flex justify-between p-6 lg:p-6 lg:!pb-4">
                            <div className="flex flex-col">
                                <p className="text-sm   mb-2">{lang('leftSection.invoiceAmount')}</p>
                                <p className="text-base font-semibold  ">€ {invoiceAmount.toFixed(2)}</p>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-sm   mb-2">{lang('leftSection.grossIncome')}</p>
                                <p className="text-base font-semibold  ">€ {grossIncome.toFixed(2)}</p>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-sm   mb-2">{lang('leftSection.netPayout')}</p>
                                <p className="text-[24px] leading-[32px] font-bold  ">€ {netPayable.toFixed(2)}</p>
                            </div>
                        </div>

                        <div className="flex flex-col mt-auto px-6 pb-6 rounded-b-2xl pt-6 rounded-t-xl lg:rounded-t-none 
                                    bg-gradient-to-r from-teal-300 via-green-200 to-amber-200">
                            <p className="text-[24px] leading-[32px] font-bold text-white">
                                {lang('leftSection.workingWithoutChamber')}
                            </p>
                            <p className="text-base mb-2">
                                {lang('leftSection.workersPreceded')}
                            </p>
                            <div className="flex gap-4 mt-4">
                                <button
                                    type='submit'
                                    className="btn btn-primary text-white"
                                    onClick={openModal}
                                >
                                    {lang('leftSection.button')}
                                    <FaChevronRight />
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <dialog id="my_modal" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    <h4 className="font-bold text-lg">{lang('modal.title')}</h4>
                    <p>{lang('modal.description')}</p>

                    <div className="my-8 space-y-4">
                        <div className="flex gap-4">
                            {/* Name Field */}
                            <div className="relative w-full">
                                <input
                                    type="text"
                                    id="name"
                                    value={estForm.name}
                                    onChange={updateEstForm}
                                    name="name"
                                    className="peer h-10 w-full border border-gray-300 rounded-lg px-3 pt-3 pb-2 focus:outline-none focus:border-primary"
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="name"
                                    className="absolute left-2 -top-2.5 bg-white px-1 text-sm text-gray-500 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary"
                                >
                                    {lang('modal.nameLabel')}
                                </label>
                            </div>
                            {/* Phone Field */}
                            <div className="relative w-full">
                                <input
                                    type="tel"
                                    id="phone"
                                    value={estForm.phone_number}
                                    onChange={updateEstForm}
                                    name="phone_number"
                                    className="peer h-10 w-full border border-gray-300 rounded-lg px-3 pt-3 pb-2 focus:outline-none focus:border-primary"
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="phone"
                                    className="absolute left-2 -top-2.5 bg-white px-1 text-sm text-gray-500 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary"
                                >
                                    {lang('modal.phoneLabel')}
                                </label>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            {/* Email Field */}
                            <div className="relative w-full">
                                <input
                                    type="email"
                                    id="email"
                                    value={estForm.email}
                                    onChange={updateEstForm}
                                    name="email"
                                    className="peer h-10 w-full border border-gray-300 rounded-lg px-3 pt-3 pb-2 focus:outline-none focus:border-primary"
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="email"
                                    className="absolute left-2 -top-2.5 bg-white px-1 text-sm text-gray-500 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary"
                                >
                                    {lang('modal.emailLabel')}
                                </label>
                            </div>

                            {/* Country Field */}
                            <div className="relative w-full">
                                <select
                                    id="countryCode"
                                    value={estForm.country_id}
                                    onChange={updateEstForm}
                                    name="country_id"
                                    className="p-2 w-full border border-gray-300 bg-white rounded-lg"
                                >
                                    {countries.map((country: Country) => (
                                        <option key={country.id} value={country.id}>
                                            {country.flag} {country.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                    </div>

                    <div className="flex flex-grow justify-center">
                        <button className="btn btn-primary text-white btn-sm w-full" onClick={handleSubmit}>
                            {lang('modal.downloadButton')}
                            <MdOutlineSimCardDownload />
                        </button>
                    </div>

                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    )
}

export default EstimationForm;