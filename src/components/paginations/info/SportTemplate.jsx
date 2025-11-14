import myStore from "../../../mobX/Store";
import templates from "../../../json/templates.json";
import { observer } from "mobx-react";
import PortalSection from "../../PortalSection";
import { useEffect } from "react";

const SportTemplate = observer(() => {
  useEffect(() => {
    if (!myStore.infoContent)
      myStore.updateInfoContent(
        window.location.pathname.substring(1).split("/")[2]
      );
  }, []);

  const content =
    templates?.[myStore.infoContent?.toLowerCase().replaceAll(" ", "-")];

  return (
    <>
      <PortalSection />
      <article className="bg-dark px-5 py-3 bg-opacity-75 text-white w-100 m-auto">
        <h1 className="pe-5">{content?.title}</h1>
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

export default SportTemplate;
