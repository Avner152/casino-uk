import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { importImages } from "../App";
import logo from "../assets/logo.svg";
import cards from "../assets/casino.png";
import React from "react";

export default function Footer() {
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  // const isTablet = useMediaQuery({
  //   query: "(min-width: 768px) and (max-width: 1023px)",
  // });
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const footerText =
    "Are you looking for the best casino games and the biggest bonuses on the market? CasinoCompare is looking out for you. We have tried and tested most casinos on the Canadian market so you have the choice of only the most trustworthy and fun places to bet your money. Keep up with our news and updates to make the most of your online casino experience!";

  const footer = [
    {
      title: "Information",
      list: [
        { name: "About Us", url: "/about-us" },
        { name: "Cookies Policy", url: "/cookie-consent-policy" },
        { name: "Terms & Conditions", url: "terms-and-conditions" },
        { name: "Privacy Policy", url: "/privacy-policy" },
      ],
    },
    // {
    //   title: "Popular pages",
    //   list: [
    //     {
    //       name: "Baccarat",
    //       url: "/baccarat",
    //     },
    //     {
    //       name: "Blackjack",
    //       url: "/blackjack",
    //     },
    //     {
    //       name: "Live Casino",
    //       url: "/live-casino",
    //     },
    //     {
    //       name: "Game Shows",
    //       url: "/game-shows",
    //     },
    //     {
    //       name: "Roulette",
    //       url: "/roulette",
    //     },
    //   ],
    // },
    {
      title: "Popular casinos",
      list: [
        {
          name: "LeoVegas",
          url: "http://ads.leovegas.com/redirect.aspx?pid=3497289&bid=3878&clickid={GCLID}",
          target: "_blank",
        },
        {
          name: "OLG",
          url: "",
        },
        {
          name: "Betsafe",
          url: "https://betway.com/bwp/casino-welcome/en-gb/?s=bw38811",
          target: "_blank",
        },
        {
          name: "Casino Room",
          url: "",
        },
        {
          name: "SlotJoint",
          url: "",
        },
      ],
    },
  ];

  const importedRegPhotos = importImages(
    require.context("../assets/reg", false, /\.(svg)$/)
  );

  const regLogosData = [
    { name: "18plus", url: "https://www.top10bestonlinecasinos.co.uk/" },
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
            <Link to="/">
              <img
                src={logo}
                width={180}
                alt="logo"
                height={50}
                className="_mt-2"
              />
            </Link>
            {isDesktop && (
              <div>
                <p>{footerText}</p>
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
                      to={li.url}
                      // href={li.url}
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

        {!isDesktop && (
          <div
            style={{ fontSize: `0.55rem` }}
            className="w-100 text-center m-auto fs-7 text-white"
          >
            {footerText}
          </div>
        )}

        <div className="d-flex flex-wrap gap-3 mt-5 justify-content-center">
          {regLogosData.map((photo, k) => (
            <a key={k} href={photo.url}>
              <img
                alt={photo.name}
                height={isDesktop ? 30 : 15}
                src={importedRegPhotos[`${photo.name}.svg`]}
              />
            </a>
          ))}
        </div>
      </footer>
      {isMobile && (
        <div className="sticky">
          <div className="p-3 m-auto text-white text-center">
            © 2024 CasinoRate. All rights reserved. All trademarks are the
            property of their respective owners.
          </div>
        </div>
      )}
    </>
  );
}
