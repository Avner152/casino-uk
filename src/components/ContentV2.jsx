import { observer } from "mobx-react";
import myStore from "../mobX/Store";
import { toJS } from "mobx";

const ContentV2 = observer(() => {
  const curDate = new Date();

  const topPar = toJS(myStore.content).headlineSection;

  const content = Object.values(toJS(myStore.content))
    .filter((item) => item.sortOrder)
    .sort((a, b) => a.sortOrder - b.sortOrder);

  // console.log(content);

  return (
    <div className="content-container w-100 m-auto">
      <h1 className="fw-bold text-white">
        {topPar.h1.replace("{curDate}", curDate.getFullYear())}
      </h1>
      <p>{topPar.p.replace("{curDate}", curDate.getFullYear())}</p>

      {content.map((item) => (
        <div className="mt-4 px-3" key={item.id}>
          <h2 className="fw-bold">{item.h2}</h2>
          {item.p && (
            <>
              {item.p.split("/n").map((pi, i) => (
                <p key={i}>{pi}</p>
              ))}
            </>
          )}
          {item.ol && (
            <ul className="list-unstyled ps-4">
              {item.ol.map((li, i) => (
                <li key={i}>
                  <h3>{li.title}</h3>
                  <p>{li.description}</p>
                </li>
              ))}
            </ul>
          )}
          {item.ul && (
            <ul className="ps-4">
              {item.ul.map((li, i) => (
                <li key={i}>{li}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
});

export default ContentV2;
