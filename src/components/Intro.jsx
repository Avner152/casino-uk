import { observer } from "mobx-react";
import casino from "../assets/casino.png";
import myStore from "../mobX/Store";
import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { toJS } from "mobx";

const Intro = observer(() => {
  const curDate = new Date();
  const fullYear = curDate.getFullYear();
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const location = useLocation();
  const [page, setPage] = useState(null);

  const headlineInfo = {
    homePage: {
      title: "Discover the UK's Best Online Casinos of ",
    },
    aviator: {
      title: "Aviator Game - Take Flight and Win Big in ",
    },
    live: {
      title: "Best Live Casino Games in the UK - Top Picks for ",
    },
    slots: {
      title: "Book of Dead Slot - Explore the Adventure and Big Wins in ",
    },
    table: {
      title: "Best Table Games in the UK - Our Casino Picks for ",
    },
    cookie: {
      title: "Cookie Policy 18+ ",
    },
    terms: {
      title: "Terms and Conditions - ",
    },
    privacy: {
      title: "Privacy Policy - ",
    },
    about: {
      title: "About Us - ",
    },
  };

  useEffect(() => {
    switch (location.pathname) {
      default:
        return setPage("");
      case "/table-games":
        setPage("table");
        break;
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
    <div className="intro mt-4 tit-n-des text-white pt-3">
      {page ? (
        <div className="text-white mb-5_ mt-4">
          <h1 className="intro-title fw-bold w-75 sm-w-100">
            <span className="bg-black-50 px-3 py-1">
              {headlineInfo[page].title} {fullYear}
            </span>
          </h1>
        </div>
      ) : (
        <div
          className={`d-flex align-items-center justify-content-${
            isDesktop ? "between" : "center"
          }`}
        >
          <div>
            <h1 className={`intro-title fw-bold w-${isDesktop ? 75 : 100}`}>
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
          </div>
          {isDesktop && (
            <div>
              <img
                className="cards"
                alt="cards"
                width={isDesktop ? 220 : 120}
                src={casino}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
});

export default Intro;
