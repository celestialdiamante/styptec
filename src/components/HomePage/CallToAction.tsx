import { Link } from '@/i18n/routing';
import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

interface CallToActionProps {
    title: string;
    subtitle: string;
    buttonText: string;
    buttonLink: string;
}

const CallToAction = ({ title, subtitle, buttonText, buttonLink }:CallToActionProps) => {
    return (
        <section className="py-16 bg-[url('/images/Bg-01.jpg')] bg-cover bg-no-repeat relative">

        {/* bg-gradient-to-b from-teal-300 via-green-200 to-amber-200 */}

            <div className="container mx-auto text-center">
                <div className="space-y-4 lg:px-24 2xl:px-64">
                    <p className="text-2xl md:text-3xl font-bold">
                        {title}
                    </p>
                    <h5 className="font-sans text-base mb-2 last:mb-0">
                        {subtitle}
                    </h5>
                    <Link href={buttonLink} className="btn btn-primary text-white">
                        {buttonText}
                        <FaChevronRight />
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default CallToAction;
