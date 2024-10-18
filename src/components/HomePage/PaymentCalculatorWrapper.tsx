import React from 'react'
import { getFormData } from '@/helpers/getData';
import PaymentCalculator from './PaymentCalculator';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function PaymentCalculatorWrapper({ params }: any) {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const form_settings: any = await getFormData();

    return <PaymentCalculator form_settings={form_settings} params={params} />
}
