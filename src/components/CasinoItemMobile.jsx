import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react";
import myStore from "../mobX/Store";
import { toJS } from "mobx";

const CasinoItemMobile = observer(({ item, index }) => {
  const [clicked, setClicked] = useState(false);
  const score = 10 - (index + 1) / 10;

  return (
    <div className="my-card" onClick={() => window.open(item.url, "_blank")}>
      {item.ribbonText && (
        <p className="ribbon-2 text-capitalize">
          <span className="ribbon-text">{item.ribbonText}</span>
        </p>
      )}
      <div className="top-card d-flex justify-content-around align-items-center ">
        <div className="mt-3 d-flex flex-column justify-content-center align-items-center gap-1 square">
          <img
            className="rounded"
            alt={item.name}
            width={220}
            height={80}
            src={
              toJS(myStore.brands)[
                `${item.name.toLocaleLowerCase().replaceAll(" ", "-")}.png`
              ]
            }
          />
          <div className="d-flex gap-3 w-100 align-items-center justify-content-center">
            <div className="fs-3 fw-bold text-center">{score}</div>
            <div className="d-flex flex-column align-items-center">
              <span className="border-left border-white">Our score</span>
              <div>
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="star" />
                ))}
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
              window.open(item.url, "_blank");
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
