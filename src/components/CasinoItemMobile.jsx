import { useState } from "react";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react";
import myStore from "../mobX/Store";
import { getScoreByIndex } from "../json/helpers";

const CasinoItemMobile = observer(({ item, index, fixedURL }) => {
  const [clicked, setClicked] = useState(false);
  const score = getScoreByIndex(index);

  return (
    <div className="my-card" onClick={() => window.open(fixedURL, "_blank")}>
      {myStore.type.startsWith("ne") && index < 3 && (
        <p className="ribbon-2 text-capitalize">
          <span className="ribbon-text">{myStore.ribbonList[index]}</span>
        </p>
      )}
      <div className="top-card d-flex justify-content-around align-items-center border border-1 border-warning rounded-2">
        <div className="mt-3 d-flex flex-column justify-content-center align-items-center gap-1 square">
          <img
            className="rounded"
            alt={item.name}
            width={220}
            height={80}
            src={item.image}
          />
          <div className="d-flex gap-3 w-100 align-items-center justify-content-center">
            <div className="fs-3 fw-bold text-center">{score.toFixed(1)}</div>
            <div className="d-flex flex-column align-items-center">
              <span className="border-left fs-7 text=white border-white">
                Our score
              </span>
              <div>
                {Array.from({ length: Math.ceil(score - 5) }).map((_, i) => {
                  return (
                    <span
                      key={i}
                      style={
                        score - 5 < i + 1
                          ? {
                              background: `linear-gradient(to right, #ffd600 ${
                                (score % 1) * 100 > 50 ? 100 : 50
                              }%, transparent ${
                                (score % 1) * 100 <= 50 ? 50 : 50
                              }%)`,
                            }
                          : score / 2 > i + 1
                            ? { background: "#ffd600" }
                            : null
                      }
                      className="star"
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="card-content text-white _d-flex _flex-column">
          <h1 className="">{item.title}</h1>
          <p className="mb-2">{item.brandText}</p>

          <div
            className="d-flex _justify-content-between w-100 mb-2"
            style={{ fontSize: "1.25vw" }}
          ></div>
          <Button
            onClick={() => {
              setClicked(!clicked);
              window.open(fixedURL, "_blank");
            }}
          >
            {clicked ? "Visit Again" : "Get Bonus"}
          </Button>
        </div>
      </div>
    </div>
  );
});

export default CasinoItemMobile;
