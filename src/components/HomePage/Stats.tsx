import React from 'react';
import { useTranslations } from 'next-intl';
import { IoIosGlobe } from 'react-icons/io';
import { PiUserCircleCheck } from 'react-icons/pi';
import { LiaIndustrySolid } from 'react-icons/lia';
import { MdOutlineConnectWithoutContact } from 'react-icons/md';

const Stats = () => {
    const lang = useTranslations('stats');

    return (
        <section className="py-6 md:py-16">
            <div className="container grid lg:grid-cols-12 grid-cols-1 gap-2 ">
                <div className="lg:col-span-3 border border-gray-100 rounded-xl sm:rounded-none sm:rounded-l-2xl mb-4 md:mb-0 py-3 px-3 md:px-0 flex flex-col items-center justify-center gap-2 group shadow-lg hover:border-primary hover:shadow-primary/20 hover:bg-primary *:hover:text-white">

                    <PiUserCircleCheck className="size-10 text-primary" />
                    <p className="font-bold text-3xl text-center text-primary">100+</p>

                    <p>{lang('satisfiedFreelancer')} </p>
                </div>
                <div className="lg:col-span-3 border border-gray-100 rounded-xl sm:rounded-none py-3 px-3 md:px-0 flex flex-col items-center justify-center gap-2 group shadow-lg hover:border-primary hover:shadow-primary/20 hover:bg-primary *:hover:text-white">
                    <MdOutlineConnectWithoutContact className="size-10 text-primary" />
                    <p className="font-bold text-3xl text-center text-primary">97%</p>
                    <p>
                        {lang('customers')}
                    </p>
                </div>
                <div className="lg:col-span-3 border border-gray-100 rounded-xl sm:rounded-none py-3 px-3 md:px-0 flex flex-col items-center justify-center gap-2 group shadow-lg hover:border-primary hover:shadow-primary/20 hover:bg-primary *:hover:text-white">

                    <IoIosGlobe className="size-10 text-primary" />
                    <p className="font-bold text-3xl text-center text-primary">10+</p>

                    <p>
                        {lang('global')}
                    </p>
                </div>
                <div className="lg:col-span-3 border border-gray-100 rounded-xl sm:rounded-none sm:rounded-r-2xl py-3 px-3 md:px-0 flex flex-col items-center justify-center gap-2 group shadow-lg hover:border-primary hover:shadow-primary/20 hover:bg-primary *:hover:text-white">

                    <LiaIndustrySolid className="size-10 text-primary" />
                    <p className="font-bold text-3xl text-center text-primary">9.8</p>

                    <p>
                        {lang('satisfaction')}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Stats;
