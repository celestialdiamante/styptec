import FeaturesSection from '@/components/Global/FeaturesSection'
import PageHeader from '@/components/Global/PageHeader'
import CallToAction from '@/components/HomePage/CallToAction'
import getPageMetadata from '@/helpers/getPageMetadata'
import { URLS } from '@/helpers/URLs'
import { Metadata } from 'next'
import React from 'react'
import { FaArrowsUpDownLeftRight } from 'react-icons/fa6'
import { GiMagnifyingGlass } from 'react-icons/gi'
import { LuRocket } from 'react-icons/lu'

export async function generateMetadata(): Promise<Metadata> {

  const metaData = await getPageMetadata('about');
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


const AboutUs = async () => {
  return (
    <>
      <PageHeader title="Curious about us?" />

      <FeaturesSection
        title="Our story"
        description="Verloning.nl was founded in 2012 by Edward Belgraver () to support the growing group of self-employed persons who want to work on an assignment-based basis, short-term or long-term, without any hassle. With a team of highly committed colleagues, we work to provide an optimal service and a platform that supports our clients to work without a Commercial Registration number or VAT number. In recent years, we have grown to 95.913 customers whom we are delighted to support with professional partners and high service levels."
        imageUrl="/images/13655.jpg"
        imageLeft={false}
        IconComponent={FaArrowsUpDownLeftRight}
      />

      <section>
        <div className="container grid md:grid-cols-2 grid-cols-1 gap-6">

          <div className="bg-gradient-to-l from-teal-300 via-green-200 to-amber-200 p-0.5 rounded-xl shadow-lg">
            <div className="flex flex-col gap-2 bg-white px-8 py-4 rounded-xl">
              <div className="flex justify-center">
                <div className="border p-3 shadow-sm mb-1 bg-gray-100 border-gray-100 rounded-xl">
                  <LuRocket className="size-10 text-amber-300" />
                </div>
              </div>
              <div>
                <h4 className="text-2xl md:text-3xl text-center font-bold">Mission</h4>
                <p className="text-center mb-2">
                  Styptec wants to be there for everyone who wants to have full control, insight in and control over their income, where Verloning.nl is the partner in working autonomously from job to job.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-teal-300 via-green-200 to-amber-200 p-0.5 rounded-xl shadow-lg">
            <div className="flex flex-col gap-2 bg-white px-8 py-4 rounded-xl">
              <div className="flex justify-center">
                <div className="border p-3 shadow-sm mb-1 bg-gray-100 border-gray-100 rounded-xl">
                  <GiMagnifyingGlass className="size-10 text-primary" />
                </div>
              </div>
              <div>
                <h4 className="text-2xl md:text-3xl text-center font-bold">Vision</h4>
                <p className="text-center mb-2">
                  Styptec wants to be known nationwide by modern self-employed persons, clients and stakeholders as the natural, but above all reliable choice to take care of income during the career.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeaturesSection
        title="Our solution"
        description="Verloning.nl helps self-employed persons by invoicing their job and taking care of the social and fiscal obligations and securities in advance. This way, administration is taken care of and there are no surprises afterwards.In addition, with carefully selected partners, we offer many extra benefits. For instance, we have our own mutuality savings scheme (schenkkring), you save easily for your holidays and we have collective deals with insurers for e.g. disability and your health insurance. We also have great partnership with training provider GoodHabitz.We do this transparently and honestly where our commission is fixed. We only look for the best deal for our clients."
        imageUrl="/images/13655.jpg"
        imageLeft={true}
      />

      <CallToAction
        title="Check out the options without obligation."
        subtitle="Register in 10 seconds and see how easy it is. No strings attached."
        buttonText="Register for free"
        buttonLink="/register"
      />

    </>
  )
}

export default AboutUs