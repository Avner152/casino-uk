import casinos from "../json/casino-list.json";
import CasinoItem from "./CasinoItem";
import { useMediaQuery } from "react-responsive";
import { Fade, Slide } from "react-awesome-reveal";

export default function CasinoSection() {
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1023px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <div>
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
            <CasinoItem key={k} item={casino} />
          </Slide>
        </Fade>
      ))}
    </div>
  );
}
