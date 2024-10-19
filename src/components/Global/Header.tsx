"use client";
import { Link, usePathname, useRouter } from '@/i18n/routing';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

interface Language {
    code: string;
    label: string;
    emoji: string;
}


const Header = () => {

    const lang = useTranslations('header');
    const pathname = usePathname();
    const router = useRouter();
    const currentLocale = useLocale();

    const isActive = (href: string) => pathname === href;

    const isParentActive = (links: { href: string }[]) => {
        return links.some(link => isActive(link.href));
    };

    const languages: Language[] = [
        {
            code: 'en',
            label: lang('language.english'),
            emoji: '🇺🇸'
        },
        {
            code: 'nl',
            label: lang('language.dutch'),
            emoji: '🇳🇱'
        },
    ];


    const navItems = [
        {
            label: lang('howItWorks.main'),
            links: [
                {
                    label: lang('howItWorks.freelancer'),
                    href: '/how-does-it-work'
                },
                {
                    label: lang('howItWorks.entrepreneur'),
                    href: '/how-does-it-work-for-entrepreneurs'
                },
            ],
        },
    ];

    //language switcher
    const handleLanguageChange = (newLang: 'en' | 'nl') => {
        router.push(pathname, { locale: newLang });
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
                        <li>
                            <Link className={isActive('/') ? 'text-primary' : ''} href="/">
                                {lang('home')}
                            </Link>
                        </li>
                        <li>
                            <Link className={isActive('/about-us') ? 'text-primary' : ''} href="/about-us">
                                {lang('aboutUs')}
                            </Link>
                        </li>
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
                            <Link className={isActive('/get-your-paycheck') ? 'text-primary' : ''} href="/get-your-paycheck">
                                {lang('getPaycheck')}
                            </Link>
                        </li>
                        <li>
                            <Link className={isActive('/reviews') ? 'text-primary' : ''} href="/reviews">
                                {lang('reviews')}
                            </Link>
                        </li>
                        <li>
                            <Link className={isActive('/pricing') ? 'text-primary' : ''} href="/pricing">
                                {lang('pricing')}
                            </Link>
                        </li>
                        <li>
                            <Link className={isActive('/contact-us') ? 'text-primary' : ''} href="/contact-us">
                                {lang('contactUs')}
                            </Link>
                        </li>
                    </ul>
                </div>
                <Link href="/">
                    <Image
                        className="ml-20 sm:ml-52 lg:ml-0 w-auto h-8"
                        src="/STYPTEC_Logo-01.png"
                        alt="STYPTEC_Logo"
                        height={150}
                        width={250} />
                </Link>
            </div>

            <div className="w-[50%] justify-end lg:justify-normal lg:w-auto lg:navbar-center lg:flex">
                <ul className="menu menu-horizontal px-1 hidden lg:flex">
                    <li>
                        <Link className={isActive('/') ? 'text-primary font-semibold hover:bg-white focus:bg-white' : 'hover:text-primary font-semibold hover:bg-white focus:bg-white'} href="/">
                            {lang('home')}
                        </Link>
                    </li>
                    <li>
                        <Link className={isActive('/about-us') ? 'text-primary font-semibold hover:bg-white focus:bg-white' : 'hover:text-primary font-semibold hover:bg-white focus:bg-white'} href="/about-us">
                            {lang('aboutUs')}
                        </Link>
                    </li>
                    {navItems.map(({ label, links }) => (
                        <li key={label} className="dropdown dropdown-hover hover:bg-none">
                            <div tabIndex={0} className={isParentActive(links) ? 'text-primary font-semibold' : 'hover:text-primary font-semibold  hover:bg-white focus:bg-white cursor-pointer flex items-center'}>
                                {label}
                                <FaChevronDown className="ml-1" />
                            </div>
                            <ul className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                {links.map(link => (
                                    <li key={link.href}>
                                        <Link
                                            className={isActive(link.href) ? 'text-primary font-semibold' : ''}
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
                        <Link className={isActive('/get-your-paycheck') ? 'text-primary font-semibold hover:bg-white focus:bg-white' : 'hover:text-primary font-semibold hover:bg-white focus:bg-white'} href="/get-your-paycheck">
                            {lang('getPaycheck')}
                        </Link>
                    </li>
                    <li>
                        <Link className={isActive('/reviews') ? 'text-primary font-semibold hover:bg-white focus:bg-white' : 'hover:text-primary font-semibold hover:bg-white focus:bg-white'} href="/reviews">
                            {lang('reviews')}
                        </Link>
                    </li>
                    <li>
                        <Link className={isActive('/pricing') ? 'text-primary font-semibold hover:bg-white focus:bg-white' : 'hover:text-primary font-semibold hover:bg-white focus:bg-white'} href="/pricing">
                            {lang('pricing')}
                        </Link>
                    </li>
                    <li>
                        <Link className={isActive('/contact-us') ? 'text-primary font-semibold hover:bg-white focus:bg-white' : 'hover:text-primary font-semibold hover:bg-white focus:bg-white'} href="/contact-us">
                            {lang('contactUs')}
                        </Link>
                    </li>

                </ul>

                <div className="dropdown flex justify-end">
                    <Link href="#" className="btn btn-ghost flex items-center">
                        <span className="mr-1">{languages.find(lang => lang.code === currentLocale)?.emoji}</span>
                        <FaChevronDown className="ml-1" />
                    </Link>
                    <ul className="dropdown-content menu bg-base-100 rounded-box z-50 p-2 shadow">
                        {languages.map((lang) => (
                            <li key={lang.code}>
                                <button
                                    onClick={() => handleLanguageChange(lang.code as 'en' | 'nl')}
                                    className="flex items-center"
                                >
                                    <span className="mr-2">{lang.emoji}</span>
                                    {lang.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

            {/*  */}
        </div>
    );
};

export default Header;
