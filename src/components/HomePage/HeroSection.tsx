import React from 'react';
import PaymentCalculatorWrapper from './PaymentCalculatorWrapper';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const HeroSection = ({ params }: any) => {
    const lang = useTranslations('heroSection');

    return (
        <section
            className="bg-gradient-to-r from-teal-300 via-green-200 to-amber-200 relative lg:h-[600px] py-8 h-auto flex items-center overflow-hidden bg-cover bg-center rounded-3xl md:rounded-[40px] mx-2"
        >
            {/* bg-[url('/images/hero/bg_styptec.png')] */}

            <div className="container relative z-0 ">
                <Image
                    className="hidden lg:block absolute -z-50 -top-16 -end-60"
                    src="/images/hero/Character01.webp"
                    alt=""
                    height={1000}
                    width={600} 
                />
                <h1 className="text-2xl md:text-5xl font-bold mb-2">
                    {lang('heading')}
                    <br />
                    {lang('subheading')}
                    <br />
                    <span className="text-secondary">{lang('highlight')}</span>
                </h1>
                <p className="text-base md:text-lg lg:max-w-2xl  mb-10">
                    {lang('description')}
                </p>

                <PaymentCalculatorWrapper params={params} />
            </div>
        </section>
    );
};

export default HeroSection;
