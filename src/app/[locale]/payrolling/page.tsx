import FeaturesSection from '@/components/Global/FeaturesSection';
import PageHeader from '@/components/Global/PageHeader';
import { useTranslations } from 'next-intl';
import React from 'react';
import { CgMenuMotion } from 'react-icons/cg';
import { FaUserTie } from 'react-icons/fa';
import { FaArrowUpRightDots, FaMoneyBillTrendUp } from 'react-icons/fa6';
import { GiReceiveMoney } from 'react-icons/gi';
import { MdOutlineEuro } from 'react-icons/md';
import { PiCloudWarning } from 'react-icons/pi';
import { RiAdminLine, RiUser2Line } from 'react-icons/ri';
import { SiGitconnected } from 'react-icons/si';
import { TbReceiptEuro } from 'react-icons/tb';


export default function Payrolling() {

    const lang = useTranslations('payrolling');

    const PayrollWork = [
        {
            icon: <FaArrowUpRightDots className="text-primary size-6" />,
            title: lang('payrollWork.0.title'),
            description: lang('payrollWork.0.description'),
        },
        {
            icon: <FaMoneyBillTrendUp className="text-primary size-6" />,
            title: lang('payrollWork.1.title'),
            description: lang('payrollWork.1.description'),
        },
        {
            icon: <FaUserTie className="text-primary size-6" />,
            title: lang('payrollWork.2.title'),
            description: lang('payrollWork.2.description'),
        },
        {
            icon: <GiReceiveMoney className="text-primary size-6" />,
            title: lang('payrollWork.3.title'),
            description: lang('payrollWork.3.description'),
        },
    ]
    const Benefits = [
        {
            icon: <CgMenuMotion className="text-primary size-6 mb-3" />,
            title: lang('benefits.0.title'),
            description: lang('benefits.0.description'),
        },
        {
            icon: <PiCloudWarning className="text-primary size-6 mb-3" />,
            title: lang('benefits.1.title'),
            description: lang('benefits.1.description'),
        },
        {
            icon: <TbReceiptEuro className="text-primary size-6 mb-3" />,
            title: lang('benefits.2.title'),
            description: lang('benefits.2.description'),
        },
        {
            icon: <RiAdminLine className="text-primary size-6 mb-3" />,
            title: lang('benefits.3.title'),
            description: lang('benefits.3.description'),
        },
    ]
    const Disadvantages = [
        {
            icon: <MdOutlineEuro className="text-primary size-6 mb-3" />,
            title: lang('disadvantages.0.title'),
            description: lang('disadvantages.0.description'),
        },
        {
            icon: <SiGitconnected className="text-primary size-6 mb-3" />,
            title: lang('disadvantages.1.title'),
            description: lang('disadvantages.1.description'),
        },
        {
            icon: <RiUser2Line className="text-primary size-6 mb-3" />,
            title: lang('disadvantages.2.title'),
            description: lang('disadvantages.2.description'),
        },
    ]
    const table = {
        headers: [
            lang('table.headers.0'),
            lang('table.headers.1'),
            lang('table.headers.2')
        ],
        rows: [
            {
                aspect: lang('table.rows.0.aspect'),
                payrolling: lang('table.rows.0.payrolling'),
                freelance: lang('table.rows.0.freelance')
            },
            {
                aspect: lang('table.rows.1.aspect'),
                payrolling: lang('table.rows.1.payrolling'),
                freelance: lang('table.rows.1.freelance')
            },
            {
                aspect: lang('table.rows.2.aspect'),
                payrolling: lang('table.rows.2.payrolling'),
                freelance: lang('table.rows.2.freelance')
            },
            {
                aspect: lang('table.rows.3.aspect'),
                payrolling: lang('table.rows.3.payrolling'),
                freelance: lang('table.rows.3.freelance')
            },
            {
                aspect: lang('table.rows.4.aspect'),
                payrolling: lang('table.rows.4.payrolling'),
                freelance: lang('table.rows.4.freelance')
            }
        ]
    };

    return (
        <>
            <PageHeader title={lang('pageHeader')} />

            <FeaturesSection
                title={lang('payrolling.title')}
                description={lang('payrolling.description')}
                imageUrl="/images/payrolling.jpg"
                imageLeft={true}
            />

            <section className="bg-secondary/10">
                <div className="container py-10 md:py-16">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                        <div className="flex items-center">
                            <h3 className="text-2xl lg:text-4xl text-center md:text-start font-bold mb-12">{lang('sectionTitles.howItWorks')}</h3>
                        </div>
                        <div className="md:col-span-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                            {PayrollWork.map((item, index) => (
                                <div
                                    key={index}
                                    className="group card bg-base-100 w-full shadow-xl hover:shadow-primary/20 hover:bg-primary"
                                >
                                    <div className="card-body *:hover:text-white">
                                        {item.icon}
                                        <h3 className="card-title ">{item.title}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <FeaturesSection
                title={lang('legislation.title')}
                description={lang('legislation.description')}
                imageUrl="/images/Legislation_payrolling.jpg"
                imageLeft={true}
            />

            <section className="bg-secondary/10 py-6 md:py-16">
                <div className="container px-4 space-y-4 divide-y-2 divide-primary">

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 p-4">
                        <div className="">
                            <h3 className="text-2xl md:text-3xl text-center md:text-start font-bold mb-12">{lang('sectionTitles.benefits')}</h3>
                        </div>
                        <div className="md:col-span-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                            {Benefits.map((item, index) => (
                                <div
                                    key={index}
                                    className="group card border border-gray-50 shadow-lg bg-base-100 hover:border-primary hover:shadow-primary/20 hover:bg-primary p-6 rounded-xl"
                                >
                                    <div className="*:group-hover:text-white">
                                        {item.icon}
                                        <h3 className="text-xl font-semibold flex items-center mb-3">
                                            {item.title}
                                        </h3>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-5 p-4">
                        <div className="">
                            <h3 className="text-2xl md:text-3xl font-bold mb-12">{lang('sectionTitles.disadvantages')}</h3>
                        </div>
                        <div className="md:col-span-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                            {Disadvantages.map((item, index) => (
                                <div
                                    key={index}
                                    className="group card border border-gray-50 shadow-lg bg-base-100 hover:border-primary hover:shadow-primary/20 hover:bg-primary p-6 rounded-xl"
                                >
                                    <div className="*:group-hover:text-white">
                                        {item.icon}
                                        <h3 className="text-xl font-semibold flex items-center mb-3">
                                            {item.title}
                                        </h3>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>


            <section className="py-6 md:py-16">
                <div className="container mx-auto px-4">
                    <h3 className="text-2xl md:text-3xl font-bold mb-12">{lang('sectionTitles.differencesTable')}</h3>
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full border-collapse border border-gray-200">
                            <thead>
                                <tr className="bg-gray-100">
                                    {table.headers.map((header, index) => (
                                        <th key={index} className="border border-gray-200 px-4 py-2 text-left">
                                            {header}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {table.rows.map((row, index) => (
                                    <tr key={index}>
                                        <td className="border border-gray-200 px-4 py-2">{row.aspect}</td>
                                        <td className="border border-gray-200 px-4 py-2">{row.payrolling}</td>
                                        <td className="border border-gray-200 px-4 py-2">{row.freelance}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="relative bg-[url('/images/background-01.jpg')] bg-no-repeat bg-cover py-10 md:py-16">

                <div className="absolute inset-0 bg-white/60 z-0"></div>

                <div className="container px-4 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-6">
                                {lang('conclusion.title')}
                            </h3>
                            <p className="text-justify">
                                {lang('conclusion.description')}
                            </p>
                        </div>


                        <div className="hidden md:flex justify-center">
                            <img
                                src="/images/Conclusion01.webp"
                                alt="alt text"
                                className="h-72"
                            />
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}
