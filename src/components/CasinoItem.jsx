import { useState } from "react";
import { Button } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import ParamItem from "./ParamItem";

export default function CasinoItem({ index, item, src, importedIcons }) {
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  // const isTablet = useMediaQuery({
  //   query: "(min-width: 768px) and (max-width: 1023px)",
  // });
  // const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const [clicked, setClicked] = useState(false);

  const params = [
    { icon: "bullhorn", text: "Regular offers" },
    { icon: "slot", text: "Live casino" },
    { icon: "chat", text: "Live chat" },
    { icon: "vip", text: "VIP program" },
  ];

  return (
    <div className="my-card shadow">
      {item.ribbonText && (
        <div className="ribbon ribbon-top-left">
          <span>{item.ribbonText}</span>
        </div>
      )}
      <div
        className={`top-card d-flex gap-${
          !isDesktop ? "2 flex-column" : "1"
        }  justify-content-around border rounded align-items-center text-center`}
      >
        <div className="border border-2 rounded square">
          <img alt="casino" width={100} height={100} src={src} />
        </div>
        <div className="welcome-bonus d-flex flex-column gap-2">
          <a>{item.name} Casino</a>
          <h1 className="golden">{item.welcomeBonuses}</h1>
        </div>

        {isDesktop && (
          <div className="score d-flex flex-column ">
            {/* <h3 className="_golden fw-bold fs-1">{item.score}</h3> */}
            <div className="d-flex flex-column gap-2">
              <div
                style={{
                  background: `conic-gradient(rgb(39, 174, 96) ${
                    item.score * 10
                  }%, transparent 0 100%`,
                }}
                className="rating good"
              >
                <span>{item.score}</span>
              </div>
              <div>Rating</div>
              {/* {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    className={`${i <= item.rank ? "star" : "empty"}`}
                    key={i}
                  >
                    {i > item.rank && "☆"}
                  </span>
                ))} */}
            </div>
          </div>
        )}

        {/* <div className="d-flex w-30 flex-wrap justify-content-center gap-2"> */}
        <div className="params">
          <div className="row">
            {params.map((param, k) => (
              <ParamItem
                key={k}
                icon={importedIcons[`${param.icon}.svg`]}
                text={param.text}
              />
            ))}
          </div>
        </div>

        <div className="d-flex flex-column">
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
}
