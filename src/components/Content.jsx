import { Accordion } from "react-bootstrap";

export default function Content() {
  const curDate = new Date();

  const why = {
    id: "why",
    h2: "Why Choose UKCasinoSelect.com?",
    ul: [
      "Expertly Curated Selection - We handpick only top-rated online casinos based on safety, game variety, and user experience, ensuring you enjoy a premium, worry-free gaming experience.",
      "Exclusive Bonuses - Take advantage of generous welcome bonuses, no-deposit offers, free spins, and loyalty rewards designed for UK players.",
      "Mobile Compatibility - Our featured casinos are fully optimized for smartphones and tablets, so you can play your favourite games anytime, anywhere.",
      "Safe and Regulated - Every site we recommend is licensed by the UK Gambling Commission and uses advanced encryption to protect your data and funds.",
      "Real Money Games - Explore a wide variety of games including slots, crash games, live roulette, blackjack, and innovative game shows.",
      "In-Depth Reviews - Make informed choices with unbiased reviews covering everything from welcome packages to withdrawal times and customer support.",
      "Player Protection First - We promote responsible gambling and offer guides on secure payments, account verification, and self-exclusion tools.",
      "18+ Only - You must be 18 years or older to play. Gamble responsibly. See our Responsible Gaming page for more info.",
      "Advertiser Disclosure - We are a free online resource. This site receives compensation from featured brands, which may affect placement. Our listings reflect editorial independence and are regularly updated, but may not include every provider.",
    ],
  };
  const faq = {
    t: "Comprehensive Insights and FAQs",
    p: "We understand that UK players often have questions about choosing the best online casinos. That's why we've compiled an informative FAQ section, answering common queries about licensing, payment methods, game fairness, and more.",
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

  const howWeRate = {
    h2: "How We Rank UK Online Casinos",
    ul: [
      "Licensing and Compliance - Every recommended operator is verified for proper UK-facing regulatory standards and transparent legal terms.",
      "Game Quality and Providers - We prioritize casinos with strong software lineups, reliable game performance, and fair gameplay standards.",
      "Bonuses and Terms - We assess real offer value by reviewing wagering rules, game contribution rates, and withdrawal restrictions.",
      "Payments and Withdrawals - We compare deposit methods, payout speed, limits, and verification workflows to reduce friction for players.",
      "Mobile Experience - We test performance on iOS and Android for speed, usability, and account management quality.",
      "Player Support and Safety - We evaluate customer support responsiveness and responsible gambling tools such as limits and timeouts.",
    ],
  };

  const categories = {
    h2: "Popular Casino Categories We Cover",
    ul: [
      "Online Slots - From classic reels to Megaways and progressive jackpot titles.",
      "Live Casino - Dealer-led roulette, blackjack, baccarat, and interactive game show formats.",
      "Table Games - Strategy-focused blackjack, roulette, baccarat, and casino poker variants.",
      "Crash and Instant Games - Fast-paced titles for players who prefer short, high-intensity sessions.",
      "Bonus Guides - Welcome offers, no-deposit deals, free spins, cashback, and loyalty rewards.",
      "Mobile Casino Play - App and browser-based experiences for gaming on the go.",
    ],
  };

  const startSmart = {
    h2: "Start Smart: Tips for New UK Casino Players",
    ul: [
      "Set a Budget First - Decide your session spend before you deposit and stick to it.",
      "Read Bonus Terms Carefully - Check wagering, expiry windows, and eligible games before claiming offers.",
      "Choose Licensed Brands - Play only on trusted sites with clear policies and player protections.",
      "Use Responsible Gambling Tools - Apply deposit limits, reality checks, and timeout options when needed.",
      "Focus on Entertainment - Treat casino play as paid entertainment, not guaranteed income.",
    ],
  };

  const advertiser = {
    id: "advertiser",
    h2: "18+ Advertiser Disclosure",
    p: "This website is a free online resource dedicated to providing valuable content and comparison tools for our visitors. We receive advertising compensation from the companies featured on this site, which may influence the placement and ranking of brands (and/or their products) as well as the scores assigned to them. The inclusion of companies on this page does not imply endorsement. We do not cover all providers available in the market. Except as expressly outlined in our Terms of Use, we disclaim any representations and warranties regarding the information provided on this page. The content, including pricing, is subject to change at any time.",
  };

  return (
    <>
      <h1 className="fw-bold text-white">
        Welcome to UKCasinoSelect! - The ultimate destination for discovering
        the top UK online casinos of {curDate.getFullYear()}
      </h1>
      <p>
        Ready to experience the thrill of online gaming? At UKCasinoSelect.com,
        we bring you the most comprehensive and up-to-date guide to the best UK
        online casinos. Whether you're a seasoned player or just starting your
        online casino journey, our carefully curated platform is here to help
        you discover the most trusted, rewarding, and entertaining casinos in
        the UK.
      </p>
      <p>
        Our mission is simple: make it easier for UK players to compare casino
        sites with confidence. From licensing checks and payout speed to game
        variety and mobile quality, we focus on the details that matter most in
        real-world play. Every recommendation is designed to help you find a
        casino that matches your budget, game preferences, and safety
        expectations.
      </p>

      <div>
        <h2>{howWeRate.h2}</h2>
        {howWeRate.ul.map((li, i) => {
          const [title, text] = li.split("-");
          return (
            <div className="my-1" key={i}>
              <b>{title}</b> - <span>{text}</span>
            </div>
          );
        })}
      </div>

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

      <div>
        <h2>{categories.h2}</h2>
        {categories.ul.map((li, i) => {
          const [title, text] = li.split("-");
          return (
            <div className="my-1" key={i}>
              <b>{title}</b> - <span>{text}</span>
            </div>
          );
        })}
      </div>

      <div>
        <h2>{startSmart.h2}</h2>
        {startSmart.ul.map((li, i) => {
          const [title, text] = li.split("-");
          return (
            <div className="my-1" key={i}>
              <b>{title}</b> - <span>{text}</span>
            </div>
          );
        })}
      </div>

      <div className="faq">
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
    </>
  );
}
