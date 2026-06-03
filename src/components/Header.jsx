import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { elastic as Menu } from "react-burger-menu";
import { Nav } from "react-bootstrap";
import myStore from "../mobX/Store";
import { observer } from "mobx-react";
import { pages } from "../json/helpers";
// import { Button } from "react-bootstrap";

const Header = observer(() => {
  const [isBurgerOpen, setBurgerOpen] = useState(false);
  const [show, setShow] = useState("closed");

  const hamburgerHandler = () => {
    isBurgerOpen ? setShow("closed") : setShow("open");
    setBurgerOpen(!isBurgerOpen);
  };

  const menu = [
    {
      title: "Top Pages",
      list: [
        {
          name: "Aviator ",
          url: "/aviator",
        },
        {
          name: "Live Games ",
          url: "/live-games",
        },
        {
          name: "Book of Dead",
          url: "/slots-games",
        },
        {
          name: "Table Games",
          url: "/table-games",
        },
      ],
    },
    {
      title: "Information",
      list: [
        { name: "About Us", url: "/about" },
        { name: "Cookies Policy", url: "/cookie-consent-policy" },
        { name: "Terms & Conditions", url: "terms-and-conditions" },
        { name: "Privacy Policy", url: "/privacy-policy" },
      ],
    },
  ];

  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  // const isTablet = useMediaQuery({
  //   query: "(min-width: 768px) and (max-width: 1023px)",
  // });
  // const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

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
              <img
                className="p-1"
                src={logo}
                width={180}
                height={100}
                alt="logo"
              />
            </NavLink>
            <Nav className="fs-6 gap-3">
              {pages?.[myStore.product || "casino"].map((item, i) => (
                <NavLink
                  onClick={() => myStore.updateInfoContent(item.name)}
                  className="my-nav text-white"
                  to={`${
                    myStore.product === "betting" ? "/special/sport" : ""
                  }${item.url}${window.location.search}`}
                  key={i}
                >
                  {item.name}
                </NavLink>
              ))}
            </Nav>
          </div>
        ) : (
          <>
            <div className="d-flex w-100 align-items-center justify-content-between bg-black py-2">
              <NavLink
                to={`/${myStore.product === "betting" ? "special/sport" : ""}${
                  window.location.search
                }`}
                className="ms-1 mt-2"
              >
                <img alt="logo" src={logo} width={130} height={70} />
              </NavLink>
              {/*  */}

              <div id="outer-container">
                <Menu
                  id="elastic"
                  right
                  // customCrossIcon={false}
                  burgerButtonClassName={show}
                  isOpen={isBurgerOpen}
                  onOpen={hamburgerHandler}
                  onClose={hamburgerHandler}
                >
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
                          to={`${
                            myStore.product === "betting"
                              ? "/special/sport"
                              : ""
                          }${li.url}${window.location.search}`}
                          href={`${
                            myStore.product === "betting"
                              ? "/special/sport"
                              : ""
                          }${li.url}${window.location.search}`}
                        >
                          {li.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                  <div className="mt-4"></div>
                </Menu>
              </div>
              {/*  */}
            </div>
          </>
        )}
      </div>
    </header>
  );
});
export default Header;
