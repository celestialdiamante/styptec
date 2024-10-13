"use client";
import React from 'react';
import { FaRegStar, FaSmile, FaStar } from 'react-icons/fa';
import { FaRegFaceSmile } from 'react-icons/fa6';
import { useForm } from 'react-hook-form';
import { CiTimer } from 'react-icons/ci';
import { LuEuro } from 'react-icons/lu';

const percents = {
    premium: 3,
    pension: 26.23,
    pff: 6,
    social: 11.15,
    serviceCharge: 10,
};

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
        icon: <FaRegFaceSmile className="size-6" />,
        iconSelected: <FaSmile className="size-6 text-teal-500" />,
        defaultChecked: true,
    },
    {
        value: 'premium',
        label: 'Premium',
        icon: <FaRegStar className="size-6" />,
        iconSelected: <FaStar className="size-6 text-teal-500" />,
        defaultChecked: false,
    },
];


const CalculateBenefit = ({ onCalculate }: { onCalculate: (payoutValues: { invoiceAmount: number, grossIncome: number, netPayable: number }) => void }) => {
    const { register, handleSubmit, watch } = useForm<CalculatorFormData>();

    const hourlyRate = watch('hourly_Rate');
    const hoursWorked = watch('hours_Worked');
    const membershipType = watch('membership');
    const pension = watch('disability');
    const pff = watch('socially_Insured');
    const socialCharges = watch('payroll_Tax_Credit');

    const [invoiceAmount, setInvoiceAmount] = React.useState<number>(0);
    const [grossIncome, setGrossIncome] = React.useState<number>(0);
    const [netPayable, setNetPayable] = React.useState<number>(0);


    React.useEffect(() => {
        if (typeof hourlyRate === 'number' && typeof hoursWorked === 'number' && hourlyRate > 0 && hoursWorked > 0) {
            const newInvoiceAmount = hourlyRate * hoursWorked;
            const percent = newInvoiceAmount / 100;
            const serviceCharge = percents.serviceCharge * percent;

            const newGrossIncome = newInvoiceAmount - serviceCharge;
            const grossPercent = newGrossIncome / 100;

            let otherDeductions = 0;

            if (pension) {
                otherDeductions += percents.pension * grossPercent;
            }

            if (pff) {
                otherDeductions += percents.pff * grossPercent;
            }

            if (socialCharges) {
                otherDeductions += percents.social * grossPercent;
            }

            let newNetPayable = newGrossIncome - otherDeductions;

            if (membershipType === 'premium') {
                const premiumDiscount = percents.premium * grossPercent;
                newNetPayable += premiumDiscount;
            }

            setInvoiceAmount(newInvoiceAmount);
            setGrossIncome(newGrossIncome);
            setNetPayable(newNetPayable);

            onCalculate({
                invoiceAmount: newInvoiceAmount,
                grossIncome: newGrossIncome,
                netPayable: newNetPayable,
            });
        }
    }, [hourlyRate, hoursWorked, membershipType, pension, pff, socialCharges, onCalculate]);


    return (
        <form onSubmit={handleSubmit(() => { })}>
            <div className="*:text-base *:font-semibold">
                <label className="label">Membership</label>
                <div className="flex flex-row gap-2 my-2">
                    {membershipOptions.map((option, index) => (
                        <label
                            key={index}
                            htmlFor={`membership-${index}`}
                            className={`cursor-pointer flex flex-grow max-w-[49%] justify-between rounded-xl py-4 px-3 border ${watch('membership') == option.value ? 'border-teal-500' : 'border-gray-200'
                                }`}
                        >
                            <div className="space-y-3">
                                <div>{watch('membership') == option.value ? option.iconSelected : option.icon}</div>
                                <div className={`${watch('membership') == option.value ? 'text-teal-500' : 'text-gray-600'}`}>
                                    {option.label}
                                </div>
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
                <div className="items-center">
                    <div className="">Earnings</div>
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className="label text-sm">Hourly Rate</label>
                            <div className="flex items-center">
                                <div className="text-gray-500 border border-gray-300 rounded-l-lg px-1 py-2">
                                    <LuEuro size={24} className="py-1" />
                                </div>
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
                                <div className="text-gray-500 border border-gray-300 rounded-l-lg px-1 py-2">
                                    <CiTimer size={24} className="py-1" />
                                </div>
                                <input
                                    type="number"
                                    {...register('hours_Worked', { valueAsNumber: true })}
                                    className="lg:w-full focus:outline-none border border-l-0 border-gray-300 rounded-r-lg px-3 py-2"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="items-center">
                    <div className="">Age</div>
                    <input
                        type="number"
                        {...register('age', { valueAsNumber: true })}
                        className="lg:w-full focus:outline-none border border-gray-300 rounded-lg px-3 py-2"
                        defaultValue={19}
                    />
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
                    <div className="">Expenses</div>
                    <div className="flex items-center">
                        <div className="text-gray-500 border border-gray-300 rounded-l-lg px-1 py-2">
                            <LuEuro size={24} className="py-1" />
                        </div>
                        <input
                            type="number"
                            {...register('expense', { valueAsNumber: true })}
                            className="lg:w-full focus:outline-none border border-l-0 border-gray-300 rounded-r-lg px-3 py-2"
                            step={0.01}
                        />
                    </div>
                </div>
            </div>
        </form>
    );
};

export default CalculateBenefit;
