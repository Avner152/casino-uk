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
    crash: {
      title: "Top Crash Games UK",
      list: [
        "🚀 Fast Thrills: Action-packed gameplay with quick wins for adrenaline lovers.",
        "📈 Trusted Platforms: Play on secure UK casinos with top-rated crash games.",
        "🎮 Innovative Design: Enjoy modern features and sleek mechanics tailored for you.",
      ],
    },
    live: {
      title: "Best Live Casino Games UK",
      list: [
        "🎥 Real-Time Action: Play HD-streamed games like blackjack, roulette, and baccarat.",
        "🎮 Top Platforms: Find the UK’s best live casinos for seamless gaming.",
        "🔒 Secure Play: Enjoy fair, safe, and responsible gaming experiences.",
      ],
    },
    slots: {
      title: "Best Slot Games UK",
      list: [
        "🎰 Top Slots: Play the latest games with exciting themes and big jackpots.",
        "💸 High Payouts: Enjoy high RTP slots and progressive jackpots for big wins.",
        "🔒 Secure Play: Experience safe, fair, and licensed gaming at top UK casinos.",
      ],
    },
    table: {
      title: "Timeless Table Games UK",
      list: [
        "🎲 Iconic Classics: Play staples like roulette, blackjack, and poker with rich history.",
        "🃏 Skill & Social Play: Enjoy strategy, chance, and camaraderie in immersive settings.",
        "🌟 Innovative Future: Discover VR, AR, and live dealer experiences redefining table games.",
      ],
    },
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
      case "/live-games":
        setPage("live");
        break;
      case "/top-crash-games":
        setPage("crash");
        break;
      case "/slots-games":
        setPage("slots");
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
        <div className="text-white mb-5">
          <h1 className="intro-title fw-bold w-75">
            {headlineInfo[page].title}{" "}
            {location.pathname.includes("games") && fullYear}
          </h1>
          {headlineInfo[page].list && (
            <ul className="list-unstyled fw-bolder">
              {headlineInfo[page].list.map((li, i) => (
                <li className="mt-1 mb-1" key={i}>
                  {li}
                </li>
              ))}
            </ul>
          )}
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
                ? `Check our UK's Best Casinos Of ${curDate.toLocaleString(
                    "default",
                    {
                      month: "long",
                    }
                  )} ${fullYear}`
                : toJS(myStore.content).firstTitle.replace(
                    "{curDate}",
                    `${curDate.toLocaleString("default", {
                      month: "long",
                    })} ${fullYear}`
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
