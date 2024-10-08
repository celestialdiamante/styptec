import { Link } from '@/i18n/routing';
import React from 'react'
import { FaRegSmileBeam, FaRegStar } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'
import { GrDiamond } from 'react-icons/gr'

const membershipData = [
    {
        icon: <FaRegSmileBeam className="size-12" />,
        title: "Basic",
        subtitle: "— No cure no pay",
        price: "€ 0,-",
        features: [
            "Your invoicing and taxes arranged",
            "You pay 6% commission per remuneration",
            "Excellent and affordable",
            "Group health insurance with ONVZ",
            "Customer storytelling gives us a 9,6"
        ],
        buttonClass: "btn-outline border-gray-300 hover:border-gray-300 hover:text-gray-900 hover:bg-gray-50"
    },
    {
        icon: <FaRegStar className="size-12 text-primary" />,
        title: "Premium",
        subtitle: "— Arranged carefree",
        price: "€ 39,95,-",
        features: [
            "All benefits basic membership",
            "You pay 3% commission per payment",
            "Liability insurance and more",
            "€25 per month cashback on health insurance",
            "Unlimited training at GoodHabitz",
            "Your membership is reimbursed tax-free"
        ],
        buttonClass: "btn-active btn-primary text-white",
        badge: "Most chosen"
    },
    {
        icon: <GrDiamond className="size-12" />,
        title: "All-in",
        subtitle: "— Perfectly arranged",
        price: "€ 99,95,-",
        features: [
            "All benefits premium membership",
            "You do not pay any commission per payment",
            "Professional liability insurance",
            "€350 budget for coaching and training",
            "Invitations to exclusive outings"
        ],
        buttonClass: "btn-outline border-gray-300 hover:border-gray-300 hover:text-gray-900 hover:bg-gray-50"
    }
];

const Pricing = () => (
    <section>
        <div className="py-8 px-4 container mx-auto lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                <h2 className="mb-4 text-4xl leading-9 font-bold">Carefree freelancing with our memberships!</h2>
                <p className="text-base text-gray-700 mb-2 last:mb-0">Discover our exclusive memberships...</p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3 md:px-48 lg:px-0 2xl:px-20">
                {membershipData.map(({ icon, title, subtitle, price, features, buttonClass, badge }, idx) => (
                    <div key={idx} className={`flex flex-col rounded-2xl shadow-md p-8 lg:p-6 ${idx === 1 ? 'ring-2 ring-primary lg:scale-105' : 'ring-1 ring-gray-200'}`}>
                        <div className="flex justify-between">
                            {icon}
                            {badge && <div className="badge badge-primary py-3 text-white">{badge}</div>}
                        </div>
                        <h3 className="text-[24px] leading-[32px] font-bold text-black mt-2">{title}</h3>
                        <p className="text-gray-500 sm:text-base">{subtitle}</p>
                        <p className="my-6 flex items-baseline gap-x-1">
                            <span className="text-4xl font-bold tracking-tight text-gray-900">{price}</span>
                            <span className="text-sm font-semibold leading-6 text-gray-600"> / month</span>
                        </p>
                        <ul className="mb-8 space-y-4 text-sm text-left">
                            {features.map((feature, i) => (
                                <li key={i} className="flex items-center space-x-3">
                                    <FiCheck className="text-green-600" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <Link href="#" className={`btn ${buttonClass}`}>View all benefits</Link>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Pricing;
