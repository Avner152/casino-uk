import { observer } from "mobx-react";
import casino from "../assets/casino.png";
import myStore from "../mobX/Store";
import { useMediaQuery } from "react-responsive";

const Intro = observer(() => {
  const curDate = new Date();
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });

  return (
    <div className="intro mt-5 tit-n-des text-white p-3">
      <div
        className={`d-flex align-items-center justify-content-${
          isDesktop ? "between" : "center"
        }`}
      >
        <div>
          <h1 className={`intro-title fw-bold w-${isDesktop ? 75 : 100}`}>
            Check our {myStore.type === "negra" ? "Non-Gamestop" : ""} UK's Best
            Casinos Of {curDate.getFullYear()}
          </h1>
          {isDesktop && (
            <p>
              Top UK real money online casinos compared and reviewed. <br />
              Check our list of the most popular British online casinos.
              <br /> Play safely & responsibly
            </p>
          )}
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
    </div>
  );
});

export default Intro;
