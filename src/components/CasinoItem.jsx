import { useState } from "react";
import { Button } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import myStore from "../mobX/Store";
import { observer } from "mobx-react";
import { getScoreByIndex } from "../json/helpers";

const CasinoItem = observer(({ item, index, fixedURL }) => {
  // const score = 10 - (index + 1) / 10;
  const score = getScoreByIndex(index);

  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });

  const [clicked, setClicked] = useState(false);

  return (
    <div className="my-card border-1 border-warning border rounded-2">
      {myStore.type.startsWith("ne") && index < 3 && (
        <p className="ribbon-2 text-capitalize">
          <span className="ribbon-text">{myStore.ribbonList[index]}</span>
        </p>
      )}
      <div
        className="top-card gap-4 px-4 border rounded align-items-center text-center"
        style={{
          display: "grid",
          gridTemplateColumns: isDesktop ? "1fr 1.8fr 0.6fr 1.4fr" : "1fr",
        }}
      >
        <div className="rounded _square">
          <img
            className="img-fluid"
            alt={item.name}
            width={210}
            height={80}
            src={item.image}
          />
        </div>
        <div className="welcome-bonus text-white d-flex flex-column gap-1 ">
          <span className="ms-2 pt-2">Welcome Bonus:</span>
          <h1 className="golden ms-2">{item.title}</h1>
        </div>

        {isDesktop && (
          <div className="score d-flex flex-column align-items-center ">
            <div className="d-flex flex-column gap-2">
              <div
                style={{
                  background: `conic-gradient(rgb(255 215 42) ${
                    score * 10
                  }%, #de811d6a 0 100%`,
                }}
                className="rating good"
              >
                <span>{score.toFixed(1)}</span>
              </div>
              <div className="text-white">Rating</div>
            </div>
          </div>
        )}

        <div className="d-flex flex-column col-md-3">
          <Button
            style={{ maxWidth: "260px" }}
            onClick={() => setClicked(!clicked)}
            href={fixedURL}
            target="_blank"
          >
            {clicked ? "Visit Again" : "Get Bonus"}
          </Button>
        </div>
      </div>
      {item.brandText && <div className="reg">{item.brandText}</div>}
    </div>
  );
});

export default CasinoItem;
