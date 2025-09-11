import CasinoSection from "../CasinoSection";
import Content from "../Content";
import { useMediaQuery } from "react-responsive";
import { Helmet } from "react-helmet";
import CasinoItemPlaceholder from "../CasinoItemPlaceholder";
import CasinoItemMobilePlaceholder from "../CasinoItemMobilePlaceholder";
import React from "react";
import { observer } from "mobx-react";
import myStore from "../../mobX/Store";
import ContentV2 from "../ContentV2";

const HomePage = observer(({ captchaToken }) => {
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
      {/* {captchaToken === null ? ( */}
      {captchaToken === null ? (
        <div className="mt-5 mb-4 gap-2 d-flex flex-column justify-content-center align-items-center m-auto overflow-hidden">
          {/* <Spinner style={{ color: "white" }} animation="border" /> */}
          {Array.from({ length: 5 }).map((_, i) => (
            <React.Fragment key={i}>
              {isDesktop ? (
                <CasinoItemPlaceholder />
              ) : (
                <CasinoItemMobilePlaceholder />
              )}
            </React.Fragment>
          ))}
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
        <div className="content-container w-100 m-auto">
          {!myStore.content ? <Content isDesktop={isDesktop} /> : <ContentV2 />}
          <div className="ms-3 mt-4">
            <h2>⚠️ Responsible Gaming Notice</h2>
            <p>
              Gambling is for adults aged 18+ and should be treated as a form of
              entertainment — not income. If you ever feel it’s becoming a
              problem, we link to professional help and support networks. Play
              responsibly and stay in control. For help, visit{" "}
              <a
                href="https://www.gambleaware.org/"
                rel="noreferrer"
                target="_blank"
              >
                BeGambleAware.org
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
});

export default HomePage;
