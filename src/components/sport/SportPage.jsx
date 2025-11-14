import { useEffect } from "react";
// import { useMediaQuery } from "react-responsive";
import SportSection from "./SportSection";
import { observer } from "mobx-react";
import Content from "../Content";

const SportPage = observer(({ captchaToken }) => {
  // const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });

  useEffect(() => {
    document.body.classList = "sport";
  }, []);

  return (
    <div>
      {captchaToken === null ? (
        <div className="mt-5 mb-4 gap-2 d-flex flex-column justify-content-center align-items-center m-auto overflow-hidden"></div>
      ) : (
        <>
          <div className="w-100 p-2 m-auto casino-section">
            <SportSection captchaToken={captchaToken} />
            <br />
          </div>
        </>
      )}
      <div className="content min-vh-100 text-white p-2">
        <div className="content-container w-100 m-auto">
          {/* <ContentV2 /> */}
          <Content />
        </div>
      </div>
    </div>
  );
});

export default SportPage;
