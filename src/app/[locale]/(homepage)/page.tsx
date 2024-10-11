import CallToAction from "@/components/HomePage/CallToAction";
import HeroSection from "@/components/HomePage/HeroSection";
import Pricing from "@/components/HomePage/Pricing";
import Stats from "@/components/HomePage/Stats";
import VideoSection from "@/components/HomePage/VideoSection";
import WhyChoose from "@/components/HomePage/WhyChoose";
import { Link } from "@/i18n/routing";
// import { Metadata } from "next";
import { useTranslations } from "next-intl";
import React from "react";

// async function fetchMetadata() {
//   const response = await fetch('/api/metadata');
//   if (!response.ok) {
//     throw new Error('Failed to fetch metadata');
//   }
//   return await response.json();
// }


// export async function getServerSideProps() {
//   try {
//     const metadata = await fetchMetadata();
//     return { props: { metadata } };
//   } catch (error) {
//     console.error(error);
//     return { props: { metadata: { title: 'Default Title', description: 'Default Description' } } };
//   }
// }

// export const metadata: Metadata = {
//   title: 'Default Title',
//   description: 'Default Description',
// };


export default function Home() {
  const lang = useTranslations('HomePage');

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

      <div className="hidden">
        <h1>{lang('title')}</h1>
        <Link href="/about">{lang('about')}</Link>
      </div>
    </>
  );
}

