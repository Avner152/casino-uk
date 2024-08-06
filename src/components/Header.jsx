import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import Hamburger from "hamburger-react";
import { Button } from "react-bootstrap";

export default function Header() {
  const [isBurgerOpen, setBurgerOpen] = useState(false);

  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  // const isTablet = useMediaQuery({
  //   query: "(min-width: 768px) and (max-width: 1023px)",
  // });
  // const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const menu = [
    "Slots",
    "Jackpot",
    "Roulette",
    "Live Casino",
    "Game Shows",
    "About us",
  ];

  return (
    <header className="header w-60">
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
              {menu.map((menuItem, k) => (
                <NavLink
                  to={`/${menuItem.replaceAll(" ", "-").toLocaleLowerCase()}`}
                  key={k}
                >
                  {menuItem}
                </NavLink>
              ))}
            </div>
            <Button className="header-btn text-uppercase">Get Bonus</Button>
          </div>
        ) : (
          <div className="me-3">
            <Hamburger toggled={isBurgerOpen} toggle={setBurgerOpen} />
            {isBurgerOpen && (
              <nav className="nav-menu">
                {menu.map((menuItem, k) => (
                  <NavLink
                    to={`/${menuItem.replaceAll(" ", "").toLocaleLowerCase()}`}
                    key={k}
                  >
                    {menuItem}
                  </NavLink>
                ))}
              </nav>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
