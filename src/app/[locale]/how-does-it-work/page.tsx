import FeaturesSection from '@/components/Global/FeaturesSection'
import PageHeader from '@/components/Global/PageHeader'
import CallToAction from '@/components/HomePage/CallToAction'
import getPageMetadata from '@/helpers/getPageMetadata';
import { URLS } from '@/helpers/URLs';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import React from 'react'
import { BsBoxArrowInUpRight } from 'react-icons/bs';


export async function generateMetadata(): Promise<Metadata> {

    const metaData = await getPageMetadata('how_it_works');
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
  

  export default async function HowItWork() {
    
    const lang = await getTranslations('howItWorks');

    return (
      <>
        <PageHeader title={lang('pageHeader')} />
  
        <FeaturesSection
          subtitle={lang('features.takeControl.subtitle')}
          title={lang('features.takeControl.title')}
          description={lang('features.takeControl.description')}
          imageUrl="/images/13655.jpg"
          imageLeft={false}
          IconComponent={BsBoxArrowInUpRight}
        />
  
        <FeaturesSection
          subtitle={lang('features.carefreeWork.subtitle')}
          title={lang('features.carefreeWork.title')}
          description={lang('features.carefreeWork.description')}
          imageUrl="/images/13655.jpg"
          imageLeft={true}
          IconComponent={BsBoxArrowInUpRight}
        />
  
        <FeaturesSection
          subtitle={lang('features.modelAgreement.subtitle')}
          title={lang('features.modelAgreement.title')}
          description={lang('features.modelAgreement.description')}
          imageUrl="/images/13655.jpg"
          imageLeft={false}
          IconComponent={BsBoxArrowInUpRight}
        />
  
        <FeaturesSection
          subtitle={lang('features.sendInvoice.subtitle')}
          title={lang('features.sendInvoice.title')}
          description={lang('features.sendInvoice.description')}
          imageUrl="/images/13655.jpg"
          imageLeft={true}
          IconComponent={BsBoxArrowInUpRight}
        />
  
        <FeaturesSection
          subtitle={lang('features.completelyCarefree.subtitle')}
          title={lang('features.completelyCarefree.title')}
          description={lang('features.completelyCarefree.description')}
          imageUrl="/images/13655.jpg"
          imageLeft={false}
          IconComponent={BsBoxArrowInUpRight}
        />
  
        <FeaturesSection
          subtitle={lang('features.noSurprises.subtitle')}
          title={lang('features.noSurprises.title')}
          description={lang('features.noSurprises.description')}
          imageUrl="/images/13655.jpg"
          imageLeft={true}
          IconComponent={BsBoxArrowInUpRight}
        />
  
        <CallToAction
          title={lang('callToAction.title')}
          subtitle={lang('callToAction.subtitle')}
          buttonText={lang('callToAction.buttonText')}
          buttonLink="/register"
        />
      </>
    )
}
