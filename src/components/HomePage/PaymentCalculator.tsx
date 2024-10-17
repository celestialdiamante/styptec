"use client";
import React, { useEffect } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { useTranslations } from 'next-intl';
import { useRouter } from '@/i18n/routing';

const PaymentCalculator = () => {
    const lang = useTranslations('paymentCalculator');
    const router = useRouter();

    const [hourlyRate, setHourlyRate] = React.useState<string>('30.00');
    const [hoursWorked, setHoursWorked] = React.useState<string>('10.00');
    const [grossAmount, setGrossAmount] = React.useState<number>(300.00);
    const [netAmount, setNetAmount] = React.useState<number>(267.00);

    const calculateAmounts = () => {
        const rate = parseFloat(hourlyRate) || 0;
        const hours = parseFloat(hoursWorked) || 0;
        const gross = rate * hours;
        const net = gross * 0.90; 
        setGrossAmount(gross);
        setNetAmount(Number(net.toFixed(2)));
    };

    useEffect(() => {
        calculateAmounts();
    }, [hourlyRate, hoursWorked]);

    const handleHourlyRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHourlyRate(e.target.value);
    };

    const handleHoursWorkedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHoursWorked(e.target.value);
    };

    const handleHourlyRateBlur = () => {
        setHourlyRate((prevRate) => (parseFloat(prevRate) || 0).toFixed(2));
    };

    const handleHoursWorkedBlur = () => {
        setHoursWorked((prevHours) => (parseFloat(prevHours) || 0).toFixed(2));
    };

    
    const handleCalculateClick = () => {
        
        localStorage.setItem('hourlyRate', hourlyRate);
        localStorage.setItem('hoursWorked', hoursWorked);
        localStorage.setItem('grossAmount', grossAmount.toString());
        localStorage.setItem('netAmount', netAmount.toString());

        
        router.push('/calculate-your-benefit');
    };

    return (
        <div className="grid md:grid-cols-12 grid-cols-1 z-10">
            <div className="md:col-span-full lg:col-span-11">
                <div className="lg:flex flex-col lg:flex-row justify-center gap-4 bg-white p-4 lg:p-6 rounded-3xl shadow-lg">
                    <div className="flex flex-col mb-4 lg:mb-0">
                        <label className="font-semibold mb-1">{lang('hourlyRateLabel')}</label>
                        <div className="flex items-center">
                            <div className="border border-gray-300 rounded-l-md px-3 py-2.5">
                                €
                            </div>
                            <input
                                type="text"
                                value={hourlyRate}
                                onChange={handleHourlyRateChange}
                                onBlur={handleHourlyRateBlur}
                                className="w-full lg:w-40 focus:outline-none border border-l-0 border-gray-300 rounded-r-md px-3 py-2.5"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col mb-4 lg:mb-0">
                        <label className="font-semibold mb-1">{lang('hoursWorkedLabel')}</label>
                        <input
                            type="text"
                            value={hoursWorked}
                            onChange={handleHoursWorkedChange}
                            onBlur={handleHoursWorkedBlur}
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
                                type="text"
                                value={grossAmount.toFixed(2)}
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
                                type="text"
                                value={netAmount.toFixed(2)}
                                readOnly
                                className="w-full lg:w-40 focus:outline-none border border-l-0 border-gray-300 rounded-r-md px-3 py-2.5"
                            />
                        </div>
                    </div>

                    <div className="flex justify-center lg:items-end">
                        <button
                            onClick={handleCalculateClick}
                            className="btn btn-secondary w-full lg:w-auto hover:bg-teal-500 hover:border-0 text-white"
                        >
                            {lang('calculateButton')} <FaChevronRight />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentCalculator;
