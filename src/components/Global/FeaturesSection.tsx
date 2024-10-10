import React from 'react';
import Image from 'next/image';
import { IconType } from 'react-icons';

interface FeaturesSectionProps {
    subtitle?: string;
    title: string;
    description: string;
    listItem1?: string;
    listItem2?: string;
    imageUrl: string;
    imageLeft?: boolean;
    IconComponent?: IconType;
}

const FeaturesSection = ({ subtitle, title, description, listItem1, listItem2, imageUrl, imageLeft = false, IconComponent }: FeaturesSectionProps) => {
    return (
        <section>
            <div className="container relative md:my-24 py-20">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-8">
                    <div className={`col-span-6 relative order-first ${imageLeft ? 'md:order-last' : 'md:order-first'}`}>
                        <Image
                            src={imageUrl}
                            className="rounded-3xl shadow-md"
                            alt=""
                            height={700}
                            width={1000} />
                    </div>

                    <div className={`col-span-6 order-last ${imageLeft ? 'md:order-first' : 'md:order-last'}`}>
                        <div className="flex justify-between border-b mb-2">
                            <div>
                               {subtitle && ( <p className="text-base text-primary font-semibold">{subtitle}</p> )}
                                <h4 className="text-[32px] leading-[40px] lg:text-[40px] lg:leading-[48px] font-bold text-gray-700">{title}</h4>
                            </div>
                            {IconComponent && (
                                <div className="flex items-center ">
                                    <div className="border p-3 shadow-sm mb-1 bg-gray-100 border-gray-100 rounded-xl">
                                        <IconComponent className="size-6 text-primary " />
                                    </div>
                                </div>
                            )}
                        </div>
                        <p className="text-base text-justify lg:text-lg text-black mb-2 ">{description}</p>
                        
                        {(listItem1 || listItem2) && (
                            <ul className="ml-5 list-outside list-disc *:text-base *:text-justify *:lg:text-lg *:text-black">
                                {listItem1 && <li>{listItem1}</li>}
                                {listItem2 && <li>{listItem2}</li>}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
