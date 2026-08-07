import { Accordion } from "react-bootstrap";

export default function Content() {
  const curDate = new Date();

  const why = {
    id: "why",
    h2: "Why Choose UKCasinoNova.com?",
    ul: [
      "Expertly Curated Casino Lists - Each casino we list is evaluated for trustworthiness, licensing, game selection, mobile experience, customer support, and promotional value.",
      "Exclusive Deals - Take advantage of top-tier offers including matched deposits, no-wager bonuses, cashback, and free spin bundles — all updated regularly.",
      "Mobile & Tablet Friendly - Our recommended sites perform seamlessly across all modern devices, giving you the freedom to play from anywhere.",
      "Play with Real Winnings - Find games that offer great odds, fast payouts, and verified fairness. We help you sort between volatile jackpots, low-stake spins, and strategic table games.",
      "Play Smarter - Our content helps you learn how bonuses really work, how to read RTPs, and how to avoid common mistakes that cost players money.",
      "Player Safety First - Only licensed, secure, and responsible sites make it into our lists. We also offer guides on staying in control, spotting scams, and using self-exclusion tools.",
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
        Welcome to UKCasinoNova.com - Your Ultimate Guide to the Best UK Online
        Casinos in {curDate.getFullYear()}
      </h1>
      <p>
        Ready to experience the thrill of online gaming? At UKCasinoNova.com, we
        bring you the most comprehensive and user-friendly guide to the finest
        online casinos available to UK players. Whether you're a seasoned player
        or new to the scene, our expert resources, impartial reviews, and
        updated rankings are here to elevate your gaming journey.
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
