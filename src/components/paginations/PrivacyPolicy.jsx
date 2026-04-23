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
          <span>
            Last Updated: {curDate.toLocaleString("default", { month: "long" })}{" "}
            , {curDate.getFullYear()}
          </span>

          <p>
            We reserve the right to change this Privacy Policy at any time, at
            our sole and absolute discretion. When changes are made, we will
            post the updated Privacy Policy on the Site, and the "Last Updated"
            date will reflect the new effective date. Any access or use of the
            Site following this date indicates your consent to and acceptance of
            the updated Privacy Policy. For significant changes, we will provide
            prominent notice, such as a notification on the Site, at least seven
            (7) days before the changes become effective. In such cases, the
            changes will be effective seven (7) days after the notification is
            published.
          </p>
          <p>
            <strong>Terms of Use</strong>: This Privacy Policy is an integral
            part of the Site's Terms of Use ("Terms"). Any capitalized term not
            defined in this Privacy Policy will have the meaning given to it in
            the Terms.
          </p>

          <div>
            <h4>Our Legal Bases for Processing Personal Data:</h4>
            <p>
              We process and use Personal Information in compliance with data
              protection laws. Our legal grounds for processing your Personal
              Information typically include:
            </p>
            <ul>
              <li>
                <strong>Performance of a Contract</strong>: By using the Site,
                you request us to provide services in accordance with our Terms
                of Use, which requires processing some of your Personal
                Information (e.g., your IP address).
              </li>
              <li>
                <strong>Legitimate Interests</strong>: We may use your Personal
                Information for legitimate business purposes, such as operating,
                improving, and promoting the Services, customizing your
                experience, conducting analytics, and ensuring Site security.
              </li>
              <li>
                <strong>Legal Obligations</strong>: In some cases, processing
                your Personal Information is necessary to comply with regulatory
                obligations or legal requirements (e.g., addressing complaints
                from users or authorities).
              </li>
              <li>
                <strong>Consent</strong>: When you provide or submit certain
                Personal Information to use specific Services.
              </li>
            </ul>
          </div>

          <div>
            <h4>Information We Collect</h4>
            <p>
              When you visit the Site or use the Services, we may collect
              certain information in the following ways:
            </p>
          </div>
          <div>
            <h4>Information You Provide to Us</h4>
            <p>
              Some Services require you to provide Personal Information to use
              them. This may include newsletters, promotional material, and
              forms, subject to your specific and active consent. Personal
              Information includes data that can personally identify an
              individual, such as name, email address, phone number, home
              address, etc. In some jurisdictions, your IP address may also be
              considered Personal Information.
            </p>
          </div>

          <div>
            <h4>Third-Party Forms and Services</h4>
            <p>
              The Site lists, rates, and compares various third-party
              businesses, brands, and commercial entities ("Partners") and their
              products/services ("Products"). We may offer you services and
              Products from Partners via an online form, which you can fill out
              upon your consent. If you seek more information or want to pursue
              a transaction with a Partner, you may be directed to a Partner's
              Landing Page, where you might need to submit Personal Information
              ("Landing Page Info"). This information is collected directly by
              the Partner, and their privacy policy will apply.
            </p>
          </div>

          <div>
            <h4>Contact Us</h4>
            <p>
              If you contact us via a form, email, feedback feature, or other
              means, you may need to provide Personal Information, such as your
              name and email address. This information, along with the content
              of your request, will be used to process and address your request
              and for our legitimate business purposes.
            </p>
          </div>
          <div>
            <h4>Blogs, Newsletters, Surveys, and Promotions</h4>
            <p>
              The Site may contain blogs, reviews, and articles about our
              services, Partners, Products, and relevant markets. You may
              subscribe to newsletters, participate in surveys, and engage in
              promotional activities, which may require providing Personal
              Information. Your submission of information will be governed by
              this Privacy Policy and the third party’s privacy policy.
            </p>
          </div>

          <div>
            <h4>Information We Collect from You</h4>
            <p>
              We collect information about your use of the Services and
              interactions with the Site, including:
            </p>
            <ul>
              <li>
                Device Information: Information such as device type, operating
                system, language, geographic location, and time zone.
              </li>
              <li>
                Interactions and Usage: Data about your interaction with the
                Services, including URLs, actions, timestamps, and page views.
              </li>
              <li>
                Log Files: Information collected through server log files and
                tracking technologies, including IP addresses.
              </li>
              <li>
                Cookies and Similar Technologies: The Site may use cookies and
                other web tracking technologies to store preferences and track
                Site usage. Refer to our Cookie Policy for more details.
              </li>
            </ul>
          </div>
          <div className="mt-3">
            <p>
              For any further details or specific queries, please contact us
              directly.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
