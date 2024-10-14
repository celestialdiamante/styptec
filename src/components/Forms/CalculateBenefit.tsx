"use client";
import React from 'react';
import { FaRegStar, FaSmile, FaStar } from 'react-icons/fa';
import { FaRegFaceSmile } from 'react-icons/fa6';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CiTimer } from 'react-icons/ci';
import { LuEuro } from 'react-icons/lu';
import { submitEstimationForm } from '@/helpers/postData';

const percents = {
    premium: 3,
    pension: 26.23,
    pff: 6,
    social: 11.15,
    serviceCharge: 10,
};

const calculatorSchema = z.object({
    membership: z.string(),
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
    expense: z.number().min(0, "Expenses must be at least 0.00").optional(),
    add_Invoice: z.boolean().optional(),
});


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

type deviceType = {
    appCodeName?: string,
    appName?: string,
    appVersion?: string,
    userAgent?: string
}


const CalculateBenefit = ({ onCalculate }: { onCalculate: (payoutValues: { invoiceAmount: number; grossIncome: number; netPayable: number; }) => void; }) => {
    const {
        register, watch, formState: { } } = useForm<z.infer<typeof calculatorSchema>>({
            resolver: zodResolver(calculatorSchema),
            mode: "onChange",
        });
    const [estimationFormData] = React.useState({
        "membership_type": '',
        "hourly_rate": '',
        "hours_worked": '',
        "age": '',
        "pension": '',
        "social_charges": '',
        "paid_fast_forward": '',
        "expenses": '',
        "name": '',
        "email": '',
        "phone_number": '',
        "country_id": '',
        "device": ''
    });


    const hourlyRate = watch("hourly_Rate");
    const hoursWorked = watch("hours_Worked");
    const age = watch("age");
    const membershipType = watch("membership");
    const pension = watch("disability");
    const pff = watch("socially_Insured");
    const socialCharges = watch("payroll_Tax_Credit");
    const expense = watch("expense");

    const [invoiceAmount, setInvoiceAmount] = React.useState<number>(0);
    const [grossIncome, setGrossIncome] = React.useState<number>(0);
    const [netPayable, setNetPayable] = React.useState<number>(0);

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

    React.useEffect(() => {
        console.log('userAgent: ', device)
    }, [device])

    React.useEffect(() => {
        if (
            typeof hourlyRate === "number" &&
            typeof hoursWorked === "number" &&
            hourlyRate > 0 &&
            hoursWorked > 0
        ) {
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

            if (membershipType === "premium") {
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


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const data = await calculatorSchema.parseAsync(estimationFormData);

            console.log("Form data:", data);

            const response = await submitEstimationForm({
                membership: data.membership,
                hourly_Rate: data.hourly_Rate,
                hours_Worked: data.hours_Worked,
                gross_Invoice: data.gross_Invoice,
                age: data.age,
                payroll_Tax_Credit: data.payroll_Tax_Credit,
                socially_Insured: data.socially_Insured,
                disability: data.disability,
                holiday_Allowance: data.holidays,
                holidays: data.holidays,
                flexible_Savings: data.flexible_Savings,
                factoring: data.factoring,
                expense: data.expense,
                add_Invoice: data.add_Invoice,
            });

            if (response.ok) {
                alert("Form calculation successfully!");
            } else {
                alert("Failed to calculate");
            }
        } catch (error) {
            console.error("Error calculating:", error);
            alert("Error calculating, please try again.");
        }
    };


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
                                    {...register("hourly_Rate", { valueAsNumber: true })}
                                    className="lg:w-full focus:outline-none border border-l-0 border-gray-300 rounded-r-lg px-3 py-2"
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
                                    className="lg:w-full focus:outline-none border border-l-0 border-gray-300 rounded-r-lg px-3 py-2"
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
                    <input
                        type="number"
                        {...register("age", { valueAsNumber: true })}
                        className="lg:w-full focus:outline-none border border-gray-300 rounded-lg px-3 py-2"
                    />

                    {age !== undefined && age < 18 && (
                        <p className="text-red-500">Age must be at least 18</p>
                    )}
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

        </form>
    );
};

export default CalculateBenefit;    