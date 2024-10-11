"use client"
import React from 'react'
import { FaChevronRight } from 'react-icons/fa';


const PaymentCalculator = () => {

    const [hourlyRate, setHourlyRate] = React.useState(Number);
    const [hoursWorked, setHoursWorked] = React.useState(Number);
    const [grossAmount, setGrossAmount] = React.useState(Number);
    const [netAmount, setNetAmount] = React.useState(Number);


    const calculatePayment = () => {
        const gross = hourlyRate * hoursWorked;
        const net = gross * 0.693;
        setGrossAmount(gross);
        setNetAmount(Number(net.toFixed(2)));
    };

    return (

        <div className="grid lg:grid-cols-12 grid-cols-1 Z-10 ">
            <div className="lg:col-span-10">

                <div className="lg:flex flex-col lg:flex-row justify-center gap-4 bg-white p-4 lg:p-6 rounded-3xl shadow-lg">
                    <div className="flex flex-col mb-4 lg:mb-0">
                        <label className="text-gray-700 font-semibold mb-1">Your hourly rate</label>
                        <div className="flex items-center">
                            <div className="text-gray-500 border border-gray-300 rounded-l-md px-3 py-2.5">
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
                        <label className="text-gray-700 font-semibold mb-1">Hours worked</label>
                        <input
                            type="number"
                            value={hoursWorked}
                            onChange={(e) => setHoursWorked(Number(e.target.value))}
                            className="w-full lg:w-32 border border-gray-300 rounded-md px-3 py-2.5 focus:outline-none"
                        />
                    </div>

                    <div className="flex flex-col mb-4 lg:mb-0">
                        <label className="text-gray-700 font-semibold mb-1">Gross invoice amount</label>
                        <div className="flex items-center">
                            <div className="text-gray-500 border border-gray-300 rounded-l-md px-3 py-2.5">
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
                        <label className="text-gray-700 font-semibold mb-1">Net</label>
                        <div className="flex items-center">
                            <div className="text-gray-500 border border-gray-300 rounded-l-md px-3 py-2.5">
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
                            className="btn btn-secondary w-full lg:w-auto hover:bg-teal-500 hover:border-0 text-white "
                        > Calculate payment <FaChevronRight />
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PaymentCalculator