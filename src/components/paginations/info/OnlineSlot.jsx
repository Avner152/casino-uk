import React from "react";
import CasinoSection from "../../CasinoSection";
import { Helmet } from "react-helmet";

export default function OnlineSlot() {
  const curDate = new Date();
  const topPar = {
    h4: `Online Slots & Jackpots – Spin & Win Big`,
    p: "Online slot games are the heartbeat of UK online casinos — easy to play, visually captivating, and packed with potential for massive payouts. Whether you love classic 3-reel machines, immersive video slots, or progressive jackpots with life-changing prizes, our slot section covers it all.",
  };

  const par1 = {
    id: "par-1",
    h4: "🎮 Types of Slots Available",
    ul: [
      "Classic Slots – Simple fruit machines with 3 reels and traditional symbols. Great for nostalgic players.",
      "Video Slots – Feature-rich games with animated graphics, bonus rounds, and cinematic audio.",
      "Megaways Slots – A modern twist with thousands of win ways and dynamic reels on every spin.",
      "Progressive Jackpots – Pool-based prizes that grow over time. One lucky spin can trigger a payout worth millions.",
    ],
  };

  const par2 = {
    id: "par-2",
    h4: "🌟 Top Providers in the UK Slot Market",
    ul: [
      "NetEnt – Known for iconic titles like Starburst and Gonzo’s Quest.",
      "Play’n GO – Creators of Book of Dead and countless mythology-themed slots.",
      "Big Time Gaming – Pioneers of Megaways mechanics.",
      "Red Tiger & Pragmatic Play – Popular for daily jackpots and fast-paced features.",
    ],
  };

  const par3 = {
    id: "par-3",
    h4: "💡 Features That Enhance Your Play",
    ul: [
      "Cascading symbols and chain wins",
      "Free spins with retriggers",
      "Wild reels and symbol upgrades",
      "Buy Bonus features for instant entry into action",
    ],
  };
  const par4 = {
    id: "par-4",
    h4: "📱 Mobile Slot Experience",
    p: "Every slot game listed on our site is fully mobile-optimized, allowing you to spin the reels on your smartphone or tablet. The best slot sites offer:",
    ul: [
      "Touch-friendly interfaces",
      "Landscape and portrait mode gameplay",
      "Battery-efficient design for longer sessions",
    ],
  };
  const par5 = {
    id: "par-5",
    h4: "🎯 Tips for Smarter Slot Play",
    ul: [
      "Choose high RTP (Return to Player) games — 96% and above is ideal",
      "Start in demo mode to learn game mechanics",
      "Take advantage of slot bonuses and free spins",
      "Manage your budget: don’t chase losses or overbet during cold streaks",
    ],
  };
  const par6 = {
    id: "par-6",
    h4: "💰 Jackpot Highlights",
    p: "Look for featured slots offering linked jackpots across multiple casinos. These games can trigger massive wins even on low-stake bets. Progressive jackpots like Mega Moolah or WowPot can reach multi-million-pound totals.",
  };

  const meta = {
    title: `Online Slots & Jackpots in UK Casinos: (${curDate.getFullYear()})`,
    description: `Discover the timeless experience of the best online slots & jackpots in UK casinos. From classic reels to innovative video slots, explore their rich history, cultural significance, and the innovations shaping their future in ${curDate.getFullYear()}. Play safely and responsibly!`,
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
          <h4>{topPar.h4}</h4>
          {topPar.p.split("\n").map((pi, i) => (
            <p key={i}>{pi}</p>
          ))}
        </div>

        <div id={par1.id} className="mt-4">
          <h4>{par1.h4}</h4>
          {par1.ul.map((li, i) => {
            const [title, text] = li.split(":");
            return (
              <li className="my-1" key={i}>
                <b>{title}</b>: <span>{text}</span>
              </li>
            );
          })}
        </div>

        <div id={par2.id} className="mt-4">
          <h4>{par2.h4}</h4>
          <ul>
            {par2.ul.map((li, i) => (
              <li className="my-1" key={i}>
                {li}
              </li>
            ))}
          </ul>
        </div>

        <div id={par3.id} className="mt-4">
          <h4>{par3.h4}</h4>

          <ul>
            {par3.ul.map((li, i) => (
              <li className="my-1" key={i}>
                {li}
              </li>
            ))}
          </ul>
        </div>
        <div id={par4.id} className="mt-4">
          <h4>{par4.h4}</h4>

          <ul>
            {par4.ul.map((li, i) => (
              <li className="my-1" key={i}>
                {li}
              </li>
            ))}
          </ul>
        </div>
        <div id={par5.id} className="mt-4">
          <h4>{par5.h4}</h4>

          <ul>
            {par5.ul.map((li, i) => (
              <li className="my-1" key={i}>
                {li}
              </li>
            ))}
          </ul>
        </div>

        <div id={par6.id} className="mt-4">
          <h4>{par6.h4}</h4>
          <p>{par6.p}</p>
        </div>
      </div>
    </>
  );
}
