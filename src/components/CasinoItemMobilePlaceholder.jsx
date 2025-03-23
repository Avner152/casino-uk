import { Button, Card, Placeholder } from "react-bootstrap";

export default function CasinoItemMobilePlaceholder() {
  return (
    <div style={{ zIndex: 1 }} className="my-card m-0">
      <div className="top-card d-flex justify-content-around align-items-center ">
        <div className="d-flex flex-column justify-content-center align-items-center gap-1 square">
          <Placeholder
            as="img"
            className="rounded bg-secondary"
            animation="wave"
            width={220}
            height={80}
          />
          <div className="_d-flex gap-3 w-100 align-items-center justify-content-center">
            <div className="d-flex flex-column align-items-center">
              <span className="border-left text-white border-white mt-2">
                Our score
              </span>
              <Placeholder
                className="w-50 ms-3"
                as={Card.Text}
                animation="wave"
              >
                <Placeholder bg="light" xs={5} />{" "}
                <Placeholder bg="light" xs={5} />{" "}
              </Placeholder>
            </div>
          </div>
        </div>

        <div className="card-content text-white d-flex _flex-column px-3">
          <Placeholder as="h1" animation="wave">
            <Placeholder xs={12} />
            <Placeholder xs={12} /> <br />
            <br />
            <Placeholder xs={5} /> <Placeholder xs={6} />
            {/* <Placeholder xs={9} /> <Placeholder xs={2} /> */}
            <Placeholder className="mt-2 " as={Button}>
              Loading Bonus
            </Placeholder>
          </Placeholder>

          {/* <Placeholder as="p" className="" /> */}

          <div
            className="d-flex _justify-content-between w-100 mb-2"
            style={{ fontSize: "1.25vw" }}
          ></div>
          {/* <Button></Button> */}
        </div>
      </div>
    </div>
  );
}
