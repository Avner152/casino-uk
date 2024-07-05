import { importImages } from "../App";
import casinos from "../json/casino-list.json";
import CasinoItem from "./CasinoItem";
// import { useMediaQuery } from "react-responsive";
import { Fade, Slide } from "react-awesome-reveal";

export default function CasinoSection() {
  const images = importImages(
    require.context("../assets/logos", false, /\.(png|jpe?g|svg)$/)
  );

  // const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  // const isTablet = useMediaQuery({
  //   query: "(min-width: 768px) and (max-width: 1023px)",
  // });
  // const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <div>
      <div className="mt-5 mb-5 tit-n-des">
        <h1>Top 10 Best Online Casinos July {new Date().getFullYear()}</h1>
        <span>
          Top UK real money online casinos compared and reviewed. Check our list
          of the most popular British online casinos. Play safely & responsibly.
        </span>
      </div>

      {casinos.map((casino, k) => (
        <Fade
          key={k}
          // direction={k % 2 ? "right" : "left"}
          delay={k * 250}
          cascade
          triggerOnce
        >
          <Slide
            // direction={k % 2 ? "right" : "left"}
            delay={k * 250}
            cascade
            triggerOnce
          >
            <CasinoItem
              key={k}
              item={casino}
              src={images[`${casino.img}.png`]}
            />
          </Slide>
        </Fade>
      ))}
    </div>
  );
}
