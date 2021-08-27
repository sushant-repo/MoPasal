import React from "react";

const Icon = ({ name, src, className, onClick }) => {
  return (
    <span className={className} onClick={onClick}>
      {src && <img src={src} alt="icon" />}
      {name && <i className={name} aria-hidden="true"></i>}
    </span>
  );
};

export default Icon;
