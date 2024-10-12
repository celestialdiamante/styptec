import { URLS } from "./URLs";

type contactFormType = {
    name: string,
    email: string,
    phone_number: string,
    message: string
}
export async function submitContactForm(request: contactFormType) {
    // fetch data
    const response = await fetch(URLS.CONTACT_SUBMIT, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(request)
    }).then((res) => res.json())
    console.log('form response: ', response)
    if (response && response.success) {
        return response;
    }
    return null;
}

type deviceType = {
    appCodeName?: string,
    appName?: string,
    appVersion?: string,
    userAgent?: string
}
type membershipType = 'Premium' | 'Basic';
type estimationFormType = {
    "membership_type": membershipType,
    "hourly_rate": string,
    "hours_worked": number,
    "age": number,
    "pension": boolean,
    "social_charges": boolean,
    "paid_fast_forward": boolean,
    "expenses": string,
    "name": string,
    "email": string,
    "phone_number": string,
    "country_id": number,
    "device": deviceType
}
export async function submitEstimationForm(request: estimationFormType) {
    const pageUrl = URLS.ESTIMATION_FORM_SUBMIT;
    // fetch data
    const response = await fetch(pageUrl, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(request)
    }).then((res) => res.json())
    if (response && response.success) {
        return response;
    }
    return null;
}