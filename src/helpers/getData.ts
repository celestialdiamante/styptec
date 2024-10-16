/* eslint-disable @typescript-eslint/no-explicit-any */
import { URLS } from "./URLs";

export async function getFormData() {
    const pageUrl = URLS.FORM_DATA;
    // fetch data
    const response = await fetch(pageUrl, { cache: 'reload' }).then((res) => res.json())
    if (response && response.success) {
        const items = response.data;
        const charges = {
            service_charge: items.find((item: any) => item.key === 'service_charge').value,

            paid_fast_forward: items.find((item: any) => item.key === 'paid_fast_forward').value,
            social_charges: items.find((item: any) => item.key === 'social_charges').value,
            pension: items.find((item: any) => item.key === 'pension').value,

            premium_discount: items.find((item: any) => item.key === 'premium_discount').value,
        }
        return charges;
    }
    return null;
}

export type contactInfoType = {
    phone_number: string;
    email: string;
    landline: string;
    address: string;
    phone_number_2: string;
    email_2: string;
    landline_2: string;
    address_2: string;
} | null;

export async function getContactData() {
    const pageUrl = URLS.CONTACT_DATA;
    // fetch data
    const response = await fetch(pageUrl, { cache: 'reload' }).then((res) => res.json())
    if (response && response.success) {
        const items = response.data;
        const info = {
            phone_number: items.find((item: any) => item.key === 'phone_number').value,
            email: items.find((item: any) => item.key === 'email').value,
            landline: items.find((item: any) => item.key === 'landline').value,
            address: items.find((item: any) => item.key === 'address').value,

            phone_number_2: items.find((item: any) => item.key === 'phone_number_2').value,
            email_2: items.find((item: any) => item.key === 'email_2').value,
            landline_2: items.find((item: any) => item.key === 'landline_2').value,
            address_2: items.find((item: any) => item.key === 'address_2').value,
        }
        return info;
    }
    return null;
}

export async function getPolicyPages() {
    const pageUrl = URLS.POLICY_PAGES;
    // fetch data
    const response = await fetch(pageUrl, { cache: 'reload' }).then((res) => res.json())
    if (response && response.success) {
        return response.data;
    }
    return null;
}
export default async function getPolicyPage(page_slug: string) {
    const pageUrl = URLS.POLICY_PAGE + '/' + page_slug;
    // fetch data
    const response = await fetch(pageUrl, { cache: 'reload' }).then((res) => res.json())
    if (response && response.success) {
        return response.data;
    }
    return null;
}
