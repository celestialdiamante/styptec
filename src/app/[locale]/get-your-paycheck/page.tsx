import PageHeader from '@/components/Global/PageHeader';
import React from 'react';
import EstimationForm from './EstimationForm';
import { getFormData } from '@/helpers/getData';
import { useTranslations } from 'next-intl';


export default async function GetYourPaycheck() {


    const lang = useTranslations('getYourPaycheck');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const form_settings:any = await getFormData();

    return (
        <>
            <PageHeader title={lang('pageHeader')}/>
            <section className="py-16">
                <div className="container mx-auto">
                    <EstimationForm form_settings={form_settings} />
                </div>
            </section>
        </>
    );
}

