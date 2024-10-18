const mainUrl = process.env.API_URL as string || process.env.NEXT_PUBLIC_API_URL as string;
const apiUrl = mainUrl + '/api';

export const URLS = {
    STORAGE: mainUrl + '/storage/',
    PAGE_SEO: apiUrl + '/page-seo',
    FORM_DATA: apiUrl + '/form-settings',
    CONTACT_DATA: apiUrl + '/contact-settings',
    CONTACT_SUBMIT: apiUrl + '/contact-submit', // post
    ESTIMATION_FORM_SUBMIT: apiUrl + '/estimation-form', //post 
    POLICY_PAGES: apiUrl + '/get-policy-pages',
    POLICY_PAGE: apiUrl + '/get-policy-page',
    DOWNLOAD_PDF: apiUrl + '/pdf/'
}