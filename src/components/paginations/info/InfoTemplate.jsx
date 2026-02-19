import myStore from "../../../mobX/Store";
import templates from "../../../json/templates.json";
import { observer } from "mobx-react";
import PortalSection from "../../PortalSection";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const InfoTemplate = observer(() => {
  const location = useLocation();
  const [content, setContent] = useState(null);
  const curDate = new Date();

  useEffect(() => {
    const segments = location.pathname.substring(1).split("/");
    const index = myStore.product === "betting" ? 2 : 1;

    if (segments[index]) {
      myStore.updateInfoContent(segments[index]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  // Second useEffect — track only myStore.infoContent
  useEffect(() => {
    if (!myStore.infoContent) return;

    const key = myStore.infoContent.toLowerCase().replaceAll(" ", "-");

    setContent({
      ...templates?.[key],
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myStore.infoContent]);

  return (
    <>
      <PortalSection />
      <article className="bg-dark px-5_ sm-px-1 py-3 bg-opacity-75 text-white w-100 m-auto">
        <div className="px-5 mx-auto">
          <h1 className="pe-5">
            {content?.title?.replace("{year}", curDate.getFullYear())}
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
        </div>
      </article>
    </>
  );
});

export default InfoTemplate;
