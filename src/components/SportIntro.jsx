import { observer } from "mobx-react";
import casino from "../assets/casino.png";
import sport from "../assets/sport.png";
import myStore from "../mobX/Store";
import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { toJS } from "mobx";
import { Button } from "react-bootstrap";

const SportIntro = observer(() => {
  const curDate = new Date();
  const fullYear = curDate.getFullYear();
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const location = useLocation();
  const [page, setPage] = useState(null);
  const isBettingHome = myStore.product === "betting" && !page;

  const headlineInfo = {
    cookie: {
      title: "Cookie Policy 18+",
    },
    terms: {
      title: "Terms and Conditions",
    },
    privacy: {
      title: "Privacy Policy",
    },
    about: {
      title: "About Us",
    },
  };

  useEffect(() => {
    switch (location.pathname) {
      default:
        return setPage("");

      case "/about-us":
        setPage("about");
        break;
      case "/cookie-consent-policy":
        setPage("cookie");
        break;
      case "/terms-and-conditions":
        setPage("terms");
        break;
      case "/privacy-policy":
        setPage("privacy");
        break;
    }
  }, [location]);

  return (
    <div
      className={`intro tit-n-des text-white ${isBettingHome ? "sport-hero-intro" : "pt-3"}`}
    >
      {page ? (
        <div className="text-white">
          <h1 className="intro-title fw-bold w-75 sm-w-100 ">
            {headlineInfo[page].title}{" "}
            {location.pathname.includes("games") && fullYear}
          </h1>
        </div>
      ) : (
        <div
          className={`d-flex align-items-center ${isDesktop ? "justify-content-between" : "justify-content-center"}`}
        >
          <div className={isBettingHome ? "sport-hero-copy" : ""}>
            {isBettingHome ? (
              <>
                <h1 className="sport-hero-title fw-bold mb-3">
                  UK Sports Betting Brands for{" "}
                  <span className="text-warning">Mundial 2026</span>
                </h1>
                <p className="sport-hero-subtitle mb-4">
                  Compare trusted UK betting brands, welcome offers, football
                  markets and matchday features ahead of the world's biggest
                  tournament.
                </p>
                <Button
                  className="btn-warning fw-bold px-4 py-2 text-uppercase d-flex justify-content-center align-items-center gap-2"
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-trophy-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935" />
                  </svg>{" "}
                  Compare Top Brands
                </Button>
              </>
            ) : (
              <h1 className={`intro-title fw-bold w-${isDesktop ? 75 : 100} `}>
                {myStore.type === "blanca"
                  ? `Check Our Top UK Casinos Of ${curDate.toLocaleString(
                      "default",
                      {
                        month: "long",
                      },
                    )} ${fullYear}`
                  : toJS(myStore.content)?.firstTitle.replace(
                      "{curDate}",
                      `${curDate.toLocaleString("default", {
                        month: "long",
                      })} ${fullYear}`,
                    )}
              </h1>
            )}
          </div>
          {isDesktop && !isBettingHome && (
            <div>
              <img
                className="cards"
                alt="cards"
                width={isDesktop ? 220 : 120}
                src={myStore.product === "casino" ? casino : sport}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
});

export default SportIntro;
