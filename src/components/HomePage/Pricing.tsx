import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import React from 'react'
import { FaRegSmileBeam, FaRegStar } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'


const Pricing = () => {
    const lang = useTranslations('pricing');

    const membershipData = [
        {
            icon: <FaRegSmileBeam className="size-8" />,
            title: lang('basic.title'),
            subtitle: lang('basic.subtitle'),
            features: lang.raw('basic.features'), // Get array of features
            button: lang('basic.button'),
            buttonClass: "btn-outline border-gray-300 hover:border-gray-300 hover:text-gray-900 hover:bg-gray-50"
        },
        {
            icon: <FaRegStar className="size-8 text-primary" />,
            title: lang('premium.title'),
            subtitle: lang('premium.subtitle'),
            features: lang.raw('premium.features'), // Get array of features
            button: lang('premium.button'),
            buttonClass: "btn-active btn-primary text-white"
        }
    ];

    return (
        <section className="py-6 md:py-16">
            <div className="py-8 px-4 container mx-auto lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                    <h2 className="mb-4 text-2xl md:text-3xl font-bold">{lang('title')}</h2>
                </div>
                <div className="mt-10 flex flex-wrap gap-6 justify-center md:px-48 lg:px-0 2xl:px-20">
                    {membershipData.map(({ icon, title, subtitle, features, button, buttonClass }, idx) => (
                        <div key={idx} className="flex flex-col rounded-2xl shadow-md p-8 lg:p-6 ring-1 ring-gray-200">
                            <div className="flex justify-between pb-2 border-b border-gray-300">
                                <div className="flex gap-2">
                                    {icon}
                                    <h3 className="text-2xl font-bold mt-2">{title}</h3>
                                </div>
                                <div>
                                    <p className="text-gray-500 mt-4">{subtitle}</p>
                                </div>
                            </div>

                            <ul className="mb-8 space-y-4 text-sm text-left mt-3">
                                {features.map((feature: string, i: number) => (
                                    <li key={i} className="flex items-center space-x-3">
                                        <FiCheck className="text-green-600" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link href="#" className={`btn ${buttonClass}`}>{button}</Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
