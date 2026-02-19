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
      name: "Online Slots",
      url: "/info/online-slots",
    },
    {
      name: "Roulette",
      url: "/info/roulette",
    },
    {
      name: "Table Games",
      url: "/info/table-games",
    },
  ],
  betting: [
    {
      name: "Betting Bonuses",
      url: "/betting-bonuses",
    },
    {
      name: "GAA",
      url: "/gaa",
    },
    {
      name: "Rugby",
      url: "/rugby",
    },
    {
      name: "Horse Racing",
      url: "/horse-racing",
    },
  ],
};
