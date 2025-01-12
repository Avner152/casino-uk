import { Spinner } from "react-bootstrap";
import CasinoSection from "../CasinoSection";
import Content from "../Content";
import { useMediaQuery } from "react-responsive";
import { Helmet } from "react-helmet";

export default function HomePage({ captchaToken }) {
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const meta = {
    title:
      "Casino Rate's Top 10 Best Online Casinos in the UK - Your Ultimate Online Casino UK",
  };
  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
      </Helmet>
      {captchaToken === null ? (
        <div className="mt-5 d-flex justify-content-center  overflow-hidden">
          <Spinner style={{ color: "white" }} animation="border" />
        </div>
      ) : (
        <>
          <div className="w-100 p-2 m-auto casino-section">
            <CasinoSection captchaToken={captchaToken} />
            <br />
          </div>
        </>
      )}
      <div className="content min-vh-100 text-white p-2">
        <Content isDesktop={isDesktop} />
      </div>
    </>
  );
}
