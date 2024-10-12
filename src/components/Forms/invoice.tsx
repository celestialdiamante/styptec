"use client"
import { countries } from '@/Lib/countries';
import React from 'react';
import { MdOutlineSimCardDownload } from 'react-icons/md';

interface Country {
    id: number;
    name: string;
    flag: string;
}

const Invoice = () => {

    const [formData, setFormData] = React.useState({ phone: '', countryCode: '1' }); // Default to first country's id
    const [errors] = React.useState<{ phone?: string }>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    return (
        <>
            <div className="my-8 space-y-4">
                <div className="flex gap-4">
                    {/* Name Field */}
                    <div className="relative w-full">
                        <input
                            type="text"
                            id="name"
                            className="peer h-10 w-full border border-gray-300 rounded-lg px-3 pt-3 pb-2 focus:outline-none focus:border-primary"
                            placeholder=" "
                        />
                        <label
                            htmlFor="name"
                            className="absolute left-2 -top-2.5 bg-white px-1 text-sm text-gray-500 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary"
                        >
                            Name
                        </label>
                    </div>
                    {/* Phone Field */}
                    <div className="relative w-full">
                        <input
                            type="tel"
                            id="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="peer h-10 w-full border border-gray-300 rounded-lg px-3 pt-3 pb-2 focus:outline-none focus:border-primary"
                            placeholder=" "
                        />
                        <label
                            htmlFor="phone"
                            className="absolute left-2 -top-2.5 bg-white px-1 text-sm text-gray-500 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary"
                        >
                            Phone No.
                        </label>
                    </div>
                </div>

                <div className="flex gap-4">
                    {/* Email Field */}
                    <div className="relative w-full">
                        <input
                            type="email"
                            id="email"
                            className="peer h-10 w-full border border-gray-300 rounded-lg px-3 pt-3 pb-2 focus:outline-none focus:border-primary"
                            placeholder=" "
                        />
                        <label
                            htmlFor="email"
                            className="absolute left-2 -top-2.5 bg-white px-1 text-sm text-gray-500 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary"
                        >
                            Email
                        </label>
                    </div>

                    {/* Country Field */}
                    <div className="relative w-full">
                        <select
                            id="countryCode"
                            value={formData.countryCode}
                            onChange={handleChange}
                            className="p-2 w-full border border-gray-300 bg-white rounded-lg"
                        >
                            {countries.map((country: Country) => (
                                <option key={country.id} value={country.id}>
                                    {country.flag} {country.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {errors.phone && <p className="text-red-500">{errors.phone}</p>}
            </div>

            <div className="flex flex-grow justify-center">
                <button className="btn btn-primary text-white btn-sm w-full">
                    Download Estimated PDF
                    <MdOutlineSimCardDownload />
                </button>
            </div>
        </>
    )
}

export default Invoice;
