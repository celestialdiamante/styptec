import FeaturesSection from '@/components/Global/FeaturesSection'
import PageHeader from '@/components/Global/PageHeader'
import React from 'react'



const HowItWork = () => {
    return (
        <>
            <PageHeader title="How does Styptec work?" />

            <FeaturesSection
                subtitle="Discover the benefits"
                className="text-green-500"
                title="Your hiring problem solved!"
                description="was founded in 2012 by Edward Belgraver () to support the growing group of self-employed persons who want to work on an assignment-based basis, short-term or long-term, without any hassle. With a team of highly committed colleagues, we work to provide an optimal service and a platform that supports our clients to work without a Commercial Registration number or VAT number. In recent years, we have grown to 95.863 customers whom we are delighted to support with professional partners and high service levels."
                imageUrl="/images/13655.jpg"
                imageLeft={false}
            />



        </>
    )
}

export default HowItWork