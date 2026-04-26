import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "../components/paginations/HomePage";
import CookiePolicy from "../components/paginations/CookiePolicy";
import Terms from "../components/paginations/Terms";
import PrivacyPolicy from "../components/paginations/PrivacyPolicy";
import AboutUs from "../components/paginations/AboutUs";
import CrashGames from "../components/paginations/info/CrashGames";
import LiveGames from "../components/paginations/info/LiveGames";
import SlotsGames from "../components/paginations/info/SlotsGames";
import TableGames from "../components/paginations/info/TableGames";
import myStore from "../mobX/Store";
import { observer } from "mobx-react";
import SportPage from "../components/sport/SportPage";
import SportTemplate from "../components/paginations/info/SportTemplate";

const MyRoutes = observer(({ isBot }) => {
  const location = useLocation();

  useEffect(() => {
    let isSport = location.pathname.includes("sport");
    if (!myStore.product) myStore.updateProduct(isSport ? "betting" : "casino");
    document.body.classList = isSport ? "sport" : "casino";

    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage isBot={isBot} />} />
        <Route exact path="/terms-and-conditions" element={<Terms />} />
        <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route exact path="/about-us" element={<AboutUs />} />
        <Route exact path="/cookie-consent-policy" element={<CookiePolicy />} />

        {/*  */}
        <Route
          exact
          path="/special/sport/terms-and-conditions"
          element={<Terms />}
        />
        <Route
          exact
          path="/special/sport/privacy-policy"
          element={<PrivacyPolicy />}
        />
        <Route exact path="/special/sport/about-us" element={<AboutUs />} />
        <Route
          exact
          path="/special/sport/cookie-consent-policy"
          element={<CookiePolicy />}
        />

        <Route exact path="/special/sport" element={<SportPage />} />

        <Route exact path="/special/sport/:page" element={<SportTemplate />} />
        <Route exact path="/table-games" element={<TableGames />} />
        <Route exact path="/top-crash-games" element={<CrashGames />} />
        <Route exact path="/live-games" element={<LiveGames />} />
        <Route exact path="/slots-games" element={<SlotsGames />} />
      </Routes>
    </>
  );
});

export default MyRoutes;
