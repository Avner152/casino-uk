import { Button, Placeholder } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

export default function CasinoItemPlaceholder() {
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });

  return (
    <div style={{ zIndex: 1 }} className="my-card w-100 m-0 mx-5">
      <div
        className={`top-card d-flex gap-${
          !isDesktop ? "2 flex-column" : "1 row"
        } justify-content-around border rounded align-items-center text-center`}
      >
        <div className="col-md-3 rounded _square">
          <Placeholder
            as="img"
            animation="wave"
            className="rounded-3 border-0 border-bg-dark bg-secondary"
            width={210}
            height={80}
          />
        </div>
        <div className="welcome-bonus text-white d-flex flex-column gap-2 col-md-3">
          {/* <span className="text-decoration-underline">{item.name} Casino</span> */}
          <span className="text-center">Welcome Bonus:</span>
          <Placeholder as="p" animation="wave">
            <Placeholder xl="12" />
            <Placeholder xl="5" /> <Placeholder xl="6" />
            <br />
          </Placeholder>
        </div>

        <div className="score d-flex flex-column align-items-center col-md-3">
          <div>
            <Placeholder
              as="p"
              animation="wave"
              style={{
                background: `conic-gradient(rgb(255 215 42) 100%, #de811d6a 0 100%`,
              }}
              className="rating golden"
            ></Placeholder>
          </div>
        </div>

        <div className="d-flex flex-column col-md-3">
          <Placeholder animation="wave" as={Button}>
            Loading Bonus..
          </Placeholder>
        </div>
      </div>
      <div className="reg text-white">
        <Placeholder as="h6" animation="glow">
          <Placeholder md="3" /> <Placeholder md="4" /> <Placeholder md="3" />
          <Placeholder md="4" /> <Placeholder md="3" /> <Placeholder md="4" />{" "}
        </Placeholder>
      </div>
    </div>
  );
}
