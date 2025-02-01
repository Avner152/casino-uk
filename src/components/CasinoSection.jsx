import CasinoItem from "./CasinoItem";
import { useMediaQuery } from "react-responsive";
import { Fade } from "react-awesome-reveal";
import CasinoItemMobile from "./CasinoItemMobile";
import { NavLink } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { observer } from "mobx-react";
import { toJS } from "mobx";
import myStore from "../mobX/Store";
import { importImages } from "../App";

const CasinoSection = observer(({ captchaToken }) => {
  const list = toJS(myStore.list);
  captchaToken = true;

  const location = useLocation();
  const search =
    captchaToken !== undefined && !captchaToken
      ? "none regulated"
      : location.search;

  // const search = "";
  const [userIp, setUserIp] = useState(null);

  useEffect(() => {
    if (list.length) return;

    const url = `${process.env.REACT_APP_SERVER_URI}/uk`;
    const headers = { safety: "daniel" };

    const fetchIp = async () => {
      try {
        const response = await axios.get("https://api.ipify.org?format=json");
        setUserIp(response.data.ip);
      } catch (err) {
        console.error("Error fetching IP:", err);
      }
    };
    const fetchData = async () => {
      axios
        .post(url, { search, referrer: document.referrer, userIp }, { headers })
        .then((res) => {
          // console.log(userIp);

          // console.log(res.data);

          // setList(res.data.list[0].brands);
          myStore.updateType(res.data.list[0].type);
          myStore.updateList(
            res.data.list[0].brands.filter((brand) => !brand.isFrozen)
          );
        })
        .catch((err) => console.log(err));
    };

    fetchIp();
    userIp && fetchData();
  }, [search, list.length, userIp]);

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
    <div>
      <div className="w-100 d-flex m-auto text-white justify-content-around align-items-center">
        {homepageIconsObjectList.slice(0, isDesktop ? 4 : 3).map((icon, k) => (
          <div
            className="d-flex gap-1 fs-7 flex-column align-items-center"
            key={k}
          >
            <img
              width={isDesktop ? 50 : 30}
              height={isDesktop ? 30 : 20}
              alt={icon.name}
              src={homepageIcons[`${icon.name}-icon.svg`]}
            />
            <span>
              {icon.text} {icon.addOn !== undefined ? icon.addOn : ""}
            </span>
          </div>
        ))}
      </div>
      {toJS(myStore.list).map((casino, k) => (
        <Fade
          key={k}
          direction="left"
          // delay={isDesktop ? k * 100 : 0}
          cascade
          triggerOnce
        >
          {isMobile ? (
            <NavLink href={casino.href} target="_blank">
              <CasinoItemMobile
                key={k}
                item={casino}

                // src={brands["rolino.png"]}
              />
            </NavLink>
          ) : (
            <NavLink href={casino.url} target="_blank">
              <CasinoItem key={k} item={casino} />
            </NavLink>
          )}
        </Fade>
      ))}
    </div>
  );
});

export default CasinoSection;
