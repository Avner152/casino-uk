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
      name: "Starburst ",
      url: "/starburst",
    },
    {
      name: "Casino Bonuses",
      url: "/casino-bonuses",
    },
    {
      name: "Table Games",
      url: "/table-games",
    },

    {
      name: "Online Slot",
      url: "/online-slot",
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

export function appendQueryParams(searchParams, index) {
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
    queryParams += `&sub_id_10=${parent_referer}`;
    if (index) queryParams += `&sub_id_11=${index}`;
  }

  return queryParams;
}

export function getScoreByIndex(index) {
  if (index < 3) return 10 - (index + 1) / 10;
  const maxScore = 9.7;
  const minScore = 7.5;
  const groupSize = 3;
  const totalItems = 50;

  const maxGroups = Math.ceil(totalItems / groupSize);
  const step = (maxScore - minScore) / maxGroups;
  const group = Math.floor(index / groupSize);

  const score = maxScore - group * step;

  return Number(Math.max(minScore, score).toFixed(1));
}
