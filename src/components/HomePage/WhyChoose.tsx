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
        <div className="card shadow-lg bg-base-100 p-6 rounded-xl">
            <h3 className="text-xl font-semibold flex items-center mb-4">
                <span className="mr-2 text-primary">{icon}</span>{title}
            </h3>
            <p>{description}</p>
        </div>
    );

    return (
        <section className="py-6 md:py-16 bg-[url('/images/SKYPTEC_Banner02.jpg')] bg-cover bg-no-repeat">
            <div className="container mx-auto px-4">
                <h3 className="text-center text-3xl lg:text-4xl font-bold text-gray-800 mb-12">{lang('freelancersTitle')}</h3>
                <div className="grid gap-8 lg:grid-cols-3 mb-16">
                    {featuresFreelancers.map((feature, idx) => <FeatureCard key={idx} {...feature} />)}
                </div>

                <h3 className="text-center text-3xl lg:text-4xl font-bold text-gray-800 mb-12">{lang('clientsTitle')}</h3>
                <div className="grid gap-8 lg:grid-cols-3">
                    {featuresClients.map((feature, idx) => <FeatureCard key={idx} {...feature} />)}
                </div>

                <div className="text-center mt-12">
                    <button className="btn btn-primary text-white">{lang('buttonText')}</button>
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;
