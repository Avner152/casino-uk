import React from "react";
import { Helmet } from "react-helmet";

export default function Terms() {
  const curDate = new Date();
  const meta = {
    title: "Terms and Conditions  | Only UK Casinos",
    description:
      "Read the Terms and Conditions for using Only UK Casinos's website and services. Learn about your rights, obligations, and the rules governing your use of our site",
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
            Last Revised: {curDate.toLocaleString("default", { month: "long" })}{" "}
            , {curDate.getFullYear()}
          </span>
          <p>
            These Terms and Conditions govern the use of our Site and services.
            By accessing or using our Service, you agree to be bound by these
            Terms. If you do not agree with these Terms, please refrain from
            using our service.
          </p>

          <div>
            <h4>General</h4>
            <div>
              <strong>Service Definition</strong>: The Site and its contents are
              considered our Service. By using our Service, you acknowledge and
              accept these Terms.
            </div>
            <div>
              <strong>Acceptance</strong>: Registering for any account or
              subscription on our Service requires you to indicate your
              acceptance of these Terms. This forms a binding agreement between
              you and us.
            </div>
            <div>
              <strong>Modifications</strong>: We reserve the right to change
              these Terms at our sole discretion. You are responsible for
              checking this page periodically for updates, which will be binding
              upon posting.
            </div>
          </div>
          <div className="mt-3">
            <h4>The Site</h4>
            <div>
              <strong>Nature of Service</strong>: The Site is free and intended
              for informational purposes only.
            </div>
            <div>
              <strong>Non-Operation</strong>: We do not operate any online
              casinos, poker sites, or betting platforms, nor do we accept any
              cash, bets, or wagers.
            </div>
            <div>
              <strong>Age Restriction</strong>: You must be over 18 or the legal
              age for using the Site in your jurisdiction.
            </div>
            <div>
              <strong>Jurisdiction</strong>: Our Service is intended only for
              Users in jurisdictions where the use of such information is legal.
            </div>
            <div>
              <strong>Third-Party Links</strong>: The Site may contain links to
              third-party services or websites. We are not responsible for their
              content, security, or privacy practices. Using these links is at
              your own risk.
            </div>
            <div>
              <strong>Endorsement Disclaimer</strong>: A link to a third-party
              site does not imply endorsement. You are responsible for
              determining the legality and appropriateness of using any
              third-party service.
            </div>
            <div>
              <strong>No Warranty</strong>: We do not make any warranties about
              the accuracy or quality of third-party content.
            </div>
            <div>
              <strong>Advice Disclaimer</strong>: No information on the Site
              should be considered as advice or recommendation on betting or
              gambling.
            </div>
            <div>
              <strong>Liability</strong>: We have no control over and are not
              responsible for the actions of any Gambling Operator, including
              accepting bets or making payments.
            </div>
            <div>
              <strong>Social Media</strong>: These Terms also apply to content
              we post on our social media accounts.
            </div>
            <div>
              <strong>Service Interruptions</strong>: We may occasionally
              suspend or restrict access to our Service for maintenance or
              updates. We do not guarantee uninterrupted or error-free access.
            </div>
            <div>
              <strong>Promotions</strong>: Competitions or promotions on our
              Service are subject to their own terms and may not be available in
              all jurisdictions.
            </div>
          </div>
          <div className="mt-3">
            <h4>Use of the Site</h4>
            <div>
              <strong>Illegal Activities</strong>: Engage in activities that
              breach any law or regulation.
            </div>
            <div>
              <strong>Fraud</strong>: Engage in fraudulent activities.
            </div>
            <div>
              <strong>Harm</strong>: Harm minors or any other individuals.
            </div>
            <div>
              <strong>Intellectual Property</strong>: Use material that violates
              our or third-party intellectual property rights.
            </div>
            <div>
              <strong>Spam</strong>: Send unsolicited promotional material.
            </div>
            <div>
              <strong>Downloads</strong>: Download information, content, or
              materials without permission.
            </div>
            <div>
              <strong>Malware</strong>: Transmit any harmful software.
            </div>
            <div>
              <strong>Interference</strong>: Access or interfere with our
              Service or any related systems without authorization.
            </div>
          </div>
          <div className="mt-3">
            <h4>User Warranties</h4>
            <p>
              You acknowledge that gambling laws vary worldwide, and it is your
              responsibility to comply with the applicable laws in your
              jurisdiction. By using our Service, you confirm that:
            </p>
            <ul>
              <li>
                <strong>Legality</strong>: You are in a jurisdiction where it is
                legal to use our Service.
              </li>
              <li>
                <strong>Age</strong>: You are over 18 or the age of legal
                consent.
              </li>
              <li>
                <strong>Compliance</strong>: You will not violate any applicable
                laws.
              </li>
              <li>
                <strong>Financial Responsibility</strong>: You are responsible
                for any losses incurred through gambling.
              </li>
              <li>
                <strong>Requirement Verification</strong>: You will verify any
                usage requirements.
              </li>
              <li>
                <strong>Risk</strong>: Your use of any Gambling Operator is at
                your own risk.
              </li>
              <li>
                <strong>Legal Understanding</strong>: You understand the
                gambling laws in your jurisdiction.
              </li>
              <li>
                <strong>No Illegal Use</strong>: You will not use our Service
                for illegal purposes.
              </li>
              <li>
                <strong>No Impersonation</strong>: You will not impersonate
                others.
              </li>
              <li>
                <strong>Waiver of Class Action</strong>: You waive any right to
                participate in a class action or jury trial against us.
              </li>
            </ul>

            <p>
              If you use the Site on behalf of an entity, you represent that you
              are authorized to bind that entity to these Terms.
            </p>
          </div>
          <div>
            <h4>Intellectual Property Rights</h4>

            <p>
              We own or license all intellectual property rights in our Service.
              You do not gain any rights to our trademarks or content by using
              our Service. Copying or distributing our Service for commercial
              purposes is prohibited without our prior written consent.
            </p>
          </div>
          <div>
            <h4>Intellectual Property Infringement</h4>
            <p>
              If you believe that your intellectual property rights are being
              infringed upon, notify us with the following information:
            </p>
            <ul>
              <li>
                <strong>Your Information</strong>: Your name, entity (if
                applicable), contact information, and a signature of the
                intellectual property owner or authorized agent.
              </li>
              <li>
                <strong>Infringement Details</strong>: Details of the alleged
                infringement and proof of ownership.
              </li>
            </ul>

            <div className="mt-3">
              <h4>Disclaimer</h4>
              <p>
                Our Service is provided "as is" without any warranties. We do
                not guarantee uninterrupted or error-free access and disclaim
                any responsibility for the accuracy, completeness, or
                availability of information on third-party sites linked to our
                Service.
              </p>
            </div>
            <div>
              <h4>Indemnity</h4>
              <p>
                You agree to indemnify us and our affiliates against any losses
                or damages arising from your breach of these Terms.
              </p>
            </div>
            <div>
              <h4>Limitation of Liability</h4>
              <p>
                We are not liable for any direct, indirect, incidental, or
                consequential damages arising from your use of our Service. Our
                total liability is limited to the amount you paid, if any, or
                $100 USD, whichever is less.
              </p>
            </div>
            <div>
              <h4>Termination</h4>
              <p>
                We may terminate your access to the Site without notice for any
                reason, including breach of these Terms. Upon termination, you
                must stop using our Service and delete any copies in your
                possession.
              </p>
            </div>
          </div>

          <div>
            <h4>Severability and No Third-Party Rights</h4>
            <p>
              If any provision of these Terms is invalid, the remaining
              provisions will continue in effect. These Terms do not create any
              third-party rights or relationships.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
