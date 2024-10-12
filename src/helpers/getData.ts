import { URLS } from "./URLs";

export async function getFormData() {
    const pageUrl = URLS.FORM_DATA;
    // fetch data
    const metaData = await fetch(pageUrl, { cache: 'reload' }).then((res) => res.json())
    if (metaData && metaData.success) {
        return metaData.data;
    }
    return null;
}

export async function getContactData() {
    const pageUrl = URLS.CONTACT_DATA;
    // fetch data
    const metaData = await fetch(pageUrl, { cache: 'reload' }).then((res) => res.json())
    if (metaData && metaData.success) {
        return metaData.data;
    }
    return null;
}
export async function getPolicyPages() {
    const pageUrl = URLS.POLICY_PAGES;
    // fetch data
    const metaData = await fetch(pageUrl, { cache: 'reload' }).then((res) => res.json())
    if (metaData && metaData.success) {
        return metaData.data;
    }
    return null;
}
export default async function getPolicyPage(page_slug: string) {
    const pageUrl = URLS.POLICY_PAGE + '/' + page_slug;
    // fetch data
    const metaData = await fetch(pageUrl, { cache: 'reload' }).then((res) => res.json())
    if (metaData && metaData.success) {
        return metaData.data;
    }
    return null;
}
