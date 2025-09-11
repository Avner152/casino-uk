import { Accordion } from "react-bootstrap";

export default function Content() {
  const why = {
    id: "why",
    h2: "🔍 Why Trust TopCasinoPicksUK.com?",
    ul: [
      "🎯 Expert Casino Reviews – Every site featured on our platform undergoes thorough vetting. We evaluate licensing, safety, game variety, payout speed, mobile compatibility, and bonus fairness. Our review system focuses on transparency, so you always know exactly what to expect from each casino.",
      "🎁 Exclusive Bonus Deals – Get access to no-deposit bonuses, low-wagering free spins, VIP perks, and cashback offers that are tailored for UK players. We only list bonus deals that are fair, clear, and actually beneficial to players.",
      "📱 Play Anytime, Anywhere – All listed casinos are optimized for mobile and tablet, with lightning-fast load times and sleek interfaces for on-the-go gaming. Whether you're on Android, iOS, or desktop — you’ll enjoy consistent quality.",
      "💰 Play with Real Winnings – Find games that offer great odds, fast payouts, and verified fairness. We help you sort between volatile jackpots, low-stake spins, and strategic table games. Learn about RTPs, variance, and bonus hit frequency for smarter play.",
      "🧠 Learn, Compare & Win Smarter – We publish expert strategies, RTP breakdowns, and tips to avoid common traps. Our goal is to help you play smarter and make the most out of every spin or bet. From bankroll tips to bonus unlocking techniques, we guide you at every step.",
      "🛡️ Safety & Support First – Our picks only include platforms licensed by recognized international or UK regulators. We also link to responsible gaming tools and support networks. Player safety is our top priority, and we regularly update content to reflect changing industry standards.",
    ],
  };
  const faq = {
    t: "Comprehensive Insights and FAQs",
    p: "We understand that UK players often have questions about choosing the best online casinos. That’s why we’ve compiled an informative FAQ section, answering common queries about licensing, payment methods, game fairness, and more.",
    ques: [
      "Which are the top 10 online casinos in the UK?",
      "What is the best slots operator from the top 10 casino UK sites?",
      "Can I play the best roulette at the top 10 casino sites in the UK?",
      "Do the top 10 online casino UK platforms offer the best welcome bonuses?",
      "How to find the best app among the top 10 casino sites in the UK?",
    ],
    ans: [
      "Our list of the top 10 UK online casinos provides a comprehensive analysis of the best-rated operators. All recommended operators are licensed by the UK Gambling Commission (UKGC) and are safe for British players. Our top 10 rating is based on detailed reviews, assessing games, payouts, bonuses, and other key categories.",
      "Each of the top 10 online casinos offers excellent game portfolios, but the highest-rated site for video slots features titles from world-renowned software platforms and offers the most diverse slot themes. It also includes progressive jackpot games and classic slots with single paylines, featuring wide betting limits and attractive bonus rounds.",
      "Yes, the top 10 UK online casinos offer some of the best options for playing RNG roulette. Examples include tables from IGT, Microgaming, Play'n GO, and Evolution Gaming's First Person Roulette variant. The top casino for roulette also offers wide table limits and innovative variations that are hard to find at other gaming sites.",
      "Yes, the top 10 casinos included in our guide offer some of the best welcome bonuses for new players. Each of them provides a welcome bonus exclusively for new players. You should read their promotional terms to identify which bonus suits your budget and playing style, but they are among the best available for new players.",
      "The top-rated casino app in our guide to the 10 best online casino platforms for British players should be a priority. The recommended casino offers excellent mobile compatibility with iOS and Android devices. You can even download its advanced mobile app from the App Store or Google Play.",
    ],
  };

  const advertiser = {
    id: "advertiser",
    h2: "18+ Advertiser Disclosure",
    p: "This website is a free online resource dedicated to providing valuable content and comparison tools for our visitors. We receive advertising compensation from the companies featured on this site, which may influence the placement and ranking of brands (and/or their products) as well as the scores assigned to them. The inclusion of companies on this page does not imply endorsement. We do not cover all providers available in the market. Except as expressly outlined in our Terms of Use, we disclaim any representations and warranties regarding the information provided on this page. The content, including pricing, is subject to change at any time.",
  };

  return (
    <div className="px-3">
      <h1 className="fw-bold text-white">
        🏆 TopCasinoPicksUK.com – Best Online Casino Picks for UK Players
      </h1>
      <p>
        Explore the most trusted and exciting online casinos in the UK. At
        <b>TopCasinoPicksUK.com</b>, we showcase secure, entertaining, and
        highly rated platforms for every kind of player — from slot fans to live
        casino lovers. Whether you're searching for exciting new casinos,
        player-friendly bonuses, or specific game types like Megaways or Big
        Bass Bonanza, our platform gives you all the tools to compare, play, and
        win with confidence.
      </p>

      <div id={why.id}>
        <h2>{why.h2}</h2>
        {why.ul.map((li, i) => {
          const [title, text] = li.split("-");
          return (
            <div className="my-1" key={i}>
              <b>{title}</b> - <span>{text}</span>
            </div>
          );
        })}
      </div>

      <div className="faq mt-3">
        <h1 className="fw-bold text-white">{faq.t}</h1>
        <p>{faq.p}</p>
        <Accordion>
          {faq.ques.map((qNa, i) => {
            return (
              <Accordion.Item key={i} eventKey={i}>
                <Accordion.Header as="h3">
                  <p>{qNa}</p>
                </Accordion.Header>
                <Accordion.Body>
                  <p>{faq.ans[i]}</p>
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </div>
      <div className="mt-5 d-flex flex-column gap-3">
        <div>
          According to the British Gambling Commission, the statutory gambling
          regulator, "Safe and responsible gambling comes from an industry that
          takes care of its customers, customers who are empowered with the
          knowledge to manage their gambling, and a regulator that ensures the
          consumer is at the heart of everything we do." This information aims
          to address the first two criteria. As we promote gambling services on
          this site, we believe it is important to inform our customers about
          the risks associated with gambling and provide information on where to
          find further advice and support if needed.
        </div>
        <div id={advertiser.id}>
          <h2>{advertiser.h2}</h2>
          <p>{advertiser.p}</p>
        </div>
      </div>
    </div>
  );
}
