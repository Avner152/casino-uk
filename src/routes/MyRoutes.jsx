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
import myStore from "../mobX/Store";
import SportPage from "../components/sport/SportPage";
import { observer } from "mobx-react";

const MyRoutes = observer(() => {
  const location = useLocation();

  useEffect(() => {
    let isSport = location.pathname.includes("sport");
    if (!myStore.product) myStore.updateProduct(isSport ? "betting" : "casino");
    if (!isSport) document.body.classList.remove("sport");

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
        <Route exact path="/special/sport" element={<SportPage />} />
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
});

export default MyRoutes;
