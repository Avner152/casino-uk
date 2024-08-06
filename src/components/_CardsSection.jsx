import { importImages } from "../App";

export default function CardsSection() {
  const images = importImages(
    require.context("../assets/cards", false, /\.(png|jpe?g|svg)$/)
  );

  const cards = [
    { src: "las-vegas.jpg" },
    { src: "netbet.jpg" },
    { src: "las-vegas.jpg" },
  ];

  return (
    <div className="d-flex justify-content-center mb-5 pb-5 gap-5">
      {cards.map((card, i) => (
        <article key={i} className="my-card-2 glow-on-hover">
          <header>
            <img
              alt={card.src.split(".")[0]}
              width={204}
              height={180}
              src={`${images[card.src]}`}
            />
          </header>
          <a
            className="text-decoration-none text-white"
            href="www.google.com"
            target="_blank"
          >
            <section className="pt-3">
              <span className="pt-3">Sign Up</span>
            </section>
          </a>
        </article>
      ))}
    </div>
  );
}
