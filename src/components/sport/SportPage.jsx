import { observer } from "mobx-react";
import Content from "../Content";
import PortalSection from "../PortalSection";
import ContentRealData from "../ContentRealData";
import myStore from "../../mobX/Store";

const SportPage = observer(({ captchaToken }) => {
  return (
    <div>
      {captchaToken === null ? (
        <div className="mt-5 mb-4 gap-2 d-flex flex-column justify-content-center align-items-center m-auto overflow-hidden"></div>
      ) : (
        <PortalSection />
      )}
      <div className="content min-vh-100 text-white p-2 sm-p-0">
        <div className="content-container w-100 m-auto">
          {!myStore.content ? <Content /> : <ContentRealData />}

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
