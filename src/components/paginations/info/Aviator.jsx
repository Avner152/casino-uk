import { Helmet } from "react-helmet";
import PortalSection from "../../PortalSection";

export default function Aviator() {
  const curDate = new Date();

  const topPar = {
    h2: `Aviator Crash Game UK Guide`,
    p: `Aviator is one of the most popular crash games at UK online casinos, combining fast rounds with simple but high-pressure decision making. Instead of spinning reels or playing a long card hand, you watch a multiplier rise and choose the exact moment to cash out before the plane crashes. That blend of timing, risk control, and real-time momentum is why Aviator attracts both casual players and high-intensity bettors.
Built for speed, simplicity, and suspense, Aviator has become a go-to title for players who enjoy quick sessions and strategic choices. With multiplayer visibility, live activity, and optional auto features, the game delivers a modern social casino experience that feels very different from traditional slots or table games.`,
  };

  const par2 = {
    id: "par-2",
    h4: "Gameplay Overview:",
    p: `The multiplier increases continuously as the plane ascends.\nPlayers can cash out manually at any time before the crash.\nIf the plane crashes before you cash out, that stake is lost for the round.\nMost rounds last only a few seconds, creating high-frequency action and rapid decision points.\nMany players place two bets at once to balance conservative and aggressive cashout targets.`,
  };

  const par3 = {
    id: "par-3",
    h4: "Features That Make Aviator Stand Out:",
    p: `Live multiplayer interface with visible bets and active player feed.\nSimple game loop that is easy to learn but difficult to master.\nAuto-bet and auto-cashout tools for structured sessions.\nFast-loading performance across desktop, tablet, and mobile browsers.\nTransparent round pacing that helps players build consistent routines.`,
  };

  const par4 = {
    id: "par-4",
    h4: `Tactics & Mindset:`,
    p: `Use a two-bet approach when your bankroll allows: one smaller stake for early cash-out and one optional higher-risk position for larger multipliers.\nSet a session limit before you start and stop when you reach it.\nAvoid chasing losses after crashed rounds; variance is part of crash games.\nFocus on consistency over huge multipliers and track your average cashout behavior over time.\nTreat Aviator as a timing and risk-management game, not a guaranteed profit strategy.`,
  };

  const par5 = {
    id: "par-5",
    h4: `How to Choose the Right Aviator Casino in the UK:`,
    p: `Play only on licensed platforms with clear terms, transparent payouts, and responsible gambling tools.\nCheck minimum and maximum stake limits so the table fits your budget.\nLook for stable mobile performance, especially if you prefer short sessions on the go.\nReview withdrawal speed and payment methods before depositing.\nCompare welcome offers carefully and always read wagering requirements attached to bonus funds.`,
  };

  const meta = {
    title: `Aviator Crash Game UK ${curDate.getFullYear()}: How It Works, Features & Strategy Tips`,
    description: `Discover how Aviator crash game works at UK online casinos. Learn gameplay rules, key features, practical strategy tips, and how to choose licensed sites for safe and responsible play in ${curDate.getFullYear()}.`,
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
          {topPar.p.split("\n").map((li, i) => (
            <p key={i}>{li}</p>
          ))}
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

        <div id={par5.id} className="mt-4">
          <h4>{par5.h4}</h4>
          <ul>
            {par5.p.split("\n").map((li, i) => (
              <li key={i}>{li}</li>
            ))}
          </ul>
        </div>

        <p className="mt-4">
          Aviator is ideal for players who enjoy making quick decisions in
          real-time and managing risk round by round. With short sessions,
          mobile-friendly design, and straightforward mechanics, it remains one
          of the strongest alternatives to traditional slots and table games in
          the UK online casino market.
        </p>
      </div>
    </>
  );
}
