import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { elastic as Menu } from "react-burger-menu";
import { Nav } from "react-bootstrap";
import { observer } from "mobx-react";
import myStore from "../mobX/Store";
import { pages } from "../json/helpers";
// import { Button } from "react-bootstrap";

const Header = observer(() => {
  const [isBurgerOpen, setBurgerOpen] = useState(false);
  const [show, setShow] = useState("closed");

  const hamburgerHandler = () => {
    isBurgerOpen ? setShow("closed") : setShow("open");
    setBurgerOpen(!isBurgerOpen);
  };

  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });

  return (
    <header
      className={`${isDesktop ? "desktop" : "mobile"}-header header w-100`}
    >
      <div
        className={`w-100 d-flex ${
          !isDesktop && "justify-content-between"
        } align-items-center fs-2`}
      >
        {isDesktop ? (
          <div className="d-flex align-items-center justify-content-between w-100">
            <NavLink
              to={`/${myStore.product === "betting" ? "special/sport" : ""}${
                window.location.search
              }`}
            >
              <img src={logo} width={110} height={70} alt="logo" />
            </NavLink>
            <Nav className="fs-6 gap-3">
              {pages?.[myStore.product || "casino"].map((item, i) => (
                <NavLink
                  key={i}
                  onClick={() => myStore.updateInfoContent(item.name)}
                  className="my-nav text-white"
                  to={`${
                    myStore.product === "betting" ? "/special/sport" : ""
                  }${item.url}${window.location.search}`}
                >
                  {item.name}
                </NavLink>
              ))}
            </Nav>
          </div>
        ) : (
          <>
            <div className="d-flex w-100 align-items-center justify-content-between">
              <NavLink
                to={`/${myStore.product === "betting" ? "special/sport" : ""}${
                  window.location.search
                }`}
                className="ms-3"
              >
                <img alt="logo" src={logo} width={130} height={75} />
              </NavLink>
              {/*  */}

              <div id="outer-container">
                <Menu
                  id="elastic"
                  right
                  burgerButtonClassName={show}
                  isOpen={isBurgerOpen}
                  onOpen={hamburgerHandler}
                  onClose={hamburgerHandler}
                >
                  <div className="d-flex flex-column gap-1">
                    <span className="fw-bold mt-3">Top Pages</span>
                    {pages?.[myStore.product || "casino"]?.map((li, j) => (
                      <Link
                        onClick={() => {
                          setShow("");
                          setBurgerOpen(false);
                        }}
                        key={j}
                        to={`${
                          myStore.product === "betting" ? "/special/sport" : ""
                        }${li.url}${window.location.search}`}
                      >
                        {li.name}
                      </Link>
                    ))}
                  </div>

                  <div className="mt-4"></div>
                </Menu>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
});

export default Header;
