import FeaturesSection from '@/components/Global/FeaturesSection'
import PageHeader from '@/components/Global/PageHeader'
import CallToAction from '@/components/HomePage/CallToAction'
import { useTranslations } from 'next-intl'
import React from 'react'
import { FaArrowsUpDownLeftRight } from 'react-icons/fa6'


export default function Entrepreneurs() {

  const lang = useTranslations('forEntrepreneurs');

  return (
    <>
      <PageHeader title={lang('pageHeader')} />

      <FeaturesSection
        subtitle={lang('features.hiringSolution.subtitle')}
        title={lang('features.hiringSolution.title')}
        description={lang('features.hiringSolution.description')}
        imageUrl="/images/13655.jpg"
        imageLeft={false}
        IconComponent={FaArrowsUpDownLeftRight}
      />

      <FeaturesSection
        subtitle={lang('features.guaranteedWellArranged.subtitle')}
        title={lang('features.guaranteedWellArranged.title')}
        description={lang('features.guaranteedWellArranged.description')}
        imageUrl="/images/13655.jpg"
        imageLeft={true}
      />

      <FeaturesSection
        subtitle={lang('features.modelAgreement.subtitle')}
        title={lang('features.modelAgreement.title')}
        description={lang('features.modelAgreement.description')}
        imageUrl="/images/13655.jpg"
        imageLeft={false}
      />

      <FeaturesSection
        subtitle={lang('features.payment.subtitle')}
        title={lang('features.payment.title')}
        description={lang('features.payment.description')}
        imageUrl="/images/13655.jpg"
        imageLeft={true}
      />

      <FeaturesSection
        subtitle={lang('features.noSurprises.subtitle')}
        title={lang('features.noSurprises.title')}
        description={lang('features.noSurprises.description')}
        imageUrl="/images/13655.jpg"
        imageLeft={false}
      />

      <FeaturesSection
        subtitle={lang('features.recommendation.subtitle')}
        title={lang('features.recommendation.title')}
        description={lang('features.recommendation.description')}
        listItem1={lang('features.recommendation.listItem1')}
        listItem2={lang('features.recommendation.listItem2')}
        imageUrl="/images/13655.jpg"
        imageLeft={true}
      />

      <CallToAction
        title={lang('callToAction.title')}
        subtitle={lang('callToAction.subtitle')}
        buttonText={lang('callToAction.buttonText')}
        buttonLink="/register"
      />
    </>
  );
};
