import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { importImages } from "../App";
import logo from "../assets/logo.png";
import cards from "../assets/casino.png";
import React from "react";
import { observer } from "mobx-react";
import myStore from "../mobX/Store";
import { pages } from "../json/helpers";

const Footer = observer(() => {
  const curDate = new Date();
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  // const isTablet = useMediaQuery({
  //   query: "(min-width: 768px) and (max-width: 1023px)",
  // });
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const footerText =
    "To participate, players must be 18 years or older and reside in the United Kingdom. This website provides information on a variety of products and services. Some details, such as prices and special offers, are supplied directly by our partners and may change at any time without prior notice. The information presented here is not intended to be legal or professional advice, nor should it be relied upon as such.";

  const footer = [
    {
      title: "Information",
      list: [
        { name: "About Us", url: "/about-us" },
        { name: "Cookies Policy", url: "/cookie-consent-policy" },
        { name: "Terms & Conditions", url: "/terms-and-conditions" },
        { name: "Privacy Policy", url: "/privacy-policy" },
      ],
    },
    {
      title: "Top Pages",
      list: pages?.[myStore.product || "casino"],
    },
  ];

  const importedRegPhotos = importImages(
    require.context("../assets/reg", false, /\.(svg)$/),
  );

  const regLogosData = [
    { name: "18plus" },
    {
      name: "raig",
      url: "https://www.raig.org/news-press/news/raig-social-responsibility-audit",
    },
    { name: "gamstop", url: "https://www.gamstop.co.uk" },
    { name: "gamcare", url: "https://www.gamcare.org.uk/" },
    { name: "be-gamble-aware", url: "https://www.begambleaware.org/" },
    { name: "gambling-therapy", url: "https://www.gamblingtherapy.org/" },
  ];

  return (
    <>
      <footer className="w-100 pb-4">
        <div
          className={`d-flex align-items-center justify-content-center gap-5 w-${
            isMobile ? "100 flex-column align-items-center" : 75
          } m-auto`}
        >
          <div className="footer-logo d-flex flex-column flex-grow-0">
            <Link
              to={`/${myStore.product === "betting" ? "special/sport" : ""}${
                window.location.search
              }`}
            >
              <img
                src={logo}
                width={200}
                height={60}
                alt="logo"
                className="bg-white p-1 rounded mb-1"
              />
            </Link>
            {isDesktop && (
              <div className="lh-1 fs-7">
                <p>{footerText}</p>
                <p>
                  Play Responsibly! <br />
                  Gambling can be addictive. Please gamble responsibly. For
                  help, visit{" "}
                  <a href="https://www.gambleaware.org/">BeGambleAware.org</a>
                </p>
              </div>
            )}
          </div>

          <div
            className={`footer-foo fs-7 ${
              !isDesktop && "row"
            } d-flex gap-5 flex-grow-1 justify-content-around`}
          >
            {footer.map((footerItem, k) => (
              <React.Fragment key={footerItem.title}>
                {k === 2 && isMobile && (
                  <div className="col-4 d-flex ms-3 align-items-center justify-content-center">
                    <img alt="cards" width={230} src={cards} />
                  </div>
                )}
                <div
                  className={`d-flex flex-column ${
                    isDesktop ? "" : "col-4 flex-wrap"
                  } gap-2`}
                >
                  <span className="fw-bold">{footerItem.title}</span>
                  {footerItem.list.map((li, j) => (
                    <Link
                      target={li.target || ""}
                      key={j}
                      to={`${
                        myStore.product === "betting" ? "/special/sport" : ""
                      }${li.url}${window.location.search}`}
                    >
                      {li.name}
                    </Link>
                  ))}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        <hr className="mt-5 mb-5 w-75 m-auto" />

        <div className="d-flex flex-wrap gap-3 mt-5 justify-content-center">
          {regLogosData.map((photo, k) => (
            <a
              key={k}
              href={photo.url || null}
              target={photo.url ? "_blank" : null}
              rel={photo.url ? "noreferrer" : null}
            >
              <img
                alt={photo.name}
                height={isDesktop ? 30 : 15}
                src={importedRegPhotos[`${photo.name}.svg`]}
              />
            </a>
          ))}
        </div>
      </footer>
      {
        <div className="sticky">
          <div className="p-3 m-auto text-white text-center">
            @{curDate.getFullYear()} Compare Casinos UK. All rights reserved.
            All trademarks are the property of their respective owners.
          </div>
        </div>
      }
    </>
  );
});

export default Footer;
