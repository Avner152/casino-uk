import { observer } from "mobx-react";
import casino from "../assets/casino.png";
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
    <div className="intro mt-4 tit-n-des text-white pt-3">
      {myStore.type.startsWith("bl") && (
        <>
          <p className="text-center text-white pb-0 mb-0 fs-2">ADVERTORIAL</p>
          <aside className="fs-8 text-white lh-1 text-center w-75 sm-w-100 mx-auto px-2">
            We receive advertising fees from the brands we review, which may
            influence our rankings and scores. We do not compare every service
            provider on the market Advertiser Disclosure 18+."T&C" apply - the
            applicable operator's terms apply for each offer below and free
            offers may include additional terms.
          </aside>
        </>
      )}
      <div
        className={`d-flex align-items-center justify-content-${
          isDesktop ? "between" : "center"
        }`}
      >
        <div className="px-3">
          {page ? (
            <h1 className="intro-title fw-bold _sm-w-100">
              <span className="bg-dark bg-opacity-75 py-1 rounded-1">
                {headlineInfo[page].title}
                {!infoPages.some((page) => location.pathname.includes(page)) &&
                  fullYear}
              </span>
            </h1>
          ) : (
            <h1 className={`intro-title fw-bold w-${isDesktop ? 75 : 100}`}>
              <span className="bg-dark bg-opacity-75">
                {myStore.type === "blanca"
                  ? `Check Our Top UK Casinos Of ${fullYear}`
                  : toJS(myStore.content)?.firstTitle.replace(
                      "{curDate}",
                      `${fullYear}`
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
              height={150}
              // width={isDesktop ? 150 : 120}
              src={casino}
            />
          </div>
        )}
      </div>
    </div>
  );
});

export default Intro;
