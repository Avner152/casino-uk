import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { getCookie } from "./json/helpers";
import Header from "./components/Header";
import CookieConsent from "./components/CookieConsent";
import Footer from "./components/Footer";
import MyRoutes from "./routes/MyRoutes";
import Turnstile from "react-turnstile";
import Intro from "./components/Intro";

export function importImages(r) {
  let images = {};
  r.keys().forEach((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const App = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const [captchaToken, setCaptchaToken] = useState(null);

  const [hasCookie, setCookieStatus] = useState(
    getCookie("uk-sefty-cookie") ? true : false
  );

  function TurnstileWidget() {
    return (
      <Turnstile
        sitekey="0x4AAAAAAA3zELOcESURpGT7"
        onVerify={(token) => {
          fetch(`${process.env.REACT_APP_SERVER_URI}/api/verify-captcha`, {
            method: "POST",
            body: JSON.stringify({ token }),
          })
            .then((response) => {
              console.log(response);

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
    <div className="casino-container">
      {!captchaToken && TurnstileWidget()}

      <Header />
      <div className={`w-${isDesktop ? 60 : 100} m-auto casino-main`}>
        <br />
        <Intro />
        <MyRoutes captchaToken={captchaToken} />
      </div>
      <Footer />

      {!hasCookie && <CookieConsent setCookieStatus={setCookieStatus} />}
    </div>
  );
};

export default App;
