"use client"
import React from 'react'
import { FaChevronRight } from 'react-icons/fa';

const HeroSection = () => {

    const [hourlyRate, setHourlyRate] = React.useState(Number);
    const [hoursWorked, setHoursWorked] = React.useState(Number);
    const [grossAmount, setGrossAmount] = React.useState(Number);
    const [netAmount, setNetAmount] = React.useState(Number);

    // Calculate Payment Handler
    const calculatePayment = () => {
        const gross = hourlyRate * hoursWorked;
        const net = gross * 0.693; //30.7%
        setGrossAmount(gross);
        setNetAmount(Number(net.toFixed(2)));
    };

    return (
        <section
            className="bg-gradient-to-r from-teal-300 via-green-200 to-amber-200 relative md:h-[600px] py-8 h-auto flex items-center overflow-hidden bg-cover bg-center rounded-[40px] mx-2"
        >
            {/* bg-[url('/images/hero/bg_styptec.png')]  */}
            {/* <div
                className="bg-[url('/images/hero/banner.png')] absolute inset-0 bg-no-repeat bg-right-top end-0 md:h-screen h-auto"
            // style={{ height: '100%', width: '100%' }}
            ></div> */}

            <div className="container relative z-10 ">
                <img
                    className="absolute -z-50 -top-28 -end-60"
                    src="/images/hero/banner.png"
                    alt="" />
                <h1 className="text-4xl lg:text-5xl font-bold text-black mb-6">
                    We combine your earnings to
                    <br />optimal results with<br />
                    <span className="text-secondary"> ultimate freedom.</span>
                </h1>
                <p className="text-lg text-gray-600 mb-10">
                    Calculate your work compensation easily.
                    Calculate your work compensation easily.<br />
                    Calculate your work compensation easily.
                    Calculate your work compensation easily.
                </p>

                {/* Payment Calculator */}
                <div className="grid lg:grid-cols-12 grid-cols-1 Z-10 gap-4 lg:gap-8">
                    <div className="lg:col-span-10">
                        <div className="lg:flex flex-col lg:flex-row justify-center gap-6 bg-white p-4 lg:p-6 rounded-2xl shadow-lg">
                            <div className="flex flex-col mb-4 lg:mb-0">
                                <label className="text-gray-700 font-semibold mb-1">Your hourly rate</label>
                                <div className="flex items-center">
                                    <div className="text-gray-500 border border-gray-300 rounded-l-md px-3 py-2">
                                        €
                                    </div>
                                    <input
                                        type="number"
                                        value={hourlyRate}
                                        onChange={(e) => setHourlyRate(Number(e.target.value))}
                                        className="w-full lg:w-40 focus:outline-none border border-l-0 border-gray-300 rounded-r-md px-3 py-2"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col mb-4 lg:mb-0">
                                <label className="text-gray-700 font-semibold mb-1">Hours worked</label>
                                <input
                                    type="number"
                                    value={hoursWorked}
                                    onChange={(e) => setHoursWorked(Number(e.target.value))}
                                    className="w-full lg:w-32 border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col mb-4 lg:mb-0">
                                <label className="text-gray-700 font-semibold mb-1">Gross invoice amount</label>
                                <div className="flex items-center">
                                    <div className="text-gray-500 border border-gray-300 rounded-l-md px-3 py-2">
                                        €
                                    </div>
                                    <input
                                        type="number"
                                        value={grossAmount}
                                        readOnly
                                        className="w-full lg:w-40 focus:outline-none border border-l-0 border-gray-300 rounded-r-md px-3 py-2"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col mb-4 lg:mb-0">
                                <label className="text-gray-700 font-semibold mb-1">Net</label>
                                <div className="flex items-center">
                                    <div className="text-gray-500 border border-gray-300 rounded-l-md px-3 py-2">
                                        €
                                    </div>
                                    <input
                                        type="number"
                                        value={netAmount}
                                        readOnly
                                        className="w-full lg:w-40 focus:outline-none border border-l-0 border-gray-300 rounded-r-md px-3 py-2"
                                    />
                                </div>
                            </div>

                            <div className="flex justify-center lg:items-end">
                                <a href='#'
                                    onClick={calculatePayment}
                                    className="btn btn-secondary hover:bg-teal-500 hover:border-0 text-white flex items-center gap-2"
                                > Calculate payment <FaChevronRight />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            {/* <div className="absolute w-full h-screen">

                <img src="/images/social/facebook.png" alt="Facebook"
                    className="w-10 h-10 icon-spin scroll-up icon-random top-[10%] left-[15%]" />

                <img src="/images/social/android.png" alt="Twitter"
                    className="w-10 h-10 icon-spin scroll-up icon-random top-[30%] right-[10%]" />

                <img src="/images/social/google.png" alt="Instagram"
                    className="w-10 h-10 icon-spin scroll-up icon-random top-[50%] left-[30%]" />

                <img src="/images/social/linkedin.png" alt="LinkedIn"
                    className="w-10 h-10 icon-spin scroll-up icon-random top-[70%] right-[40%]" />

                <img src="/images/social/google.png" alt="GitHub"
                    className="w-10 h-10 icon-spin scroll-up icon-random top-[20%] left-[70%]" />

                <img src="/images/social/google.png" alt="YouTube"
                    className="w-10 h-10 icon-spin scroll-up icon-random top-[60%] right-[20%]" />

                <img src="/images/social/google.png" alt="Reddit"
                    className="w-10 h-10 icon-spin scroll-up icon-random top-[80%] left-[10%]" />

                <img src="/images/social/google.png" alt="Pinterest"
                    className="w-10 h-10 icon-spin scroll-up icon-random top-[40%] right-[30%]" />

                <img src="/images/social/google.png" alt="Telegram"
                    className="w-10 h-10 icon-spin scroll-up icon-random top-[90%] left-[50%]" />

                <img src="/images/social/whatsapp.png" alt="WhatsApp"
                    className="w-10 h-10 icon-spin scroll-up icon-random top-[25%] right-[60%]" />
            </div> */}


        </section>
    );
}

export default HeroSection