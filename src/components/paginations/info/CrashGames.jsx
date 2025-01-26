import { Helmet } from "react-helmet";
import CasinoSection from "../../CasinoSection";

export default function CrashGames() {
  const curDate = new Date();

  const topPar = {
    h2: `Discover the Best Crash Games in the UK for ${curDate.getFullYear()}`,
    p: "Crash games are taking the UK casino scene by storm, offering a unique, adrenaline-filled experience for players who thrive on fast decisions and high rewards.",
  };

  const what = {
    id: "par-2",
    h4: "🎮 What Are Crash Games?",
    p: "Crash games are multiplayer casino games where players bet on an increasing multiplier. The goal? Cash out before the multiplier crashes! With simple rules and high-stakes excitement, crash games are perfect for thrill-seekers.",
  };

  const why = {
    id: "par-3",
    h4: "🚀 Why Are They Popular?",
    ul: [
      "Fast-Paced Fun: Each round is short and packed with excitement, making it ideal for quick gaming sessions.",
      "Social Play: Many crash games let you compete with other players, adding a dynamic, competitive edge.",
      "Big Wins Await: The risk-reward nature of crash games keeps players on the edge of their seats.",
    ],
  };

  const top = {
    id: "par-4",
    h4: `🌟 Top Crash Games of ${curDate.getFullYear()}`,
    p: "From the iconic Aviator to space-themed adventures like Space Crash, explore the best crash games that combine stunning visuals, innovative gameplay, and huge win potential.",
  };

  const meta = {
    title: `Top Crash Games in UK Casinos: Play & Win Big in ${curDate.getFullYear()}`,
    description: `Explore the best crash games in UK casinos for ${curDate.getFullYear()}. Discover thrilling gameplay, top titles like Aviator and Space Crash, and tips to maximize your wins. Play safely and responsibly!"`,
  };

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>

      <CasinoSection />
      <div className="w-100 text-bg-dark text-white pt-5 pb-5 mt-3 information">
        <div className="mt-4">
          <h2>{topPar.h2}</h2>
          <p>{topPar.p}</p>
        </div>

        <div id={what.id} className="mt-4">
          <h4>{what.h4}</h4>
          <p>{what.p}</p>
        </div>

        <div id={why.id} className="mt-4">
          <h4>{why.h4}</h4>
          <ul>
            {why.ul.map((li, i) => (
              <li key={i}>
                {li.split(":").map((sp, k) => (
                  <span className={!k ? "fw-bold" : ""} key={k}>
                    {sp} {!k ? ":" : ""}
                  </span>
                ))}
              </li>
            ))}
          </ul>
        </div>

        <div id={top.id} className="mt-4">
          <h4>{top.h4}</h4>
          <p>{top.p}</p>
        </div>

        <p>
          Ready to take off? Join the action and experience the ultimate crash
          games on trusted UK platforms-play responsibly!
        </p>
      </div>
    </>
  );
}
