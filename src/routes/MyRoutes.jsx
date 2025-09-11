import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "../components/paginations/HomePage";
import CookiePolicy from "../components/paginations/CookiePolicy";
import Terms from "../components/paginations/Terms";
import PrivacyPolicy from "../components/paginations/PrivacyPolicy";
import AboutUs from "../components/paginations/AboutUs";
import CasinoBonuses from "../components/paginations/info/CasinoBonuses";
import SlotsGames from "../components/paginations/info/SlotsGames";
import OnlineSlot from "../components/paginations/info/OnlineSlot";
import BigBassBonanza from "../components/paginations/info/BigBassBonanza";

export default function MyRoutes() {
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
          element={<HomePage />}
          // element={<HomePage captchaToken={captchaToken} />}
        ></Route>
        <Route exact path="/terms-and-conditions" element={<Terms />}></Route>
        <Route exact path="/privacy-policy" element={<PrivacyPolicy />}></Route>
        <Route exact path="/about-us" element={<AboutUs />}></Route>

        <Route
          exact
          path="/cookie-consent-policy"
          element={<CookiePolicy />}
        ></Route>

        <Route exact path="/online-slots" element={<OnlineSlot />}></Route>
        <Route
          exact
          path="/big-bass-bonanza"
          element={<BigBassBonanza />}
        ></Route>
        <Route exact path="/casino-bonuses" element={<CasinoBonuses />}></Route>
        <Route exact path="/slots-games" element={<SlotsGames />}></Route>
      </Routes>
    </>
  );
}
