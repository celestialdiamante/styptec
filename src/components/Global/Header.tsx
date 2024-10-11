"use client";
import { Link, usePathname } from '@/i18n/routing';
import Image from 'next/image';
import React from 'react';
import { FaChevronDown, FaChevronRight, FaUserTie } from 'react-icons/fa';

interface Language {
    code: string;
    label: string;
    emoji: string;
}

const navItems = [
    {
        label: 'Freelancers',
        links: [
            {
                label: 'How does Styptec work',
                href: '/how-does-it-work'
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
                label: 'How does Styptec work',
                href: '/how-does-it-work-for-entrepreneurs'
            },
            {
                label: 'Game rules',
                href: '/game-rules'
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
    { code: 'en', label: 'English', emoji: '🇺🇸' },
    { code: 'nl', label: 'Dutch', emoji: '🇳🇱' },  
];

const Header = () => {
    const [language, setLanguage] = React.useState<Language>(languages[0]);
    const pathname = usePathname();

    const isActive = (href: string) => pathname === href;

    const isParentActive = (links: { href: string }[]) => {
        return links.some(link => isActive(link.href));
    };

    return (
        <div className="container navbar bg-base-100 z-[99999]">
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
                                            <Link
                                                className={isActive(link.href) ? 'text-primary' : ''}
                                                href={link.href}
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                        <li>
                            <Link className={isActive('/pricing') ? 'text-primary' : ''} href="/pricing">
                                Pricing
                            </Link>
                        </li>
                        <li>
                            <Link className={isActive('/contact-us') ? 'text-primary' : ''} href="/contact-us">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
                <a href="/">
                    <Image src="/STYPTEC_Logo-01.png" alt="STYPTEC_Logo" height={150} width={150} />
                </a>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems.map(({ label, links }) => (
                        <li key={label} className="dropdown dropdown-hover hover:bg-none">
                            <div tabIndex={0} className={isParentActive(links) ? 'text-primary' : 'hover:text-primary  hover:bg-white focus:bg-white cursor-pointer flex items-center'}>
                                {label}
                                <FaChevronDown className="ml-1" />
                            </div>
                            <ul className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                {links.map(link => (
                                    <li key={link.href}>
                                        <Link
                                            className={isActive(link.href) ? 'text-primary' : ''}
                                            href={link.href}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                    <li>
                        <Link className={isActive('/pricing') ? 'text-primary hover:bg-white focus:bg-white' : 'hover:text-primary hover:bg-white focus:bg-white'} href="/pricing">
                            Pricing
                        </Link>
                    </li>
                    <li>
                        <Link className={isActive('/contact-us') ? 'text-primary hover:bg-white focus:bg-white' : 'hover:text-primary hover:bg-white focus:bg-white'} href="/contact-us">
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="navbar-end gap-4 hidden md:flex">
                <div className="dropdown dropdown-hover">
                    <Link href="#" className="btn btn-ghost flex items-center">
                        <span className="mr-1">{language.emoji}</span>
                        <FaChevronDown className="ml-1" />
                    </Link>
                    <ul className="dropdown-content menu bg-base-100 rounded-box z-50 p-2 shadow">
                        {languages.map((lang) => (
                            <li key={lang.code}>
                                <Link href="#" onClick={() => setLanguage(lang)} className="flex items-center">
                                    <span className="mr-2">{lang.emoji}</span>
                                    {lang.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <Link
                    className="btn btn-sm btn-outline btn-primary"
                    href="/signin"
                >
                    Sign In <FaUserTie />
                </Link>
                <Link
                    className="btn btn-sm btn-secondary text-white"
                    href="/register"
                >
                    Register <FaChevronRight />
                </Link>
            </div>
        </div>
    );
};

export default Header;
