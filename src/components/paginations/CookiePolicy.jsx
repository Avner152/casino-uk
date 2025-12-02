import { Helmet } from "react-helmet";

export default function CookiePolicy() {
  const meta = {
    title: "Cookie Policy | Top Casino Picks UK",
    description:
      "Read our Cookie Policy for `Top Casino Picks UK`. Learn about the types of cookies we use, how they help improve your experience, and how to manage your cookie preferences on our site",
  };
  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>
      <div className="text-bg-dark text-white pt-5 pb-5 mb-3 mt-3 information">
        <span className="fw-bold">Last Updated: December 2025</span>
        <div className="m-auto">
          <h1>Cookie Policy</h1>

          <p>
            If you have any questions, you can contact us at{" "}
            <a href="mailto:info@simloud.net">info@simloud.net</a>
          </p>

          <div className="mt-4">
            <h2>What are cookies?</h2>
            <p>
              Cookies are small text files that are stored on your device when
              you visit a website. They allow the website to recognise your
              device and remember certain information about your visit.
            </p>
          </div>

          <div className="mt-4">
            <h2>Cookies we use on this Site</h2>
            <p>
              We only use cookies that are necessary for the operation of the
              Site and to remember your choices.
            </p>

            <div className="table-responsive">
              <table className="table table-dark table-striped">
                <thead>
                  <tr>
                    <th>Cookie name</th>
                    <th>Provider</th>
                    <th>Purpose</th>
                    <th>Type</th>
                    <th>Retention</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>top-casino-consent</td>
                    <td>topcasinopicksuk.com</td>
                    <td>
                      Remembers that you have seen and dismissed our cookie
                      notice so it does not appear again on every visit.
                    </td>
                    <td>First-party, essential</td>
                    <td>12 months</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-4">
            <h2>No analytics or advertising cookies</h2>
            <p>
              We do not use cookies for analytics, profiling or interest-based
              advertising on this Site.
            </p>
          </div>

          <div className="mt-3">
            <h4>How Do Third Parties Use Cookies on the Site?</h4>
            <p>
              We do not currently allow third parties to place their own cookies
              on this Site for analytics, profiling or advertising purposes. The
              cookies described in this Policy are set and controlled by us and
              are limited to what is necessary for the operation of the Site and
              to remember your choices.
            </p>
            <p>
              However, our Site contains links and redirect buttons (for example
              &quot;Play Now&quot; or &quot;Get Bonus&quot;) that take you to
              online casinos and other third-party websites. When you leave our
              Site and visit a partner website, that third party may use cookies
              and similar technologies on its own website in order to:
            </p>
            <ul>
              <li>Provide and secure its services;</li>
              <li>Verify your identity and prevent fraud or abuse;</li>
              <li>Comply with legal and regulatory requirements;</li>
              <li>Measure the performance of its marketing campaigns; and</li>
              <li>Remember your preferences on that website.</li>
            </ul>
            <p>
              Those cookies are not set or controlled by us, and we do not have
              access to the information collected by them. The use of cookies by
              any third-party website is governed by that third party&apos;s own
              privacy and cookie policies, not by this Cookie Policy.
            </p>
            <p>
              Some of the links on our Site are affiliate links. This means that
              we may receive a commission if you sign up or make a qualifying
              action on a partner website. Any tracking technologies used for
              this purpose operate on the partner&apos;s website and are subject
              to the partner&apos;s policies. We do not use third-party cookies
              on this Site to create profiles of you or to show you personalised
              adverts.
            </p>
            <p>
              We encourage you to read the privacy and cookie policies of every
              external site you visit through our links so that you understand
              how your information may be collected and used by those third
              parties.
            </p>
          </div>
          <div className="mt-4">
            <h2>How to control cookies</h2>
            <p>
              You can usually configure your browser to block or delete cookies.
              Please note that if you choose to disable cookies, some parts of
              the Site may not function correctly.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
