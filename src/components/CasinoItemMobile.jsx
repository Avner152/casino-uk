import { useState } from "react";
import { Button } from "react-bootstrap";
import { importImages } from "../App";

export default function CasinoItemMobile({ item, src }) {
  const [clicked, setClicked] = useState(false);

  let homepageIcons = importImages(
    require.context("../assets/homepage-icons", false, /\.(svg)$/)
  );

  let relevantIcons = [
    { name: "uk", text: "UK Licensed" },
    { name: "rocket", text: "Secure & Trusted" },
    { name: "18plus", text: "Advertiser Disclosure" },
  ];

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
          <h1 className="">{item.title}</h1>
          <p className="mb-2">{item.brandText}</p>

          <div
            className="d-flex justify-content-between w-100 mb-2"
            style={{ fontSize: "6px" }}
          >
            {relevantIcons.map((icon, _) => (
              <div
                className="d-flex align-items-center gap-1 p-1"
                key={icon.name}
              >
                <img
                  width={15}
                  src={homepageIcons[`${icon.name}-icon.svg`]}
                  alt={icon.name}
                />
                <span>{icon.text}</span>
              </div>
            ))}
          </div>
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
