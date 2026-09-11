import PortalSection from "../PortalSection";
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
      {captchaToken === null ? (
        <div className="mt-5 mb-4 gap-2 d-flex flex-column justify-content-center align-items-center m-auto overflow-hidden">
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
          <div className="_w-60 sm-w-100 p-2 m-auto casino-section">
            <PortalSection captchaToken={captchaToken} />
            <br />
          </div>
        </>
      )}
      <div className="bg-white min-vh-100 py-4 px-3">
        <div className="w-60 sm-w-100 m-auto">
          {!myStore.content ? <Content isDesktop={isDesktop} /> : <ContentV2 />}
        </div>
      </div>
    </>
  );
});

export default HomePage;
