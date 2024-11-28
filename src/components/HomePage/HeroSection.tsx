import React from 'react';
import PaymentCalculatorWrapper from './PaymentCalculatorWrapper';
import HeroSlides from './HeroSlides';


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const HeroSection = ({ params }: any) => {

    return (
        <section className="relative">
            <HeroSlides />
            <PaymentCalculatorWrapper params={params} />
        </section>
    );
};

export default HeroSection;
