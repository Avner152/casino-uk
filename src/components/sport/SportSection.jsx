import { useMediaQuery } from "react-responsive";
import { Fade } from "react-awesome-reveal";
import { useSearchParams } from "react-router-dom";
import { observer } from "mobx-react";
import { importImages } from "../../App";
import CasinoItemMobile from "../CasinoItemMobile";
import CasinoItem from "../CasinoItem";
import myStore from "../../mobX/Store";

const SportSection = observer(({ captchaToken }) => {
  captchaToken = true;

  const [searchParams] = useSearchParams();
  const mId = searchParams.get("msclkid");

  let homepageIcons = importImages(
    require.context("../../assets/homepage-icons", false, /\.(svg)$/)
  );
  const homepageIconsObjectList = [
    {
      name: "uk",
      text: "UK",
      addOn: `${myStore.type === "blanca" ? "Licensed" : ""}`,
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

  // const images = importImages(
  //   require.context("../assets/logos", false, /\.(png|jpe?g|svg)$/)
  // );

  // const importedIcons = importImages(
  //   require.context("../assets/icons", false, /\.(svg)$/)
  // );

  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  // const isTablet = useMediaQuery({
  //   query: "(min-width: 768px) and (max-width: 1023px)",
  // });
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <div className="min-vh-100">
      <div className="w-100 d-flex m-auto text-white justify-content-around align-items-center">
        {homepageIconsObjectList.slice(0, isDesktop ? 4 : 3).map((icon, k) => (
          <div
            className="d-flex gap-1 fs-7 flex-column align-items-center"
            key={k}
          >
            <div
              className={`bg-dark bg-opacity-75 py-2 rounded-circle ${
                isMobile ? "px-1" : ""
              }`}
            >
              <img
                width={isDesktop ? 50 : 30}
                height={isDesktop ? 30 : 20}
                alt={icon.name}
                src={homepageIcons[`${icon.name}-icon.svg`]}
              />
            </div>
            <span className="bg-dark bg-opacity-100 px-3 rounded-1">
              {icon.text} {icon.addOn !== undefined ? icon.addOn : ""}
            </span>
          </div>
        ))}
      </div>
      {myStore.list.map((casino, k) => {
        const fixedURL = casino.url.replace("{msclkid}", mId);

        return (
          <Fade key={k} cascade triggerOnce>
            <div onClick={() => window.open(fixedURL, "_blank")}>
              {isMobile ? (
                <CasinoItemMobile
                  key={k}
                  item={casino}
                  index={k}
                  fixedURL={fixedURL}
                />
              ) : (
                <CasinoItem
                  key={k}
                  item={casino}
                  index={k}
                  fixedURL={fixedURL}
                />
              )}
            </div>
          </Fade>
        );
      })}
    </div>
  );
});

export default SportSection;
