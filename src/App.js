import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useMediaQuery } from "react-responsive";
import { useEffect, useRef, useState } from "react";
import { appendQueryParams, getCookie } from "./json/helpers";
import Header from "./components/Header";
import CookieConsent from "./components/CookieConsent";
import Footer from "./components/Footer";
import MyRoutes from "./routes/MyRoutes";
// import Turnstile from "react-turnstile";
import Intro from "./components/Intro";
import { Button, CloseButton, Modal } from "react-bootstrap";
import { observer } from "mobx-react";
import chips from "./assets/golden-chips.png";
import casinoHero from "./assets/hero.png";
import bettingHero from "./assets/betting-hero.jpg";

import { useSearchParams } from "react-router-dom";
import myStore from "./mobX/Store";
import { autorun } from "mobx";

export function importImages(r) {
  let images = {};
  r.keys().forEach((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const App = observer(() => {
  const [searchParams] = useSearchParams();
  // const mId = searchParams.get("msclkid");

  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  // const [captchaToken, setCaptchaToken] = useState(null);

  const [showPopOut, setShowPopOut] = useState(false);
  const [initialList, setInitialList] = useState([]);
  const scores = [9.7, 9.9, 9.8];
  const indexes = [3, 1, 2];

  const [hasCookie, setCookieStatus] = useState(
    getCookie("uk-consent") ? true : false,
  );

  const triggeredRef = useRef(false);

  useEffect(() => {
    const handleMouseOut = (e) => {
      if (myStore.type.startsWith("bl")) return;
      if (e.clientY < 0 && !triggeredRef.current) {
        triggeredRef.current = true;
        setShowPopOut(isDesktop && initialList.length); // Popup now disabled for every
      }
    };

    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [isDesktop, initialList]);

  const fetchPopupBrands = () => {
    let result = myStore.list?.slice(0, 3);

    result.unshift(result.pop());
    setInitialList([...result]);
  };
  useEffect(() => {
    const dispose = autorun(() => {
      // any observable read here becomes a dependency
      if (myStore.list && myStore.product) {
        fetchPopupBrands();
      }
    });

    return () => dispose(); // cleanup
  }, []);

  const triggerPopout = () => {
    return (
      <Modal
        className="bg-transparent d-flex"
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
                key={casinoItem?.name || i}
              >
                <div className="top-card">
                  <img
                    alt="card-logo"
                    // width={180}
                    height={70}
                    src={casinoItem?.image}
                  />
                </div>
                <h2 className="px-4 fw-bold">{casinoItem?.title}</h2>
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
                  href={`${casinoItem?.url}${appendQueryParams(searchParams, indexes[i], "exit-popup")}`}
                >
                  get bonus
                </Button>
              </div>
            ))}
          </div>
        </Modal.Body>
      </Modal>
    );
  };

  return (
    <div>
      <Header />

      <img
        className={`hero hero-${myStore.product} position-absolute z-n1 end-0`}
        src={myStore.product.startsWith("c") ? casinoHero : bettingHero}
        alt="hero"
      />
      {!isDesktop && (
        <div className={`${myStore.product}-container p-wrapper`} />
      )}

      <div style={{ paddingTop: isDesktop ? 70 : 64 }}>
        {myStore.type.startsWith("b") && (
          <div className="bg-white-fade w-100 text-white bg-gradient position-relative start-0 px-3 sm-p-0 border-bottom">
            <p className="text-start pb-0 mb-0 fs-4">ADVERTORIAL</p>
            <aside className="fs-7 bg-dark black py-1 bg-opacity-50 lh-1 text-start px-2">
              We receive advertising fees from the brands we review, which may
              influence our rankings and scores. We do not compare every service
              provider on the market Advertiser Disclosure 18+."T&C" apply - the
              applicable operator's terms apply for each offer below and free
              offers may include additional terms.
            </aside>
          </div>
        )}

        <div className={`w-${isDesktop ? 60 : 100} m-auto casino-main`}>
          <Intro />
          <MyRoutes />
        </div>
      </div>
      <Footer />

      {!hasCookie && <CookieConsent setCookieStatus={setCookieStatus} />}
      {showPopOut && triggerPopout()}
    </div>
  );
});

export default App;
