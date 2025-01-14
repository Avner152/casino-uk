import { Accordion } from "react-bootstrap";

export default function Content() {
  const curDate = new Date();

  const why = {
    id: "why",
    h2: "Why Choose Our Online Casino Comparison?",
    ol: [
      {
        title: "Top 10 Online Casinos",
        description:
          "Our carefully researched list features the best online casinos in the UK. These platforms are handpicked for their exceptional games, user experience, and generous promotions.",
      },
      {
        title: "Mobile and New Casinos",
        description: `Stay up-to-date with the latest mobile-friendly casinos and emerging sites in ${curDate.getFullYear()}. Enjoy seamless gaming on the go with our recommendations for top-notch mobile casinos.`,
      },
      {
        title: "Best Casino Bonuses",
        description:
          "Maximize your gaming experience with exclusive deals, including sign-up bonuses, welcome offers, and ongoing promotions. We spotlight the best bonuses to boost your bankroll.",
      },
      {
        title: "Real-Money Gaming",
        description:
          "Explore a wide range of real-money games, from classic table games like blackjack and roulette to cutting-edge slots and live casino experiences.",
      },
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

  return (
    <div className="content-container w-100 m-auto">
      <h1 className="fw-bold text-white">
        Best UK Online Casinos {curDate.getFullYear()} : Top Games & Bonuses
      </h1>
      <p>
        Welcome to the ultimate guide to the best online casinos in the UK for{" "}
        {curDate.getFullYear()}! Whether you're a seasoned player or new to
        online gaming, our expertly curated platform is here to help you
        discover the finest, most trustworthy casino sites offering exciting
        games, generous bonuses, and thrilling real-money prizes.
      </p>

      <div id={why.id}>
        <h2>{why.h2}</h2>
        <ol>
          {why.ol.map((li, i) => (
            <li key={i}>
              <h3>{li.title}</h3>
              <p>{li.description}</p>
            </li>
          ))}
        </ol>
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
        <div>
          <p>18+ Advertiser Disclosure</p>
          <p>
            This website is a free online resource dedicated to providing
            valuable content and comparison tools for our visitors. We receive
            advertising compensation from the companies featured on this site,
            which may influence the placement and ranking of brands (and/or
            their products) as well as the scores assigned to them. The
            inclusion of companies on this page does not imply endorsement. We
            do not cover all providers available in the market. Except as
            expressly outlined in our Terms of Use, we disclaim any
            representations and warranties regarding the information provided on
            this page. The content, including pricing, is subject to change at
            any time.
          </p>
        </div>
      </div>
    </div>
  );
}
