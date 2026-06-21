import myStore from "../../../mobX/Store";
import templates from "../../../json/templates.json";
import { observer } from "mobx-react";
import PortalSection from "../../PortalSection";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const InfoTemplate = observer(() => {
  const location = useLocation();
  const meta = {
    title: "UK Betting Sites - Best Online Bookmakers List 2026",
    description:
      "Find the best betting sites available in the UK with our in-depth comparison. Review our expert’s top 10 rankings and complete list of online bookmakers to help you choose a safe, trusted, and reliable betting site.",
  };
  useEffect(() => {
    // if (!myStore.infoContent)
    let splitted = window.location.pathname.substring(1).split("/");
    myStore.updateInfoContent(splitted[splitted.length - 1]);
  }, [location]);

  const content =
    templates?.[myStore.infoContent?.toLowerCase().replaceAll(" ", "-")];

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>
      <PortalSection />
      <article className="bg-dark px-5 sm-px-1 py-3 bg-opacity-75 text-white w-100 m-auto">
        <h1 className="pe-5">
          <span>
            {content?.title.replaceAll("{curYear}", new Date().getFullYear())}
          </span>
        </h1>
        {content?.sections?.map((section, index) => (
          <section key={index} className="mt-3">
            {section?.type === "h2" && <h2>{section?.heading}</h2>}

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
          </section>
        ))}
      </article>
    </>
  );
});

export default InfoTemplate;
