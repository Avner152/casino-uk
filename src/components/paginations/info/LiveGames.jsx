import React from "react";
import PortalSection from "../../PortalSection";
import { Helmet } from "react-helmet";

export default function LiveGames() {
  const curDate = new Date();

  const topPar = {
    h2: `Experience the Best Live Casino Games in the UK for ${curDate.getFullYear()}`,
    p: "Live Game Shows are a thrilling category of online casino games that blend the interactive atmosphere of a TV game show with real-money betting opportunities. They are streamed live from professional studios and hosted by charismatic presenters who keep the energy high and the experience immersive.",
  };

  const par1 = {
    id: "par-1",
    h4: "🎲 Popular Live Game Show Titles:",
    ul: [
      "Crazy Time – A vibrant, colorful wheel-based game full of random multipliers and exciting bonus rounds.",
      "Monopoly Live – Combines the classic Monopoly board game with a live money wheel and augmented reality.",
      "Deal or No Deal Live – Based on the iconic TV show, offering suspense-filled briefcase reveals and bonus games.",
    ],
  };

  const par2 = {
    id: "par-2",
    h4: "🔍 Unique Features:",
    ul: [
      "Real-time interactivity with the host and other players.",
      "Studio-quality visuals, sound, and camera work.",
      "Bonus rounds that require skill or timing.",
      "Games designed for both fun and profit.",
    ],
  };

  const tips = {
    id: "par-3",
    h4: "🎯 Tips for Playing Live Casino Games",
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
            <p>{topPar.p}</p>
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

          <div className="mt-4">
            <p>
              Live Game Shows are ideal for players looking for more
              entertainment than traditional casino games offer. Whether you're
              here for big wins or just the fun of the show, this category
              brings excitement and innovation to the online casino experience.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
