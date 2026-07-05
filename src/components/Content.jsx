export default function Content() {
  const curDate = new Date();

  const why = {
    id: "why",
    h2: "Why Choose CasinoChoiceUK.net?",
    ul: [
      "Expertly Curated Selection - Handpicked online casinos based on trust, game variety, and player satisfaction, ensuring a premium gaming experience every time.",
      "Exclusive Bonuses - Boost your bankroll with generous welcome bonuses, free spins, and ongoing promotions tailored for UK players.",
      "Mobile Compatibility - Play anytime, anywhere, with our top mobile-friendly casino picks for 2025, optimized for smooth gameplay on all devices.",
      "Secure and Fair Play - All our recommended sites are fully licensed and regulated by the UK Gambling Commission, ensuring a safe, fair, and responsible gaming environment.",
      "Real Money Games - From classic table games like blackjack and roulette to cutting-edge video slots and immersive live dealer experiences, find it all in one place.",
      "In-Depth Reviews - Make confident decisions with our detailed, unbiased reviews covering bonuses, game selection, payment options, and customer support.",
      "Player Protection - We prioritize your safety with guides on responsible gaming, secure payments, and player support.",
      "18+ Only - You must be 18 years or older to participate. Please gamble responsibly and read our responsible gaming guidelines.",
      "Advertiser Disclosure - This website is a free online resource dedicated to providing valuable content and comparison tools for our visitors. We receive advertising compensation from the companies featured on this site, which may influence the placement and ranking of brands (and/or their products) as well as the scores assigned to them. The inclusion of companies on this page does not imply endorsement. We do not cover all providers available in the market. Except as expressly outlined in our Terms of Use, we disclaim any representations and warranties regarding the information provided on this page. The content, including pricing, is subject to change at any time.",
    ],
  };

  return (
    <div className="content-container_ px-5 sm-p-0 w-100 m-auto">
      <h1 className="fw-bold text-white">
        Welcome to CasinoChoiceUK.net - Your Ultimate Guide to the Best UK
        Online Casinos in {curDate.getFullYear()}!
      </h1>
      <p>
        Ready to experience the thrill of online gaming? At CasinoChoiceUK.net,
        we bring you the most comprehensive and up-to-date guide to the best UK
        online casinos. Whether you're a seasoned player or just starting your
        online casino journey, our carefully curated site is designed to help
        you discover the top-rated, most trusted, and rewarding casinos in the
        UK.
      </p>

      <div id={why.id}>
        <h2 className="marker fw-bold">{why.h2}</h2>
        <p>{why.p}</p>
        <ul className="list-unstyled">
          {why.ul.map((li, i) => (
            <li key={i}>
              <p>{li}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4">
        <h2 className="marker fw-bold">Start Your Casino Journey Today</h2>
        <p>
          Ready to discover the best UK online casinos of
          {curDate.getFullYear()}? Browse our expertly curated lists and find
          your next favorite gaming site. Your winning streak starts here!
        </p>
      </div>
    </div>
  );
}
