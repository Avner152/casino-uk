import { observer } from "mobx-react";
import myStore from "../../mobX/Store";
import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

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
          <h1 className="intro-title fw-bold w-75_ _sm-w-100 ">
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
                <h1 className="sport-hero-title fw-bold mb-3 ">
                  {myStore.content?.firstTitle.replace(
                    "{curDate}",
                    `${curDate.toLocaleString("default", {
                      month: "long",
                    })} ${fullYear}`,
                  )}
                </h1>
                <p className="sport-hero-subtitle mb-0">
                  Compare trusted UK betting brands, welcome offers, football
                  markets, live betting options, and matchday features to find
                  the best sportsbook for your needs.
                </p>
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
                  : myStore.content?.firstTitle.replace(
                      "{curDate}",
                      `${curDate.toLocaleString("default", {
                        month: "long",
                      })} ${fullYear}`,
                    )}
              </h1>
            )}
          </div>
          {/* {isDesktop && !isBettingHome && (
            <div>
              <img
                className="cards"
                alt="cards"
                width={isDesktop ? 220 : 120}
                src={myStore.product === "casino" ? casino : sport}
              />
            </div>
          )} */}
        </div>
      )}
    </div>
  );
});

export default SportIntro;
