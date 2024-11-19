"use client"
import { useTranslations } from 'next-intl';
import React from 'react'
import { IoMdQuote, IoMdStar } from 'react-icons/io'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

interface Testimonial {
    quote: string;
    name: string;
    position: string;
  }
const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 3
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


export default function Testimonial() {
  const lang = useTranslations('testimonials');

  const testimonials : Testimonial[] = lang.raw('list');

    return (
        <section className="py-6 md:py-16">
            <div className="container mx-auto text-center mt-10 mb-10 lg:mb-14">
                <h3 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-12">
                    {lang('title')}
                </h3>
                <div>
                    <Carousel
                        responsive={responsive}
                        removeArrowOnDeviceType={["tablet", "mobile", "desktop", "superLargeDesktop"]}
                        showDots={false}
                        autoPlay={true}
                        autoPlaySpeed={3000}
                        infinite={true}
                    >
                        {testimonials.map((testimonial, index:number)=> (
                            <div key={index} className="rounded-xl border border-gray-50 shadow-lg m-6 p-6 bg-white space-y-3">
                                <IoMdQuote className="text-5xl text-primary mx-auto" />
                                <p className="text-gray-600 text-center line-clamp-3"> &quot;{testimonial.quote}&quot;</p>
                                <div className="flex justify-center *:text-amber-400">
                                    {[...Array(5)].map((_, starIndex) => (
                                        <IoMdStar key={starIndex} />
                                    ))}
                                </div>

                                <div className="text-center mt-5">
                                    <h6 className="mt-2 font-semibold">{testimonial.name}</h6>
                                    <span className="text-slate-400 text-sm">{testimonial.position}</span>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>

            </div>
        </section >
    )
}
