import React from "react";

export default function AboutUs() {
  return (
    <div className="_w-100 text-bg-dark text-white pt-5 pb-5 mt-3 information min-vh-50">
      <div className="m-auto pt-3" style={{ maxWidth: "980px" }}>
        <div className="row g-4 align-items-start">
          <div className="col-lg-8">
            <h2 className="fw-bold mb-3">About UK CasinoScout</h2>
            <span className="badge bg-secondary bg-opacity-25 text-light border border-secondary">
              18+ | Made for UK players
            </span>

            <div className="mt-4">
              <p>
                At <strong>UK CasinoScout</strong>, we help British players make
                smarter choices when exploring online casinos. Our goal is
                simple: to give you clear, practical, and trustworthy
                information so you can compare casinos with confidence before
                signing up.
              </p>
              <p>
                We understand that UK players want more than flashy promotions.
                They want fast registration, reliable payment options, fair
                bonus terms, strong customer support, and a platform that feels
                safe and transparent. That is exactly what we focus on.
              </p>
              <p>
                Whether you are looking for a new online casino, trying to
                better understand wagering requirements, or simply comparing
                welcome offers and game variety, UK CasinoScout is designed to
                save you time and remove the guesswork. Our content is built for
                real players who want useful guidance rather than overwhelming
                hype.
              </p>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="border border-secondary rounded-3 p-4 bg-dark bg-opacity-75">
              <h5 className="fw-bold mb-3">What you can expect from us</h5>
              <ul className="mb-0 ps-3">
                <li>Clear reviews of UK-friendly casinos</li>
                <li>Helpful comparisons of bonuses and offers</li>
                <li>Insights on payments, withdrawals, and support</li>
                <li>Simple, responsible gambling guidance</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row g-4 mt-2">
          <div className="col-md-6">
            <div className="border border-secondary rounded-3 p-4 h-100 bg-dark bg-opacity-75">
              <h4 className="fw-bold mb-3">Why UK players use our site</h4>
              <p className="mb-0">
                We focus on what matters most to players in the UK: fair terms,
                dependable operators, transparent promotions, and a smooth user
                experience. We also highlight important details such as
                withdrawal speed, game selection, and mobile compatibility so
                you can choose a casino that actually fits your preferences.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="border border-secondary rounded-3 p-4 h-100 bg-dark bg-opacity-75">
              <h4 className="fw-bold mb-3">
                Responsible play is part of our mission
              </h4>
              <p className="mb-0">
                Gambling should stay entertaining and controlled. We encourage
                responsible play by promoting safer gambling tools, sensible
                limits, and awareness of support services. Our aim is to help
                players make informed choices while staying informed about the
                risks involved.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <p>
            We are committed to keeping our information current, useful, and
            easy to understand. Whether you are new to online casinos or a
            regular player looking for a better comparison point, UK CasinoScout
            is here to support you with practical guidance and a trustworthy
            starting point.
          </p>
          <p className="mb-0">
            If you have suggestions, feedback, or ideas for improving the site,
            we would love to hear from you. Your experience helps us make the
            platform more valuable for players across the UK.
          </p>
        </div>
      </div>
    </div>
  );
}
