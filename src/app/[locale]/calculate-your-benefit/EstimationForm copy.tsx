/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React from 'react';
import { FaChevronRight, FaRegStar, FaSmile, FaStar } from 'react-icons/fa';
import { FaRegFaceSmile } from 'react-icons/fa6';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CiTimer } from 'react-icons/ci';
import { LuEuro } from 'react-icons/lu';
import { submitEstimationForm } from '@/helpers/postData';
import { countries } from '@/Lib/countries';
import { MdOutlineSimCardDownload } from 'react-icons/md';
import { typeOfFormSettings } from '@/helpers/getData';

interface Country {
    id: number;
    name: string;
    flag: string;
}


const calculatorSchema = z.object({
    membership: z.enum(['Premium', 'Basic']),
    hourly_Rate: z
        .number({ required_error: "Hourly rate is required" })
        .min(1, "Hourly rate must be at least 1.00"),
    hours_Worked: z
        .number({ required_error: "Hours worked are required" })
        .min(1, "Hours worked must be at least 1"),
    gross_Invoice: z.number().optional(),
    age: z
        .number({ required_error: "Age is required" })
        .min(18, "Age must be at least 18"),
    payroll_Tax_Credit: z.boolean().optional(),
    socially_Insured: z.boolean().optional(),
    disability: z.boolean().optional(),
    holiday_Allowance: z.boolean().optional(),
    holidays: z.boolean().optional(),
    flexible_Savings: z.boolean().optional(),
    factoring: z.boolean().optional(),
    expense: z.number().min(0, "Expenses must be at least 0.00").optional()
});


const membershipOptions = [
    {
        value: 'Basic',
        label: 'Basic',
        icon: <FaRegFaceSmile className="size-6" />,
        iconSelected: <FaSmile className="size-6 text-teal-500" />,
        defaultChecked: true,
    },
    {
        value: 'Premium',
        label: 'Premium',
        icon: <FaRegStar className="size-6" />,
        iconSelected: <FaStar className="size-6 text-teal-500" />,
        defaultChecked: false,
    },
];

type deviceType = {
    appCodeName?: string,
    appName?: string,
    appVersion?: string,
    userAgent?: string
}

