import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useMediaQuery } from "react-responsive";
import { importImages } from "../App";
export default function Footer() {
  // const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  // const isTablet = useMediaQuery({
  //   query: "(min-width: 768px) and (max-width: 1023px)",
  // });
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const importedRegPhotos = importImages(
    require.context("../assets/reg", false, /\.(svg)$/)
  );

  const regLogosData = [
    { name: "18plus", url: "https://www.top10bestonlinecasinos.co.uk/" },
    {
      name: "raig",
      url: "https://www.raig.org/news-press/news/raig-social-responsibility-audit",
    },
    { name: "gamstop", url: "https://www.gamstop.co.uk" },
    { name: "gamcare", url: "https://www.gamcare.org.uk/" },
    { name: "be-gamble-aware", url: "https://www.begambleaware.org/" },
    { name: "gambling-therapy", url: "https://www.gamblingtherapy.org/" },
  ];

  return (
    <footer className={`w-100 p-${isMobile ? "0 pb-5" : 5}`}>
      <div
        className={`d-flex justify-content-between w-${
          isMobile ? "100 flex-column align-items-center" : 75
        } m-auto`}
      >
        <div className="d-flex flex-column align-items-center">
          <Link to="/">
            <img alt="logos" width={150} src={logo} />
          </Link>
          <div className="disclaimer">
            © 2024 Avner Levy. All rights reserved.
          </div>
        </div>
        <div className="d-flex flex-column gap-3">
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            {regLogosData.map((photo, k) => (
              <a key={k} href={photo.url}>
                <img
                  alt={photo.name}
                  height={30}
                  src={importedRegPhotos[`${photo.name}.svg`]}
                />
              </a>
            ))}
          </div>
          <div className="d-flex gap-3 justify-content-center">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/cookie-consent-policy">Cookies Policy</Link>
            <Link to="/terms-and-conditions">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
