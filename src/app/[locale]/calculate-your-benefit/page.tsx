"use client";
import PageHeader from '@/components/Global/PageHeader';
import React from 'react';
import { useForm } from 'react-hook-form';

interface CalculatorFormData {
    membership: string;
    hourlyRate: number;
    hoursWorked: number;
    grossInvoice: number;
    age: number;
    payrollTaxCredit: boolean;
    socialSecurity: boolean;
    absenteeism: boolean;
    holidayAllowance: boolean;
    holidays: boolean;
    flexibleSavings: boolean;
    factoring: boolean;
    expense: number;
    coInvoicing: boolean;
}

const CalculateYourBenefit = () => {
    const { register, handleSubmit } = useForm<CalculatorFormData>();
    const [grossIncome, setGrossIncome] = React.useState(0);
    const [netPayout, setNetPayout] = React.useState(0);

    const onSubmit = (data: CalculatorFormData) => {
        console.log('Form data:', data);

        const calculatedGrossIncome = data.hourlyRate * data.hoursWorked;
        setGrossIncome(calculatedGrossIncome);
        setNetPayout(calculatedGrossIncome * 0.5);
    };

    return (
        <>
            <PageHeader title="Calculate your benefit" />
            <section className="py-16">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-6 gap-8">
                        <div className="col-span-3">
                            <form onSubmit={handleSubmit(onSubmit)} className="p-6 bg-base-100 rounded-2xl border border-gray-50 shadow-lg">
                                <div className="">
                                    <label className="label">Membership</label>
                                    <div className="flex gap-4">
                                        <label className="cursor-pointer flex items-center">
                                            <input type="radio" value="basic" {...register('membership')} className="radio" defaultChecked />
                                            <span className="ml-2">Basic</span>
                                        </label>
                                        <label className="cursor-pointer flex items-center">
                                            <input type="radio" value="premium" {...register('membership')} className="radio" />
                                            <span className="ml-2">Premium</span>
                                        </label>
                                        <label className="cursor-pointer flex items-center">
                                            <input type="radio" value="all" {...register('membership')} className="radio" />
                                            <span className="ml-2">All</span>
                                        </label>
                                    </div>
                                </div>

                                <table className="table">
                                    <tr>
                                        <td>Earnings</td>
                                        <td>
                                            <div className="">
                                                <label className="label">Hourly Rate</label>
                                                <input
                                                    type="number"
                                                    {...register('hourlyRate', { valueAsNumber: true })}
                                                    className="input input-bordered"
                                                    defaultValue={254.0}
                                                />
                                            </div>
                                        </td>
                                        <td>
                                            <div className="">
                                                <label className="label">Hours Worked</label>
                                                <input
                                                    type="number"
                                                    {...register('hoursWorked', { valueAsNumber: true })}
                                                    className="input input-bordered"
                                                    defaultValue={160.0}
                                                />
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            Gross invoice amount
                                        </td>
                                        <td>
                                            <div className="">
                                                <label className="label">Gross Invoice Amount</label>
                                                <input
                                                    type="number"
                                                    {...register('grossInvoice', { valueAsNumber: true })}
                                                    className="input input-bordered"
                                                    defaultValue={40640}
                                                />
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            Age
                                        </td>
                                        <td>
                                            <div className="">
                                                <label className="label">Age</label>
                                                <input
                                                    type="number"
                                                    {...register('age', { valueAsNumber: true })}
                                                    className="input input-bordered"
                                                    defaultValue={19}
                                                />
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            Payroll tax credit
                                        </td>
                                        <td>
                                            <div className="">
                                                <label className="cursor-pointer flex items-center">
                                                    <input type="checkbox" {...register('payrollTaxCredit')} className="checkbox" />
                                                    <span className="ml-2">Payroll tax credit</span>
                                                </label>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            Social security
                                        </td>
                                        <td>
                                            <div className="">
                                                <label className="cursor-pointer flex items-center">
                                                    <input type="checkbox" {...register('socialSecurity')} className="checkbox" />
                                                    <span className="ml-2">Social security</span>
                                                </label>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            Sick leave
                                        </td>
                                        <td>
                                            <div className="">
                                                <label className="cursor-pointer flex items-center">
                                                    <input type="checkbox" {...register('absenteeism')} className="checkbox" />
                                                    <span className="ml-2">Disability</span>
                                                </label>
                                            </div>

                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            Save
                                        </td>
                                        <td>
                                            <div className="">
                                                <label className="cursor-pointer flex items-center">
                                                    <input type="checkbox" {...register('holidayAllowance')} className="checkbox" />
                                                    <span className="ml-2">Holiday allowance (8%)</span>
                                                </label>
                                            </div>

                                        </td>
                                    </tr>

                                    <tr>
                                        <td>

                                        </td>
                                        <td>
                                            <div className="form-control">
                                                <label className="cursor-pointer flex items-center">
                                                    <input type="checkbox" {...register('holidays')} className="checkbox" />
                                                    <span className="ml-2">Holidays (10%)</span>
                                                </label>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>

                                        </td>
                                        <td>
                                            <div className="form-control">
                                                <label className="cursor-pointer flex items-center">
                                                    <input type="checkbox" {...register('flexibleSavings')} className="checkbox" />
                                                    <span className="ml-2">Flexible savings (1-20%)</span>
                                                </label>
                                            </div>

                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            Extras
                                        </td>
                                        <td>
                                            <div className="form-control">
                                                <label className="cursor-pointer flex items-center">
                                                    <input type="checkbox" {...register('factoring')} className="checkbox" />
                                                    <span className="ml-2">Factoring (6%)</span>
                                                </label>
                                            </div>

                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            Expenses
                                        </td>
                                        <td>
                                            <div className="form-control">
                                                <label className="label">Expense</label>
                                                <input
                                                    type="number"
                                                    {...register('expense', { valueAsNumber: true })}
                                                    className="input input-bordered"
                                                    defaultValue={0}
                                                />
                                            </div>

                                        </td>
                                    </tr>

                                    <tr>
                                        <td></td>
                                        <td>
                                            <div className="form-control">
                                                <label className="cursor-pointer flex items-center">
                                                    <input type="checkbox" {...register('coInvoicing')} className="checkbox" />
                                                    <span className="ml-2">Co-invoicing</span>
                                                </label>
                                            </div>
                                        </td>
                                    </tr>

                                </table>

                            </form>
                        </div>

                        <div className="col-span-3 p-4 bg-base-200 rounded-lg">
                            <h2 className="text-xl font-semibold mb-4">Calculation Summary</h2>
                            <p><strong>Gross Income:</strong> €{grossIncome.toFixed(2)}</p>
                            <p><strong>Net Payout:</strong> €{netPayout.toFixed(2)}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CalculateYourBenefit;
