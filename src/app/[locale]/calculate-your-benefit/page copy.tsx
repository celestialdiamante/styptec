"use client";
import PageHeader from '@/components/Global/PageHeader';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FaChevronRight, FaRegSmileBeam, FaRegStar } from 'react-icons/fa';
// import { GrDiamond } from 'react-icons/gr';

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
        icon: <FaRegSmileBeam
            className="size-6" />,
        defaultChecked: true
    },
    {
        value: 'premium',
        label: 'Premium',
        icon: <FaRegStar
            className="size-6" />,
        defaultChecked: false
    },
];

const CalculateYourBenefit = () => {
    const { register, handleSubmit } = useForm<CalculatorFormData>();
    const [grossIncome, setGrossIncome] = React.useState(0);
    const [netPayout, setNetPayout] = React.useState(0);
    const [invoiceAmount, setInvoiceAmount] = React.useState(0);

    const onSubmit = (data: CalculatorFormData) => {
        console.log('Form data:', data);


        const calculatedGrossIncome = data.hourly_Rate * data.hours_Worked;
        const calculatedNetPayout = calculatedGrossIncome * 0.5;
        const calculatedInvoiceAmount = data.gross_Invoice;


        setGrossIncome(calculatedGrossIncome);
        setNetPayout(calculatedNetPayout);
        setInvoiceAmount(calculatedInvoiceAmount);
    };

    return (
        <>
            <PageHeader title="Calculate your benefit" />
            <section className="py-16">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-6 gap-6">
                        <div className="col-span-3 p-4 bg-base-100 relative rounded-2xl border border-gray-50 shadow-xl">
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className="*:text-base *:font-semibold">
                                    <label className="label">Membership</label>
                                    <div className="flex gap-2 my-2">
                                        {membershipOptions.map((option, index) => (
                                            <div key={index} className=" flex flex-grow justify-between rounded-xl py-4 px-3 border border-gray-500">
                                                <div className="flex flex-col gap-2">
                                                    {option.icon}
                                                    <span>{option.label}</span>
                                                </div>
                                                <label className="cursor-pointer flex items-center">
                                                    <input
                                                        type="radio"
                                                        value={option.value}
                                                        {...register('membership')}
                                                        className="radio"
                                                        defaultChecked={option.defaultChecked}
                                                    />
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <table className="table table-fixed text-base font-semibold">
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

                                    {/* <tr>
                                        <td className="align-text-top">
                                            Gross invoice amount
                                        </td>
                                        <td className="col-span-2">
                                            <div className="">
                                                <div className="flex items-center">
                                                    <div className="text-gray-500 border border-gray-300 rounded-l-lg px-3 py-2">
                                                        €
                                                    </div>
                                                    <input
                                                        type="number"
                                                        {...register('gross_Invoice', { valueAsNumber: true })}
                                                        className="lg:w-full focus:outline-none border border-l-0 border-gray-300 rounded-r-lg px-3 py-2"
                                                        defaultValue={40640}
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                    </tr> */}

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
                                                    {/* <span className="ml-2">Disability</span> */}

                                                </label>
                                                {/* <label className="form-control w-full max-w-xs">
                                                    <div className="label">
                                                        <span className="label-text">Coverage</span>
                                                    </div>
                                                    <select className="lg:w-full focus:outline-none bg-white border border-gray-300 rounded-lg px-3 py-2">
                                                        <option disabled selected>Profession</option>
                                                        <option>Doctor</option>
                                                        <option>Teacher</option>
                                                        <option>Driver</option>
                                                    </select>
                                                </label>
                                                <label className="form-control w-full max-w-xs">
                                                    <div className="label">
                                                        <span className="label-text">Coverage</span>
                                                    </div>
                                                    <select className="lg:w-full focus:outline-none bg-white border border-gray-300 rounded-lg px-3 py-2">
                                                        <option disabled selected>Make a choice</option>
                                                        <option>Coverage of 5 years - 2 months deductible</option>
                                                        <option>Cover up to 68 years - 2 months deductible</option>
                                                        <option>Cover up to 68 years - 2 years deductible</option>
                                                    </select>
                                                </label> */}
                                            </div>
                                        </td>
                                    </tr>



{/* 
                                    <tr>
                                        <td className="align-text-top">
                                            Save
                                        </td>
                                        <td className="flex flex-col gap-3">
                                            <div className="">
                                                <label className="cursor-pointer flex items-center">
                                                    <input type="checkbox" {...register('holiday_Allowance')} className="checkbox" />
                                                    <span className="ml-2">Holiday allowance <span className="text-gray-400">(8%)</span></span>
                                                </label>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <label className="cursor-pointer flex items-center">
                                                    <input type="checkbox" {...register('holidays')} className="checkbox" />
                                                    <span className="ml-2">Holidays <span className="text-gray-400">(10%)</span></span>
                                                </label>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <label className="cursor-pointer flex items-center">
                                                    <input type="checkbox" {...register('flexible_Savings')} className="checkbox" />
                                                    <span className="ml-2">Flexible savings <span className="text-gray-400">(1-20%)</span></span>
                                                </label>
                                                <div className="">
                                                    <input
                                                        type="number"
                                                        {...register('flexible_Savings', { valueAsNumber: true })}
                                                        className="lg:w-full focus:outline-none border border-gray-300 rounded-lg px-3 py-2"
                                                        defaultValue={19}
                                                        maxLength={20}
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                    </tr>


                                    <tr>
                                        <td className="align-text-top">
                                            Extras
                                        </td>
                                        <td>
                                            <div className="form-control">
                                                <label className="cursor-pointer flex items-center">
                                                    <input type="checkbox" {...register('factoring')} className="checkbox" />
                                                    <span className="ml-2">Factoring <span className="text-gray-400">(6%)</span></span>
                                                </label>
                                            </div>

                                        </td>
                                    </tr> */}

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

                                    {/* <tr>
                                        <td></td>
                                        <td>
                                            <div className="form-control">
                                                <label className="cursor-pointer flex items-center">
                                                    <input type="checkbox" {...register('add_Invoice')} className="checkbox" />
                                                    <span className="ml-2">Add to invoice</span>
                                                </label>
                                            </div>
                                        </td>
                                    </tr> */}

                                </table>
                                {/* <div className="flex justify-end">
                                    <button type="submit" className="btn btn-primary text-white px-6">Calculate</button>
                                </div> */}
                            </form>
                        </div>

                        <div className="col-span-3 p-4 rounded-lg">
                            <h3 className="lg:text-[40px] lg:leading-[48px] font-bold text-gray-700 mb-4">
                                Because you deserve more
                            </h3>
                            <p className="text-base lg:text-lg text-black mb-2 last:mb-0">
                            See immediately what you earn net? Select all options and decide for yourself what is important to you. Easy, fair and transparent, and always paid out within 1 day without any surprises afterwards!
                            </p>

                            <div className="flex flex-col mt-6 bg-white rounded-2xl shadow-xl border border-gray-200">
                                <div className="flex justify-between p-6 lg:p-6 lg:!pb-4">
                                    <div className="flex flex-col">
                                        <p className="text-sm text-gray-700 mb-2">Invoice amount</p>
                                        <p className="text-base font-semibold text-gray-700">€{invoiceAmount.toFixed(2)}</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm text-gray-700 mb-2">Gross Income</p>
                                        <p className="text-base font-semibold text-gray-700">€{grossIncome.toFixed(2)}</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm text-gray-700 mb-2">Net payout</p>
                                        <p className="text-[24px] leading-[32px] font-bold text-gray-700">€{netPayout.toFixed(2)}</p>
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
                                        <button className="btn btn-primary text-white">Calculate Paycheck<FaChevronRight /></button>
                                        {/* <a href='#' className="btn btn-outline btn-primary">Get Estimation <FaChevronRight /></a> */}
                                    </div>
                                </div>
                            </div>

                        
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CalculateYourBenefit;
