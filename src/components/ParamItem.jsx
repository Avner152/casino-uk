import React from "react";

export default function ParamItem({ icon, text }) {
  return (
    <div className="col col-md-6 d-flex p-2 border rounded gap-1">
      <img alt="icon" src={icon} />
      <div>{text}</div>
    </div>
  );
}
