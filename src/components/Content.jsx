import { observer } from "mobx-react";
import myStore from "../mobX/Store";
import { Accordion } from "react-bootstrap";

const Content = observer(() => {
  const curDate = new Date();

  const content = {
    title: "Top UK Online Casinos – March {year}",
    sections: [
      {
        heading: "🔎 What Players Look For When Choosing an Online Casino",
        type: "h2",
        content: [
          "Players who review casino platforms often consider several key factors before creating an account.",
          "These factors may include promotional offers, game variety, payment methods and the general reliability of the casino platform.",
          "Some of the most common areas that players review include:",
          "Different players may prioritise different features depending on their preferences.",
          "Some players may focus primarily on casino bonuses, while others may prioritise payment flexibility or the variety of available slot games.",
        ],
        list: [
          "Welcome bonuses and promotional offers",
          "Free spins promotions on slot games",
          "Payment methods used by UK players",
          "Withdrawal processing and verification procedures",
          "The number and variety of available casino games",
          "Live dealer casino availability",
          "Mobile compatibility and usability",
          "Customer support availability",
        ],
      },
      {
        heading: "🎮 Casino Games Available Online",
        type: "h2",
        content: [
          "Modern online casino platforms usually provide a wide range of digital casino games that can be played through web browsers or mobile devices.",
          "These games are typically developed by specialised software providers that focus on casino game development.",
          "Some casinos work with multiple software providers, which means that players may have access to hundreds or even thousands of different games depending on the casino platform.",
          "Game variety can vary significantly between casinos, which is why many players prefer to compare platforms before deciding where to play.",
        ],
        list: [
          "Online slot games",
          "Roulette variations",
          "Blackjack and baccarat",
          "Casino poker games",
          "Live dealer casino tables",
          "Game show style casino games",
        ],
      },
      {
        heading: "🎁 Casino Bonuses and Promotions",
        type: "h2",
        content: [
          "Casino bonuses are one of the most widely promoted features of online casino platforms.",
          "These promotions are typically offered to attract new players and to reward existing customers.",
          "While promotional offers can increase the available playing balance, they often include specific terms and conditions such as wagering requirements, bonus expiry periods and withdrawal restrictions.",
          "Players should always review the official terms of any promotion before participating.",
        ],
        list: [
          "Welcome bonuses",
          "Free spins promotions",
          "Reload bonuses",
          "Cashback offers",
          "Loyalty or VIP programs",
        ],
      },
      {
        heading: "📱 Mobile Casino Gaming",
        type: "h2",
        content: [
          "Mobile casino gaming has become increasingly popular among UK players.",
          "Many players now access casino platforms through smartphones or tablets rather than desktop computers.",
          "Because of this trend, modern casino websites are usually designed to function smoothly across multiple devices.",
          "When comparing casino platforms, players may wish to review whether the platform provides a consistent experience across both desktop and mobile devices.",
        ],
        list: [
          "Responsive website layouts",
          "Mobile-friendly game controls",
          "Fast loading speeds",
          "Secure payment systems",
          "Mobile live dealer streaming",
        ],
      },
      {
        heading: "💳 Payment Methods and Withdrawals",
        type: "h2",
        content: [
          "Payment methods are another important factor that players may consider when choosing a casino platform.",
          "Different casinos may support different payment options depending on their licensing and operational structure.",
          "Players often review withdrawal policies and verification requirements before depositing funds.",
          "Withdrawal processing times and verification procedures may vary depending on the casino platform.",
        ],
        list: [
          "Debit card payments",
          "Bank transfers",
          "E-wallet services",
          "Mobile payment systems",
          "Cryptocurrency payments on some platforms",
        ],
      },
      {
        heading: "🛡️ Responsible Gambling Information",
        type: "h2",
        content: [
          "UKCasinoList.net supports responsible gambling.",
          "Gambling should be treated as entertainment, not as a way to make money. Players should only gamble with funds they can afford to lose and should avoid chasing losses.",
          "If gambling is causing harm or stress, professional support is available through UK organisations such as GamCare and BeGambleAware.",
        ],
        list: [
          "Deposit limits",
          "Loss limits",
          "Time reminders",
          "Self-exclusion tools",
        ],
      },
    ],
  };

  const contentBetting = {};

  return (
    <>
      <article className="bg-dark px-5_ sm-px-1 py-3 bg-white w-100">
        <div className="mx-auto">
          <h1 className="pe-5">
            Independent Online Casino Comparison for UK Players{" "}
            {curDate.getFullYear()}
          </h1>
          <p>
            Welcome to UKCasinoList.net, an informational comparison website
            created to help players explore and compare online casino platforms
            that are available to players in the United Kingdom
          </p>
          <p>
            The online casino industry has expanded significantly in recent
            years, providing players with access to a wide variety of gaming
            platforms, promotional offers and payment options. As a result,
            players now have many choices when it comes to selecting a casino
            platform that fits their preferences.
          </p>
          <p>
            Because there are so many casino websites available, it can
            sometimes be difficult for players to quickly determine which
            platforms offer the features they are looking for. This is where
            casino comparison websites can be useful.
          </p>
          <p>
            UKCasinoList.net was created to present casino information in a
            structured and easy-to-read format so that users can better
            understand the differences between online casino platforms.
          </p>
          <p>
            This website does not operate casino games and does not provide
            gambling services. The information provided here is designed to help
            users review casino platforms and understand what features may be
            available before deciding whether to register
          </p>

          <Accordion
            alwaysOpen
            defaultActiveKey={Object.keys(content ?? {}).map((_, i) =>
              i.toString(),
            )}
          >
            {content?.sections?.map((section, index) => (
              <Accordion.Item
                eventKey={index.toString()}
                className="mt-4 bg-secondary bg-opacity-25 rounded-3 p-1"
                key={index}
              >
                <section key={index}>
                  <Accordion.Header as="h2">
                    <span className="fs-4 fw-bold">{section?.heading}</span>
                  </Accordion.Header>
                  {/* {section?.type === "h2" && <h2>{section?.heading}</h2>} */}

                  <Accordion.Body className="pt-0">
                    {section?.content &&
                      section?.content.map((p, i) => <p key={i}>{p}</p>)}

                    {section?.intro && <p>{section?.intro}</p>}

                    {section?.list && (
                      <ul className="list-unstyled">
                        {section?.list.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </Accordion.Body>
                </section>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </article>
    </>
  );
});

export default Content;
