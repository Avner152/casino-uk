import { Spinner } from "react-bootstrap";
import CasinoSection from "../CasinoSection";
import Content from "../Content";
import { useMediaQuery } from "react-responsive";

export default function HomePage({ captchaToken }) {
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  return (
    <>
      {captchaToken === null ? (
        <div className="mt-5 d-flex justify-content-center vh-100 overflow-hidden">
          <Spinner style={{ color: "white" }} animation="border" />
        </div>
      ) : (
        <>
          <div className="w-100 p-2 m-auto  casino-section">
            <CasinoSection captchaToken={captchaToken} />
            <br />
          </div>
          <div className="content _mt-2 min-vh-100 _bg-secondary text-white-50 p-4">
            <Content isDesktop={isDesktop} />
          </div>
        </>
      )}
    </>
  );
}
