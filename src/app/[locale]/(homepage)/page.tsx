import CallToAction from "@/components/HomePage/CallToAction";
import HeroSection from "@/components/HomePage/HeroSection";
import Pricing from "@/components/HomePage/Pricing";
import Stats from "@/components/HomePage/Stats";
import VideoSection from "@/components/HomePage/VideoSection";
import WhyChoose from "@/components/HomePage/WhyChoose";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
// import {redirect} from 'next/navigation';
import React from "react";

export default function Home() {
  const lang = useTranslations('HomePage');
  // redirect('/en');

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
