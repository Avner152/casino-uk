import CasinoSection from "../../CasinoSection";
import { Helmet } from "react-helmet";

export default function CasinoBonuses() {
  const curDate = new Date();

  const topPar = {
    h2: `Casino Bonuses – Stretch Your Play, Maximize Your Value - ${curDate.getFullYear()}`,
    p: `Casino bonuses are more than a marketing gimmick — they’re a real opportunity to test new games, extend playtime, and even win big without spending much. But smart players know it’s not just about the biggest number; it’s about terms, wagering, and how well a bonus matches your playstyle.\n🧮 Wagering Explained A 30x wagering requirement on a £100 bonus means you must wager £3,000 before withdrawing winnings. Some sites now offer low-wager or wager-free bonuses — a huge win for casual players.`,
  };

  const par1 = {
    id: "par-1",
    h4: "🎯 Bonuses By Player Type:",
    ul: [
      "Casual: No deposit bonuses and free spins",
      "Regulars: Reload offers and weekly cashback",
      "High Rollers: VIP cashback, match bonuses of £500+, exclusive events",
    ],
  };

  const par2 = {
    id: "par-2",
    h4: "📈 Bonus Strategy Tips:",
    ul: [
      "Claim bonuses only on games you enjoy — wagering through on high-variance slots can be tough",
      "Divide your bonus use: one part for low-risk play, another for jackpot chases",
    ],
    p: `Casino bonuses are the cornerstone of every savvy player's strategy. They can help increase your bankroll, extend your playtime, and offer you a chance to explore games you might not otherwise try. In the competitive UK casino space, bonus offerings evolve constantly, with many sites now introducing no-wager promotions and daily missions.\nBonuses are the best way to get more from your deposits. UK casinos offer a wide range of promotions for new and loyal players alike.`,
  };

  const par3 = {
    id: "par-3",
    h4: "🎁 Types of Bonuses",
    ul: [
      "No deposit free spins",
      "Match deposit offers",
      "Cashback on net losses",
      "Reload bonuses and VIP rewards",
    ],
  };
  const par4 = {
    id: "par-4",
    h4: "📋 How to Spot a Good Bonus",
    ul: [
      "Reasonable wagering (under 35x)",
      "No max cashout for high rollers",
      "Valid on popular slots and table games",
      "Available across mobile and desktop",
    ],
  };
  const par5 = {
    id: "par-5",
    h4: "💬 Tips to Use Bonuses Wisely",
    ul: [
      "Always read the bonus terms",
      "Avoid placing large bets to rush wagering",
      "Combine bonuses with low-volatility slots to stretch playtime",
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

      <CasinoSection />
      <div className="fw-bold w-100 text-bg-dark text-white pt-4 mb-5 mt-2 information">
        <div className="p-4">
          <div>
            <h2>{topPar.h2}</h2>
            <p>{topPar.p}</p>
          </div>

          <div id={par1.id} className="mt-4">
            <h4>{par1.h4}</h4>
            <ul>
              {par1.ul.map((li, i) => {
                const [title, text] = li.split(":");
                return (
                  <div className="my-1" key={i}>
                    <b>{title}</b>: <span>{text}</span>
                  </div>
                );
              })}
            </ul>
          </div>

          <div id={par2.id} className="mt-4">
            <h4>{par2.h4}</h4>

            <ul>
              {par2.ul.map((li, i) => {
                const [title, text] = li.split("-");
                return (
                  <li className="my-1" key={i}>
                    <b>{title}</b>- <span>{text}</span>
                  </li>
                );
              })}
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
        </div>
      </div>
    </>
  );
}
