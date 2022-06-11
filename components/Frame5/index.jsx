import React from "react";
import "./Frame5.css";

function Frame5(props) {
  const { className } = props;

  return (
    <div className={`frame-5 ${className || ""}`}>
      <img className="gk-golden-transparent-2" src="/img/gk-golden-transparent-1@2x.png" />
    </div>
  );
}

export default Frame5;
