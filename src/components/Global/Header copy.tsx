"use client";
import { Link, usePathname } from '@/i18n/routing';
import Image from 'next/image';
import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { Menu, Transition, Popover } from '@headlessui/react';
import { Fragment } from 'react';

interface Language {
    code: string;
    label: string;
    emoji: string;
}

const navItems = [
    {
        label: 'HOW STYPTEC WORKS',
        links: [
            {
                label: 'For Freelancer',
                href: '/how-does-it-work'
            },
            {
                label: 'For Entrepreneurs',
                href: '/how-does-it-work-for-entrepreneurs'
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
    const isParentActive = (links: { href: string }[]) => links.some(link => isActive(link.href));

    return (
        <div className="container navbar bg-base-100 z-[99999]">
            {/* Logo Section */}
            <div className="navbar-start">
                <Menu as="div" className="dropdown lg:hidden">
                    <Menu.Button className="btn btn-ghost">
                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </Menu.Button>
                    <Transition as={Fragment}>
                        <Menu.Items className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <Menu.Item>
                                <Link className={isActive('/') ? 'text-primary' : ''} href="/">Home</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link className={isActive('/about-us') ? 'text-primary' : ''} href="/about-us">About Us</Link>
                            </Menu.Item>
                            {navItems.map(({ label, links }) => (
                                <Menu.Item key={label}>
                                    <span>{label}</span>
                                    <ul className="p-2">
                                        {links.map(link => (
                                            <Menu.Item key={link.href}>
                                                <Link className={isActive(link.href) ? 'text-primary' : ''} href={link.href}>{link.label}</Link>
                                            </Menu.Item>
                                        ))}
                                    </ul>
                                </Menu.Item>
                            ))}
                            <Menu.Item>
                                <Link className={isActive('/calculate-your-benefit') ? 'text-primary' : ''} href="/calculate-your-benefit">GET YOUR PAYCHECK</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link className={isActive('/reviews') ? 'text-primary' : ''} href="/reviews">REVIEWS</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link className={isActive('/pricing') ? 'text-primary' : ''} href="/pricing">PRICING</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link className={isActive('/contact-us') ? 'text-primary' : ''} href="/contact-us">CONTACT US</Link>
                            </Menu.Item>
                        </Menu.Items>
                    </Transition>
                </Menu>
                <Link href="/">
                    <Image src="/STYPTEC_Logo-01.png" alt="STYPTEC_Logo" height={150} width={150} />
                </Link>
            </div>

            {/* Navbar Center */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link className={isActive('/') ? 'text-primary font-semibold hover:bg-white focus:bg-white' : 'hover:text-primary font-semibold hover:bg-white focus:bg-white'} href="/">HOME</Link>
                    </li>
                    <li>
                        <Link className={isActive('/about-us') ? 'text-primary font-semibold hover:bg-white focus:bg-white' : 'hover:text-primary font-semibold hover:bg-white focus:bg-white'} href="/about-us">ABOUT US</Link>
                    </li>
                    {navItems.map(({ label, links }) => (
                        <Popover key={label} className="relative">
                            <Popover.Button className={isParentActive(links) ? 'text-primary font-semibold flex items-center' : 'hover:text-primary font-semibold hover:bg-white focus:bg-white cursor-pointer flex items-center'}>
                                {label}
                                <FaChevronDown className="ml-1" />
                            </Popover.Button>
                            <Transition as={Fragment}>
                                <Popover.Panel className="absolute z-10 mt-2 w-52 bg-white rounded-lg shadow-lg p-2">
                                    {links.map(link => (
                                        <Link key={link.href} className={isActive(link.href) ? 'text-primary font-semibold' : 'hover:text-primary font-semibold'} href={link.href}>{link.label}</Link>
                                    ))}
                                </Popover.Panel>
                            </Transition>
                        </Popover>
                    ))}
                    <li>
                        <Link className={isActive('/calculate-your-benefit') ? 'text-primary font-semibold hover:bg-white focus:bg-white' : 'hover:text-primary font-semibold hover:bg-white focus:bg-white'} href="/calculate-your-benefit">GET YOUR PAYCHECK</Link>
                    </li>
                    <li>
                        <Link className={isActive('/reviews') ? 'text-primary font-semibold hover:bg-white focus:bg-white' : 'hover:text-primary font-semibold hover:bg-white focus:bg-white'} href="/reviews">REVIEWS</Link>
                    </li>
                    <li>
                        <Link className={isActive('/pricing') ? 'text-primary font-semibold hover:bg-white focus:bg-white' : 'hover:text-primary font-semibold hover:bg-white focus:bg-white'} href="/pricing">PRICING</Link>
                    </li>
                    <li>
                        <Link className={isActive('/contact-us') ? 'text-primary font-semibold hover:bg-white focus:bg-white' : 'hover:text-primary font-semibold hover:bg-white focus:bg-white'} href="/contact-us">CONTACT US</Link>
                    </li>
                </ul>
            </div>

            {/* Navbar End */}
            <div className="navbar-end gap-4">
                {/* Language Dropdown */}
                <Popover className="relative hidden md:flex">
                    <Popover.Button className="btn btn-ghost flex items-center">
                        <span className="mr-1">{language.emoji}</span>
                        <FaChevronDown className="ml-1" />
                    </Popover.Button>
                    <Transition as={Fragment}>
                        <Popover.Panel className="absolute z-50 mt-2 bg-white rounded-lg shadow-lg p-2">
                            {languages.map(lang => (
                                <Link key={lang.code} href="#" onClick={() => setLanguage(lang)} className="flex items-center p-2 hover:bg-gray-100">
                                    <span className="mr-2">{lang.emoji}</span>
                                    {lang.label}
                                </Link>
                            ))}
                        </Popover.Panel>
                    </Transition>
                </Popover>

                {/* <Link className="btn btn-sm btn-outline btn-primary" href="/signin">
                    Sign In <FaUserTie />
                </Link>
                <Link className="btn btn-sm btn-secondary text-white hidden md:flex lg:hidden xl:flex" href="/register">
                    Register <FaChevronRight />
                </Link> */}
            </div>

 {/* <div className="navbar-end gap-4">
                <div className="dropdown dropdown-hover hidden md:flex">
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
                    className="btn btn-sm btn-secondary text-white hidden md:flex lg:hidden xl:flex"
                    href="/register"
                >
                    Register <FaChevronRight />
                </Link>
            </div> */}

        </div>
    );
};

export default Header;
