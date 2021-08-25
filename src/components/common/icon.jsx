import React from "react";

const Icon = ({ name, className, onClick }) => {
  return (
    <span className={className} onClick={onClick}>
      <i className={name} aria-hidden="true"></i>
    </span>
  );
};

export default Icon;
