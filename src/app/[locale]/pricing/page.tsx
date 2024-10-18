import FeaturesSection from '@/components/Global/FeaturesSection'
import PageHeader from '@/components/Global/PageHeader'
import CallToAction from '@/components/HomePage/CallToAction'
import Pricing from '@/components/HomePage/Pricing'
import getPageMetadata from '@/helpers/getPageMetadata'
import { URLS } from '@/helpers/URLs'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
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

export default async function PricingPage() {

  const lang = await getTranslations('pricesMemberships');

  return (
    <>
      <PageHeader title={lang('pageHeader')} />

      <FeaturesSection
        subtitle={lang('featuresSection.subtitle')}
        title={lang('featuresSection.title')}
        description={lang('featuresSection.description')}
        imageUrl="/images/13655.jpg"
        imageLeft={true}
        IconComponent={FaArrowsUpDownLeftRight}
      />

      <Pricing />

      <CallToAction
        title={lang('callToAction.title')}
        subtitle={lang('callToAction.subtitle')}
        buttonText={lang('callToAction.buttonText')}
        buttonLink="/register"
      />

    </>
  )
}