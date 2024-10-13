"use client"
import CalculateBenefit from '@/components/Forms/CalculateBenefit';
import React from 'react'
import PayoutSection from './PayoutSection';

const EstimationForm = () => {
    const [payoutValues, setPayoutValues] = React.useState({
        grossInvoice: '0.00',
        grossIncome: '0.00',
        netPayout: '0.00',
    });

    const handleCalculate = (values: { invoiceAmount: number, grossIncome: number, netPayable: number }) => {
        setPayoutValues({
            grossInvoice: values.invoiceAmount.toFixed(2),
            grossIncome: values.grossIncome.toFixed(2),
            netPayout: values.netPayable.toFixed(2),
        });
    };

    return (
        <div className="grid lg:grid-cols-6 gap-6">
            <div className="col-span-3 p-4 bg-base-100 relative rounded-2xl border border-gray-50 shadow-xl">
                <CalculateBenefit onCalculate={handleCalculate} />
            </div>
            <div className="col-span-3 p-4 rounded-lg">
                <PayoutSection payoutValues={payoutValues} />
            </div>
        </div>
    )
}

export default EstimationForm