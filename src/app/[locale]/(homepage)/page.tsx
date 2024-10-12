import CallToAction from "@/components/HomePage/CallToAction";
import HeroSection from "@/components/HomePage/HeroSection";
import Pricing from "@/components/HomePage/Pricing";
import Stats from "@/components/HomePage/Stats";
import VideoSection from "@/components/HomePage/VideoSection";
import WhyChoose from "@/components/HomePage/WhyChoose";
import getPageMetadata from "@/helpers/getPageMetadata";
import { URLS } from "@/helpers/URLs";
import { Metadata } from "next";
import React from "react";

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
      siteName: process.env.SITE_NAME ??'Styptec',
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
      <VideoSection />
      <Pricing />
      <WhyChoose />

      <CallToAction
        title="Check out the options without obligation."
        subtitle="Register in 10 seconds and see how easy it is. No strings attached."
        buttonText="Register for free"
        buttonLink="/register"
      />
    </>
  );
}

