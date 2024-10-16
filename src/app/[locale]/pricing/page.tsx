import FeaturesSection from '@/components/Global/FeaturesSection'
import PageHeader from '@/components/Global/PageHeader'
import CallToAction from '@/components/HomePage/CallToAction'
import Pricing from '@/components/HomePage/Pricing'
import getPageMetadata from '@/helpers/getPageMetadata'
import { URLS } from '@/helpers/URLs'
import { Metadata } from 'next'
import React from 'react'
import { FaArrowsUpDownLeftRight } from 'react-icons/fa6'

export async function generateMetadata(): Promise<Metadata> {

  const metaData = await getPageMetadata('pricing');
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


const PricingPage = async () => {
  return (
    <>
      <PageHeader title="Prices and memberships" />

      <FeaturesSection
        subtitle="The best deal"
        title="Memberships and prizes"
        description="Discover our prices and memberships here: Manage all your business and tax obligations effortlessly from one personal dashboard. Enjoy exclusive benefits such as personal insurance, professional training, and unique deals, all arranged seamlessly and reliably by us and our expert partners. Experience the freedom of carefree entrepreneurship. Create an account now without obligation and for free to discover our unique dashboard and all the benefits."
        imageUrl="/images/13655.jpg"
        imageLeft={true}
        IconComponent={FaArrowsUpDownLeftRight}
      />

      <Pricing />

      <CallToAction
        title="Create an account now without obligation and for free"
        subtitle="Register in 10 seconds and discover our unique dashboard and all the benefits and experience for yourself how easy it works."
        buttonText="Sign up for free"
        buttonLink="/register"
      />
    </>
  )
}

export default PricingPage