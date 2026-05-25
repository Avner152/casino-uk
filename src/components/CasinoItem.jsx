import { useState } from "react";
import { Button } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import myStore from "../mobX/Store";
import { observer } from "mobx-react";
import { getScoreByIndex } from "../json/helpers";

const CasinoItem = observer(({ item, index, fixedURL }) => {
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
        className={`top-card d-flex gap-${
          !isDesktop ? "2 flex-column" : "1 row"
        } justify-content-around align-items-center text-center`}
      >
        <div className="col-md-3 rounded _square">
          <img alt={item.name} width={210} height={80} src={item.image} />
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
                  background: `conic-gradient(rgb(255 215 42) ${
                    score * 10
                  }%, #de811d6a 0 100%`,
                }}
                className="rating good"
              >
                <span>{score.toFixed(1)}</span>
              </div>
              <div>Rating</div>
            </div>
          </div>
        )}

        <div className="d-flex flex-column col-md-3 ">
          <Button
            className="text-black d-flex justify-content-center align-items-center gap-2"
            href={fixedURL}
            target="_blank"
            onClick={() => setClicked(!clicked)}
          >
            {clicked ? "Visit Again" : "Get Bonus"}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                stroke="currentColor"
                strokeWidth="1.2"
              />
            </svg>
          </Button>
        </div>
      </div>
      {item.brandText && (
        <div className="reg border-warning border-top">{item.brandText}</div>
      )}
    </div>
  );
});

export default CasinoItem;
