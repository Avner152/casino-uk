import React from "react";

export default function History() {
  const titlePar = {
    h1: "The History of Table Games in the UK Casino Industry",
    p: "Table games are the heartbeat of the casino experience, offering a blend of strategy, skill, and chance that has captured the imagination of players for centuries. In the UK, table games like roulette, blackjack, and poker hold a special place, both in brick-and-mortar casinos and online platforms. Their rich history and cultural significance make them a cornerstone of the UK casino industry.\nThis article takes a journey through the history of table games, their evolution in the UK, and why they continue to be timeless favorites among players.",
  };

  const early = {
    id: "par-1",
    h2: "Early Beginnings of Table Games",
    p: "The roots of table games date back thousands of years, with ancient civilizations indulging in games of chance. For example, dice games were popular in Ancient Egypt, Rome, and China. Card games emerged later, believed to have originated in Asia before spreading to Europe in the 14th century.\nIn the UK, the first recorded instances of organized gambling can be traced to the 16th and 17th centuries. Dice games and early forms of card games were often played in private clubs and taverns, catering to both the aristocracy and the working class. Over time, these games became more structured, paving the way for the development of modern table games.",
  };

  const modern = {
    id: "par-2",
    h2: "Modern Table Games and Their Popularity",
    p: `The 18th and 19th centuries marked a turning point for table games in the UK. With the rise of establishments known as "gaming houses," organized gambling became more accessible. Roulette, originating in France, made its way to the UK during this time and quickly became a favorite among the elite. Its simple yet thrilling nature appealed to players from all walks of life.\nBlackjack, originally known as "21," gained popularity due to its blend of luck and strategy. Poker, with its roots in European card games, became a global sensation by the 20th century, firmly establishing itself as a staple in UK casinos.\nThe legalization and regulation of gambling in the UK further cemented the status of table games. The Betting and Gaming Act of 1960 allowed casinos to operate legally, leading to the establishment of iconic venues like the Hippodrome Casino in London. This regulation ensured fair play and encouraged responsible gambling, making casinos more appealing to the general public.`,
  };

  const riseOfOnline = {
    id: "par-3",
    h2: "The Rise of Online Table Games",
    p: "The advent of the internet in the late 20th century brought about a new era for table games. Online casinos made these games accessible to players from the comfort of their homes. With live dealer technology, online table games became even more immersive, recreating the thrill of a physical casino.\nPopular games like roulette, blackjack, and baccarat dominate online platforms, with variations catering to different preferences. UK players enjoy features such as customizable tables, live chat with dealers, and high-definition streaming, which make the experience as authentic as possible.",
  };

  const why = {
    id: "par-4",
    h2: "Why Table Games Remain Timeless?",
    p: "Despite the introduction of newer and flashier casino games, table games continue to hold their ground for several reasons:",
    ol: [
      "Skill and Strategy: Unlike purely luck-based games, many table games allow players to influence the outcome through strategy. For instance, blackjack players can use basic strategy charts to reduce the house edge.",
      "Social Interaction: Table games encourage interaction between players and dealers, creating a sense of community. This is particularly true for poker and live dealer games, where players can chat and compete in real-time.",
      "Nostalgia and Tradition: For many, table games represent the classic casino experience. The elegance of roulette wheels, the suspense of blackjack hands, and the excitement of poker bets evoke a sense of tradition and sophistication.",
      "Adaptability: Table games have successfully adapted to modern trends. Whether in high-stakes tournaments or casual online sessions, these games continue to evolve and attract new audiences.",
    ],
  };

  const future = {
    id: "par-5",
    h2: "The Future of Table Games in the UK",
    p: "As technology advances, table games in the UK are poised to remain at the forefront of the casino industry. Virtual reality (VR) and augmented reality (AR) are set to make table games even more immersive, allowing players to interact with 3D environments and lifelike dealers. AI-based tutorials and analytics will also help players refine their strategies, making these games more accessible to beginners.\nIn addition, the emphasis on responsible gambling in the UK ensures that players can enjoy table games in a safe and controlled environment. The Gambling Commission continues to regulate casinos, both online and offline, to maintain fair play and protect players from harm.\nThe history of table games in the UK casino industry is a testament to their enduring appeal. From humble beginnings in ancient dice games to the glamorous tables of modern casinos, these games have evolved to suit the tastes of players across generations. Their blend of skill, chance, and social interaction ensures that they remain a favorite in the UK and beyond.\nAs new technologies emerge, the future of table games looks brighter than ever. Whether you’re a fan of the spinning roulette wheel, the strategic depth of blackjack, or the bluffing prowess of poker, there’s no denying the timeless charm of table games.",
  };

  return (
    <div className="w-100 text-bg-dark text-white pt-5 pb-5 mt-3 information">
      <div className="mt-4">
        <h1>{titlePar.h1}</h1>
        {titlePar.p.split("\n").map((pi, i) => (
          <p key={i}>{pi}</p>
        ))}
      </div>

      <div id={early.id} className="mt-4">
        <h2>{early.h2}</h2>
        {early.p.split("\n").map((pi, i) => (
          <p key={i}>{pi}</p>
        ))}
      </div>

      <div id={modern.id} className="mt-4">
        <h2>{modern.h2}</h2>
        {modern.p.split("\n").map((pi, i) => (
          <p key={i}>{pi}</p>
        ))}
      </div>

      <div id={riseOfOnline.id} className="mt-4">
        <h2>{riseOfOnline.h2}</h2>
        {riseOfOnline.p.split("\n").map((pi, i) => (
          <p key={i}>{pi}</p>
        ))}
      </div>

      <div id={why.id} className="mt-4">
        <h2>{why.h2}</h2>
        <p>{why.p}</p>
        <ol>
          {why.ol.map((li, i) => (
            <li key={i}>
              {li.split(":").map((sp, k) => (
                <span className={!k ? "fw-bold" : ""} key={k}>
                  {sp} {!k ? ":" : ""}
                </span>
              ))}
            </li>
          ))}
        </ol>
      </div>

      <div id={riseOfOnline.id} className="mt-4">
        <h2>{riseOfOnline.h2}</h2>
        {riseOfOnline.p.split("\n").map((pi, i) => (
          <p key={i}>{pi}</p>
        ))}
      </div>

      <div id={future.id} className="mt-4">
        <h2>{future.h2}</h2>
        {future.p.split("\n").map((pi, i) => (
          <p key={i}>{pi}</p>
        ))}
      </div>
    </div>
  );
}
