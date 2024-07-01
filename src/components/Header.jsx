import logo from "../assets/logo.png";
import { useMediaQuery } from "react-responsive";

export default function Header() {
  // const [isBurgerOpen, setBurgerOpen] = useState(false);

  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  // const isTablet = useMediaQuery({
  //   query: "(min-width: 768px) and (max-width: 1023px)",
  // });
  // const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <header className="header">
      <div
        className={`fw-bold d-flex ${
          !isDesktop && "justify-content-between"
        } align-items-center mt-3 fs-2 text-uppercase`}
      >
        <img src={logo} width={180} alt="logo" height={50} className="_mt-2" />
        {/* {isDesktop ? (
          <div className="d-flex align-items-center justify-content-between w-100">
            <div className="d-flex fs-6 justify-content-start gap-3 p-3 text-white">
              <span>Casino</span>
              <span>Slots</span>
              <span>Blackjack</span>
              <span>live Casino</span>
              <span>Roulette</span>
            </div>
          </div>
        ) : (
          <div className="me-3">
            <Hamburger toggled={isBurgerOpen} toggle={setBurgerOpen} />
            {isBurgerOpen && (
              <nav className="nav-menu">
                <ul className="fs-6">
                  <li>Casino</li>
                  <li>Slots</li>
                  <li>Blackjack</li>
                  <li>live Casino</li>
                  <li>Roulette</li>
                </ul>
              </nav>
            )}
          </div>
        )} */}
      </div>
    </header>
  );
}
