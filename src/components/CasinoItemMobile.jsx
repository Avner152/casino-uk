import { useState } from "react";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react";
import myStore from "../mobX/Store";

import { toJS } from "mobx";

const CasinoItemMobile = observer(({ item }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="my-card">
      {item.ribbonText && (
        <p className="ribbon-2 text-capitalize">
          <span className="ribbon-text">{item.ribbonText}</span>
        </p>
      )}
      <div className="top-card d-flex justify-content-around align-items-center ">
        <div className="square">
          <img
            onClick={() => window.open(item.url, "_blank")}
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
