import React from 'react';
import { FcApproval } from 'react-icons/fc';
import { useTranslations } from 'next-intl';

const Stats = () => {
    const lang = useTranslations('stats');

    return (
        <section className="mt-10 py-6 md:py-16">
            <div className="container grid lg:grid-cols-12 grid-cols-1 gap-2 ">
                <div className="lg:col-span-4 border border-gray-100 rounded-xl sm:rounded-none sm:rounded-l-2xl py-3 px-3 md:px-0 flex items-start md:items-center md:justify-center gap-2">
                    <div className="flex items-center">
                        <FcApproval className="size-16" />
                        <p className="font-bold text-3xl text-center">95.57</p>
                    </div>
                    <div>
                        <p>{lang('trustedBy')} 
                            {lang('customers')}</p>
                    </div>
                </div>
                <div className="lg:col-span-4 border border-gray-100 rounded-xl sm:rounded-none py-3 px-3 md:px-0 flex items-start md:items-center md:justify-center gap-2">
                    <div className="flex items-center">
                        <FcApproval className="size-16" />
                        <p className="font-bold text-3xl text-center">97%</p>
                    </div>
                    <div>
                        <p>{lang('recommend')} <br /> {lang('basedOn')}
                            <span className="font-semibold "> {lang('customerInterviews')}</span>
                        </p>
                    </div>
                </div>
                <div className="lg:col-span-4 border border-gray-100 rounded-xl sm:rounded-none sm:rounded-r-2xl py-3 px-3 md:px-0 flex items-start md:items-center md:justify-center gap-2">
                    <div className="flex items-center">
                        <FcApproval className="size-16" />
                        <p className="font-bold text-3xl text-center">9.8</p>
                    </div>
                    <div>
                        <p>{lang('satisfaction')} <br />
                            <span className="font-semibold"> {lang('klantenvertellen')}</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
