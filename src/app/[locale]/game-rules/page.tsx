import FeaturesSection from '@/components/Global/FeaturesSection'
import PageHeader from '@/components/Global/PageHeader'
import CallToAction from '@/components/HomePage/CallToAction'
import React from 'react'
import { FaArrowsUpDownLeftRight } from 'react-icons/fa6'

const GameRules = () => {
  return (
    <>
      <PageHeader title="Game Rules" />

      <FeaturesSection
        subtitle="Administration taken care of"
        title="From an employment relationship"
        description="Verloning.nl takes care of the administration for contractors but is not involved in the terms and conditions that the contractor agrees with you as the client. However, the registered person does appear on Verloning.nl’s payroll via the figure of notional employment whereby the (wage) tax and income-related (health insurance) contribution (ZVW) due is deducted via withholding tax."
        imageUrl="/images/13655.jpg"
        imageLeft={false}
        IconComponent={FaArrowsUpDownLeftRight}
      />

      <FeaturesSection
        subtitle="Technical explanation"
        title="Fictitious employment"
        description="The contractor chooses to perform work for one or more clients outside employment (i.e. not as an employee) and to enter into a notional employment relationship with Verloning.nl and to have the invoicing of the fees run via Verloning.nl.
        Technical: Decree of 24 December 1986, laying down a general order in Council as referred to in Article 5 of the Occupational Disability Insurance Act (Arbeidsongeschiktheidsverzekering), Article 5 of the Sickness Benefits Act (Ziektewet) and Article 5 of the Unemployment Insurance Act (Werkloosheidswet) Dutch Official Paper 1986,655, as last amended on 14 June 2017 Dutch Official Paper 2017,270"
        imageUrl="/images/13655.jpg"
        imageLeft={true}
      />

      <FeaturesSection
        subtitle="The hourly rate"
        title="False self-employment and minimum rate"
        description="When you work with contractors, you agree on an all-in rate on an hourly, commission or project basis. We think a minimum rate of 19.50 per hour is essential for self-employment. This is because there must be room to work at your own expense and risk and the contractor must be able to insure themselves against certain risks. It is important for all parties to prevent false self-employment and underpayment, this is where you help by recommending us. You cannot force a worker to work through us."
        imageUrl="/images/13655.jpg"
        imageLeft={false}
      />

      <FeaturesSection
        subtitle="What about..."
        title="Working as a young contractor"
        description="We occasionally get the comment that in an employment relationship, the minimum wage is lower for people aged 18 to 21. People then ask why this is not also the case for contractors. When you work as a contractor, you work for your own account and risk and take control of your income. That requires a minimum rate. You hire someone for their capabilities and that is not age-related. "
        imageUrl="/images/13655.jpg"
        imageLeft={true}
      />

      <CallToAction
        title="Are you interested?"
        subtitle="Would you like to discuss your specific situation? Then contact us without obligation. We will be happy to help."
        buttonText="Contact Us"
        buttonLink="/contact-us"
      />
    </>
  )
}

export default GameRules