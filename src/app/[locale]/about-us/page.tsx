import React from 'react';
import FeaturesSection from '@/components/Global/FeaturesSection';
import PageHeader from '@/components/Global/PageHeader';
import CallToAction from '@/components/HomePage/CallToAction';
import { FaArrowsUpDownLeftRight } from 'react-icons/fa6';
// import { GiMagnifyingGlass } from 'react-icons/gi';
import { LuNewspaper, LuRocket } from 'react-icons/lu';
import { useTranslations } from 'next-intl';

const AboutUsPage = () => {
  const lang = useTranslations('aboutUs');

  return (
    <>
      <PageHeader title={lang('pageHeader')} />

      <FeaturesSection
        title={lang('ourStory.title')}
        description={lang('ourStory.description')}
        imageUrl="/images/corporate_team.jpg"
        imageLeft={false}
        IconComponent={FaArrowsUpDownLeftRight}
      />

      {/* <section>
        <div className="container">
         bg-gradient-to-l from-teal-300 via-green-200 to-amber-200 p-0.5 rounded-xl shadow-lg 
          <div className="">
            <div className="flex flex-col gap-2 bg-white px-8 py-4 rounded-xl">
              <div className="flex justify-start gap-6">
                <div className="border p-3 shadow-sm mb-1 bg-gray-100 border-gray-100 rounded-xl">
                  <LuRocket className="size-10 text-amber-300" />
                </div>
                <div className="border-b flex-grow">
                  <h4 className="text-2xl md:text-3xl font-bold">{lang('mission.title')}</h4>
                  <p className="text-lg font-semibold mb-2">{lang('mission.subtitle')}</p>
                </div>
              </div>
              <div>
                <p className="mb-2 text-justify">{lang('mission.description')}</p>
              </div>
            </div>
          </div>

        
        </div>
      </section> */}
      {/* <div className="bg-gradient-to-r from-teal-300 via-green-200 to-amber-200 p-0.5 rounded-xl shadow-lg">
            <div className="flex flex-col gap-2 bg-white px-8 py-4 rounded-xl">
              <div className="flex justify-center">
                <div className="border p-3 shadow-sm mb-1 bg-gray-100 border-gray-100 rounded-xl">
                  <GiMagnifyingGlass className="size-10 text-primary" />
                </div>
              </div>
              <div>
                <h4 className="text-2xl md:text-3xl text-center font-bold">{lang('vision.title')}</h4>
                <p className="text-center mb-2">{lang('vision.description')}</p>
              </div>
            </div>
          </div> */}

      <FeaturesSection
        title={lang('mission.title')}
        description={lang('mission.description')}
        imageUrl="/images/Core_Value.jpg"
        imageLeft={true}
        IconComponent={LuRocket}
      />

      <FeaturesSection
        title={lang('solution.title')}
        description={lang('solution.description')}
        imageUrl="/images/corporate_office.jpg"
        imageLeft={false}
        IconComponent={LuNewspaper}
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

export default AboutUsPage;
