import { observer } from "mobx-react";
import contentObject from "../json/content.json";
import myStore from "../mobX/Store";

const Content = observer(() => {
  const content = contentObject[myStore.product || "casino"];
  return (
    <div className="">
      <h1 className="fw-bold text-break ">
        <span>
          {content.top.h1.replace("{curDate}", new Date().getFullYear())}
        </span>
      </h1>
      <p>{content.top.p}</p>

      <div className="ps-2">
        {content.list.map((div) => (
          <div className="mt-3" key={div.id} id={div.id}>
            <h2>
              <span>{div.h2}</span>
            </h2>
            {div?.ul?.map((li, i) => {
              const [title, text] = li.split("-");
              return (
                <div className="my-1" key={i}>
                  <b>{title}</b> - <span>{text}</span>
                </div>
              );
            })}
            {div?.p?.split("\n").map((pi, i) => (
              <p key={i}>{pi}</p>
            ))}
          </div>
        ))}

        <div className="my-3 d-flex flex-column gap-3">
          <div>
            According to the British Gambling Commission, the statutory gambling
            regulator, "Safe and responsible gambling comes from an industry
            that takes care of its customers, customers who are empowered with
            the knowledge to manage their gambling, and a regulator that ensures
            the consumer is at the heart of everything we do." This information
            aims to address the first two criteria. As we promote gambling
            services on this site, we believe it is important to inform our
            customers about the risks associated with gambling and provide
            information on where to find further advice and support if needed.
          </div>
        </div>
      </div>
    </div>
  );
});

export default Content;
