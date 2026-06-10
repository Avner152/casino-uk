import CasinoItem from "./CasinoItem";
import { useMediaQuery } from "react-responsive";
import { Fade } from "react-awesome-reveal";
import CasinoItemMobile from "./CasinoItemMobile";
import { useLocation, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { observer } from "mobx-react";
import { toJS } from "mobx";
import myStore from "../mobX/Store";
import { importImages } from "../App";
import { appendQueryParams } from "../json/helpers";

const PortalSection = observer(({ captchaToken }) => {
  const list = toJS(myStore.list);
  captchaToken = true;

  const location = useLocation();
  const [searchParams] = useSearchParams();
  // const mId = searchParams.get("msclkid");

  const search =
    captchaToken !== undefined && !captchaToken
      ? "special-and-hard-coded"
      : location.search;

  // const search = "";
  const [userIp, setUserIp] = useState(null);

  useEffect(() => {
    if (list.length) return;

    const ENDPOINT = `${process.env.REACT_APP_SERVER_URI}/birmingham/prd?product=${myStore.product}`;
    // const ENDPOINT = `http://localhost:5001/birmingham/prd?product=${myStore.product}`;

    const headers = { segment: "viral" };

    const fetchIp = async () => {
      try {
        const response = await axios.get("https://api.ipify.org?format=json");
        setUserIp(response.data.ip);
      } catch (err) {
        setUserIp("0.0.0.0");

        console.error("Error fetching IP:", err);
      }
    };
    const fetchData = async () => {
      axios
        .post(
          ENDPOINT,
          { search, referrer: document.referrer, userIp },
          { headers },
        )
        .then((res) => {
          // console.log(res.data.list);

          // setList(res.data.list[0].brands);
          myStore.updateType(res.data.list[0].type);
          myStore.updateList(
            res.data.list[0].brands.filter((brand) => !brand.isFrozen),
          );

          myStore.updateRibbons(res.data.ribbons || []);

          if (res.data.list[0].content)
            myStore.updateContent(res.data.list[0].content);
        })
        .catch((err) => console.log(err));
    };

    fetchIp();
    userIp && fetchData();
  }, [search, list.length, userIp]);

  let homepageIcons = importImages(
    require.context("../assets/homepage-icons", false, /\.(svg)$/),
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

  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <div className="min-vh-75">
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
            <span className="bg-dark bg-opacity-100 px-3 fs-7 rounded-1">
              {icon.text} {icon.addOn !== undefined ? icon.addOn : ""}
            </span>
          </div>
        ))}
      </div>
      {toJS(myStore.list).map((casino, k) => {
        const fixedURL = `${casino.url}${appendQueryParams(searchParams, k + 1)}`;

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

export default PortalSection;
