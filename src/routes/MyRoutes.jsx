import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "../components/paginations/HomePage";
import CookiePolicy from "../components/paginations/CookiePolicy";
import Terms from "../components/paginations/Terms";
import PrivacyPolicy from "../components/paginations/PrivacyPolicy";

export default function MyRoutes() {
  //  int number = 2;
  // 0 01 100 1000 10000 100000 100000 // 2^32
  // 2^64

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    // setActivated(activeHandler);
  }, [location.pathname]);
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route exact path="/terms-and-conditions" element={<Terms />}></Route>
        <Route exact path="/privacy-policy" element={<PrivacyPolicy />}></Route>
        <Route
          exact
          path="/cookie-consent-policy"
          element={<CookiePolicy />}
        ></Route>
      </Routes>
    </>
  );
}
