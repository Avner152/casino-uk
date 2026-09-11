import React, { useEffect } from "react";
import CasinoItemPlaceholder from "../CasinoItemPlaceholder";
import CasinoItemMobilePlaceholder from "../CasinoItemMobilePlaceholder";
import { useMediaQuery } from "react-responsive";
import { observer } from "mobx-react";
import Content from "../Content";
import PortalSection from "../PortalSection";
import myStore from "../../mobX/Store";
import ContentV2 from "../ContentV2";

const SportPage = observer(({ captchaToken }) => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });

  useEffect(() => {
    document.body.classList = "sport";
  }, []);

  return (
    <div>
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
          <div className="px-2 m-auto casino-section">
            <PortalSection />
            <br />
          </div>
        </>
      )}
      <div
        className={`${myStore.product === "casino" ? "bg-white text-black" : "bg-dark text-white"} min-vh-100 py-4`}
      >
        <div className="px-3 w-60 sm-w-100 m-auto">
          {!myStore.content ? <Content isDesktop={isDesktop} /> : <ContentV2 />}
        </div>
      </div>
    </div>
  );
});

export default SportPage;
