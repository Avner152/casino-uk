import React from "react";
import PortalSection from "../../PortalSection";
import { Helmet } from "react-helmet";

export default function LiveGames() {
  const curDate = new Date();
  const titlePar = {
    p: "Book of Dead is one of the most recognizable and played slot games in the UK. Developed by Play'n GO, this slot has become a flagship title due to its high volatility, straightforward gameplay, and thrilling bonus mechanics. The game's ancient Egyptian theme and classic adventurer storyline attract players from all levels.",
  };

  const par1 = {
    id: "par-1",
    h4: "📖 Game Breakdown:",
    ul: [
      "Theme: Ancient Egypt, Rich Wilde's treasure-hunting adventure.",
      "Reels & Paylines: 5 reels, 10 adjustable paylines.",
      "RTP: Around 96.21%.",
      "Volatility: High - suitable for players who enjoy bigger, less frequent wins.",
      "Top Feature: Free Spins with a special expanding symbol.",
    ],
  };

  const par2 = {
    id: "par-2",
    h4: "🧭 Why UK Players Love It:",
    ul: [
      "Massive win potential during the free spins round.",
      "Easy-to-follow mechanics appeal to all player levels.",
      "Works well across desktop and mobile platforms.",
    ],
  };

  const par3 = {
    id: "par-3",
    h4: "🎯 How to Play Smart:",
    ul: [
      "Always activate all paylines for the best chance of winning.",
      "Try a lower stake per spin with all lines covered.",
      "Use autoplay features wisely and stick to a loss limit.",
      "Play in demo mode to get familiar before using real money.",
    ],
  };

  const meta = {
    title: `Top Slot Games in the UK ${curDate.getFullYear()}: Big Wins & Exciting Features`,
    description: `Explore the best slot games in the UK for ${curDate.getFullYear()}. Play exciting video slots, classic machines, and progressive jackpots. Discover tips, top games, and play responsibly for a thrilling casino experience!"`,
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
          <p>{titlePar.p}</p>

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

          <div className="mt-4">
            <p>
              Book of Dead continues to top the popularity charts year after
              year because it blends nostalgia, high potential rewards, and
              accessibility in a well-designed package. It's a must-try for any
              slot enthusiast.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
