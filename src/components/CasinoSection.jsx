import { importImages } from "../App";
import casinos from "../json/casino-list.json";
import CasinoItem from "./CasinoItem";
import { useMediaQuery } from "react-responsive";
import { Fade } from "react-awesome-reveal";
import CasinoItemMobile from "./CasinoItemMobile";
import { NavLink } from "react-bootstrap";

export default function CasinoSection() {
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
      {casinos.map((casino, k) => (
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
                    `${casino.name.toLocaleLowerCase().replaceAll(" ", "")}.png`
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
                    `${casino.name.toLocaleLowerCase().replaceAll(" ", "")}.png`
                  ]
                }
              />
            </NavLink>
          )}
        </Fade>
      ))}
    </div>
  );
}
