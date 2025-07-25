import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useMediaQuery } from "react-responsive";
import { useEffect, useRef, useState } from "react";
import { getCookie } from "./json/helpers";
import Header from "./components/Header";
import CookieConsent from "./components/CookieConsent";
import Footer from "./components/Footer";
import MyRoutes from "./routes/MyRoutes";
// import Turnstile from "react-turnstile";
import Intro from "./components/Intro";
import { Button, CloseButton, Modal } from "react-bootstrap";
import axios from "axios";
import { observer } from "mobx-react";
import myStore from "./mobX/Store";
import { toJS } from "mobx";
import chips from "./assets/golden-chips.png";

import { useSearchParams } from "react-router-dom";

export function importImages(r) {
  let images = {};
  r.keys().forEach((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const App = observer(() => {
  const [searchParams] = useSearchParams();
  const mId = searchParams.get("msclkid");

  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  // const [captchaToken, setCaptchaToken] = useState(null);

  const [showPopOut, setShowPopOut] = useState(false);
  const [initialList, setInitialList] = useState([]);
  const scores = [9.7, 9.9, 9.8];

  const [hasCookie, setCookieStatus] = useState(
    getCookie("uk-consent") ? true : false
  );

  const triggeredRef = useRef(false);

  useEffect(() => {
    const handleMouseOut = (e) => {
      if (e.clientY < 0 && !triggeredRef.current) {
        // triggeredRef.current = false;
        triggeredRef.current = true;

        setShowPopOut(isDesktop && initialList.length);
      }
    };

    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [isDesktop, initialList]);

  const fetchPopupBrands = () => {
    const ENDPOINT = `${process.env.REACT_APP_SERVER_URI}/manchester/prd`;

    const headers = { segment: "viral" };
    axios
      .post(
        ENDPOINT,
        {
          // search: window.location.search,
          search: "",
          referrer: "",
          userIp: "102.128.166.0",
        },
        { headers }
      )
      .then((res) => {
        // console.log(res?.data?.list[0]?.type);

        if (res?.data?.list[0]?.type === "blanca") return;

        let result = res?.data?.list[0]?.brands.slice(0, 3);

        result.unshift(result.pop());
        setInitialList([...result]);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchPopupBrands();
  }, []);

  // function TurnstileWidget() {
  //   return (
  //     <Turnstile
  //       sitekey="0x4AAAAAAA3zELOcESURpGT7"
  //       onVerify={(token) => {
  //         fetch(`${process.env.REACT_APP_SERVER_URI}/api/verify-captcha`, {
  //           method: "POST",
  //           body: JSON.stringify({ token }),
  //         })
  //           .then((response) => {
  //             // console.log(response);q
  //             setCaptchaToken(response.ok);
  //           })
  //           .catch((err) => setCaptchaToken(false));
  //       }}
  //       retry="never"
  //       onError={() => {
  //         setCaptchaToken(false);
  //       }}
  //     />
  //   );
  // }

  return (
    <div>
      <Modal
        className="bg-transparent"
        centered
        show={showPopOut}
        onHide={() => setShowPopOut(false)}
      >
        <Modal.Body>
          <div className="d-flex justify-content-end pe-4 opacity-100">
            <CloseButton
              style={{ opacity: 1 }}
              onClick={() => setShowPopOut(false)}
              variant="white"
            />
          </div>
          <div className="position-absolute bottom-25 start-25 z-n1 translate-middle">
            <img alt="chips" height={400} src={chips} />
          </div>

          <div className="d-flex text-center _gap-1">
            {initialList.map((casinoItem, i) => (
              <div
                className="card-wrapper text-black d-flex bg-white p-2 bg-black rounded-3 flex-column align-items-center justify-content-center _gap-2 border-1 border-danger"
                key={casinoItem.name}
              >
                <div className="top-card">
                  <img
                    alt="card-logo"
                    // width={180}
                    height={70}
                    src={
                      toJS(myStore.brands)[
                        `${casinoItem.name
                          .toLocaleLowerCase()
                          .replaceAll(" ", "-")}.png`
                      ]
                    }
                  />
                </div>
                <h2 className="px-4 fw-bold">{casinoItem.title}</h2>
                <div>
                  <div className="fs-1 fw-semibold">{scores[i]}</div>
                  {Array.from({ length: 5 }).map((_, i) => {
                    const score = 10;

                    return (
                      <span
                        key={i}
                        style={
                          score - 5 < i + 1
                            ? {
                                background: `linear-gradient(to right, #ffd600 ${
                                  (score % 1) * 100 > 50 ? 100 : 50
                                }%, transparent ${
                                  (score % 1) * 100 <= 50 ? 50 : 50
                                }%)`,
                              }
                            : score / 2 > i + 1
                            ? { background: "#ffd600" }
                            : null
                        }
                        className="star fs-3"
                      />
                    );
                  })}
                </div>
                <Button
                  className="text-uppercase main-btn mb-3"
                  onClick={() =>
                    window.open(casinoItem.url.replace("{msclkid}", mId))
                  }
                >
                  get bonus
                </Button>
              </div>
            ))}
          </div>
        </Modal.Body>
      </Modal>
      {/* {!captchaToken && TurnstileWidget()} */}
      {!isDesktop && <div className="casino-container" />}

      <Header />
      <div className={`w-${isDesktop ? 60 : 100} m-auto casino-main`}>
        <br />
        <Intro />
        {/* <MyRoutes captchaToken={captchaToken} /> */}
        <MyRoutes />
      </div>
      <Footer />

      {!hasCookie && <CookieConsent setCookieStatus={setCookieStatus} />}
    </div>
  );
});

export default App;
