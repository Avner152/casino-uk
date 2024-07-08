import { useState } from "react";
import { Button } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

export default function CasinoItem({ index, item, src }) {
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  // const isTablet = useMediaQuery({
  //   query: "(min-width: 768px) and (max-width: 1023px)",
  // });
  // const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const [clicked, setClicked] = useState(false);

  return (
    <div className="my-card shadow">
      {index < 2 && (
        <div className="ribbon ribbon-top-left">
          <span>top-rated</span>
        </div>
      )}
      <div
        className={`top-card d-flex gap-${
          !isDesktop ? "2 flex-column" : "1"
        }  justify-content-around border rounded align-items-center text-center`}
      >
        {/* <div className="fs-2">{index + 1}</div> */}
        <div className="border border-2 rounded">
          <img alt="casino" width={140} height={55} src={src} />
        </div>
        <div className="welcome-bonus d-flex flex-column">
          <h1 className="golden">{item.welcomeBonuses}</h1>
        </div>

        <div className="score d-flex flex-column ">
          {/* <h5>Our Score</h5> */}
          <h3 className="_golden fw-bold fs-1">{item.score}</h3>
          <div className="d-flex flex-column">
            <div>
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  className={`${i <= item.rank ? "star" : "empty"}`}
                  key={i}
                >
                  {i > item.rank && "☆"}
                </span>
              ))}
            </div>
            <span className="fs-7">Views ({item.views})</span>
          </div>
        </div>
        <div className="d-flex flex-column">
          <Button onClick={() => setClicked(!clicked)}>
            {clicked ? "Visit Again" : "Get Bonus"}
          </Button>
          {/* <a className="rev-url" href={item.review_url}>
            <span className="fs-7">Review</span>
          </a> */}
        </div>
      </div>
      <div className="reg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nulla sint
        voluptas atque eligendi eveniet laboriosam deleniti provident vitae
        aspernatur. Asperiores maxime alias repellat ipsum voluptatem, natus
        placeat sunt voluptates.
      </div>
    </div>
  );
}
