export default function Content() {
  const curDate = new Date();

  const why = {
    id: "why",
    h2: "Why Choose Casino Empire UK?",
    p: "We focus on practical information that helps UK players compare sites quickly and choose with confidence.",
    ul: [
      "Trusted UK Focus - Our recommendations prioritise sites that are licensed, reputable, and suitable for players in the UK.",
      "Straightforward Bonus Comparisons - We explain welcome offers in plain language, including key terms such as wagering requirements and validity periods.",
      "Mobile-Ready Casino Picks - We highlight platforms that perform well on modern phones and tablets, with smooth gameplay and easy navigation.",
      "Balanced Game Coverage - Compare slots, table games, live casino titles, and other popular categories in one place.",
      "Clear Payment Information - We review common deposit and withdrawal methods, processing times, and practical limits.",
      "Independent Review Approach - Our write-ups are designed to be useful and transparent, helping you compare options fairly.",
      "Responsible Gambling First - This site is for adults aged 18+ and encourages safe play, budgeting, and regular breaks.",
      "Advertising Disclosure - We may receive compensation from selected partners, which can affect placement. This does not change our commitment to clear and helpful information.",
    ],
  };

  const sections = [
    {
      id: "safety",
      h2: "Safe and Trusted UK Casinos",
      p: "Security is one of the most important factors when choosing where to play. We focus on casinos with secure technology, clear operator details, and a track record of fair treatment for players.",
      ul: [
        "Secure platforms that use modern encryption standards.",
        "Transparent operator and licensing information.",
        "Consistent reputation for reliability and player support.",
      ],
    },
    {
      id: "bonuses",
      h2: "Bonuses and Free Spins",
      p: "Many UK casino sites offer welcome promotions, free spins, and reload deals. The headline offer matters, but the terms behind it matter even more.",
      ul: [
        "Check wagering requirements before claiming a bonus.",
        "Review time limits and game eligibility rules.",
        "Compare ongoing promotions, not just the welcome deal.",
      ],
    },
    {
      id: "payments",
      h2: "Fast Withdrawals and Payments",
      p: "Smooth payouts are essential for a good casino experience. We look at withdrawal speed, payment security, and how clearly each site explains its banking rules.",
      ul: [
        "Fast and consistent withdrawal processing.",
        "Secure payment methods and clear verification steps.",
        "Practical banking options such as debit cards, bank transfer, and e-wallets, depending on the operator.",
      ],
    },
    {
      id: "games-mobile",
      h2: "Games and Mobile Experience",
      p: "UK players expect broad game selection and strong mobile performance. The best sites combine popular titles with stable gameplay across devices.",
      ul: [
        "Game categories including slots, blackjack, roulette, live casino, and poker variants.",
        "Mobile-optimised platforms for iOS and Android users.",
        "Fast loading and responsive play on smaller screens.",
      ],
    },
    {
      id: "ranking",
      h2: "How We Rank and How to Choose",
      p: "Our rankings are designed to be simple and useful. We assess trust, bonus fairness, payout reliability, game range, mobile quality, and customer support, then present the results in a clear format.",
      ul: [
        "Start with the games you want to play most.",
        "Compare bonus terms before signing up.",
        "Check withdrawal speed and available payment options.",
      ],
    },
    {
      id: "important-info",
      h2: "Important Information",
      p: "Casino Empire UK may receive compensation from some listed brands, which can influence placement. We do not review every provider in the market.",
      ul: [
        "This content is for informational purposes only.",
        "It is not financial or legal advice.",
        "Offers may change at any time.",
        "Players must be aged 18 or over and reside in the United Kingdom.",
      ],
    },
  ];

  return (
    <div className="content-container_ px-5 sm-p-0 w-100 m-auto">
      <h1 className="fw-bold text-white">
        Casino Empire UK: compare top UK online casinos for{" "}
        {curDate.getFullYear()}.
      </h1>
      <p>
        Casino Empire UK is built to help you compare online casinos without the
        noise. We keep our guides clear and current, so you can quickly
        understand where to play, what each site offers, and what to check
        before signing up.
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

      {sections.map((section) => (
        <div className="mt-4" id={section.id} key={section.id}>
          <h2 className="marker fw-bold">{section.h2}</h2>
          <p>{section.p}</p>
          <ul className="list-unstyled">
            {section.ul.map((li, i) => (
              <li key={i}>
                <p>{li}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="mt-4">
        <h2 className="marker fw-bold">Start Your Casino Journey Today</h2>
        <p>
          Browse our latest UK casino comparisons for {curDate.getFullYear()}.
          Choose a platform that fits your preferences, read the key terms, and
          always play responsibly.
        </p>
      </div>
    </div>
  );
}
