import PageHeader from '@/components/Global/PageHeader'
import getPolicyPage from '@/helpers/getData';
import React from 'react'

type policyPageDataType = {
    title: string;
    title_en: string;
    slug: string;
    content: string;
    content_en: string;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function PolicyPages({ params }: any) {
    const pageData: policyPageDataType = await getPolicyPage(params.slug);
    console.log('pageData: ', pageData)
    return (
        <>
            <PageHeader title={pageData.title_en} />

            <section className="py-6 md:py-16">
                <div className="container mx-auto px-4 prose" dangerouslySetInnerHTML={{ __html: pageData.content_en }} />
            </section>
        </>
    )
}
