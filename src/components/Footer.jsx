import logo from "../assets/logo.png";
import { useMediaQuery } from "react-responsive";

export default function Footer() {
  // const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  // const isTablet = useMediaQuery({
  //   query: "(min-width: 768px) and (max-width: 1023px)",
  // });
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const footer = [
    {
      src: "https://images.naturalint.com/q_auto/v1/production/foundation-entities/uploads/photo/1.18Plus_FooterLogos_UK.20230714081510.svg",
      url: "https://www.top10bestonlinecasinos.co.uk/",
    },
    {
      src: "https://images.naturalint.com/q_auto/v1/production/foundation-entities/uploads/photo/2.RAIG_FooterLogos_UK.20230714081542.svg",
      url: "https://www.raig.org/news-press/news/raig-social-responsibility-audit/",
    },
    {
      src: "https://images.naturalint.com/q_auto/v1/production/foundation-entities/uploads/photo/3.GAMSTOP_FooterLogos_UK.20230714081600.svg",
      url: "https://www.gamstop.co.uk/",
    },
    {
      src: "https://images.naturalint.com/q_auto/v1/production/foundation-entities/uploads/photo/4.GameCare_FooterLogos_UK.20230714081627.svg",
      url: "https://www.gamcare.org.uk/",
    },
    {
      src: "https://images.naturalint.com/q_auto/v1/production/foundation-entities/uploads/photo/5.BeGambleAware_FooterLogos_UK.20230714081641.svg",
      url: "https://www.begambleaware.org/",
    },
    {
      src: "https://images.naturalint.com/q_auto/v1/production/foundation-entities/uploads/photo/6.GamblingTherapy_FooterLogos_UK.20230714081659.svg",
      url: "https://www.gamblingtherapy.org/",
    },
  ];
  return (
    <footer className={`w-100 p-${isMobile ? "3 pt-4" : 5}`}>
      <div
        className={`d-flex justify-content-between w-${
          isMobile ? "100 flex-column align-items-center" : 75
        } m-auto`}
      >
        <div className="d-flex flex-column align-items-center">
          <img alt="logos" width={150} src={logo} />
          <div className="disclaimer">
            © 2024 Avner Levy. All rights reserved.
          </div>
        </div>
        <div className="d-flex gap-3 justify-content-center flex-wrap">
          {footer.map((f, k) => (
            <a key={k} href={f.url}>
              <img alt="disc" height={30} src={f.src} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
