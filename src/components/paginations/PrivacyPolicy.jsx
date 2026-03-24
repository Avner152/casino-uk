import React from "react";
import { Helmet } from "react-helmet";

export default function PrivacyPolicy() {
  const curDate = new Date();
  const meta = {
    title: "Privacy Policy | Casino Portal UK",
    description:
      "Review the Privacy Policy for Casino Portal UK. Learn how we collect, use, and protect your personal information, including data usage and third-party services",
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
            Last Updated: {curDate.toLocaleString("default", { month: "long" })}
            , {curDate.getFullYear()}
          </span>

          {/* DATA CONTROLLER */}
          <div className="mt-4">
            <h4>Data Controller</h4>
            <p>The data controller responsible for your personal data is:</p>
            <p>
              <strong>Casino Portal UK</strong>
              <br />
              New Legins LTD, Petah Tikva, Israel
              <br />
              Email: <a href="mailto:info@newlegins.com">info@newlegins.com</a>
            </p>
          </div>

          {/* POLICY CHANGES */}
          <div className="mt-4">
            <h4>Changes to This Policy</h4>
            <p>
              We may update this Privacy Policy from time to time. When we do,
              we will revise the "Last Updated" date above. Where required by
              law, we will notify you of significant changes.
            </p>
          </div>

          {/* LEGAL BASES */}
          <div className="mt-4">
            <h4>Legal Bases for Processing</h4>
            <p>We process personal data under the following lawful bases:</p>
            <ul>
              <li>
                <strong>Consent</strong> - for newsletters and marketing.
              </li>
              <li>
                <strong>Legitimate Interests</strong> - to operate, improve, and
                secure the Site.
              </li>
              <li>
                <strong>Contract</strong> - where processing is necessary to
                provide requested services.
              </li>
              <li>
                <strong>Legal Obligation</strong> - to comply with applicable
                laws.
              </li>
            </ul>
          </div>

          {/* DATA COLLECTION */}
          <div className="mt-4">
            <h4>Information We Collect</h4>

            <p>
              <strong>Information you provide:</strong>
            </p>
            <p>
              This includes name, email address, and any information submitted
              via forms, newsletters, or contact requests.
            </p>

            <p>
              <strong>Automatically collected data:</strong>
            </p>
            <ul>
              <li>IP address</li>
              <li>Device and browser information</li>
              <li>Usage data (pages visited, interactions)</li>
              <li>Cookies and tracking technologies</li>
            </ul>
          </div>

          {/* HOW DATA IS USED */}
          <div className="mt-4">
            <h4>How We Use Your Data</h4>
            <ul>
              <li>Provide and operate the Site</li>
              <li>Respond to inquiries</li>
              <li>Improve user experience and analytics</li>
              <li>Send marketing communications (with consent)</li>
              <li>Ensure security and prevent fraud</li>
            </ul>
          </div>

          {/* THIRD PARTIES */}
          <div className="mt-4">
            <h4>Third-Party Services</h4>
            <p>
              We may link to third-party partners. If you submit personal data
              on third-party websites, their privacy policies apply. We are not
              responsible for their practices.
            </p>
          </div>

          {/* DATA RETENTION */}
          <div className="mt-4">
            <h4>Data Retention</h4>
            <p>
              We retain personal data only as long as necessary for the purposes
              described in this policy, including legal, accounting, or
              reporting requirements. Retention periods vary depending on the
              nature of the data.
            </p>
          </div>

          {/* INTERNATIONAL TRANSFERS */}
          <div className="mt-4">
            <h4>International Data Transfers</h4>
            <p>
              Your data may be transferred outside the UK. Where this occurs, we
              ensure appropriate safeguards are in place, such as adequacy
              decisions or standard contractual clauses.
            </p>
          </div>

          {/* USER RIGHTS */}
          <div className="mt-4">
            <h4>Your Rights Under UK GDPR</h4>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Restrict or object to processing</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </div>

          {/* ICO */}
          <div className="mt-4">
            <h4>Complaints</h4>
            <p>
              You have the right to lodge a complaint with the UK supervisory
              authority:
            </p>
            <p>
              Information Commissioner's Office (ICO)
              <br />
              Website: <a href="https://ico.org.uk/">https://ico.org.uk/</a>
            </p>
          </div>

          {/* CONTACT */}
          <div className="mt-4">
            <h4>Contact Us</h4>
            <p>
              If you have any questions about this Privacy Policy or your data,
              please contact us at:
            </p>
            <p>
              Email: <a href="mailto:info@newlegins.com">info@newlegins.com</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
