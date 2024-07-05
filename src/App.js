import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Header from "./components/Header";
import CasinoSection from "./components/CasinoSection";
import { useMediaQuery } from "react-responsive";
import Footer from "./components/Footer";
import Content from "./components/Content";
import CardsSection from "./components/CardsSection";

export function importImages(r) {
  let images = {};
  r.keys().map((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

function App() {
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  // const isLaptop = useMediaQuery({ query: "(min-width: 1024px)" });
  // const isTablet = useMediaQuery({
  //   query: "(min-width: 768px) and (max-width: 1023px)",
  // });
  // const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  return (
    <>
      <div className={`${isDesktop ? "w-50" : "w-100 p-2"} m-auto casino-main`}>
        <Header />
        <div className="casino-section">
          <CasinoSection />
          {isDesktop && <CardsSection />}
          <br />
        </div>
      </div>
      <div className="mt-5 min-vh-100 bg-secondary text-white-50 p-5">
        <Content isDesktop={isDesktop} />
      </div>
      <Footer />
    </>
  );
}

export default App;
