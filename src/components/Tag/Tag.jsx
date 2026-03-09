import { useState } from "react";

import "./Tag.scss";

const Tag = ({ text, active, onHandle }) => {
  return (
    <div
      className={`tag-wrapper ${active ? "active" : ""}`}
      onClick={() => {
        onHandle();
      }}
    >
      <p className="tag-text">{text}</p>
    </div>
  );
};

export default Tag;
