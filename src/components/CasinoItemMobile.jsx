import { useState } from "react";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react";
import myStore from "../mobX/Store";
import { useMediaQuery } from "react-responsive";

import { toJS } from "mobx";

const CasinoItemMobile = observer(({ item }) => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });

  const [clicked, setClicked] = useState(false);

  return (
    <div className="my-card">
      {item.ribbonText && (
        <div className="ribbon ribbon-top-left">
          <span>{item.ribbonText}</span>
        </div>
      )}
      <div className="top-card d-flex justify-content-around align-items-center ">
        <div className="square">
          <img
            className="rounded"
            alt="casino "
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
