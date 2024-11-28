"use client"
import { useTranslations } from 'next-intl';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// interface slide {
//     heading: string,
//     subheading: string,
//     highlight: string,
//     description: string,
//     image: string,
// }

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    },
};
export default function HeroSlides() {
    const lang = useTranslations('heroSection');


    // const slides: slide[] = [
    //     {
    //         "heading": lang('0.heading'),
    //         "subheading": lang('0.subheading'),
    //         "highlight": lang('0.highlight'),
    //         "description": lang('0.description'),
    //         image: '/images/freelancer_Banner01.jpg',
    //     },
    //     {
    //         "heading": lang('1.heading'),
    //         "subheading": lang('1.subheading'),
    //         "highlight": lang('1.highlight'),
    //         "description": lang('1.description'),
    //         image: '/images/freelancer_Banner01.jpg',
    //     },
    //     {
    //         "heading": lang('2.heading'),
    //         "subheading": lang('2.subheading'),
    //         "highlight": lang('2.highlight'),
    //         "description": lang('2.description'),
    //         image: '/images/freelancer_Banner01.jpg',
    //     },
    // ];

    // const backgroundStyle = (image: string) => ({
    //     backgroundImage: `url(${image})`,
    // });

    return (
        <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            showDots={true}
            keyBoardControl={true}
            containerClass="carousel-container"
            itemClass="carousel-item"
        >
            {/* {slides.map((slide, index: number) => ( */}
            <section
                className={`bg-[url('/images/Banner-03.jpg')] relative w-full lg:h-[480px] flex items-center overflow-hidden bg-no-repeat bg-cover bg-center md:rounded-3xl py-8 h-[450px] md:mx-2`}
            >
                {/* <div className="absolute inset-0 bg-black opacity-40 z-0 rounded-3xl md:rounded-[40px]" /> */}
                <div className="container relative z-0 ">
                    <h1 className="text-2xl md:text-5xl font-bold mb-2">
                        {lang('0.heading')}
                        <br />
                        {lang('0.subheading')}
                        <br />
                        <span className="text-secondary">{lang('0.highlight')}</span>
                    </h1>
                    <p className="text-base md:text-lg lg:max-w-2xl  mb-10">
                        {lang('0.description')}
                    </p>
                </div>
            </section>

            <section
                className={`bg-[url('/images/Banner-04.jpg')] relative w-full lg:h-[480px] flex items-center overflow-hidden bg-no-repeat bg-cover bg-center md:rounded-3xl py-8 h-[450px] md:mx-2`}
            >
                {/* <div className="absolute inset-0 bg-black opacity-40 z-0 rounded-3xl md:rounded-[40px]" /> */}
                <div className="container relative z-0 ">
                    <h1 className="text-2xl md:text-5xl font-bold mb-2">
                        {lang('1.heading')}
                        <br />
                        {lang('1.subheading')}
                        <br />
                        <span className="text-secondary">{lang('1.highlight')}</span>
                    </h1>
                    <p className="text-base md:text-lg lg:max-w-2xl  mb-10">
                        {lang('1.description')}
                    </p>
                </div>
            </section>

            <section
                className={`bg-[url('/images/Banner-05.jpg')] relative w-full lg:h-[480px] flex items-center overflow-hidden bg-no-repeat bg-cover bg-center md:rounded-3xl py-8 h-[450px] md:mx-2`}
            >
                {/* <div className="absolute inset-0 bg-black opacity-40 z-0 rounded-3xl md:rounded-[40px]" /> */}
                <div className="container relative z-0 ">
                    <h1 className="text-2xl md:text-5xl font-bold mb-2">
                        {lang('2.heading')}
                        <br />
                        {lang('2.subheading')}
                        <br />
                        <span className="text-secondary">{lang('2.highlight')}</span>
                    </h1>
                    <p className="text-base md:text-lg lg:max-w-2xl  mb-10">
                        {lang('2.description')}
                    </p>
                </div>
            </section>

            {/* ))} */}
        </Carousel>
    )
}
