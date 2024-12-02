import CallToAction from "@/components/HomePage/CallToAction";
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
import { getTranslations } from "next-intl/server";
import HeroSection from "@/components/HomePage/HeroSection";
import { Link } from "@/i18n/routing";

export async function generateMetadata(): Promise<Metadata> {

  const metaData = await getPageMetadata('home');
  // console.log('metaData: ', metaData)

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function Home({ params }: any) {
  const lang = await getTranslations('home');

  return (
    <>
      <HeroSection params={params} />

      <section className="mt-96 lg:mt-10 py-6 md:py-10">
        <div className="container relative">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-8">
            <div className="col-span-6 relative order-first">
              <Image
                src="/images/thumb03.jpg"
                className="rounded-3xl shadow-md"
                alt=""
                height={700}
                width={1000} />
            </div>

            <div className="col-span-6 order-last">
              <div className="border-b mb-2">
                <div>
                  <p className="text-base text-primary font-semibold">About Us</p>
                  <h4 className="text-2xl md:text-3xl font-bold">{lang('aboutUsSection.title')}</h4>
                </div>
              </div>
              <p className="mb-2">{lang('aboutUsSection.description')}</p>
              <div className="mt-6">
                <Link href="/about-us" className="btn btn-primary text-white">{lang('aboutUsSection.buttonText')} <FaChevronRight /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Stats />

      <VideoSection />
      {/* <Pricing /> */}

      <section className="py-6 md:py-16 bg-[url('/images/bannner_012.jpg')] bg-no-repeat bg-center bg-cover">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-10 gap-6">
          <div className="md:col-span-7">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              {lang('bannerSection.title')}
            </h3>
            <p className="text-base md:text-lg lg:max-w-2xl mb-10">
              {lang('bannerSection.description')}
            </p>
          </div>

          <div className="md:col-span-3">
            <img src="" alt="" />
          </div>
        </div>
      </section>

      <WhyChoose />


      <section className="mt-96 lg:mt-10 py-6 md:py-10">
        <div className="container relative ">
          <p className="text-2xl md:text-3xl font-bold mb-8 text-center">{lang('globalSection.sectionTitle')}</p>

          <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-8">

            <div className="col-span-7 relative order-first">
              <Image
                src="/images/Map02.webp"
                className="rounded-3xl"
                alt=""
                height={700}
                width={1000} />
            </div>

            <div className="col-span-5 order-last *:border-b border-gray-300">
              <div className="grid grid-cols-8 gap-4">
                <div className="col-span-1 flex items-center justify-center">
                  <img
                    className="h-auto w-10"
                    src="/images/flag/india (1).png"
                    alt="india" />
                </div>
                <div className="mt-2 col-span-7">
                  <p className="text-lg text-primary font-semibold">{lang('globalSection.locations.india.name')}</p>
                  <p className="">{lang('globalSection.locations.india.description')}</p>
                </div>
              </div>

              <div className="grid grid-cols-8 gap-4">
                <div className="col-span-1 flex items-center justify-center">
                  <img
                    className="h-auto w-10"
                    src="/images/flag/suriname.png"
                    alt="india" />
                </div>
                <div className="mt-2 col-span-7">
                  <p className="text-lg text-primary font-semibold">{lang('globalSection.locations.suriname.name')}</p>
                  <p className="">{lang('globalSection.locations.suriname.description')}</p>
                </div>
              </div>

              <div className="grid grid-cols-8 gap-4">
                <div className="col-span-1 flex items-center justify-center">
                  <img
                    className="h-auto w-10"
                    src="/images/flag/aruba.png"
                    alt="india" />
                </div>
                <div className="mt-2 col-span-7">
                  <p className="text-lg text-primary font-semibold">{lang('globalSection.locations.aruba.name')}</p>
                  <p className="">{lang('globalSection.locations.aruba.description')}</p>
                </div>
              </div>

              <div className="grid grid-cols-8 gap-4">
                <div className="col-span-1 flex items-center justify-center">
                  <img
                    className="h-auto w-10"
                    src="/images/flag/sint-maarten.png"
                    alt="india" />
                </div>
                <div className="mt-2 col-span-7">
                  <p className="text-lg text-primary font-semibold">{lang('globalSection.locations.sintMaarten.name')}</p>
                  <p className="">{lang('globalSection.locations.sintMaarten.description')}</p>
                </div>
              </div>

              <div className="grid grid-cols-8 gap-4">
                <div className="col-span-1 flex items-center justify-center">
                  <img
                    className="h-auto w-10"
                    src="/images/flag/curacao.png"
                    alt="india" />
                </div>
                <div className="mt-2 col-span-7">
                  <p className="text-lg text-primary font-semibold">{lang('globalSection.locations.curacao.name')}</p>
                  <p className="">{lang('globalSection.locations.curacao.description')}</p>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>

      <Testimonial />


      <CallToAction
        title={lang('callToAction.title')}
        subtitle={lang('callToAction.subtitle')}
        buttonText={lang('callToAction.buttonText')}
        buttonLink="/contact-us"
      />
    </>
  );
}

