import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { getCookie } from "./json/helpers";
import Header from "./components/Header";
import CookieConsent from "./components/CookieConsent";
import Footer from "./components/Footer";
import MyRoutes from "./routes/MyRoutes";
import casino from "./assets/casino.png";
import Turnstile from "react-turnstile";
import myStore from "./mobX/Store";
import { observer } from "mobx-react";

export function importImages(r) {
  let images = {};
  r.keys().forEach((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const App = observer(() => {
  const [captchaToken, setCaptchaToken] = useState(null);

  let homepageIcons = importImages(
    require.context("./assets/homepage-icons", false, /\.(svg)$/)
  );
  const homepageIconsObjectList = [
    {
      name: "uk",
      text: "UK",
      addOn: `${myStore.type === "blanca" ? "Licensed" : "Non-Gamstop"}`,
    },
    {
      name: "security",
      text: "Secure & Trusted",
    },
    {
      name: "rocket",
      text: "Fast Withdrawals",
    },
    {
      name: "18plus",
      text: "Advertiser Disclosure",
    },
  ];

  const [hasCookie, setCookieStatus] = useState(
    getCookie("uk-sefty-cookie") ? true : false
  );
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  // const isLaptop = useMediaQuery({ query: "(min-width: 1024px)" });
  // const isTablet = useMediaQuery({
  //   query: "(min-width: 768px) and (max-width: 1023px)",
  // });
  // const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  function TurnstileWidget() {
    return (
      <Turnstile
        sitekey={process.env.REACT_APP_SITE_KEY}
        onVerify={(token) => {
          fetch(`${process.env.REACT_APP_SERVER_URI}/api/verify-captcha`, {
            method: "POST",
            body: JSON.stringify({ token }),
          })
            .then((response) => {
              // console.log(response);

              setCaptchaToken(response.ok);
            })
            .catch((err) => setCaptchaToken(false));
        }}
        retry="never"
        onError={() => {
          setCaptchaToken(false);
        }}
      />
    );
  }

  return (
    <>
      {!captchaToken && TurnstileWidget()}

      <div className={`w-${isDesktop ? 60 : 100} +p-2 m-auto casino-main`}>
        <Header />
        <br />
        <div className="intro mt-5 tit-n-des text-white p-3">
          {/* <div>
            <img alt="uk-logo" src={homepageIcons["uk-icon.svg"]} />
          </div> */}

          <div className="d-flex align-items-center">
            <div>
              <h1 className="fw-bold">
                {myStore.type === "blanca" ? "Check" : "Non-Gamestop"} UK's Best
                Casinos
              </h1>
              <p>
                Top UK real money online casinos compared and reviewed. Check
                our list of the most popular British online casinos. Play safely
                & responsibly
              </p>
            </div>
            <div>
              <img
                className="cards"
                alt="cards"
                width={isDesktop ? 220 : 150}
                src={casino}
              />
            </div>
          </div>

          {isDesktop && (
            <div className="d-flex gap-5 m-auto justify-content-between align-items-center">
              {homepageIconsObjectList.map((icon, k) => (
                <div className="d-flex gap-3 align-items-center" key={k}>
                  <img
                    alt={icon.name}
                    src={homepageIcons[`${icon.name}-icon.svg`]}
                  />
                  <span>
                    {icon.text} {icon.addOn !== undefined ? icon.addOn : ""}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
        <MyRoutes captchaToken={captchaToken} />
      </div>
      <Footer />

      {!hasCookie && <CookieConsent setCookieStatus={setCookieStatus} />}
    </>
  );
});

export default App;
