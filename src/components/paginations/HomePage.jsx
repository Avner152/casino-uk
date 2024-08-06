import CasinoSection from "../CasinoSection";
import Content from "../Content";
import { useMediaQuery } from "react-responsive";

export default function HomePage() {
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  return (
    <>
      <div className="w-100 p-2 m-auto  casino-section">
        <CasinoSection />
        {/* {isDesktop && <CardsSection />} */}
        <br />
      </div>
      <div className="content _mt-2 min-vh-100 _bg-secondary text-white-50 p-4">
        <Content isDesktop={isDesktop} />
      </div>
    </>
  );
}
