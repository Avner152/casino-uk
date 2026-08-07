import React from "react";
import { Helmet } from "react-helmet";

export default function PrivacyPolicy() {
  const curDate = new Date();
  const meta = {
    title: "Privacy Policy | UK CasinoHub",
    description:
      "Review the Privacy Policy for UK CasinoHub. Learn how we collect, use, and protect your personal information, including data usage and third-party services",
  };
  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>
      <div className="_w-100 text-bg-dark text-white pt-5 pb-5 mt-3 information">
        <div className="m-auto pt-3">
          <span>Last Updated: {curDate.getFullYear()}</span>
          <h2 className="mt-3 mb-3">Privacy & Cookie Policy (UK GDPR)</h2>
          <p>
            Website:{" "}
            <a
              href="https://www.ukcasinohub.net/"
              className="text-white"
              target="_blank"
              rel="noreferrer"
            >
              https://www.ukcasinohub.net/
            </a>
          </p>
          <p>
            This Privacy Policy explains how ADM Ltd. (&quot;we&quot;,
            &quot;us&quot;, &quot;our&quot;, or &quot;Data Controller&quot;)
            collects, uses, stores, and protects your personal data when you
            visit www.ukcasinohub.net (the &quot;Website&quot;). This document
            has been prepared in accordance with Article 13 and Article 14 of
            the UK General Data Protection Regulation (UK GDPR), the Data
            Protection Act 2018 (DPA 2018), and the Privacy and Electronic
            Communications Regulations (PECR).
          </p>

          <div className="mt-4">
            <h4>1. Data Controller & Contact Details</h4>
            <p>
              Under UK GDPR, the legal entity responsible as the Data Controller
              for processing your personal data on this Website is:
            </p>
            <ul>
              <li>
                <strong>Data Controller:</strong> ADM Ltd.
              </li>
              <li>
                <strong>Registered Address:</strong> Via Dante 16, 20121 Milan
                (MI), Italy
              </li>
              <li>
                <strong>VAT / Tax ID:</strong> IT 09876543210
              </li>
              <li>
                <strong>Privacy & GDPR Enquiries:</strong>{" "}
                <a href="mailto:privacy@ukcasinohub.net" className="text-white">
                  privacy@ukcasinohub.net
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-4">
            <h4>2. Categories of Personal Data We Collect</h4>
            <p>
              We process the following categories of personal data when you
              access or interact with our Website:
            </p>
            <ul>
              <li>
                <strong>Technical & Navigation Data:</strong> Internet Protocol
                (IP) address, browser type and version, operating system, time
                zone settings, referring URLs, device information, and site
                interaction logs.
              </li>
              <li>
                <strong>Affiliate & Click Data:</strong> Outbound link referral
                IDs, click timestamps, and tracking codes used to attribute
                clicks from our Website to third-party casino operators.
              </li>
              <li>
                <strong>Contact & Communication Data:</strong> Email address and
                name provided voluntarily when submitting contact forms or
                subscribing to newsletters.
              </li>
              <li>
                <strong>Cookie & Device Identifiers:</strong> Identifiers
                collected via necessary, analytical, and marketing cookies (see
                Section 6).
              </li>
            </ul>
          </div>

          <div className="mt-4">
            <h4>3. Lawful Bases and Purposes of Processing</h4>
            <p>
              We process your personal data under the following legal bases
              pursuant to Article 6 of the UK GDPR:
            </p>
            <ul>
              <li>
                <strong>Legitimate Interests:</strong> To operate, secure,
                troubleshoot, and optimize our Website; to analyze aggregate
                traffic patterns; and to prevent fraudulent activities. (Art.
                6(1)(f) UK GDPR)
              </li>
              <li>
                <strong>Consent:</strong> To place non-essential cookies (such
                as performance and analytics tools) on your device, and to
                deliver direct newsletter marketing. You may revoke consent at
                any time. (Art. 6(1)(a) UK GDPR)
              </li>
              <li>
                <strong>Legal Obligations:</strong> To comply with legal
                reporting requirements or lawful demands from regulatory bodies
                or authorities. (Art. 6(1)(c) UK GDPR)
              </li>
            </ul>
          </div>

          <div className="mt-4">
            <h4>4. Affiliate Recipients & Transparency</h4>
            <p>
              ukcasinohub.net is an independent affiliate comparison portal and
              does not operate real-money online casino services. Your data may
              be disclosed to or processed by the following third-party
              recipients acting as Data Processors (Art. 28 UK GDPR) or
              independent Data Controllers:
            </p>
            <ul>
              <li>
                Unique tracking identifiers are passed to verify referral
                traffic when you click on outbound partner links.
              </li>
              <li>
                Google Analytics (configured with IP anonymization enabled) to
                analyze aggregate site traffic.
              </li>
              <li>
                Hosting and content delivery networks (CDNs) providing website
                infrastructure and cybersecurity.
              </li>
              <li>Where required by law or judicial order.</li>
            </ul>
            <p>
              We do not sell, rent, or trade your personal information to any
              third parties.
            </p>
          </div>

          <div className="mt-4">
            <h4>5. International Data Transfers</h4>
            <p>
              As ADM Ltd. is headquartered within the European Economic Area
              (EEA), and our technological service providers operate globally,
              your personal data may be transferred outside the United Kingdom.
              Where transfers occur, we enforce recognized legal safeguards:
            </p>
            <ul>
              <li>
                Transfers to the EEA rely on the UK Government&apos;s formal
                Adequacy Regulations for European Economic Area territories.
              </li>
              <li>
                Transfers to non-adequate third countries rely on approved
                mechanisms, including the UK International Data Transfer
                Agreement (IDTA) or the UK Addendum to the EU Standard
                Contractual Clauses (SCCs) pursuant to Article 46 of the UK
                GDPR.
              </li>
            </ul>
          </div>

          <div className="mt-4">
            <h4>6. Cookies and Tracking Technologies (PECR Compliance)</h4>
            <p>
              In compliance with PECR and UK GDPR, our Website operates an
              active Cookie Management Banner that requires explicit opt-in
              consent prior to setting non-essential cookies:
            </p>
            <ul>
              <li>
                <strong>Strictly Necessary Cookies:</strong> Essential for
                website navigation and technical security. These cannot be
                disabled.
              </li>
              <li>
                <strong>Analytical & Performance Cookies:</strong> Used to
                gather anonymous statistical metrics on user interaction and
                site usage. Loaded strictly following your explicit consent.
              </li>
              <li>
                <strong>Affiliate Tracking Cookies:</strong> Used to verify
                click-through transactions with affiliate casino partners.
              </li>
            </ul>
            <p>
              You can modify or withdraw your cookie consent at any time via the
              &quot;Cookie Preferences&quot; link in our Website footer.
            </p>
          </div>

          <div className="mt-4">
            <h4>7. Data Retention Periods</h4>
            <p>
              Personal data is retained only as long as necessary to fulfill its
              designated processing purpose:
            </p>
            <ul>
              <li>
                <strong>Technical & Server Logs:</strong> Retained for up to 12
                months from the date of collection.
              </li>
              <li>
                <strong>Affiliate Click Identifiers:</strong> Retained for up to
                90 days depending on partner attribution policies.
              </li>
              <li>
                <strong>Newsletter & Subscriber Data:</strong> Retained until
                you withdraw consent or click &quot;Unsubscribe&quot;.
              </li>
              <li>
                <strong>Contact Form Submissions:</strong> Retained for up to 24
                months following resolution of the query.
              </li>
              <li>
                <strong>Legal & Statutory Records:</strong> Retained for up to 6
                years in accordance with statutory requirements.
              </li>
            </ul>
          </div>

          <div className="mt-4">
            <h4>8. Your Data Subject Rights</h4>
            <p>
              Under the UK GDPR, you hold the following statutory rights
              regarding your personal data:
            </p>
            <ul>
              <li>
                <strong>Right of Access (Art. 15):</strong> Request access to a
                copy of your personal data.
              </li>
              <li>
                <strong>Right to Rectification (Art. 16):</strong> Request
                correction of inaccurate or incomplete data.
              </li>
              <li>
                <strong>Right to Erasure (Art. 17):</strong> Request erasure of
                your personal data (&quot;Right to be Forgotten&quot;).
              </li>
              <li>
                <strong>Right to Restrict Processing (Art. 18):</strong> Request
                restriction of processing under specified conditions.
              </li>
              <li>
                <strong>Right to Data Portability (Art. 20):</strong> Receive
                your data in a structured, machine-readable format.
              </li>
              <li>
                <strong>Right to Object (Art. 21):</strong> Object to processing
                based on legitimate interests or direct marketing.
              </li>
              <li>
                <strong>Right to Withdraw Consent (Art. 7(3)):</strong> Withdraw
                consent at any time without affecting prior lawful processing.
              </li>
            </ul>
            <p>
              To exercise any of these rights, please email us at{" "}
              <a href="mailto:privacy@ukcasinohub.net" className="text-white">
                privacy@ukcasinohub.net
              </a>
              . We will respond within one calendar month.
            </p>
          </div>

          <div className="mt-4">
            <h4>9. Age Restriction (18+ Only)</h4>
            <p>
              This Website is strictly intended for individuals who are 18 years
              of age or older. We do not knowingly process data from minors. If
              we discover that an individual under 18 has submitted personal
              data to us, it will be deleted immediately.
            </p>
          </div>

          <div className="mt-4">
            <h4>10. Right to Lodge a Complaint with the ICO</h4>
            <p>
              If you believe our processing of your personal data infringes UK
              data protection law, you have the statutory right to file a
              complaint with the United Kingdom supervisory authority:
            </p>
            <p>
              <strong>Information Commissioner&apos;s Office (ICO)</strong>
              <br />
              Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF, United
              Kingdom
              <br />
              Helpline: 0303 123 1113 | Website:{" "}
              <a
                href="https://ico.org.uk"
                className="text-white"
                target="_blank"
                rel="noreferrer"
              >
                https://ico.org.uk
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
