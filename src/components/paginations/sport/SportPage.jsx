import { useEffect } from "react";
// import { useMediaQuery } from "react-responsive";
import { observer } from "mobx-react";
import PortalSection from "../../PortalSection";
import SportContent from "./SportContent";

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
            <PortalSection /> <br />
          </div>
        </>
      )}
      <div className="content_ min-vh-100 text-white p-2">
        <div className="w-100 m-auto">
          {/* <ContentV2 /> */}
          <SportContent />
        </div>
      </div>
    </div>
  );
});

export default SportPage;
