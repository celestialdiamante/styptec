import FeaturesSection from '@/components/Global/FeaturesSection';
import PageHeader from '@/components/Global/PageHeader';
import { useTranslations } from 'next-intl';
import React from 'react';



export default function FreelanceWork() {
    const lang = useTranslations('freelanceWork');

    const freelanWork = [
        {
            title: lang('freelanceWorkSteps.0.title'),
            description: lang('freelanceWorkSteps.0.description'),
        },
        {
            title: lang('freelanceWorkSteps.1.title'),
            description: lang('freelanceWorkSteps.1.description'),
        },
        {
            title: lang('freelanceWorkSteps.2.title'),
            description: lang('freelanceWorkSteps.2.description'),
        },
        {
            title: lang('freelanceWorkSteps.3.title'),
            description: lang('freelanceWorkSteps.3.description'),
        },
    ]
    const benefits = [
        {
            title: lang('benefits.0.title'),
            description: lang('benefits.0.description'),
        },
        {
            title: lang('benefits.1.title'),
            description: lang('benefits.1.description'),
        },
        {
            title: lang('benefits.2.title'),
            description: lang('benefits.2.description'),
        },
    ]
    const disadvantages = [
        {
            title: lang('disadvantages.0.title'),
            description: lang('disadvantages.0.description'),
        },
        {
            title: lang('disadvantages.1.title'),
            description: lang('disadvantages.1.description'),
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
                title={lang('featuresSection.freelanceWork.title')}
                description={lang('featuresSection.freelanceWork.description')}
                imageUrl="/images/2884.jpg"
                imageLeft={false}
            />

            <section>
                <div className="container py-10 md:py-16">
                    <h3 className="text-2xl md:text-3xl text-center font-bold mb-12">{lang('sectionTitles.howDoesItWork')}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
                        {freelanWork.map((item, index) => (
                            <div
                                key={index}
                                className="md:col-span-3 card bg-base-100 w-full shadow-xl"
                            >
                                <div className="card-body">
                                    <h3 className="card-title">{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <FeaturesSection
                title={lang('featuresSection.whyServices.title')}
                description={lang('featuresSection.whyServices.description')}
                imageUrl="/images/2923.jpg"
                imageLeft={true}
            />

            <section className="py-6 md:py-16">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 px-4">

                    <div className="col-span-6 p-4">
                        <h3 className="text-2xl md:text-3xl font-bold mb-12">{lang('sectionTitles.benefitsOfPayrolling')}</h3>
                        <div className="flex flex-col gap-6">
                            {benefits.map((item, index) => (
                                <div
                                    key={index}
                                    className="card border border-gray-50 shadow-lg bg-base-100 p-6 rounded-xl"
                                >
                                    <h3 className="text-xl font-semibold flex items-center mb-4">
                                        {item.title}
                                    </h3>
                                    <p>{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="col-span-6 p-4">
                        <h3 className="text-2xl md:text-3xl font-bold mb-12">{lang('sectionTitles.disadvantagesOfPayrolling')}</h3>
                        <div className="flex flex-col gap-6">
                            {disadvantages.map((item, index) => (
                                <div
                                    key={index}
                                    className="card border border-gray-50 shadow-lg bg-base-100 p-6 rounded-xl"
                                >
                                    <h3 className="text-xl font-semibold flex items-center mb-4">
                                        {item.title}
                                    </h3>
                                    <p>{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            <FeaturesSection
                title={lang('featuresSection.legislation.title')}
                description={lang('featuresSection.legislation.description')}
                imageUrl="/images/2923.jpg"
                imageLeft={false}
            />


            <section className="py-6 md:py-16">
                <div className="container mx-auto px-4">
                    <h3 className="text-2xl md:text-3xl font-bold mb-12">{lang('sectionTitles.howDoesItWork')}</h3>
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

            <section className="py-10 md:py-16">
                <div className="container px-4">
                    <div className="max-w-3xl ">
                        <h3 className="text-2xl md:text-3xl font-bold mb-6 ">
                            {lang('conclusion.title')}
                        </h3>
                        <p className="text-justify">
                            {lang('conclusion.description')}
                        </p>
                    </div>
                </div>
            </section>

        </>
    )
}
