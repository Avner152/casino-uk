import { Button } from "react-bootstrap";
import { setCookie } from "../json/helpers";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import myStore from "../mobX/Store";

const CookieConsent = observer(({ setCookieStatus }) => {
  const cookieHandler = () => {
    // console.log(accepted);
    setCookie("uk-consent", true, 365, "topcasinopicksuk.com");
    setCookieStatus(true);
  };

  return (
    <div className="cookie-wrapper d-flex flex-row text-white align-items-center justify-content-between position-fixed z-99 bottom-0 w-100 p-4 bg-dark fs-7">
      <span>
        We use cookies that are necessary to operate this website and to
        remember your preferences (for example, that you have dismissed this
        notice). We do not use cookies for analytics, profiling or interest-
        based advertising. For more information, see our{" "}
        <Link
          to={`${
            myStore.product === "betting" ? "/special/sport" : ""
          }/cookie-consent-policy${window.location.search}`}
          className="link-light text-decoration-underline"
        >
          Cookie Policy
        </Link>{" "}
        and{" "}
        <Link
          to={`${
            myStore.product === "betting" ? "/special/sport" : ""
          }/privacy-policy${window.location.search}`}
          className="link-light text-decoration-underline"
        >
          Privacy Policy
        </Link>
        .
      </span>
      <div className="d-flex flex-column gap-2">
        <Button onClick={cookieHandler} className="cookie-accept cookie-button">
          OK, got it
        </Button>
        <Button
          onClick={() => setCookieStatus(true)}
          className="cookie-accept cookie-button"
        >
          Cancel
        </Button>
      </div>
    </div>
  );
});

export default CookieConsent;
