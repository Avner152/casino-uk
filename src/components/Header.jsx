import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import burgerLogo from "../assets/burger-logo.svg";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { Button } from "react-bootstrap";

export default function Header() {
  const [isBurgerOpen, setBurgerOpen] = useState(false);
  const [show, setShow] = useState("");
  const BONUS_URL =
    "http://www.777.com/exclusive/home-page.htm?affid=46&pid=5&promid=26&country=gbr&sr=1244264&anid={GCLID}";

  const hamburgerHandler = () => {
    isBurgerOpen ? setShow("") : setShow("open");
    setBurgerOpen(!isBurgerOpen);
  };

  const menu = [
    {
      title: "Information",
      list: [
        // { name: "About Us", url: "/about-us" },
        { name: "Cookies Policy", url: "/cookie-consent-policy" },
        { name: "Terms & Conditions", url: "terms-and-conditions" },
        { name: "Privacy Policy", url: "/privacy-policy" },
      ],
    },
    {
      title: "Popular pages",
      list: [
        {
          name: "Baccarat",
          url: "/baccarat",
        },
        {
          name: "Blackjack",
          url: "/blackjack",
        },
        {
          name: "Live Casino",
          url: "/live-casino",
        },
        {
          name: "Game Shows",
          url: "/game-shows",
        },
        {
          name: "Roulette",
          url: "/roulette",
        },
      ],
    },
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

  const desktopMenu = [
    "Slots",
    "Jackpot",
    "Roulette",
    "Live Casino",
    "Game Shows",
    // "About us",
  ];

  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  // const isTablet = useMediaQuery({
  //   query: "(min-width: 768px) and (max-width: 1023px)",
  // });
  // const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <header className={`header w-${isDesktop ? 60 : 100}`}>
      <div
        className={`w-100 d-flex ${
          !isDesktop && "justify-content-between"
        } align-items-center mt-3 fs-2`}
      >
        {isDesktop ? (
          <div className="d-flex align-items-center justify-content-between w-100">
            <Link to="/">
              <img
                src={logo}
                width={180}
                alt="logo"
                height={50}
                className="_mt-2"
              />
            </Link>
            <div className="nav d-flex fs-6 justify-content-start gap-5 p-3 text-white">
              {desktopMenu.map((menuItem, k) => (
                <NavLink
                  to={`/${menuItem.replaceAll(" ", "-").toLocaleLowerCase()}`}
                  key={k}
                >
                  {menuItem}
                </NavLink>
              ))}
            </div>
            <Button
              target="_blank"
              href={BONUS_URL}
              className="header-btn text-uppercase fw-bold text-white"
            >
              Get Bonus
            </Button>
          </div>
        ) : (
          <>
            <div className="d-flex w-100 align-items-center justify-content-between">
              <div className="ms-3">
                <img alt="logo" src={logo} width={180} />
              </div>
              {/*  */}

              <div id="outer-container">
                <img
                  alt="flag-logo"
                  className="flag-logo"
                  width={23}
                  src={burgerLogo}
                />
                <Menu
                  id="slide"
                  right
                  customCrossIcon={false}
                  outerContainerId={"outer-container"}
                  burgerButtonClassName={show}
                  isOpen={isBurgerOpen}
                  onOpen={hamburgerHandler}
                  onClose={hamburgerHandler}
                >
                  <div>
                    <div>
                      <Link to="/">
                        <img
                          src={logo}
                          width={120}
                          alt="logo"
                          height={50}
                          className="_mt-2"
                        />
                      </Link>
                      <hr className="m-0 me-4" />
                    </div>
                    {menu.map((menuItem, _) => (
                      <div
                        key={menuItem.title}
                        className="d-flex flex-column gap-1"
                      >
                        <span className="fw-bold mt-3">{menuItem.title}</span>
                        {menuItem.list.map((li, j) => (
                          <Link
                            onClick={() => {
                              setShow("");
                              setBurgerOpen(false);
                            }}
                            key={j}
                            to={li.url}
                            href={li.url}
                            target={li.target || null}
                          >
                            {li.name}
                          </Link>
                        ))}
                      </div>
                    ))}
                    <div className="mt-4">
                      <Button
                        target="_blank"
                        href={BONUS_URL}
                        className="header-btn text-uppercase fw-bold text-white"
                      >
                        Get Bonus
                      </Button>
                    </div>
                  </div>
                </Menu>
              </div>
              {/*  */}
            </div>
          </>
        )}
      </div>
    </header>
  );
}
