import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  const curDate = new Date();
  const meta = {
    title: "Privacy Policy | UKCasinoSelect",
    description:
      "Review the Privacy Policy for UKCasinoSelect. Learn how we collect, use, and protect your personal information, including data usage and third-party services",
  };
  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>
      <div className="_w-100 text-bg-dark text-white pt-5 pb-5 mt-3 information">
        <div className="m-auto pt-3">
          <span>
            Last Updated: {curDate.toLocaleString("default", { month: "long" })}{" "}
            , {curDate.getFullYear()}
          </span>
          <p>
            Welcome to Casino Compare UK (accessible at{" "}
            <Link to="/">https://www.ukcasinoselect.com/</Link>
            ). We respect your privacy and are committed to protecting your
            personal data. This privacy policy will inform you as to how we look
            after your personal data when you visit our website and tell you
            about your privacy rights and how the law protects you under the UK
            General Data Protection Regulation (UK GDPR) and the Data Protection
            Act 2018.
          </p>

          <h2>2. Who We Are</h2>
          <p>
            M.B.M MANAGEMENT LTD is the data controller and is responsible for
            your personal data (collectively referred to as "the Company", "we",
            "us" or "our" in this privacy policy). If you have any questions
            about this privacy policy, including any requests to exercise your
            legal rights, please contact us using the details set out below:
          </p>
          <ul>
            <li>Full name of legal entity: M.B.M MANAGEMENT LTD</li>
            <li>
              Email address:{" "}
              <a href="mailto:info@mbm-mang.com">info@mbm-mang.com</a>
            </li>
          </ul>

          <h2>3. The Data We Collect About You</h2>
          <p>
            We may collect, use, store and transfer different kinds of personal
            data about you, which we have grouped together as follows:
          </p>
          <ul>
            <li>
              <strong>Identity & Contact Data:</strong> May include your name
              and email address if you contact us directly or subscribe to a
              newsletter.
            </li>
            <li>
              <strong>Technical Data:</strong> Includes IP address, browser type
              and version, time zone setting, operating system, and platform.
            </li>
            <li>
              <strong>Usage Data:</strong> Includes information about how you
              use our website and which affiliate links you click.
            </li>
            <li>
              <strong>Tracking Data:</strong> Information collected via cookies
              to attribute referrals to our casino partners.
            </li>
          </ul>
          <p>
            We do not collect any Special Categories of Personal Data (race,
            religion, health, etc.). This website is strictly for users aged
            18+.
          </p>

          <h2>4. How We Use Your Personal Data</h2>
          <p>We rely on the following lawful bases to process your data:</p>
          <ul>
            <li>
              <strong>Consent:</strong> For cookies and marketing
              communications.
            </li>
            <li>
              <strong>Legitimate Interests:</strong> To improve our website,
              analyze traffic, and ensure the performance of our affiliate
              marketing business.
            </li>
          </ul>

          <h2>5. Affiliate Disclosure & Cookies</h2>
          <p>
            Casino Compare UK is an affiliate website. When you click on links
            to online casinos on our site, a tracking cookie may be placed on
            your device. This allows the operator to know that you were referred
            by us. This process is essential for our business operations. You
            can manage your cookie preferences through your browser settings or
            our cookie banner.
          </p>

          <h2>6. Data Security</h2>
          <p>
            We have put in place appropriate security measures to prevent your
            personal data from being accidentally lost, used, or accessed in an
            unauthorized way. We limit access to your personal data to those
            employees and partners who have a business need to know.
          </p>

          <h2>7. Your Legal Rights</h2>
          <p>Under the UK GDPR, you have the right to:</p>
          <ul>
            <li>Request access to your personal data.</li>
            <li>Request correction or erasure of your personal data.</li>
            <li>Object to processing of your personal data.</li>
            <li>Request restriction of processing.</li>
            <li>Request transfer of your data.</li>
            <li>Withdraw consent at any time.</li>
          </ul>
          <p>
            If you wish to exercise any of these rights, please contact us at{" "}
            <a href="mailto:info@mbm-mang.com">info@mbm-mang.com</a>.
          </p>

          <h2>8. Third-Party Links</h2>
          <p>
            This website includes links to third-party websites (casinos).
            Clicking on those links may allow third parties to collect data
            about you. We do not control these third-party websites and are not
            responsible for their privacy statements.
          </p>

          <h2>9. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            M.B.M MANAGEMENT LTD at: <br />
            Email: <a href="mailto:info@mbm-mang.com">info@mbm-mang.com</a>
          </p>
        </div>
      </div>
    </>
  );
}
