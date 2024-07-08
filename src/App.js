import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { getCookie } from "./json/helpers";
import Header from "./components/Header";
import CookieConsent from "./components/CookieConsent";
import Footer from "./components/Footer";
import MyRoutes from "./routes/MyRoutes";

export function importImages(r) {
  let images = {};
  r.keys().forEach((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

function App() {
  const [hasCookie, setCookieStatus] = useState(
    getCookie("uk-sefty-cookie") ? true : false
  );
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  // const isLaptop = useMediaQuery({ query: "(min-width: 1024px)" });
  // const isTablet = useMediaQuery({
  //   query: "(min-width: 768px) and (max-width: 1023px)",
  // });
  // const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  return (
    <>
      {!hasCookie && <CookieConsent setCookieStatus={setCookieStatus} />}
      <div className={`${isDesktop ? "w-50" : "w-100 p-2"} m-auto casino-main`}>
        <Header />
      </div>
      <MyRoutes />

      <Footer />
    </>
  );
}

export default App;
