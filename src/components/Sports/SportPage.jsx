import { observer } from "mobx-react";
import Content from "../Content";
import PortalSection from "../PortalSection";

const SportPage = observer(({ captchaToken }) => {
  // const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });

  return (
    <div>
      {captchaToken === null ? (
        <div className="mt-5 mb-4 gap-2 d-flex flex-column justify-content-center align-items-center m-auto overflow-hidden"></div>
      ) : (
        <>
          <PortalSection />
          {/* <div className="w-100 p-2 m-auto casino-section">
            <SportSection captchaToken={captchaToken} />
            <br />
          </div> */}
        </>
      )}
      <div className="content min-vh-100 text-white p-2">
        <div className="content-container w-100 m-auto">
          {/* <ContentV2 /> */}
          <Content />

          <div className="ms-3">
            <h2>Play Responsibly!</h2>
            <p>
              Gambling can be addictive. Please gamble responsibly. For help,
              visit{" "}
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
    </div>
  );
});

export default SportPage;
