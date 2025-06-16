import React from "react";

function Title({ text, level = 2, className = "" }) {
  const Tag = `h${level}`;

  return (
    <Tag
      className={`title-underline fw-bold text-primary mb-4 fs-1 text-uppercase ${className}`}
    >
      <span className="title-text">{text}</span>
      <span className="title-line"></span>
    </Tag>
  );
}

export default Title;
