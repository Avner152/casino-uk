export function setCookie(name, value, days, domain) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  const domainPart = domain ? "; domain=" + domain : "";
  document.cookie = name + "=" + value + expires + "; path=/" + domainPart;
}

export function cookieExist(name) {
  const nameEQ = name + "=";
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    if (cookie.indexOf(nameEQ) === 0) {
      return true;
    }
  }
  return false;
}

export function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

export const pages = {
  casino: [
    {
      name: "Table Games",
      url: "/table-games",
    },
    {
      name: "Top Crash Games ",
      url: "/top-crash-games",
    },
    {
      name: "Live Games ",
      url: "/live-games",
    },
    {
      name: "Slots Games ",
      url: "/slots-games",
    },
  ],
  betting: [
    {
      name: "Football",
      url: "/football",
    },
    {
      name: "Horse Racing",
      url: "/horse-racing",
    },
    {
      name: "eSports",
      url: "/esports",
    },
    {
      name: "Betting Systems",
      url: "/systems",
    },
  ],
};

export function appendQueryParams(searchParams) {
  const list = [
    "msclkid",
    "campaignid",
    "adgroupid",
    "adid",
    "keyword",
    "querystring",
    "matchtype",
    "network",
    "placement",
    "targetid",
    "adposition",
    "utm_term",
    "utm_source",
    "utm_medium",
    "ad_campaign_id",
  ];
  let queryParams = "";

  list.forEach((key) => {
    let found = searchParams.get(key);
    if (found) queryParams += `&${key}=${found}`;
  });

  if (document.referrer) {
    const parent_referer = new URL(document.referrer).hostname;
    queryParams += `&parent_referer=${parent_referer}`;
  }

  return queryParams;
}
