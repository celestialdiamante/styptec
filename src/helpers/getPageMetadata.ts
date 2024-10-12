import { URLS } from "./URLs";

export default async function getPageMetadata(page_key: string) {
    const pageUrl = URLS.PAGE_SEO + '/' + page_key;
    // fetch data
    const metaData = await fetch(pageUrl).then((res) => res.json())
    if(metaData && metaData.success) {
        return metaData.data;
    }
    return null;
}