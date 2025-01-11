import { observer } from "mobx-react";
import { importImages } from "../App";
import casino from "../assets/casino.png";
import myStore from "../mobX/Store";
import { useMediaQuery } from "react-responsive";

const Intro = observer(() => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });

  let homepageIcons = importImages(
    require.context("../assets/homepage-icons", false, /\.(svg)$/)
  );
  const homepageIconsObjectList = [
    {
      name: "uk",
      text: "UK",
      addOn: `${
        myStore.type === "blanca"
          ? "Licensed"
          : myStore.type === "negra"
          ? "Non-Gamstop"
          : ""
      }`,
    },
    {
      name: "security",
      text: "Secure & Trusted",
    },
    {
      name: "rocket",
      text: "Fast Withdrawals",
    },
    {
      name: "18plus",
      text: "Advertiser Disclosure",
    },
  ];
  return (
    <div className="intro mt-5 tit-n-des text-white p-3">
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <h1 className="fw-bold">
            {myStore.type === "negra" ? "Non-Gamestop" : "Check"} UK's Best
            Casinos
          </h1>
          <p>
            Top UK real money online casinos compared and reviewed. <br />
            Check our list of the most popular British online casinos.
            <br /> Play safely & responsibly
          </p>
        </div>
        <div>
          <img
            className="cards"
            alt="cards"
            width={isDesktop ? 220 : 150}
            src={casino}
          />
        </div>
      </div>

      {
        <div
          className={`w-100 d-flex m-auto justify-content-around align-items-center`}
        >
          {homepageIconsObjectList
            .slice(0, isDesktop ? 4 : 3)
            .map((icon, k) => (
              <div
                className={`d-flex gap-3 fs-${
                  isDesktop ? 6 : 7
                } _text-break-all flex-column align-items-center justify-content-around`}
                key={k}
              >
                <img
                  width={isDesktop ? 100 : 40}
                  height={isDesktop ? 40 : 30}
                  alt={icon.name}
                  src={homepageIcons[`${icon.name}-icon.svg`]}
                />
                <span>
                  {icon.text} {icon.addOn !== undefined ? icon.addOn : ""}
                </span>
              </div>
            ))}
        </div>
      }
    </div>
  );
});

export default Intro;
