import React from 'react';
import PageHeader from '@/components/Global/PageHeader';
import ContactForm from '@/components/ContactForm';
import { contactInfoType, getContactData } from '@/helpers/getData';
import getPageMetadata from '@/helpers/getPageMetadata';
import { Metadata } from 'next';
import { URLS } from '@/helpers/URLs';

export async function generateMetadata(): Promise<Metadata> {

  const metaData = await getPageMetadata('contact');
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

const ContactUs = async () => {

  const contactInfo : contactInfoType = await getContactData();


  return (
    <>
      <PageHeader title="Contact us" />

      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-10 grid-cols-1 gap-6">
            <div className="md:col-span-5 p-6 border border-gray-50 rounded-xl shadow-xl">
              <ContactForm />
            </div>
            <div className="md:col-span-5 p-6">
              <h3 className="text-lg font-bold">Contact details</h3>

              <p className="my-2">
                STYPTEC B.V. <br />
                <span className="font-bold">Hoofdvestiging:</span> {contactInfo?.address} <br />
              </p>

              <p className="my-2">
                <span className="font-bold">Bezoekadres:</span> {contactInfo?.address_2}
              </p>

              <p>
                <a href={`mailto:${contactInfo?.email}`} className="text-primary">
                  {contactInfo?.email}
                </a>
              </p>
              {
                contactInfo?.email_2 &&
                <p>
                  <a href={`mailto:${contactInfo.email_2}`} className="text-primary">
                    {contactInfo.email_2}
                  </a>
                </p>
              }
              <h4 className="text-lg font-bold mt-6">Opening hours</h4>
              <p>Monday - Friday: 09:00 - 17:30</p>
              <p>Saturday - Sunday: Closed</p>
            </div>
          </div>
        </div>
      </section >
    </>
  );
};

export default ContactUs;
