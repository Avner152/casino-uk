import { Accordion } from "react-bootstrap";

export default function Content({ isDesktop }) {
  const faq = {
    t: "Frequently Asked Questions from UK Players",
    p: "We conducted detailed research to create this guide on the top 10 casino sites in the UK. During our research, we discovered that British players often have common questions about online casinos. To address these, we have compiled a useful FAQ section with the answers you need.",
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
    <div className={`w-${isDesktop ? 50 : 100} m-auto`}>
      <p>
        Welcome to our online casino comparison site, your ultimate guide to
        finding the best and most reliable casino sites in the UK. We are here
        to help you discover top online casinos that offer exciting games, real
        money prizes, and fantastic bonuses.
      </p>
      <p>
        Our focus is on providing comprehensive information about casino sites,
        including the newest and top-rated options available in 2023. We review
        the best online casinos catering to UK players, making it easy for you
        to navigate the vast and diverse world of online gambling.
      </p>
      <p>
        We also offer valuable insights into mobile casinos and new online
        casinos, ensuring you can enjoy the best gaming experience no matter
        where you are. Our site keeps you updated on casino sites offering real
        money games, including the latest and most popular online casino games.
      </p>
      <p>
        Our top 10 online casinos list showcases the best options available in
        the UK. Additionally, we provide information on top casino sites, online
        games, and casinos. You can trust our advice to lead you to the best
        casino sites in the UK.
      </p>
      <p>
        We also feature a dedicated section for the best casino offers,
        including sign-up bonuses, welcome offers, and other exciting
        promotions. Our site helps players find the best deals and bonuses
        available.
      </p>
      <p>
        As the ultimate resource for finding the best casino sites in the UK, we
        cover everything from the newest online casinos to the best real money
        gaming experiences. Visit our online casino comparison site today and
        start enjoying the best casino experience!
      </p>

      <div className="faq">
        <h1>{faq.t}</h1>
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
    </div>
  );
}