const EstimationForm = ({ form_settings }: { form_settings: typeOfFormSettings }) => {

    const percents = form_settings;

    // React.useEffect(()=>{
    //     console.log('form_settings: ', form_settings)
    // }, [form_settings])

    type userFormType = {
        name: string,
        email: string,
        phone_number: string,
        country_id: string
    };
    const [userForm, setUserForm] = React.useState<userFormType>({
        name: '',
        email: '',
        phone_number: '',
        country_id: '156'
    });

    function updateUserFormInputs(event: any) {
        const inputName = event.target.name;
        const inputValue = event.target.value;

        setUserForm((prevFormValue) => {
            return {
                ...prevFormValue,
                [inputName]: inputValue
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

    const {
        register, watch, formState: { } } = useForm<z.infer<typeof calculatorSchema>>({
            resolver: zodResolver(calculatorSchema),
            mode: "onChange",
        });


    // const hourlyRate = watch("hourly_Rate");
    // const hoursWorked = watch("hours_Worked");
    const age = watch("age");
    const membershipType: any = watch("membership");
    const pension = watch("disability");
    const pff = watch("socially_Insured");
    const socialCharges = watch("payroll_Tax_Credit");
    const expense = watch("expense");

    const [hourlyRate, setHourlyRate] = React.useState<any>(0.00);
    const [hoursWorked, setHoursWorked] = React.useState<any>(0.00);

    const [invoiceAmount, setInvoiceAmount] = React.useState<any>(0.00);
    const [grossIncome, setGrossIncome] = React.useState<any>(0.00);
    const [netPayable, setNetPayable] = React.useState<any>(0.00);

    React.useEffect(() => {
        const storedHourlyRate = localStorage.getItem('hourlyRate') || '0.00';
        const storedHoursWorked = localStorage.getItem('hoursWorked') || '0.00';

        setHourlyRate(storedHourlyRate);
        setHoursWorked(storedHoursWorked);
    }, []);

    React.useEffect(() => {
        if (parseInt(hourlyRate + '') > 0 && parseInt(hoursWorked + '') > 0) {
            
            const newInvoiceAmount = hourlyRate * hoursWorked;
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
            if (pension) {
                const pensionCharges = grossPercent * percents.pension;
                otherDeductions += pensionCharges;
            }

            if (pff) {
                const pffCharges = grossPercent * percents.paid_fast_forward;
                otherDeductions += pffCharges;
            }

            if (socialCharges) {
                const socialCharge = grossPercent * percents.social_charges;
                otherDeductions += socialCharge;
            }

            let newNetPayable = newGrossIncome - otherDeductions;

            if (membershipType?.toLowerCase() == 'premium' && hoursWorked >= 130) {
                const discount = grossPercent * percents.premium_discount;
                newNetPayable += discount;
            }

            setNetPayable(newNetPayable);

        }

    }, [
        hourlyRate,
        hoursWorked,
        pension,
        pff,
        socialCharges,
        membershipType,
    ])


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const formData: any = {
                membership_type: membershipType,
                hourly_rate: hourlyRate.toFixed(2),
                hours_worked: hoursWorked,
                age: age,
                pension: pension,
                social_charges: socialCharges,
                paid_fast_forward: pff,
                expenses: (parseInt(expense + '') || 0).toFixed(2),
                name: userForm.name,
                email: userForm.email,
                phone_number: userForm.phone_number,
                country_id: userForm.country_id,
                device: device
            };
            console.log('form data: ', formData);
            const response = await submitEstimationForm({ ...formData })
            console.log('form data response: ', response);
            //   if(response && response.success) {
            //     alert('Form successfully submitted, we will get back to you');
            //     window.location.reload();
            //   } else {
            //     alert('Server error, please try after some time.')
            //   }
            // console.log('form response: ', response)
        } catch (error) {
            console.log('form error: ', error)
        }
    };

    const openModal = (e: any) => {
        e.preventDefault();

        if (
            !membershipType ||
            hourlyRate === undefined || hourlyRate < 1 ||
            hoursWorked === undefined || hoursWorked < 1 ||
            age === undefined || age < 18
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
            <div className="col-span-3 p-4 bg-base-100 relative rounded-2xl border border-gray-50 shadow-xl">
                <div>

                    <div className="*:text-base *:font-semibold">
                        <label className="label">Membership</label>
                        <div className="flex flex-row gap-2 my-2">
                            {membershipOptions.map((option, index) => {

                                const isPremiumDisabled = hoursWorked <= 130 && option.value === "premium"; 

                                return (
                                    <label
                                        key={index}
                                        htmlFor={`membership-${index}`}
                                        className={`cursor-pointer flex flex-grow max-w-[49%] justify-between rounded-xl py-4 px-3 border 
                                                    ${watch('membership') === option.value ? 'border-teal-500' : 'border-gray-200'}
                                                    ${isPremiumDisabled ? 'opacity-10 cursor-not-allowed border-red-950' : ''}
                                                `}
                                    >
                                        <div className="space-y-3">
                                            <div>{watch('membership') === option.value ? option.iconSelected : option.icon}</div>
                                            <div className={`${watch('membership') === option.value ? 'text-teal-500' : 'text-gray-600'}`}>
                                                {option.label}
                                            </div>
                                        </div>

                                        <div className="flex items-center">
                                            <input
                                                type="radio"
                                                id={`membership-${index}`}
                                                value={option.value}
                                                {...register('membership')}
                                                className={`radio ${watch('membership') === option.value ? 'checked:bg-teal-500' : ''}`}
                                                disabled={isPremiumDisabled}
                                            />
                                        </div>
                                    </label>
                                );
                            })}
                        </div>
                    </div>


                    <div className="text-base font-semibold grid grid-cols-1 gap-5 *:grid *:grid-cols-2 mt-4">
                        <div className="items-center">
                            <div className="">Earnings</div>
                            <div className="flex flex-grow gap-3">
                                <div>
                                    <label className="label text-sm">Hourly Rate</label>
                                    <div className="flex items-center">
                                        <div className="text-gray-500 border border-gray-300 rounded-l-lg px-1 py-2">
                                            <LuEuro size={24} className="py-1" />
                                        </div>
                                        <input
                                            type="number"
                                            {...register("hourly_Rate", { valueAsNumber: true })}
                                            value={hourlyRate}
                                            className="w-full focus:outline-none border border-l-0 border-gray-300 rounded-r-lg px-3 py-2"
                                            step={0.01}
                                        />
                                    </div>
                                    {hourlyRate !== undefined && hourlyRate < 1 && (
                                        <p className="text-red-500">Hourly rate must be at least 1.00</p>
                                    )}
                                </div>

                                <div>
                                    <label className="label text-sm">Hours Worked</label>
                                    <div className="flex items-center">
                                        <div className="text-gray-500 border border-gray-300 rounded-l-lg px-1 py-2">
                                            <CiTimer size={24} className="py-1" />
                                        </div>
                                        <input
                                            type="number"
                                            {...register("hours_Worked", { valueAsNumber: true })}
                                            value={hoursWorked}
                                            className="w-full focus:outline-none border border-l-0 border-gray-300 rounded-r-lg px-3 py-2"
                                        />
                                    </div>

                                    {hoursWorked !== undefined && hoursWorked < 1 && (
                                        <p className="text-red-500">Hours worked must be at least 1</p>
                                    )}
                                </div>

                            </div>
                        </div>

                        <div className="items-center">
                            <label className="label text-sm">Age</label>
                            <div>
                                <input
                                    type="number"
                                    {...register("age", { valueAsNumber: true })}
                                    className="w-full focus:outline-none border border-gray-300 rounded-lg px-3 py-2"
                                />

                                {age !== undefined && age < 18 && (
                                    <p className="text-red-500">Age must be at least 18</p>
                                )}
                            </div>
                        </div>

                        <div className="items-center">
                            <div className="">Social Charge</div>
                            <label className="cursor-pointer flex items-center">
                                <input type="checkbox" {...register('payroll_Tax_Credit')} className="checkbox" />
                            </label>
                        </div>

                        <div className="items-center">
                            <div className="">PFF</div>
                            <label className="cursor-pointer flex items-center">
                                <input type="checkbox" {...register('socially_Insured')} className="checkbox" />
                                <small className="ml-2 font-normal">Paid Fast Forward (In 3 Days)</small>
                            </label>
                        </div>

                        <div className="items-center">
                            <div className="">Pension</div>
                            <label className="cursor-pointer flex items-center">
                                <input type="checkbox" {...register('disability')} className="checkbox" />
                            </label>
                        </div>

                        <div className="items-center">
                            <label className="label text-sm">Expenses</label>
                            <div className="flex items-center">
                                <div className="text-gray-500 border border-gray-300 rounded-l-lg px-1 py-2">
                                    <LuEuro size={24} className="py-1" />
                                </div>
                                <input
                                    type="number"
                                    {...register("expense", { valueAsNumber: true })}
                                    className="lg:w-full focus:outline-none border border-l-0 border-gray-300 rounded-r-lg px-3 py-2"
                                    step={0.01}
                                />
                            </div>
                            {expense !== undefined && expense < 0 && (
                                <p className="text-red-500">Expenses must be at least 0.00</p>
                            )}
                        </div>
                    </div>

                </div>
            </div>
            <div className="col-span-3 p-4 rounded-lg">
                <div>
                    <h3 className="lg:text-[40px] lg:leading-[48px] font-bold   mb-4">
                        Because you deserve more
                    </h3>
                    <p className="text-base lg:text-lg text-black mb-2 last:mb-0">
                        See immediately what you earn net? Select all options and decide for yourself what is important to you.
                    </p>
                    <p className="text-base lg:text-lg text-black mb-2 last:mb-0">
                        3% Extra discount is applicable on premium membership whose working hours 130 or above.
                    </p>

                    <div className="flex flex-col mt-6 bg-white rounded-2xl shadow-xl border border-gray-200">
                        <div className="flex justify-between p-6 lg:p-6 lg:!pb-4">
                            <div className="flex flex-col">
                                <p className="text-sm   mb-2">Invoice amount</p>
                                <p className="text-base font-semibold  ">€ {invoiceAmount.toFixed(2)}</p>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-sm   mb-2">Gross Income</p>
                                <p className="text-base font-semibold  ">€ {grossIncome.toFixed(2)}</p>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-sm   mb-2">Net payout</p>
                                <p className="text-[24px] leading-[32px] font-bold  ">€ {netPayable.toFixed(2)}</p>
                            </div>
                        </div>

                        <div className="flex flex-col mt-auto px-6 pb-6 rounded-b-2xl pt-6 rounded-t-xl lg:rounded-t-none 
                                    bg-gradient-to-r from-teal-300 via-green-200 to-amber-200">
                            <p className="text-[24px] leading-[32px] font-bold text-white">
                                Working without a Chamber of Commerce or VAT number
                            </p>
                            <p className="text-base mb-2">
                                95,761 workers already preceded you.
                            </p>
                            <div className="flex gap-4 mt-4">
                                <button
                                    type='submit'
                                    className="btn btn-primary text-white"
                                    onClick={openModal}
                                >
                                    Calculate Paycheck
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

                    <h4 className="font-bold text-lg">Get Your Invoice</h4>
                    <p>Simply provide us your details and your invoice <br />will be on its way! 🚀</p>

                    <div className="my-8 space-y-4">
                        <div className="flex gap-4">
                            {/* Name Field */}
                            <div className="relative w-full">
                                <input
                                    type="text"
                                    id="name"
                                    value={userForm.name}
                                    onChange={updateUserFormInputs}
                                    name="name"
                                    className="peer h-10 w-full border border-gray-300 rounded-lg px-3 pt-3 pb-2 focus:outline-none focus:border-primary"
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="name"
                                    className="absolute left-2 -top-2.5 bg-white px-1 text-sm text-gray-500 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary"
                                >
                                    Name
                                </label>
                            </div>
                            {/* Phone Field */}
                            <div className="relative w-full">
                                <input
                                    type="tel"
                                    id="phone"
                                    value={userForm.phone_number}
                                    onChange={updateUserFormInputs}
                                    name="phone_number"
                                    className="peer h-10 w-full border border-gray-300 rounded-lg px-3 pt-3 pb-2 focus:outline-none focus:border-primary"
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="phone"
                                    className="absolute left-2 -top-2.5 bg-white px-1 text-sm text-gray-500 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary"
                                >
                                    Phone No.
                                </label>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            {/* Email Field */}
                            <div className="relative w-full">
                                <input
                                    type="email"
                                    id="email"
                                    value={userForm.email}
                                    onChange={updateUserFormInputs}
                                    name="email"
                                    className="peer h-10 w-full border border-gray-300 rounded-lg px-3 pt-3 pb-2 focus:outline-none focus:border-primary"
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="email"
                                    className="absolute left-2 -top-2.5 bg-white px-1 text-sm text-gray-500 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary"
                                >
                                    Email
                                </label>
                            </div>

                            {/* Country Field */}
                            <div className="relative w-full">
                                <select
                                    id="countryCode"
                                    value={userForm.country_id}
                                    onChange={updateUserFormInputs}
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
                            Download Estimated PDF
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