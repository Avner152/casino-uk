import { importImages } from "../App";
import casinos from "../json/casino-list.json";
import CasinoItem from "./CasinoItem";
import { useMediaQuery } from "react-responsive";
import { Fade } from "react-awesome-reveal";
import CasinoItemMobile from "./CasinoItemMobile";

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
          direction={!isMobile ? (k % 2 ? "right" : "left") : null}
          // delay={isDesktop ? k * 100 : 0}
          cascade
          triggerOnce
        >
          {isMobile ? (
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
          ) : (
            <CasinoItem
              key={k}
              index={k}
              item={casino}
              importedIcons={importedIcons}
              src={
                images[
                  `${casino.name.toLocaleLowerCase().replaceAll(" ", "")}.png`
                ]
              }
            />
          )}
        </Fade>
      ))}
    </div>
  );
}
