"use client"
import React from 'react'
import { FaRegStar, FaSmile, FaStar } from 'react-icons/fa';
import { FaRegFaceSmile } from 'react-icons/fa6';
import { useForm } from 'react-hook-form';
import { CiTimer } from 'react-icons/ci';
import { LuEuro } from 'react-icons/lu';

interface CalculatorFormData {
    membership: string;
    hourly_Rate: number;
    hours_Worked: number;
    gross_Invoice: number;
    age: number;
    payroll_Tax_Credit: boolean;
    socially_Insured: boolean;
    disability: boolean;
    holiday_Allowance: boolean;
    holidays: boolean;
    flexible_Savings: boolean;
    factoring: boolean;
    expense: number;
    add_Invoice: boolean;
}

const membershipOptions = [
    {
        value: 'basic',
        label: 'Basic',
        icon: <FaRegFaceSmile
            className="size-6" />,
        iconSelected: <FaSmile
            className="size-6 text-teal-500" />,
        defaultChecked: true
    },
    {
        value: 'premium',
        label: 'Premium',
        icon: <FaRegStar
            className="size-6" />,
        iconSelected: <FaStar
            className="size-6 text-teal-500" />,
        defaultChecked: false
    },
];
type deviceType = {
    appCodeName?: string,
    appName?: string,
    appVersion?: string,
    userAgent?: string
}


