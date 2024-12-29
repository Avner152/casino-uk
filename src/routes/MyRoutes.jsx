import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "../components/paginations/HomePage";
import CookiePolicy from "../components/paginations/CookiePolicy";
import Terms from "../components/paginations/Terms";
import PrivacyPolicy from "../components/paginations/PrivacyPolicy";
import AboutUs from "../components/paginations/AboutUs";
import History from "../components/paginations/info/History";
import CrashGames from "../components/paginations/info/CrashGames";

export default function MyRoutes({ captchaToken }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={<HomePage captchaToken={captchaToken} />}
        ></Route>
        <Route exact path="/terms-and-conditions" element={<Terms />}></Route>
        <Route exact path="/privacy-policy" element={<PrivacyPolicy />}></Route>
        <Route exact path="/about-us" element={<AboutUs />}></Route>

        <Route
          exact
          path="/cookie-consent-policy"
          element={<CookiePolicy />}
        ></Route>

        <Route exact path="/history" element={<History />}></Route>

        <Route exact path="/top-crash-games" element={<CrashGames />}></Route>
      </Routes>
    </>
  );
}
