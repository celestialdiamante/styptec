"use client"
import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

const PaymentCalculator = () => {
    const lang = useTranslations('paymentCalculator');

    const [hourlyRate, setHourlyRate] = React.useState<number>(0);
    const [hoursWorked, setHoursWorked] = React.useState<number>(0);
    const [grossAmount, setGrossAmount] = React.useState<number>(0);
    const [netAmount, setNetAmount] = React.useState<number>(0);

    const calculatePayment = () => {
        const gross = hourlyRate * hoursWorked;
        const net = gross * 0.693; // Assuming 69.3% is the net amount.
        setGrossAmount(gross);
        setNetAmount(Number(net.toFixed(2)));
    };

    return (
        <div className="grid md:grid-cols-12 grid-cols-1 Z-10">
            <div className="md:col-span-full lg:col-span-11">
                <div className="lg:flex flex-col lg:flex-row justify-center gap-4 bg-white p-4 lg:p-6 rounded-3xl shadow-lg">
                    <div className="flex flex-col mb-4 lg:mb-0">
                        <label className="font-semibold mb-1">{lang('hourlyRateLabel')}</label>
                        <div className="flex items-center">
                            <div className="border border-gray-300 rounded-l-md px-3 py-2.5">
                                €
                            </div>
                            <input
                                type="number"
                                value={hourlyRate}
                                onChange={(e) => setHourlyRate(Number(e.target.value))}
                                className="w-full lg:w-40 focus:outline-none border border-l-0 border-gray-300 rounded-r-md px-3 py-2.5"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col mb-4 lg:mb-0">
                        <label className="font-semibold mb-1">{lang('hoursWorkedLabel')}</label>
                        <input
                            type="number"
                            value={hoursWorked}
                            onChange={(e) => setHoursWorked(Number(e.target.value))}
                            className="w-full lg:w-32 border border-gray-300 rounded-md px-3 py-2.5 focus:outline-none"
                        />
                    </div>

                    <div className="flex flex-col mb-4 lg:mb-0">
                        <label className="font-semibold mb-1">{lang('grossAmountLabel')}</label>
                        <div className="flex items-center">
                            <div className="border border-gray-300 rounded-l-md px-3 py-2.5">
                                €
                            </div>
                            <input
                                type="number"
                                value={grossAmount}
                                readOnly
                                className="w-full lg:w-40 focus:outline-none border border-l-0 border-gray-300 rounded-r-md px-3 py-2.5"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col mb-4 lg:mb-0">
                        <label className="font-semibold mb-1">{lang('netAmountLabel')}</label>
                        <div className="flex items-center">
                            <div className="border border-gray-300 rounded-l-md px-3 py-2.5">
                                €
                            </div>
                            <input
                                type="number"
                                value={netAmount}
                                readOnly
                                className="w-full lg:w-40 focus:outline-none border border-l-0 border-gray-300 rounded-r-md px-3 py-2.5"
                            />
                        </div>
                    </div>

                    <div className="flex justify-center lg:items-end">
                        <a href='#'
                            onClick={calculatePayment}
                            className="btn btn-secondary w-full lg:w-auto hover:bg-teal-500 hover:border-0 text-white"
                        >
                            {lang('calculateButton')} <FaChevronRight />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentCalculator;
