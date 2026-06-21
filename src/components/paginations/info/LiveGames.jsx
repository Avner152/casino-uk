import React from "react";
import PortalSection from "../../PortalSection";
import { Helmet } from "react-helmet";

export default function LiveGames() {
  const curDate = new Date();

  const topPar = {
    h2: `Experience the Best Live Casino Games in the UK for ${curDate.getFullYear()}`,
    p: "Live casino games combine the convenience of online gambling with the realism of a physical casino floor. Through HD streams, professional dealers, and real-time game control, UK players can enjoy authentic roulette, blackjack, baccarat, and game show formats without leaving home. This category has become one of the fastest-growing segments of the UK online casino market thanks to stronger mobile performance, interactive features, and trusted UKGC-licensed platforms.\nLive Game Shows are a standout part of this experience, blending the atmosphere of entertainment television with real-money betting opportunities. Hosted from professional studios by experienced presenters, these titles deliver social interaction, fast gameplay, and high-energy bonus rounds that appeal to both casual players and high-risk enthusiasts.",
  };

  const par1 = {
    id: "par-1",
    h4: "Popular Live Game Show Titles:",
    ul: [
      "Crazy Time - A vibrant, colorful wheel-based game full of random multipliers and exciting bonus rounds.",
      "Monopoly Live - Combines the classic Monopoly board game with a live money wheel and augmented reality.",
      "Deal or No Deal Live - Based on the iconic TV show, offering suspense-filled briefcase reveals and bonus games.",
      "Dream Catcher - A simple wheel game with multiplier segments and easy entry for new players.",
      "Lightning Roulette - Traditional roulette enhanced by random lightning multipliers for bigger payout potential.",
    ],
  };

  const par2 = {
    id: "par-2",
    h4: "Unique Features:",
    ul: [
      "Real-time interactivity with the host and other players.",
      "Studio-quality visuals, sound, and camera work.",
      "Bonus rounds that require skill or timing.",
      "Games designed for both fun and profit.",
      "Cross-device compatibility on desktop, tablet, and mobile.",
      "Live chat, statistics panels, and fast bet confirmation.",
    ],
  };

  const par3 = {
    id: "par-4",
    h4: "Top Live Casino Providers in the UK:",
    ul: [
      "Evolution: Industry-leading live dealer studios and game show innovation.",
      "Pragmatic Play Live: Fast-growing portfolio with modern presentation and broad table limits.",
      "Ezugi: Reliable live tables with strong regional game coverage.",
      "Playtech Live: Premium studio quality and trusted classic table formats.",
      "Authentic Gaming: Real-casino streamed roulette from land-based venues.",
    ],
  };

  const par4 = {
    id: "par-5",
    h4: "Most Popular Live Dealer Table Games:",
    ul: [
      "Live Roulette: European, Auto Roulette, and multiplier-enhanced variants.",
      "Live Blackjack: Multiple seat limits and side bet options for different bankroll sizes.",
      "Live Baccarat: Fast rounds with straightforward betting for beginners and experienced players.",
      "Casino Poker Live: Variants such as Three Card Poker and Casino Hold'em.",
      "Live Game Shows: Entertainment-first formats with wheel mechanics and random bonus events.",
    ],
  };

  const par5 = {
    id: "par-6",
    h4: "Payments, Safety, and Responsible Play:",
    ul: [
      "Play only at UKGC-licensed casinos with clear terms and transparent policies.",
      "Choose trusted payment methods and review withdrawal times before depositing.",
      "Use deposit limits, loss limits, and session reminders to stay in control.",
      "Read bonus conditions carefully, especially wagering requirements on live games.",
      "Treat live casino as entertainment first and avoid chasing losses.",
    ],
  };

  const tips = {
    id: "par-3",
    h4: "Tips for Playing Live Casino Games",
    ul: [
      "Understand the game rules and bonus features beforehand.",
      "Some games offer side bets or bonus games with higher payouts.",
      "Watch for patterns and player trends in community chat.",
    ],
  };

  const meta = {
    title: `Best Live Casino Games in the UK ${curDate.getFullYear()}: Real-Time Action & Fun`,
    description: `Discover the top live casino games in the UK for ${curDate.getFullYear()}. Enjoy real-time action with professional dealers, immersive gameplay, and interactive features. Play responsibly and experience the thrill from home!`,
  };

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>

      <PortalSection />
      <div className="fw-bold w-100 text-bg-dark text-white pt-4 mb-5 mt-2 information">
        <div className="p-4">
          <div>
            <h2>{topPar.h2}</h2>
            {topPar.p.split("\n").map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>

          <div id={par1.id} className="mt-4">
            <h4>{par1.h4}</h4>
            <ul>
              {par1.ul.map((li, i) => (
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

          <div id={par2.id} className="mt-4">
            <h4>{par2.h4}</h4>

            <ul>
              {par2.ul.map((li, i) => (
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

          <div id={tips.id} className="mt-4">
            <h4>{tips.h4}</h4>
            <ul>
              {tips.ul.map((li, i) => (
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

          <div id={par3.id} className="mt-4">
            <h4>{par3.h4}</h4>
            <ul>
              {par3.ul.map((li, i) => (
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

          <div id={par4.id} className="mt-4">
            <h4>{par4.h4}</h4>
            <ul>
              {par4.ul.map((li, i) => (
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

          <div id={par5.id} className="mt-4">
            <h4>{par5.h4}</h4>
            <ul>
              {par5.ul.map((li, i) => (
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

          <div className="mt-4">
            <p>
              Live casino games are ideal for players who want authentic,
              dealer-led action with the flexibility of online play. Whether you
              prefer classic tables or modern game shows, this category offers a
              strong mix of entertainment, strategy, and immersive real-time
              gameplay for UK audiences.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
