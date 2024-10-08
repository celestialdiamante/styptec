import React from 'react';
import { FiCheckCircle, FiClock, FiShield } from 'react-icons/fi';
import { FaMoneyBillWave, FaHandshake, FaThumbsUp } from 'react-icons/fa';

const featuresFreelancers = [
    {
        icon: <FiClock size={24} />,
        title: "Quick and easy",
        description: "A simple, clear and fast system that takes care of all your taxes and securities immediately. And if you have any issues, our customer service will be happy to advise and assist you."
    },
    {
        icon: <FaMoneyBillWave size={24} />,
        title: "Lots of FREE benefits",
        description: "We always look for the best deals for you as a regular customer. Unlimited training at GoodHabitz, accident insurance up to € 100,000. And 24/7 virtual care with unlimited medical or psychological support."
    },
    {
        icon: <FiShield size={24} />,
        title: "Proper regulation",
        description: "After payment, paid net within one working day and no more surprises afterwards. View all benefits in your account such as insurance, VOG, invoice factoring and much more."
    }
];

const featuresClients = [
    {
        icon: <FiCheckCircle size={24} />,
        title: "No surprises",
        description: "Receive an invoice from Verloning.nl, and be assured that everything has been arranged perfectly. We guarantee that all legal obligations and taxes are met. A reassuring feeling and a win-win for all parties."
    },
    {
        icon: <FaHandshake size={24} />,
        title: "Reliable",
        description: "Naturally, we have a G-account and a tax declaration of payment history. With more than 10 years of experience with over 95.681 freelancers you can be assured that everything is carefully and properly regulated."
    },
    {
        icon: <FaThumbsUp size={24} />,
        title: "Recommend us",
        description: "Have you really arranged it well for your contractors? Recommend us, so you can be assured that your contractors have arranged it really well. You will receive a clear invoice from us and you will never have any surprises afterwards."
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

const WhyChoose = () => (
    <section className="py-16 bg-[url('/images/SKYPTEC_Banner02.jpg')] bg-cover bg-no-repeat">
        <div className="container mx-auto px-4">
            <h2 className="text-center text-3xl lg:text-4xl font-bold text-gray-800 mb-12">Why freelancers should use Styptec</h2>
            <div className="grid gap-8 lg:grid-cols-3 mb-16">
                {featuresFreelancers.map((feature, idx) => <FeatureCard key={idx} {...feature} />)}
            </div>

            <h2 className="text-center text-3xl lg:text-4xl font-bold text-gray-800 mb-12">Why clients should use Styptec</h2>
            <div className="grid gap-8 lg:grid-cols-3">
                {featuresClients.map((feature, idx) => <FeatureCard key={idx} {...feature} />)}
            </div>

            <div className="text-center mt-12">
                <button className="btn btn-primary text-white">Curious about us?</button>
            </div>
        </div>
    </section>
);

export default WhyChoose;
