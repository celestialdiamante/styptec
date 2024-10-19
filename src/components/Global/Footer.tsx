import { contactInfoType, getContactData, getPolicyPages } from '@/helpers/getData';
import { Link } from '@/i18n/routing'
import { getTranslations } from 'next-intl/server';
import React from 'react'
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';

type policyPagesType = {
  title: string;
  title_en: string;
  slug: string;
};


const Footer = async () => {
  const lang = await getTranslations('footer');

  const policyPages: policyPagesType[] = await getPolicyPages();
  const contactInfo: contactInfoType = await getContactData();
  // console.log('contactInfo: ', contactInfo);

  return (
    <footer className="mt-auto bg-teal-950 w-full">
      <div className="mt-auto w-full container py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          <div className="col-span-1 lg:col-span-2">
            <a className="flex-none text-xl font-bold md:text-lg text-white focus:outline-none focus:opacity-80" href="#" aria-label="Brand">
              <img
                className="size-16"
                src="/STYPTEC_Icon-01.png"
                alt="" />
            </a>
            <div className="mt-3">
              <h4 className="font-bold text-lg text-secondary">{lang('generalInfo')}</h4>

              <div className="mt-3 grid space-y-3 *:text-white *:hover:text-gray-200 *:focus:outline-none *:focus:text-gray-200">
                <p>{lang('kvk')}: 81188803</p>
                <p>{lang('vat')}: NLXXXXXXXXXXXX</p>
                <p>{lang('iban')}: NLXXXXXXXXXXXXXXXX</p>
              </div>
            </div>
          </div>
          {/* End Col */}

          <div className="col-span-1 lg:col-span-2">
            <h4 className="font-bold text-lg text-secondary">{lang('quickLinks')}</h4>

            <div className="mt-3 grid space-y-3">
              <p>
                <Link className="inline-flex gap-x-2 text-white hover:text-gray-200 focus:outline-none focus:text-gray-200" href="/calculate-your-benefit">
                  {lang('calculateBenefit')}
                </Link>
              </p>
              <p>
                <Link className="inline-flex gap-x-2 text-white hover:text-gray-200 focus:outline-none focus:text-gray-200" href="/about-us">
                  {lang('aboutUs')}
                </Link>
              </p>
              <p>
                <Link className="inline-flex gap-x-2 text-white hover:text-gray-200 focus:outline-none focus:text-gray-200" href="/how-does-it-work">
                  {lang('howItWorks')}
                </Link>
              </p>
              {/* <p>
                <Link className="inline-flex gap-x-2 text-white hover:text-gray-200 focus:outline-none focus:text-gray-200" href="/game-rules">
                {lang('gameRules')}
                </Link>
              </p> */}
              <p>
                <Link className="inline-flex gap-x-2 text-white hover:text-gray-200 focus:outline-none focus:text-gray-200" href="/pricing">
                  {lang('pricing')}
                </Link>
              </p>
            </div>
          </div>
          {/* End Col */}

          <div className="col-span-1 lg:col-span-2">
            <h4 className="font-bold text-lg text-secondary">{lang('policies')}</h4>

            <div className="mt-3 grid space-y-3 *:text-white *:hover:text-gray-200 *:focus:outline-none *:focus:text-gray-200">
              {
                policyPages.map((page) => {
                  return (
                    <p key={page.slug}>
                      <Link className="inline-flex gap-x-2 text-white hover:text-gray-200 focus:outline-none focus:text-gray-200" href={`/policy/${page.slug}`}>
                        {page.title_en}
                      </Link>
                    </p>
                  )
                })
              }
            </div>
          </div>
          {/* End Col */}

          <div className="col-span-1 lg:col-span-2">
            <h4 className="font-bold text-lg text-secondary">{lang('stayUpdated')}</h4>

            <div className="mt-3 grid space-y-3  text-white hover:text-gray-200 focus:outline-none focus:text-gray-200">
              <p>
                {lang('company')} <br />
                <span className="font-bold">{lang('headOffice')}:</span> {contactInfo?.address} <br />
              </p>
              <p>
                <span className="font-bold">{lang('visitAddress')}:</span> {contactInfo?.address_2}
              </p>
              <p>
                <a className="inline-flex gap-x-2 text-white hover:text-gray-200 focus:outline-none focus:text-gray-200"
                  href={`mailto:${contactInfo?.email}`}>
                  {contactInfo?.email}
                </a>
              </p>
            </div>
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}

        <div className="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
          <div className="flex justify-between items-center">
            <p className="text-sm text-white">
              © STYPTEC 2024  |  {lang('designedBy')} <a href="https://adronsoft.org/" className="font-bold" target="_blank">adronSoft</a>
            </p>
          </div>
          {/* End Col */}

          {/* Social Brands */}
          <div>
            <a className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-bold md:text-lg rounded-lg border border-transparent text-white hover:bg-white/10 focus:outline-none focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none" href="#">
              <FaFacebook />
            </a>
            <a className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-bold md:text-lg rounded-lg border border-transparent text-white hover:bg-white/10 focus:outline-none focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none" href="#">
              <FaTwitter />
            </a>
            <a className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-bold md:text-lg rounded-lg border border-transparent text-white hover:bg-white/10 focus:outline-none focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none" href="#">
              <FaGoogle />
            </a>

          </div>
          {/* End Social Brands */}
        </div>
      </div>
    </footer>
  )
}

export default Footer