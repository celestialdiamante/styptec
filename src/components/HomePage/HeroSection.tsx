import React from 'react'
import PaymentCalculator from './PaymentCalculator';
import Image from 'next/image';

const HeroSection = () => {


    return (
        <section
            className="bg-gradient-to-r from-teal-300 via-green-200 to-amber-200 relative md:h-[600px] py-8 h-auto flex items-center overflow-hidden bg-cover bg-center rounded-3xl md:rounded-[40px] mx-2"
        >
            {/* bg-[url('/images/hero/bg_styptec.png')]  */}

            <div className="container relative z-0 ">
                <Image
                    className="absolute -z-50 -top-28 -end-60"
                    src="/images/hero/banner.png"
                    alt=""
                    height={1000}
                    width={600} />
                <h1 className="text-2xl lg:text-5xl font-bold text-black mb-2">
                    We combine your earnings to
                    <br />optimal results with<br />
                    <span className="text-secondary"> ultimate freedom.</span>
                </h1>
                <p className="text-lg lg:max-w-2xl text-gray-600 mb-10">
                    In each job, Verloning.nl helps you with invoicing and deduction of all compulsory taxes and offers you insurance, training and many extra benefits. You get the best deals, without the hassle of administration, Commercial Registration number or VAT number. In short, work hassle-free.

                </p>

                <PaymentCalculator />

            </div>

        </section >
    );
}

export default HeroSection