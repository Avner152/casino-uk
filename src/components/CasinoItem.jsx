import { useState } from "react";
import { Button } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { importImages } from "../App";
// import ParamItem from "./ParamItem";

const CasinoItem = ({ item }) => {
  const srcTerm = `${item.name.toLowerCase().replaceAll(" ", "-")}.png`;
  const brands = importImages(
    require.context("../assets/brands", false, /\.(png|jpe?g|svg)$/)
  );
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  // const isTablet = useMediaQuery({
  //   query: "(min-width: 768px) and (max-width: 1023px)",
  // });
  // const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const [clicked, setClicked] = useState(false);

  // const params = [
  //   { icon: "bullhorn", text: "Regular offers" },
  //   { icon: "slot", text: "Live casino" },
  //   { icon: "chat", text: "Live chat" },
  //   { icon: "vip", text: "VIP program" },
  // ];

  return (
    <div className="my-card ">
      {item.ribbonText && (
        <div className="ribbon ribbon-top-left">
          <span>{item.ribbonText}</span>
        </div>
      )}
      <div
        className={`top-card d-flex gap-${
          !isDesktop ? "2 flex-column" : "1 row"
        } justify-content-around border rounded align-items-center text-center`}
      >
        <div className="col-md-3 rounded _square">
          <img alt="casino" width={210} height={80} src={brands[srcTerm]} />
        </div>
        <div className="welcome-bonus text-white d-flex flex-column gap-2 col-md-3">
          {/* <span className="text-decoration-underline">{item.name} Casino</span> */}
          <span className="text-center">Welcome Bonus:</span>
          <h1 className="golden text-center">{item.title}</h1>
        </div>

        {isDesktop && (
          <div className="score d-flex flex-column align-items-center col-md-3">
            <div className="d-flex flex-column gap-2">
              <div
                style={{
                  background: `conic-gradient(rgb(252, 148, 38) ${
                    item.score * 10
                  }%, #de811d6a 0 100%`,
                }}
                className="rating good"
              >
                <span>{item.score}</span>
              </div>
              <div>Rating</div>
            </div>
          </div>
        )}

        {/* <div className="params">
          <div className="row">
            {params.map((param, k) => (
              <ParamItem
                key={k}
                icon={importedIcons[`${param.icon}.svg`]}
                text={param.text}
              />
            ))}
          </div>
        </div> */}

        <div className="d-flex flex-column col-md-3">
          <Button
            onClick={() => {
              setClicked(!clicked);
              window.open(item.url, "_blank");
            }}
          >
            {clicked ? "Visit Again" : "Get Bonus"}
          </Button>
        </div>
      </div>
      <div className="reg">{item.brandText}</div>
    </div>
  );
};

export default CasinoItem;
