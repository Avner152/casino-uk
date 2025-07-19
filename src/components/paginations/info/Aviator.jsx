import { Helmet } from "react-helmet";
import CasinoSection from "../../CasinoSection";

export default function Aviator() {
  const curDate = new Date();

  const topPar = {
    h2: `AVIATOR`,
    p: `Aviator is a next-generation online game that falls into the "crash game" category. It's built for speed, simplicity, and suspense. Loved by younger players and streamers, Aviator creates a social betting experience where timing and nerves of steel make all the difference.`,
  };

  const par2 = {
    id: "par-2",
    h4: "🛩️ Gameplay Overview:",
    p: `The multiplier increases as the plane ascends.\nPlayers can cash out at any time.\nIf the plane crashes before you cash out, you lose the round.\nGame rounds last only a few seconds, leading to rapid action.`,
  };

  const par3 = {
    id: "par-3",
    h4: "Features That Make Aviator Stand Out:",
    p: `Live multiplayer with visible bets and chat.\nLeaderboards and achievements.\nAuto-bet and auto-cashout tools for efficiency.\nWorks seamlessly on all mobile devices.`,
  };

  const par4 = {
    id: "par-4",
    h4: `Tactics & Mindset:`,
    p: `Use a double-betting system: one small bet for early cash-out, one larger for late-game risk.\nDon’t chase losses—know your limit.\nTreat it like a game of timing and psychology, not luck alone.`,
  };

  const meta = {
    title: `Aviator: Play & Win Big in ${curDate.getFullYear()}`,
    description: `Explore Aviator. Discover thrilling gameplay, top titles like Aviator and Space Crash, and tips to maximize your wins. Play safely and responsibly!"`,
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

        <div id={par2.id} className="mt-4">
          <h4>{par2.h4}</h4>
          <ul>
            {par2.p.split("\n").map((li, i) => (
              <li key={i}>{li}</li>
            ))}
          </ul>
        </div>

        <div id={par3.id} className="mt-4">
          <h4>{par3.h4}</h4>
          <ul>
            {par3.p.split("\n").map((li, i) => (
              <li key={i}>{li}</li>
            ))}
          </ul>
        </div>

        <div id={par4.id} className="mt-4">
          <h4>{par4.h4}</h4>
          <ul>
            {par4.p.split("\n").map((li, i) => (
              <li key={i}>{li}</li>
            ))}
          </ul>
        </div>

        <p className="mt-4">
          Aviator is for players who enjoy the thrill of making decisions in
          real-time. With its fast rounds and minimalistic interface, it's the
          go-to choice for those seeking action without spinning reels or
          traditional tables.
        </p>
      </div>
    </>
  );
}
