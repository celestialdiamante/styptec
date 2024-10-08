"use client";
import { usePathname, useRouter } from '@/i18n/routing';
import Image from 'next/image';
import React from 'react';
import { FaChevronDown, FaChevronRight, FaUserTie, FaFlagUsa } from 'react-icons/fa';

interface Language {
    code: string;
    label: string;
    icon: React.ReactNode;
}

const navItems = [
    {
        label: 'Freelancers',
        links: [
            {
                label: 'How does Styptec work',
                href: '/how-it-works'
            },
            {
                label: 'Calculate your payment',
                href: '/calculate-your-benefit'
            },
        ],
    },
    {
        label: 'Entrepreneurs',
        links: [
            {
                label: 'How does Verloning.nl work',
                href: '/entrepreneurs/how-it-works'

            },
            {
                label: 'Game rules',
                href: '/entrepreneurs/game-rules'

            },
        ],
    },
    {
        label: 'About Us',
        links: [
            {
                label: 'About Us',
                href: '/about-us'
            },
            {
                label: 'Reviews',
                href: '/reviews'
            },
        ],
    },
];

const languages: Language[] = [
    { code: 'en', label: 'English', icon: <FaFlagUsa /> },
    { code: 'nl', label: 'Dutch', icon: <FaFlagUsa /> },
];

const Header = () => {
    const [language, setLanguage] = React.useState<Language>(languages[0]);
    const router = useRouter();
    const pathname = usePathname();

    const isActive = (href: string) => pathname === href;

    return (
        <div className="container navbar bg-base-100 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <button tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </button>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navItems.map(({ label, links }) => (
                            <li key={label}>
                                <span>{label}</span>
                                <ul className="p-2">
                                    {links.map(link => (
                                        <li key={link.href}>
                                            <button
                                                className={isActive(link.href) ? 'text-blue-500' : ''}
                                                onClick={() => router.push(link.href)}
                                            >
                                                {link.label}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                        <li>
                            <button className={isActive('/pricing') ? 'text-blue-500' : ''} onClick={() => router.push('/pricing')}>
                                Pricing
                            </button>
                        </li>
                        <li>
                            <button className={isActive('/contact-us') ? 'text-blue-500' : ''} onClick={() => router.push('/contact-us')}>
                                Contact Us
                            </button>
                        </li>
                    </ul>
                </div>
                <a href="/" className="text-xl">
                    <Image src="/STYPTEC_Logo-01.png" alt="STYPTEC_Logo" height={150} width={150} />
                </a>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems.map(({ label, links }) => (
                        <li key={label} className="dropdown dropdown-hover">
                            <div tabIndex={0} className="hover:bg-base-200 cursor-pointer flex items-center">
                                {label}
                                <FaChevronDown className="ml-1" />
                            </div>
                            <ul className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                {links.map(link => (
                                    <li key={link.href}>
                                        <button
                                            className={isActive(link.href) ? 'text-blue-500' : ''}
                                            onClick={() => router.push(link.href)}
                                        >
                                            {link.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                    <li>
                        <button className={isActive('/pricing') ? 'text-blue-500' : ''} onClick={() => router.push('/pricing')}>
                            Pricing
                        </button>
                    </li>
                    <li>
                        <button className={isActive('/contact-us') ? 'text-blue-500' : ''} onClick={() => router.push('/contact-us')}>
                            Contact Us
                        </button>
                    </li>
                </ul>
            </div>

            <div className="navbar-end gap-4 hidden md:flex">
                <div className="dropdown dropdown-hover">
                    <button className="btn btn-ghost flex items-center">
                        <span className="mr-1">{language.icon}</span>
                        <FaChevronDown className="ml-1" />
                    </button>
                    <ul className="dropdown-content menu bg-base-100 rounded-box z-50 p-2 shadow">
                        {languages.map((lang) => (
                            <li key={lang.code}>
                                <button onClick={() => setLanguage(lang)} className="flex items-center">
                                    <span className="mr-2">{lang.icon}</span>
                                    {lang.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <button
                    className={isActive('/login') ? 'btn btn-sm btn-outline btn-primary text-blue-500' : 'btn btn-sm btn-outline btn-primary'}
                    onClick={() => router.push('/login')}
                >
                    Login <FaUserTie />
                </button>
                <button
                    className={isActive('/register') ? 'btn btn-sm btn-secondary text-white' : 'btn btn-sm btn-secondary text-white'}
                    onClick={() => router.push('/register')}
                >
                    Register <FaChevronRight />
                </button>
            </div>
        </div>
    );
};

export default Header;