const CalculateBenefit = () => {

    // const formSettings = await getFormData();
    const { register, handleSubmit, watch } = useForm<CalculatorFormData>();

    const [device, setDevice] = React.useState<deviceType>({})

    const onSubmit = (data: CalculatorFormData) => {
        console.log('Form data:', data);

    };

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

    React.useEffect(()=>{
        console.log('userAgent: ', device)
    },[device])


    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <div className="*:text-base *:font-semibold">
                <label className="label">Membership</label>
                <div className="flex flex-row gap-2 my-2">
                    {membershipOptions.map((option, index) => (
                        <label key={index} htmlFor={`membership-${index}`}
                            className={`cursor-pointer flex flex-grow max-w-[49%] justify-between rounded-xl py-4 px-3 border ${watch('membership') == option.value ? 'border-teal-500' : 'border-gray-200'}`}>
                            <div className="space-y-3">
                                <div>
                                    {watch('membership') == option.value ? option.iconSelected : option.icon}
                                </div>
                                <div className={`${watch('membership') == option.value ? 'text-teal-500' : 'text-gray-600'}`}>{option.label}</div>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id={`membership-${index}`}
                                    value={option.value}
                                    {...register('membership')}
                                    className={`radio ${watch('membership') == option.value ? 'checked:bg-teal-500' : ''}`}
                                    defaultChecked={option.defaultChecked}
                                />
                            </div>
                        </label>
                    ))}
                </div>
            </div>

            <div className="text-base font-semibold grid grid-cols-1 gap-5 *:grid *:grid-cols-2 mt-4">
                <div className='items-center'>
                    <div className="">Earnings</div>
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className="label text-sm">Hourly Rate</label>
                            <div className="flex items-center">
                                <div className="text-gray-500 border border-gray-300 rounded-l-lg px-1 py-2"><LuEuro size={24} className='py-1' /></div>
                                <input
                                    type="number"
                                    {...register('hourly_Rate', { valueAsNumber: true })}
                                    className="lg:w-full focus:outline-none border border-l-0 border-gray-300 rounded-r-lg px-3 py-2"
                                    step={0.01}
                                />
                            </div>
                        </div>
                        <div>
                            <label className="label text-sm">Hours Worked</label>
                            <div className="flex items-center">
                                <div className="text-gray-500 border border-gray-300 rounded-l-lg px-1 py-2"><CiTimer size={24} className='py-1' /></div>
                                <input
                                    type="number"
                                    {...register('hours_Worked', { valueAsNumber: true })}
                                    className="lg:w-full focus:outline-none border border-l-0 border-gray-300 rounded-r-lg px-3 py-2"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='items-center'>
                    <div className="">
                        Age
                    </div>
                    <div>
                        <div className="">
                            <input
                                type="number"
                                {...register('age', { valueAsNumber: true })}
                                className="lg:w-full focus:outline-none border border-gray-300 rounded-lg px-3 py-2"
                                defaultValue={19}
                            />
                        </div>
                    </div>
                </div>

                <div className='items-center'>
                    <div className="">
                        Social Charge
                    </div>
                    <div>
                        <div className="">
                            <label className="cursor-pointer flex items-center">
                                <input type="checkbox" {...register('payroll_Tax_Credit')} className="checkbox" />
                                {/* <span className="ml-2">Payroll tax credit</span> */}
                            </label>
                        </div>
                    </div>
                </div>

                <div className='items-center'>
                    <div className="">
                        PFF
                    </div>
                    <div>
                        <div className="">
                            <label className="cursor-pointer flex items-center">
                                <input type="checkbox" {...register('socially_Insured')} className="checkbox" />
                                <small className="ml-2 font-normal">Paid Fast Forword (In 3 Day&apos;s)</small>
                            </label>
                        </div>
                    </div>
                </div>

                <div className='items-center'>
                    <div className="">
                        Pension
                    </div>
                    <div>
                        <div className="flex flex-col gap-2">
                            <label className="cursor-pointer flex items-center">
                                <input type="checkbox" {...register('disability')} className="checkbox" />
                            </label>
                        </div>
                    </div>
                </div>

                <div className='items-center'>
                    <div className="">
                        Expenses
                    </div>
                    <div>
                        <div className="form-control">
                            <div className="flex items-center">
                                <div className="text-gray-500 border border-gray-300 rounded-l-lg px-1 py-2"><LuEuro size={24} className='py-1' /></div>
                                <input
                                    type="number"
                                    {...register('expense', { valueAsNumber: true })}
                                    className="lg:w-full focus:outline-none border border-l-0 border-gray-300 rounded-r-lg px-3 py-2"
                                    step={0.01}
                                />
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <table className="table table-fixed text-base font-semibold hidden">
                <tr>
                    <td className="align-text-top">Earnings</td>
                    <td className="grid grid-cols-2 gap-3">
                        <div>
                            <label className="label">Hourly Rate</label>
                            <div className="flex items-center">
                                <div className="text-gray-500 border border-gray-300 rounded-l-lg px-3 py-2">€</div>
                                <input
                                    type="number"
                                    {...register('hourly_Rate', { valueAsNumber: true })}
                                    className="lg:w-full focus:outline-none border border-l-0 border-gray-300 rounded-r-lg px-3 py-2"
                                    step={0.01}
                                />
                            </div>
                        </div>
                        <div>
                            <label className="label">Hours Worked</label>
                            <input
                                type="number"
                                {...register('hours_Worked', { valueAsNumber: true })}
                                className="lg:w-full focus:outline-none border border-gray-300 rounded-lg px-3 py-2"

                            />
                        </div>
                    </td>
                </tr>

                <tr>
                    <td className="align-text-top">
                        Age
                    </td>
                    <td>
                        <div className="">
                            <input
                                type="number"
                                {...register('age', { valueAsNumber: true })}
                                className="lg:w-full focus:outline-none border border-gray-300 rounded-lg px-3 py-2"
                                defaultValue={19}
                            />
                        </div>
                    </td>
                </tr>

                <tr>
                    <td className="align-text-top">
                        Social Charge
                    </td>
                    <td>
                        <div className="">
                            <label className="cursor-pointer flex items-center">
                                <input type="checkbox" {...register('payroll_Tax_Credit')} className="checkbox" />
                                {/* <span className="ml-2">Payroll tax credit</span> */}
                            </label>
                        </div>
                    </td>
                </tr>

                <tr>
                    <td className="align-text-top">
                        PFF
                    </td>
                    <td>
                        <div className="">
                            <label className="cursor-pointer flex items-center">
                                <input type="checkbox" {...register('socially_Insured')} className="checkbox" />
                                <small className="ml-2 font-normal">Paid Fast Forword (In 3 Day&apos;s)</small>
                            </label>
                        </div>
                    </td>
                </tr>

                <tr>
                    <td className="align-text-top">
                        Pension
                    </td>
                    <td>
                        <div className="flex flex-col gap-2">
                            <label className="cursor-pointer flex items-center">
                                <input type="checkbox" {...register('disability')} className="checkbox" />
                            </label>
                        </div>
                    </td>
                </tr>

                <tr>
                    <td className="align-text-top">
                        Expenses
                    </td>
                    <td>
                        <div className="form-control">
                            <div className="flex items-center">
                                <div className="text-gray-500 border border-gray-300 rounded-l-lg px-3 py-2">
                                    €
                                </div>
                                <input
                                    type="number"
                                    {...register('expense', { valueAsNumber: true })}
                                    className="lg:w-full focus:outline-none border border-l-0 border-gray-300 rounded-r-lg px-3 py-2"
                                    step={0.01}
                                />
                            </div>
                        </div>

                    </td>
                </tr>

            </table>
        </form>
    )
}

export default CalculateBenefit