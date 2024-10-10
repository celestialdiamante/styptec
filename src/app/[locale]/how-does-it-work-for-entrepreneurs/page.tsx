import FeaturesSection from '@/components/Global/FeaturesSection'
import PageHeader from '@/components/Global/PageHeader'
import CallToAction from '@/components/HomePage/CallToAction'
import React from 'react'
import { FaArrowsUpDownLeftRight } from 'react-icons/fa6'

const page = () => {
  return (
    <>
      <PageHeader title="How does Styptec work?" />

      <FeaturesSection
        subtitle="Discover the benefits"
        title="Your hiring problem solved!"
        description="More and more people are discovering the advantages of freelance work. However, it sounds easier than it is. Think of all the rules, the administration, the risks and everything else involved. If a freelancer hasn’t got it right, it also affects you as a client. Recommend us so that both your contractor and you avoid any risk. With Verloning.nl, everything is well regulated: no surprises afterwards!"
        imageUrl="/images/13655.jpg"
        imageLeft={false}
        IconComponent={FaArrowsUpDownLeftRight}
      />

      <FeaturesSection
        subtitle="Transparent and honest"
        title="Guaranteed well arranged"
        description="When you recommend Verloning.nl, you know where you stand and you are assured that everything is well regulated. No legal hassle with the Dutch Tax Authority, uncertainty about agreements or surprises afterwards. Verloning.nl has a G-account and a tax declaration of payment history, so you can be sure that everything is 100% in order for you and your contractors."
        imageUrl="/images/13655.jpg"
        imageLeft={true}
      />

      <FeaturesSection
        subtitle="Model agreement"
        title="Make sound agreements"
        description="At Verloning.nl, we think it is important to make good agreements with your client. In your account you can easily create and sign our standard model. Of course, you can also work with your own agreement, which you can add online. Our standard model is based on the approved “No authority” model agreement of the Dutch Tax Authority."
        imageUrl="/images/13655.jpg"
        imageLeft={false}
      />

      <FeaturesSection
        subtitle="Completely carefree"
        title="Payment"
        description="Verloning.nl takes care of the administration for contractors and adds value such as offering insurance, training, and the possibility of pension accrual and reserves; but is not involved in the terms and conditions the contractor agrees with their client. After payment of the invoice, we will pay the contractor net after deduction of all compulsory taxes. With Verloning.nl, you can truly reward people in a fair and transparent way, without the risks involved of hiring self-employed persons."
        imageUrl="/images/13655.jpg"
        imageLeft={true}
      />

      <FeaturesSection
        subtitle="Everything well arranged"
        title="No surprises"
        description="With Verloning.nl, all legal payments are always made. It is a pleasant feeling to know that things are really well regulated. We always have an up-to-date declaration of payment history and, for extra security, a G-account. If contractors use our services more often, we offer accident and death insurance free of charge. And we require our contractors to take out occupational disability insurance if their turnover is substantial. That way, you as a client also know that your contractors are well insured and have excellent insurance coverage."
        imageUrl="/images/13655.jpg"
        imageLeft={false}
      />

      <FeaturesSection
        subtitle="Recommend us"
        title="Your recommendation is worth gold"
        description="Whether your contractors have one client or several, work a lot or a little, and whether the jobs lasts longer than one year or not, Verloning.nl provides the solution to arrange your hiring properly."
        listItem1="Modern self-employed persons will thank you for the recommendation, our modern self-employed persons give us an average rating of a 9,6"
        listItem2="With a client account on Verloning.nl, we offer you a clear overview of all your contractors and invoices."
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

export default page