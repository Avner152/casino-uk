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
