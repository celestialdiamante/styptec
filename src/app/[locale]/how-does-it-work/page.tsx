import FeaturesSection from '@/components/Global/FeaturesSection'
import PageHeader from '@/components/Global/PageHeader'
import CallToAction from '@/components/HomePage/CallToAction'
import getPageMetadata from '@/helpers/getPageMetadata';
import { URLS } from '@/helpers/URLs';
import { Metadata } from 'next';
import React from 'react'


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
  

const HowItWork = async () => {
    return (
        <>
            <PageHeader title="How does Styptec work?" />

            <FeaturesSection
                subtitle="Take control"
                title="Become a BOSS"
                description="Who doesn’t dream of being a freelancer? Being free and choosing only the jobs you like. Nobody likes blue envelopes of the Dutch Tax Authority and what does working for your own account and at your own risk mean? At Styptec, we help you work for the jobs you want, without the hassle of these blue envelopes. All your affairs arranged in one place."
                imageUrl="/images/13655.jpg"
                imageLeft={false}
            />

            <FeaturesSection
                subtitle="Carefree work"
                title="No strings attached"
                description="We want you to be able to work without worries. See our video where we explain what we can expect from each other. You can use our services as long as you like. Styptec provides total peace of mind: apart from your taxes, your social securities are also well arranged. You will never face any surprises."
                imageUrl="/images/13655.jpg"
                imageLeft={true}
            />

            <FeaturesSection
                subtitle="Model agreement"
                title="Make sound agreements"
                description="At Styptec, we think it is important to make good agreements with your client. In your account you can easily create and sign our standard model. Of course, you can also work with your own agreement, which you can add online. Our standard model is based on the approved “No authority” model agreement of the Dutch Tax Authority."
                imageUrl="/images/13655.jpg"
                imageLeft={false}
            />

            <FeaturesSection
                subtitle="Send invoice"
                title="Invoicing"
                description="We take total care over your administration and, through your secured account, you simply send an invoice to your client in accordance with the agreements you have made. Sending an invoice takes just 2 minutes! All taxes and insurances are also taken care of directly by us. The net payment follows one working day after your client has paid, you receive your money quickly and easy. And if you want, we can often pay the invoice in advance, so you get your money even faster. We help you save time and stress!"
                imageUrl="/images/13655.jpg"
                imageLeft={true}
            />

            <FeaturesSection
                subtitle="Completely carefree"
                title="Payment"
                description="With Styptec, we take care of all the hassle. We make sure your administration and all legally required taxes are paid in advance. The best known is income tax. We also take care of the VAT and healthcare law (Zvw). In your account, you can set everything up the way you like it, including retirement savings and reserves. At the beginning of the year, you will receive a clear annual statement from us. Make unlimited free calculations and see what you can earn!"
                imageUrl="/images/13655.jpg"
                imageLeft={false}
            />

            <FeaturesSection
                subtitle="No surprises"
                title="Insurance and mutuality savings scheme"
                description="If you work, you may still run into problems (without your fault). In collaboration with Avéro Achmea, we have excellent occupational disability insurance, which we make compulsory up to the age of 62 and when your income exceeds EUR 3,750 in three months. We also have a mutuality savings scheme (schenkkring) with 2-year cover and as a regular customer, you are automatically insured through AIG for accidents (up to EUR 100,000). So no surprises, even if things do not go according to plan."
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

export default HowItWork