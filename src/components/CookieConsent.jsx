import { setCookie } from "../json/helpers";
import { useState } from "react";
import { Link } from "react-router-dom";
import myStore from "../mobX/Store";
import { observer } from "mobx-react";

const CookieConsent = observer(({ setCookieStatus }) => {
  const [showManageCookies, setShowManageCookies] = useState(false);
  const [cookieSettings, setCookieSettings] = useState({
    necessary: true,
    functional: true,
    performance: true,
  });

  const toggleCookieSetting = (key) => {
    setCookieSettings((current) => ({
      ...current,
      [key]: !current[key],
    }));
  };

  const cookieHandler = () => {
    setCookie("uk-consent", true, 365, "ukcasinohub.net");
    setCookieStatus(true);
  };

  const allCookiesEnabled = Object.values(cookieSettings).every(Boolean);

  const cookieItems = [
    {
      key: "necessary",
      title: "Strictly necessary cookies",
      description:
        "These cookies are essential so that you can move around the website and use its features. Without these cookies, services you have asked for cannot be provided.",
    },
    {
      key: "functional",
      title: "Functional cookies",
      description:
        "These cookies allow the website to remember choices you make to give you better functionality and more relevant on-site features.",
    },
    {
      key: "performance",
      title: "Performance cookies",
      description:
        "These cookies help us understand how visitors use the website so we can improve speed, content, navigation, and overall performance.",
    },
  ];

  return (
    <div
      style={{ zIndex: 1030 }}
      className="position-fixed bottom-0 start-0 w-100 p-2"
    >
      <div className="cookie-consent-shell ms-auto">
        <div className="bg-dark text-white border border-secondary-subtle rounded-2 shadow-lg overflow-hidden">
          <div className="p-3 p-md-4 ">
            <div>
              <h3 className="h4 fw-bold mb-2">Cookie settings</h3>
              <p className="mb-0 text-white-50 small lh-base pe-md-5">
                We use cookies to keep the website secure, remember your
                preferences, and improve the experience for UK players. Review
                the categories below. For more information, see our{" "}
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
              </p>
            </div>
          </div>

          <div
            className={`cookie-settings-list ${
              showManageCookies ? "cookie-settings-list--open" : ""
            }`}
            aria-hidden={!showManageCookies}
          >
            <div className="cookie-settings-list__inner px-3 px-md-4">
              {cookieItems.map((item, index) => {
                const isOn = cookieSettings[item.key];

                return (
                  <div key={item.key} className="d-flex w-100">
                    <div className="d-flex w-100 justify-content-between align-items-start gap-3">
                      <div className="flex-grow-1">
                        <h4 className="h6 fw-bold mb-2">{item.title}</h4>
                        <p className="text-white-50 small lh-base mb-2">
                          {item.description}
                        </p>
                      </div>
                      <div className="form-check form-switch d-flex align-items-center gap-2 m-0 pt-1 flex-shrink-0">
                        <input
                          id={`cookie-setting-${item.key}`}
                          type="checkbox"
                          className="form-check-input m-0"
                          checked={isOn}
                          onChange={() => toggleCookieSetting(item.key)}
                          aria-label={`${item.title} ${isOn ? "on" : "off"}`}
                        />
                        <label
                          htmlFor={`cookie-setting-${item.key}`}
                          className="small fw-semibold text-white mb-0 text-uppercase"
                        >
                          {isOn ? "On" : "Off"}
                        </label>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-sm-end gap-2 p-1 p-md-2  ">
            <button
              type="button"
              onClick={() => setShowManageCookies((current) => !current)}
              className="btn btn-outline-light btn-sm rounded-2"
            >
              {showManageCookies ? "Hide" : "Manage"} Cookies
            </button>
            <button
              type="button"
              onClick={() => setCookieStatus(true)}
              className="btn btn-outline-light btn-sm rounded-2"
            >
              Reject All
            </button>
            <button
              type="button"
              onClick={cookieHandler}
              className="btn btn-warning btn-sm rounded-2 fw-semibold"
            >
              Accept{allCookiesEnabled ? " All" : ""}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default CookieConsent;
