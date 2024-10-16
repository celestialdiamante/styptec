import React from 'react';
import Image from 'next/image';
import { IconType } from 'react-icons';
import { Link } from '@/i18n/routing';

interface FeaturesSectionProps {
    subtitle?: string;
    title: string;
    description: string;
    listItem1?: string;
    listItem2?: string;
    imageUrl: string;
    imageLeft?: boolean;
    IconComponent?: IconType;
    link?: string;
}

const FeaturesSection = ({ subtitle, title, description, listItem1, listItem2, imageUrl, imageLeft = false, IconComponent, link }: FeaturesSectionProps) => {
    return (
        <section className="py-6 md:py-10">
            <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-8">
                    <div className={`col-span-6 relative order-last ${imageLeft ? 'md:order-last' : 'md:order-first'}`}>
                        <Image
                            src={imageUrl}
                            className="rounded-3xl shadow-md"
                            alt=""
                            height={700}
                            width={1000} />
                    </div>

                    <div className={`col-span-6 order-first ${imageLeft ? 'md:order-first' : 'md:order-last'}`}>
                        <div className="flex justify-between border-b mb-2">
                            <div>
                                {subtitle && (<p className="text-base text-primary font-semibold">{subtitle}</p>)}
                                <h4 className="text-2xl md:text-3xl font-bold">{title}</h4>
                            </div>
                            {IconComponent &&(
                                <Link href={link ? link : '#'}>
                                    <div className="flex items-center ">
                                        <div className="border p-3 shadow-sm mb-1 hover:bg-gray-200 bg-gray-100 border-gray-100 rounded-xl">
                                            <IconComponent className="size-6 text-primary " />
                                        </div>
                                    </div>
                                </Link>
                            )}
                        </div>
                        <p className="mb-2">{description}</p>

                        {(listItem1 || listItem2) && (
                            <ul className="ml-5 list-outside list-disc  *:text-justify ">
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
