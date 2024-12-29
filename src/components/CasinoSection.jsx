import { importImages } from "../App";

import CasinoItem from "./CasinoItem";
import { useMediaQuery } from "react-responsive";
import { Fade } from "react-awesome-reveal";
import CasinoItemMobile from "./CasinoItemMobile";
import { NavLink } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { observer } from "mobx-react";
import { toJS } from "mobx";
import myStore from "../mobX/Store";

const CasinoSection = observer(({ captchaToken }) => {
  const list = toJS(myStore.list);

  const location = useLocation();
  const search = !captchaToken ? "none regulated" : location.search;

  useEffect(() => {
    if (list.length) return;

    const url = `${process.env.REACT_APP_SERVER_URI}/uk`;
    const headers = { safety: "daniel" };
    axios
      .post(url, { search, referrer: document.referrer }, { headers })
      .then((res) => {
        console.log(res.data);

        // setList(res.data.list[0].brands);
        myStore.updateType(res.data.list[0].type);
        myStore.updateList(res.data.list[0].brands);
      })
      .catch((err) => console.log(err));
  }, [search, list.length]);

  const images = importImages(
    require.context("../assets/logos", false, /\.(png|jpe?g|svg)$/)
  );

  const importedIcons = importImages(
    require.context("../assets/icons", false, /\.(svg)$/)
  );

  // const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  // const isTablet = useMediaQuery({
  //   query: "(min-width: 768px) and (max-width: 1023px)",
  // });
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <div>
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
                importedIcons={importedIcons}
                src={
                  images[
                    `${casino.name
                      .toLocaleLowerCase()
                      .replaceAll(" ", "-")}.png`
                  ]
                }
              />
            </NavLink>
          ) : (
            <NavLink href={casino.url} target="_blank">
              <CasinoItem
                key={k}
                item={casino}
                importedIcons={importedIcons}
                src={
                  images[
                    `${casino.name
                      .toLocaleLowerCase()
                      .replaceAll(" ", "-")}.png`
                  ]
                }
              />
            </NavLink>
          )}
        </Fade>
      ))}
    </div>
  );
});

export default CasinoSection;
