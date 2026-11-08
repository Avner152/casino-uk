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
    <div className="my-card ">
      {myStore.type.startsWith("ne") && index < 3 && (
        <p className="ribbon-2 text-capitalize">
          <span className="ribbon-text">{myStore.ribbonList[index]}</span>
        </p>
      )}
      <div className="top-card d-grid desktop-top-card d-grid gap-5 px-4 border rounded align-items-center">
        <div className=" rounded">
          <img
            className="img-fluid"
            alt={item.name}
            width={210}
            height={80}
            src={item.image}
          />
        </div>
        <div className="welcome-bonus text-black d-flex flex-column gap-2 ">
          {/* <span className="text-decoration-underline">{item.name} Casino</span> */}
          <span className="text-start">Welcome Bonus:</span>
          <h1 className="golden text-start">{item.title}</h1>
        </div>

        {isDesktop && (
          <div className="score d-flex flex-column align-items-center ">
            <div className="d-flex flex-column gap-2">
              <div
                style={{
                  background: `conic-gradient(#7F7FB3 ${
                    score * 10
                  }%, #7F7FB333 0 100%`,
                }}
                className="rating good"
              >
                <span>{score.toFixed(1)}</span>
              </div>
              <div>Rating</div>
            </div>
          </div>
        )}

        <div className="d-flex flex-column ">
          <Button
            onClick={() => setClicked(!clicked)}
            href={fixedURL}
            target="_blank"
          >
            {clicked ? "Visit Again" : "Get Bonus"}
          </Button>
        </div>
      </div>
      {item.brandText && <div className="reg p-2">{item.brandText}</div>}
    </div>
  );
});

export default CasinoItem;
