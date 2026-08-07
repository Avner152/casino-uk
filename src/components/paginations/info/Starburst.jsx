import { Helmet } from "react-helmet";
import PortalSection from "../../PortalSection";

export default function Starburst() {
  const curDate = new Date();

  const topPar = {
    h2: `Starburst Slot - A UK Favourite That Still Shines`,
    p: `Starburst remains a go-to game across UK casinos, beloved for its simplicity, elegance, and high frequency of small-to-medium wins. Unlike high-volatility games that can drain your bankroll, Starburst is ideal for extended play and meeting wagering requirements on bonuses.\nDesign and Sound With a cosmic theme and vibrant jewel symbols, Starburst’s visuals are both classic and contemporary. Its upbeat soundtrack and quick animations add energy without being overwhelming — ideal for players seeking light, fast-paced fun.`,
  };

  const par2 = {
    id: "par-2",
    h4: "Gameplay Breakdown:",
    ul: [
      "Medium hit frequency (1 in 5-6 spins often pays out)",
      "No complex scatter symbols or mini-games — ideal for beginners",
      "Triggering expanding wilds in the centre reels can lead to impressive chains of wins",
    ],
    p: `Despite being released over a decade ago, Starburst remains one of the most popular online slots in the UK. It has earned a reputation as a 'gateway game' for new players due to its approachable gameplay and smooth animations, while experienced players continue to enjoy its consistency and frequent bonus tie-ins.\nStarburst is one of the most iconic online slots and continues to be a staple in almost every UK casino. Known for its vibrant visuals, expanding wilds, and smooth gameplay, it’s ideal for both new players and seasoned spinners.`,
  };

  const par3 = {
    id: "par-3",
    h4: "Key Features",
    ul: [
      "Expanding wilds that trigger respins",
      "10 fixed paylines with both-ways win potential",
      "Fast-paced, low-volatility mechanics",
    ],
  };

  const par4 = {
    id: "par-4",
    h4: `Why It’s Often Used in Bonuses:`,
    ul: [
      "Easy to understand, perfect for new players",
      "Low minimum bet sizes",
      "Appears in most welcome free spin promotions",
    ],
    p: `Use a double-betting system: one small bet for early cash-out, one larger for late-game risk.\nDon’t chase losses—know your limit.\nTreat it like a game of timing and psychology, not luck alone.`,
  };

  const par5 = {
    id: "par-5",
    h4: `Gameplay Tips:`,
    ul: [
      "Use it to meet wagering with low volatility",
      "Ideal as a ‘warm-up’ game during longer sessions",
      "Stick to casinos that offer enhanced Starburst spin deals",
    ],
  };

  const meta = {
    title: `Starburst: Play & Win Big in ${curDate.getFullYear()}`,
    description: `Explore Starburst. Discover thrilling gameplay, top titles like Starburst and Space Crash, and tips to maximize your wins. Play safely and responsibly!"`,
  };

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>

      <PortalSection />
      <div className="w-100 text-bg-dark text-white pt-5 pb-5 mt-3 information">
        <div className="mt-4">
          <h2>{topPar.h2}</h2>
          <p>{topPar.p}</p>
        </div>

        <div id={par2.id} className="mt-4">
          <h4>{par2.h4}</h4>
          <ul>
            {par2?.ul.map((li, i) => (
              <li key={i}>{li}</li>
            ))}
          </ul>

          <div className="mt-2">
            {par2?.p.split("\n").map((li, i) => (
              <p key={i}>{li}</p>
            ))}
          </div>
        </div>

        <div id={par3.id} className="mt-4">
          <h4>{par3.h4}</h4>
          <ul>
            {par3?.ul.map((li, i) => (
              <li key={i}>{li}</li>
            ))}
          </ul>
        </div>

        <div id={par4.id} className="mt-4">
          <h4>{par4.h4}</h4>
          <ul>
            {par4?.ul.map((li, i) => (
              <li key={i}>{li}</li>
            ))}
          </ul>
          {par4?.p.split("\n").map((li, i) => (
            <p key={i}>{li}</p>
          ))}
        </div>
        <div id={par5.id} className="mt-4">
          <h4>{par5.h4}</h4>
          <ul>
            {par5?.ul.map((li, i) => (
              <li key={i}>{li}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
