import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./css/ui.css";
import { useMediaQuery } from "react-responsive";
import { useEffect, useRef, useState } from "react";
import { appendQueryParams, getCookie, getScoreByIndex } from "./json/helpers";
import Header from "./components/Header";
import CookieConsent from "./components/CookieConsent";
import Footer from "./components/Footer";
import MyRoutes from "./routes/MyRoutes";
import Intro from "./components/Intro";
import { Button, CloseButton, Modal } from "react-bootstrap";
import { observer } from "mobx-react";
import chips from "./assets/golden-chips.png";
import hero from "./assets/hero.jpg";

import { useSearchParams } from "react-router-dom";
import myStore from "./mobX/Store";
import SportIntro from "./components/sport/SportIntro";

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
  // const scores = [9.7, 9.9, 9.8];
  const indexes = [3, 1, 2];

  const [hasCookie, setCookieStatus] = useState(
    getCookie("uk-consent") ? true : false,
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
    if (!myStore.list.length || myStore.type.startsWith("b")) return;
    let result = myStore?.list?.slice(0, 3);
    result.unshift(result.pop());
    setInitialList([...result]);
  };
  useEffect(() => {
    if (myStore.product) fetchPopupBrands();
  }, [myStore.list]);

  const raisePopOut = () => {
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
                key={casinoItem.name}
              >
                <div className="top-card">
                  <img
                    alt="card-logo"
                    // width={180}
                    height={60}
                    src={casinoItem.image}
                  />
                </div>
                <h2 className="px-4 fw-bold lh-1">{casinoItem.title}</h2>
                <div>
                  <div className="fs-1 fw-semibold">{getScoreByIndex(i)}</div>
                  {Array.from({ length: 5 }).map((_, i) => {
                    const score = getScoreByIndex(i);

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
                  target="_blank"
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

  const advertorialSection = () => {
    return (
      <div className="advertorial-wrap w-50 sm-w-100 ">
        <p className="text-start text-white pb-0 mb-0 fs-5">ADVERTORIAL</p>
        <aside className="fs-8 text-white lh-1_ text-start ">
          We receive advertising fees from the brands we review, which may
          influence our rankings and scores. We do not compare every service
          provider on the market Advertiser Disclosure 18+."T&C" apply - the
          applicable operator's terms apply for each offer below and free offers
          may include additional terms.
        </aside>
      </div>
    );
  };

  return (
    <div>
      {/* {!captchaToken && TurnstileWidget()} */}
      {!isDesktop && (
        <div className={`${myStore.product || "casino"}-container`} />
      )}

      <Header />
      {myStore.product === "betting" && (
        <img
          className="hero position-absolute z-n1 end-0"
          src={hero}
          alt="hero"
        />
      )}
      <div className="w-75 sm-w-100 _px-5 sm-px-1 m-auto casino-main">
        <div
          className="md-col-6 col-12"
          style={{ paddingTop: isDesktop ? 80 : 60 }}
        >
          {myStore.type.startsWith("b") && advertorialSection()}
          {myStore.product === "betting" ? <SportIntro /> : <Intro />}
        </div>
      </div>
      <div className="w-60 md-w-100 sm-w-100 px-3 sm-p-0 m-auto">
        <MyRoutes />
      </div>
      {showPopOut && raisePopOut()}
      <Footer />

      {!hasCookie && <CookieConsent setCookieStatus={setCookieStatus} />}
    </div>
  );
});

export default App;
