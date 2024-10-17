import CallToAction from "@/components/HomePage/CallToAction";
import HeroSection from "@/components/HomePage/HeroSection";
import Pricing from "@/components/HomePage/Pricing";
import Stats from "@/components/HomePage/Stats";
import Testimonial from "@/components/HomePage/Testimonial";
import VideoSection from "@/components/HomePage/VideoSection";
import WhyChoose from "@/components/HomePage/WhyChoose";
import getPageMetadata from "@/helpers/getPageMetadata";
import { URLS } from "@/helpers/URLs";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import { FaChevronRight } from "react-icons/fa";

export async function generateMetadata(): Promise<Metadata> {

  const metaData = await getPageMetadata('home');
  console.log('metaData: ', metaData)

  const title = metaData?.title_en ?? 'Styptec';
  const description = metaData?.description_en ?? 'Styptec';
  const keywords = metaData?.keywords_en ?? 'Styptec';

  return {
    title: title,
    description: description,
    keywords: keywords,
    openGraph: {
      title: title,
      description: description,
      url: process.env.SITE_URL ?? 'https://www.styptec.nl',
      siteName: process.env.SITE_NAME ?? 'Styptec',
      type: 'website',
      images: [URLS.STORAGE + metaData.seo_image],
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: [URLS.STORAGE + metaData.seo_image],
    },

  }
}

export default async function Home() {
  return (
    <>
      <HeroSection />
      <Stats />
     

      <section className="py-6 md:py-10">
        <div className="container relative">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-8">
            <div className="col-span-6 relative order-first">
              <Image
                src="/images/13655.jpg"
                className="rounded-3xl shadow-md"
                alt=""
                height={700}
                width={1000} />
            </div>

            <div className="col-span-6 order-last">
              <div className="border-b mb-2">
                <div>
                  <p className="text-base text-primary font-semibold">About Us</p>
                  <h4 className="text-2xl md:text-3xl font-bold">Styptec helps you with invoicing</h4>
                </div>
              </div>
              <p className="mb-2">Styptec was founded in 2012 by Edward Belgraver () to support the growing group of self-employed persons who want to work on an assignment-based basis, short-term or long-term, without any hassle. With a team of highly committed colleagues, we work to provide an optimal service and a platform that supports our clients to work without a Commercial Registration number or VAT number. In recent years, we have grown to 95.913 customers whom we are delighted to support with professional partners and high service levels.</p>
              <div className="mt-6">
                <button className="btn btn-primary text-white">Explore More <FaChevronRight /></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <VideoSection />
      <Pricing />

      <section className="py-6 md:py-16 bg-[url('/images/SKYPTEC_Banner01.jpg')] bg-no-repeat bg-cover">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-10 gap-6">
          <div className="md:col-span-7">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              Check out the options without obligation.


            </h3>
            <p className="text-base md:text-lg lg:max-w-2xl  mb-10">
              Styptec helps you with invoicing and deduction of all compulsory taxes and offers you insurance, training and many extra benefits. You get the best deals
            </p>
          </div>

          <div className="md:col-span-3">
            <img src="" alt="" />
          </div>
        </div>
      </section>

      <WhyChoose />
      <Testimonial />
      <CallToAction
        title="Check out the options without obligation."
        subtitle="Register in 10 seconds and see how easy it is. No strings attached."
        buttonText="Register for free"
        buttonLink="/register"
      />
    </>
  );
}

