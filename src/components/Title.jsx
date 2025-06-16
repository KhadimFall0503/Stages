import React from "react";

function Title({ text, level = 2, className = "" }) {
  const Tag = `h${level}`;

  return (
    <Tag
      className={`fw-bold text-primary text-center mb-4 display-5 ${className}`}
    >
      {text}
    </Tag>
  );
}

export default Title;
