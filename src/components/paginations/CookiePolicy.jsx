import { Helmet } from "react-helmet";

export default function CookiePolicy() {
  const curDate = new Date();
  const meta = {
    title: "Cookie Policy | CasinoCompareUK",
    description:
      "Read our Cookie Policy for `CasinoCompareUK`. Learn about the types of cookies we use, how they help improve your experience, and how to manage your cookie preferences on our site",
  };
  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>
      <div className="text-bg-dark text-white pt-5 _pb-5 mb-3 mt-3 information">
        <div className="m-auto">
          <span>
            Last Updated: {curDate.toLocaleString("default", { month: "long" })}{" "}
            {String(curDate.getDate()).padStart(2, "0")},{" "}
            {curDate.getFullYear()}
          </span>

          <p>
            This Cookie Policy ("Policy") applies to websites operated by
            Natural Intelligence Ltd. ("NI", "us", or "we"). By using the Site,
            you agree to the use of cookies as described in this Policy.
          </p>
          <p>
            We reserve the right to modify this Policy at any time. If there are
            significant changes, you will be notified via the Site. We encourage
            you to review this page periodically. Continued use of the Site
            constitutes your acceptance of any changes. If you do not agree with
            the terms, discontinue use of the Site or adjust your browser
            settings to refuse cookies.
          </p>
          <div>
            <span>
              This Cookie Policy is part of our Privacy Policy, and terms
              defined there have the same meanings here. This Policy explains:
            </span>
            <ul>
              <li>What cookies are?</li>
              <li>Cookies used when you use the Site</li>
              <li>Third-party use of cookies on the Site.</li>
              <li>Your cookie options</li>
              <li>Interest-Based Advertising</li>
            </ul>
          </div>

          <div>
            <div className="mt-4">
              <h4>What Are Cookies?</h4>
              <p>
                A cookie is a small text file stored in your web browser that
                allows the Site or a third party to recognize you. Cookies may
                be used for:
              </p>
              <ul>
                <li>Enabling certain functions</li>
                <li>Providing analytics</li>
                <li>Storing preferences</li>
                <li>Enabling ad delivery and behavioral advertising</li>
              </ul>
            </div>
            <div className="mt-3">
              <p>
                Cookies can be session cookies (expire when you close your
                browser) or persistent cookies (remain until they expire or you
                delete them). Cookies placed by the site you're visiting are
                "first-party cookies," while those placed by other entities are
                "third-party cookies."
              </p>
              <p>
                Cookies often work with pixel tags (web beacons or clear GIFs)
                to measure visitor actions. For example, pixel tags may track
                interactions on the site or referrals to partners, for
                re-targeting or interest-based advertising as explained in
                section 5 below.
              </p>
            </div>
            <div>
              <h4>What Cookies Are Used When I Use the Site?</h4>
              <p>
                When you access or use the Site, we or a third party may place
                several cookies in your browser. Some cookies are used only if
                you use certain features or preferences, while others serve
                longer-term purposes, as detailed in our Privacy Policy.
              </p>
              <p>Each cookie serves one of the following purposes:</p>
              <ul>
                <li>
                  Essential Cookies: These first-party cookies allow users to
                  use features of the Site like staying logged in or making
                  purchases
                </li>
                <li>
                  Preference Cookies: These first-party cookies store your Site
                  preferences
                </li>
                <li>
                  Ad Targeting Cookies: These third-party cookies enable
                  advertising networks to deliver ads relevant to your
                  activities.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mt-3">
                How Do Third Parties Use Cookies on the Site?
              </h4>
              <p>
                Third parties like analytics vendors or ad networks use cookies
                to collect user information anonymously. This helps them
                understand users' activities on the Site and other websites they
                visit.
              </p>
            </div>
            <div>
              <div>What Are My Cookie Options?</div>
              <p>
                You can change your browser settings to delete cookies or refuse
                new ones. Visit your browser's help pages for instructions. Note
                that if you delete or refuse cookies, some features of the Site
                may not function properly.
              </p>
              <p>
                You may also opt-out of third-party cookies by following
                instructions in each third party's privacy policy.
              </p>
            </div>
            <div>
              <h4>How to Manage Cookies?</h4>
              <p>
                Cookies help you get the most out of our Site. If you disable
                cookies, certain sections of the Site may not function properly.
              </p>
            </div>
            <div>
              <h4>How to Manage Your Cookies?</h4>
              <p>
                Most browsers are set to accept cookies by default. You can
                change settings to block cookies or alert you when cookies are
                sent.
              </p>
              <p>
                Be aware that disabling cookies may affect your experience on
                the Site, such as not being able to visit certain areas or
                receive personalized content.
              </p>
              <p>
                For more information about the cookies used on the Site, click
                here.
              </p>
            </div>
            <div>
              <h4>Interest-Based Advertising</h4>
              <p>
                We and third parties engage in interest-based advertising to
                deliver personalized content that we believe will be of interest
                to you. We do not control third-party cookies or the resulting
                information for online, mobile, or email advertising and are not
                responsible for their actions or policies. Your Online Choices |
                EDAA{" "}
                <a href="https://www.youronlinechoices.eu">
                  https://www.youronlinechoices.eu
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
