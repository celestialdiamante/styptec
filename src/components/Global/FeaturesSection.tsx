import React from 'react'
import Image from 'next/image'


interface FeaturesSectionProps {
    subtitle: string;
    className?: string;
    title: string;
    description: string;
    imageUrl: string;
    imageLeft?: boolean;
}

const FeaturesSection = ({ subtitle, className = '', title, description, imageUrl, imageLeft = false }: FeaturesSectionProps) => {
    return (
        <section>
            <div className="container relative md:my-24 py-16">
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
                        <p className={`text-base font-semibold ${className}`}>{subtitle}</p>
                        <h4 className="text-[32px] leading-[40px] lg:text-[40px] lg:leading-[48px] font-bold text-gray-700">{title}</h4>
                        <p className="text-base lg:text-lg text-black mb-2 ">{description}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturesSection