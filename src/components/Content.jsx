import { observer } from "mobx-react";
import myStore from "../mobX/Store";

const Content = observer(() => {
  const content = {
    beginning: {
      h1: "Online Casino Comparison for UK Players",
      paragraphs: [
        "Welcome to UKCasinoCompare.net, an independent comparison website created for players in the United Kingdom.",
        "Our purpose is to provide clear, factual and regularly updated information about online casinos that accept UK players. We review casino platforms using practical criteria such as transparency, payment reliability, game selection, customer support, and overall usability.",
        "UKCasinoCompare.net does not offer gambling services. We provide informational content designed to help users compare different casino platforms and understand key features before registering or depositing.",
      ],
    },
    sections: {
      par1: {
      id: "intro",
      h2: "A UK-Focused Casino Comparison Website",
      p: "The UK online gambling market is highly regulated and competitive. Players have access to many casino websites, promotions, and gaming platforms. However, not all offers are equally clear, and not all websites provide the same level of service, payment efficiency, or user experience. Some promotions may include complex terms, and some casinos may not support the most common payment methods used by UK residents.*UKCasinoCompare.net exists to help UK players make informed decisions by presenting casino information in a structured, transparent format.",
    },
      par2: {
      id: "review-criteria",
      h2: "What We Review and Compare",
      p: "When reviewing casino websites, we focus on areas that matter to real players, including:",
      ul: [
        "Transparency and Operator Information - Clear details about who operates the casino and its policies.",
        "Bonus Terms and Promotional Conditions - Wagering requirements, maximum cashouts, eligible games, time limits, withdrawal rules, and restrictions.",
        "Payment Methods for UK Players - Visa/Mastercard, bank transfers, e-wallets, mobile payments.",
        "Withdrawal Processing and Verification - Typical processing times, verification procedures, support availability.",
        "Game Variety and Platform Quality - Slots, table games, live dealer games, software providers, platform stability.",
        "Mobile Usability - Mobile website usability, game compatibility, loading speed, navigation.",
        "Customer Support - Live chat, email support, help centre quality, responsiveness.",
      ],
    },
      par3: {
      id: "rankings",
      h2: "How Our Rankings Work",
      p: "UKCasinoCompare.net provides structured comparisons. Casinos may be ranked or listed based on:",
      ul: [
        "Payment reliability",
        "Clarity of terms",
        "Overall user experience",
        "Game variety",
        "Customer support availability",
        "Promotion transparency",
      ],
      p2: "Rankings may change over time as casino offers and policies change. Users should always read official casino terms directly before registering or depositing.",
    },
      par4: {
      id: "bonuses",
      h2: "Bonuses and Promotions: Informational Guidance",
      p: "Casino bonuses vary significantly between brands. Promotions often include conditions. We provide informational guidance on common promotion types:",
      ul: [
        "Welcome offers",
        "Free spins promotions",
        "Cashback offers",
        "Reload bonuses",
        "Loyalty or VIP rewards",
      ],
      p2: "We aim to describe offers clearly so players can better understand what they are signing up for.",
    },
      par5: {
      id: "live-casino",
      h2: "Live Dealer Casino Information",
      p: "Live casino gaming is popular among UK players. We review casinos offering live dealer tables:",
      ul: [
        "Live roulette",
        "Live blackjack",
        "Live baccarat",
        "Other live table formats",
      ],
      p2: "We focus on usability, streaming quality, betting limits, and overall platform experience.",
    },
      par6: {
      id: "responsible-gambling",
      h2: "Responsible Gambling Information",
      p: "UKCasinoCompare.net supports responsible gambling. Gambling should be treated as entertainment, not a way to make money. Players should only gamble with funds they can afford to lose.",
      ul: [
        "Deposit limits",
        "Loss limits",
        "Time reminders",
        "Self-exclusion tools",
      ],
      p2: "If gambling is causing harm or stress, professional support is available through UK organisations such as GamCare and BeGambleAware.",
    },
      par7: {
      id: "important-notes",
      h2: "Important Notes for Users",
      p: "UKCasinoCompare.net is an informational comparison website. We do not operate a casino or provide gambling services. Casino offers and terms may change at any time.",
      ul: [
        "Users should always review official casino terms and conditions before registering or depositing.",
        "Gambling is age-restricted. Users must be 18+.",
      ],
    },
      par8: {
      id: "start-comparing",
      h2: "Start Comparing UK Casinos",
      p: "Explore casino options by browsing our latest reviews and comparisons. UKCasinoCompare.net provides regularly updated information to help UK players compare casino platforms with greater clarity and confidence.",
    },
    },
  };

  const contentBetting = {
    beginning: {
      h1: "Online Sports Betting Comparison for UK Users",
      paragraphs: [
        "Welcome to UKCasinoCompare.net, an independent comparison website created for users in the United Kingdom.",
        "Our purpose is to provide clear, factual and regularly updated information about online sportsbooks that accept UK users. We review betting platforms using practical criteria such as transparency, market coverage, odds competitiveness, payment reliability, and overall usability.",
        "UKCasinoCompare.net does not offer betting services. We provide informational content designed to help users compare different betting platforms and understand key features before opening an account or placing bets.",
      ],
    },
    sections: {
      par1: {
      id: "intro",
      h2: "A UK-Focused Sports Betting Comparison Website",
      p: "The UK sports betting market is large, competitive, and constantly changing. Odds, promotions, and available markets can vary significantly between brands. Some offers include detailed conditions that are easy to miss at first glance.*UKCasinoCompare.net helps UK users compare betting websites in a structured format so they can better understand key differences before placing a bet.",
    },
      par2: {
      id: "review-criteria",
      h2: "What We Review and Compare",
      p: "When reviewing UK betting websites, we focus on practical points that affect day-to-day betting experience:",
      ul: [
        "Licensing and Transparency - Clear operator details, policy visibility, and terms access.",
        "Offer Clarity - Welcome offers, free bets, odds boosts, qualifying requirements, expiry rules, and restrictions.",
        "Market Coverage - Football, horse racing, rugby, tennis, and other major UK-relevant markets.",
        "Odds Competitiveness - General pricing quality across popular pre-match and in-play markets.",
        "Payments and Withdrawals - Deposit methods, payout options, processing times, verification standards.",
        "Mobile Experience - App/site performance, navigation quality, and in-play usability.",
        "Customer Support - Availability and responsiveness of live chat, email, and help resources.",
      ],
    },
      par3: {
      id: "rankings",
      h2: "How Our Rankings Work",
      p: "UKCasinoCompare.net presents structured betting comparisons. Sportsbooks may be ranked or listed according to:",
      ul: [
        "Offer transparency",
        "Market quality and breadth",
        "Odds value consistency",
        "Payment reliability",
        "Platform usability",
        "Support availability",
      ],
      p2: "Rankings may change as offers, markets, and policies are updated. Users should always review the official terms before opening an account or placing bets.",
    },
      par4: {
      id: "offers",
      h2: "Bonuses and Free Bet Offers: Informational Guidance",
      p: "Betting promotions can be useful, but they often include specific qualifying rules. We provide informational guidance on common sportsbook offers:",
      ul: [
        "Sign-up and welcome offers",
        "Free bet promotions",
        "Odds boosts",
        "Acca and enhanced return promos",
        "Loyalty and ongoing campaign offers",
      ],
      p2: "Our goal is to present offer mechanics clearly so users can understand eligibility and conditions before participating.",
    },
      par5: {
      id: "in-play-betting",
      h2: "In-Play and Event Betting Information",
      p: "Live and event-driven betting is a key part of modern sportsbook use. We compare providers that support real-time betting features:",
      ul: [
        "In-play market range",
        "Cash out availability",
        "Bet builder options",
        "Pre-match vs live transition quality",
      ],
      p2: "We focus on speed, usability, pricing clarity, and overall experience during active events.",
    },
      par6: {
      id: "responsible-gambling",
      h2: "Responsible Gambling Information",
      p: "UKCasinoCompare.net supports responsible gambling. Betting should be treated as entertainment, not as a way to generate income. Users should only stake amounts they can afford to lose.",
      ul: [
        "Deposit and spend limits",
        "Time management reminders",
        "Reality checks",
        "Self-exclusion and cool-off tools",
      ],
      p2: "If betting is causing harm or stress, support is available through organisations such as GamCare and BeGambleAware.",
    },
      par7: {
      id: "important-notes",
      h2: "Important Notes for Users",
      p: "UKCasinoCompare.net is an informational comparison website. We do not operate a sportsbook and do not accept bets directly.",
      ul: [
        "Users should always read the official terms and betting rules before staking.",
        "Availability of markets and promotions can change at any time.",
        "Betting is age-restricted. Users must be 18+.",
      ],
    },
      par8: {
      id: "start-comparing",
      h2: "Start Comparing UK Sportsbooks",
      p: "Browse our betting comparisons to review key differences in offers, markets, and platform quality. UKCasinoCompare.net provides regularly updated information to help UK users compare betting sites with greater clarity and confidence.",
    },
    },
  };
  const currentContent =
    myStore.product === "casino" ? content : contentBetting;

  return (
    <>
      <h1 className="fw-bold ">
        <span
          className={`text-bg-${myStore.product.startsWith("b") ? "betting" : "danger"}`}
        >
          {currentContent.beginning.h1}
        </span>
      </h1>
      {currentContent.beginning.paragraphs.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}

      <div className="content-container_ w-100 m-auto">
        <div>
          {Object.entries(currentContent.sections).map(([key, section]) => {
            const { id, h2, p, ul, p2 } = section;

            // Split paragraphs on "*"
            const paragraphs = p ? p.split("*").filter(Boolean) : [];

            return (
              <div className="mt-4" key={key} id={id}>
                {/* H2 */}
                <h2 className="fw-bold ">
                  <span
                    className={`text-bg-${myStore.product.startsWith("b") ? "betting" : "danger"}`}
                  >
                    {h2}
                  </span>
                </h2>

                {paragraphs.map((pi, i) => (
                  <p key={i}>{pi}</p>
                ))}

                {ul && (
                  <ul className="ps-3 _list-unstyled">
                    {ul.map((li, i) => (
                      <li key={i}>
                        <p className="mb-0">{li}</p>
                      </li>
                    ))}
                  </ul>
                )}

                {p2 && <p>{p2}</p>}
              </div>
            );
          })}
        </div>

        <div className="mt-4">
          <h2>Play Responsibly!</h2>
          <p>
            Your wellbeing matters. We strongly encourage all players to enjoy
            online gaming in a safe, controlled, and responsible way.
          </p>
          <ul>
            <li>Never gamble with money you can’t afford to lose</li>
            <li>Set personal deposit and time limits</li>
            <li>Take regular breaks</li>
            <li>Seek support if gaming stops being fun</li>
          </ul>
          <p>
            For help and professional guidance, visit{" "}
            <a
              href="https://www.gambleaware.org/"
              rel="noreferrer"
              target="_blank"
            >
              BeGambleAware.org
            </a>
          </p>
        </div>
      </div>
    </>
  );
});

export default Content;
