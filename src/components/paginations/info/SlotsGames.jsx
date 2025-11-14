import React from "react";
import PortalSection from "../../PortalSection";
import { Helmet } from "react-helmet";

export default function LiveGames() {
  const curDate = new Date();
  const titlePar = {
    p: `Slot games have always been at the heart of the UK casino industry, captivating players with their exciting gameplay, stunning visuals, and huge win potential. Whether you're a newcomer to online slots or a seasoned player, ${curDate.getFullYear()} brings a wide variety of games that cater to all tastes. From classic fruit machines to modern video slots with innovative features, there’s something for everyone.`,
  };

  const why = {
    id: "par-1",
    h4: "🎰 Why Are Slot Games So Popular in the UK?",
    ul: [
      "Variety of Themes: Slots offer a wide range of themes, from ancient civilizations to fantasy worlds, ensuring that every player finds a game that suits their style.",
      "Huge Jackpots: Many slot games feature progressive jackpots, where the prize pool grows with every spin, offering the chance to win life-changing amounts.",
      "Simple to Play: With easy-to-understand mechanics, slots are perfect for players of all experience levels. Whether you’re a beginner or an expert, you can start spinning and winning in no time.",
    ],
  };

  const popularGames = {
    id: "par-2",
    h4: "🌟 Popular Slot Games in UK Casinos",
    ul: [
      "Classic Slots: For those who love nostalgia, classic fruit machines offer straightforward gameplay with big win potential.",
      "Video Slots: Modern video slots bring exciting features like bonus rounds, free spins, and multipliers. Games like Starburst and Gonzo's Quest continue to captivate UK players with their innovative designs and mechanics.",
      "Progressive Jackpot Slots: Chase massive payouts with popular progressive jackpots like Mega Moolah and Hall of Gods, which can turn a single spin into a life-altering win.",
    ],
  };

  const tips = {
    id: "par-3",
    h4: "💡 Tips for Playing Slot Games",
    ul: [
      "Understand the RTP: Check the Return to Player (RTP) percentage for each slot to gauge the odds of winning over time.",
      "Start Small: Begin with smaller bets to explore the game and learn its features before going for higher stakes.",
      "Take Advantage of Bonuses: Look out for casino promotions like free spins or no-wagering bonuses to maximize your gameplay without spending more.",
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

          <div id={popularGames.id} className="mt-4">
            <h4>{popularGames.h4}</h4>
            <ul>
              {popularGames.ul.map((li, i) => (
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
              With so many options, from low-stakes casual games to high-roller
              jackpots, {curDate.getFullYear()} is an exciting year for slot
              enthusiasts. Dive into the vibrant world of slot games, where
              every spin brings a new adventure, and start your journey towards
              big wins today!
            </p>
            <p>
              Play Responsibly While slots are thrilling and fun, it’s important
              to play responsibly. Set a budget, take regular breaks, and make
              sure to play within your limits to ensure a safe and enjoyable
              gaming experience.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
