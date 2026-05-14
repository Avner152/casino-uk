import { observer } from "mobx-react";
import casino from "../assets/casino.png";
import betting from "../assets/betting.png";
import myStore from "../mobX/Store";
import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { toJS } from "mobx";

const Intro = observer(() => {
  const infoPages = ["cookie", "about", "terms", "privacy"];

  const curDate = new Date();
  const fullYear = `${curDate.toLocaleString("default", {
    month: "long",
  })} ${curDate.getFullYear()}`;
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const location = useLocation();
  const [page, setPage] = useState(null);

  const headlineInfo = {
    homePage: {
      title: "Discover the UK's Best Online Casinos of ",
    },
    bigBassBonanza: {
      title: "Top Big Bass Bonanza UK Casinos - ",
    },
    bonuses: {
      title: "Casino Bonuses – Best UK Deals ",
    },
    slot: {
      title: "Online Slots & Jackpots Top UK Sites -",
    },
    table: {
      title: "Best Table Games in the UK – Our Casino Picks for ",
    },
    cookie: {
      title: "Cookie Policy 18",
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
      case "/casino-bonuses":
        setPage("bonuses");
        break;
      case "/big-bass-bonanza":
        setPage("bigBassBonanza");
        break;
      case "/online-slots":
        setPage("slot");
        break;
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
    <div className="intro mt-3 w-60 sm-w-100 mx-auto tit-n-des text-white">
      <div
        className={`d-flex align-items-center justify-content-${
          isDesktop ? "between" : "center"
        }`}
      >
        <div className="px-3">
          {page ? (
            <h1 className="intro-title fw-bold _sm-w-100">
              <span className="bg-dark bg-opacity-75 py-1 px-3 rounded-1">
                {headlineInfo[page].title}
                {!infoPages.some((page) => location.pathname.includes(page)) &&
                  fullYear}
              </span>
            </h1>
          ) : (
            <h1 className={`intro-title fw-bold w-${isDesktop ? 75 : 100}`}>
              <span className="bg-dark bg-opacity-75">
                {myStore.type === "blanca"
                  ? `Check Our Top UK ${myStore.product} sites Of ${fullYear}`
                  : toJS(myStore.content)?.firstTitle.replace(
                      "{curDate}",
                      `${fullYear}`,
                    )}
              </span>
            </h1>
          )}
        </div>
        {isDesktop && (
          <div className="p-4">
            <img
              className="cards"
              alt="cards"
              width={isDesktop ? 250 : 120}
              src={myStore.product === "betting" ? betting : casino}
            />
          </div>
        )}
      </div>
    </div>
  );
});

export default Intro;
