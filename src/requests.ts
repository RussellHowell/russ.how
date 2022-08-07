
export const BASE_URL = "https://russellhowell.piwigo.com";

const createUrl = (base: string, path: string) => `${base}${path}`;

export const getCategoryImages = ( category: string ): [RequestInfo | URL, RequestInit] => [
  createUrl(BASE_URL, `/ws.php?format=json&method=pwg.categories.getImages&cat_id=${ category }`),
  {
    method: "GET",
  }
];