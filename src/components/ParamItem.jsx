import React from "react";

export default function ParamItem({ icon, text }) {
  return (
    <div className="col col-md-6 d-flex p-2 border rounded gap-1">
      <img alt="icon" src={icon} />
      <div>{text}</div>
    </div>
    // <div className="d-flex justify-content-start _m-auto _flex-nowrap w-40 gap-2 p-3 border rounded">
    //   <img src={icon} />
    //   <div>{text}</div>
    // </div>
  );
}
