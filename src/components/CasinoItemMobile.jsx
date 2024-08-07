import { useState } from "react";
import { Button } from "react-bootstrap";

export default function CasinoItemMobile({ item, src }) {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="my-card shadow">
      {item.ribbonText && (
        <div className="ribbon ribbon-top-left">
          <span>{item.ribbonText}</span>
        </div>
      )}
      <div className="top-card d-flex justify-content-around align-items-center ">
        <div className="_square">
          <img
            className="rounded"
            alt="casino "
            width={120}
            height={120}
            src={src}
          />
        </div>

        <div className="card-content _d-flex _flex-column">
          <h1 className="">{item.welcomeBonuses}</h1>
          <p>{item.brandText}</p>
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
}
