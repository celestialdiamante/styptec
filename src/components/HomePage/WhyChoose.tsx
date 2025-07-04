import React from 'react';
import { FiCheckCircle, FiClock, FiShield } from 'react-icons/fi';
import { FaMoneyBillWave, FaHandshake, FaThumbsUp } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

const WhyChoose = () => {
    const lang = useTranslations('whyChoose');

    const featuresFreelancers = [
        {
            icon: <FiClock size={24} />,
            title: lang('freelancers.0.title'),
            description: lang('freelancers.0.description')
        },
        {
            icon: <FaMoneyBillWave size={24} />,
            title: lang('freelancers.1.title'),
            description: lang('freelancers.1.description')
        },
        {
            icon: <FiShield size={24} />,
            title: lang('freelancers.2.title'),
            description: lang('freelancers.2.description')
        }
    ];

    const featuresClients = [
        {
            icon: <FiCheckCircle size={24} />,
            title: lang('clients.0.title'),
            description: lang('clients.0.description')
        },
        {
            icon: <FaHandshake size={24} />,
            title: lang('clients.1.title'),
            description: lang('clients.1.description')
        },
        {
            icon: <FaThumbsUp size={24} />,
            title: lang('clients.2.title'),
            description: lang('clients.2.description')
        }
    ];

    const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
        <div className="group card border border-gray-50 shadow-lg bg-base-100 rounded-xl  hover:border-primary hover:shadow-primary/20 hover:bg-primary *:hover:text-white">
            <div className="card-body *:hover:text-white">
            <span className="text-primary">{icon}</span>
            <h3 className="text-xl font-semibold flex items-center ">
                {title}
            </h3>
            <p>{description}</p>
            </div>
        </div>
    );

    return (
        <section className="py-6 md:py-16 bg-secondary/10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 px-4">
                <div className="col-span-6 p-4 ">
                    <h3 className="text-2xl md:text-3xl font-bold mb-12">{lang('freelancersTitle')}</h3>
                    <div className="flex flex-col gap-6 ">
                        {featuresFreelancers.map((feature, idx) => <FeatureCard key={idx} {...feature} />)}
                    </div>
                    {/* <div className="text-center mt-12">
                        <button className="btn btn-primary text-white">{lang('buttonText')}</button>
                    </div> */}
                </div>
                {/* bg-[url('/images/SKYPTEC_Banner02.jpg')] bg-no-repeat bg-cover border border-gray-50 shadow-lg rounded-xl
                bg-[url('/images/SKYPTEC_Banner02.jpg')] bg-no-repeat bg-cover border border-gray-50 shadow-lg rounded-xl */}
                <div className="col-span-6 p-4 ">
                    <h3 className="text-2xl md:text-3xl font-bold mb-12">{lang('clientsTitle')}</h3>
                    <div className="flex flex-col gap-6">
                        {featuresClients.map((feature, idx) => <FeatureCard key={idx} {...feature} />)}
                    </div>
                    {/* <div className="text-center mt-12">
                        <button className="btn btn-primary text-white">{lang('buttonText')}</button>
                    </div> */}
                </div>


            </div>
        </section>
    );
};

export default WhyChoose;
