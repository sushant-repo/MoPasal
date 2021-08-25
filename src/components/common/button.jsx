import React from "react";
import PropTypes from "prop-types";

const Button = ({ className, type, children }) => {
  let classes = className;

  function getClassName() {
    if (!type) {
      return classes;
    }
    return (classes += " btn--" + type);
  }
  return <button className={getClassName()}>{children}</button>;
};

export default Button;

Button.propTypes = {
  color: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.string,
};

// Button.defaultProps = {
//   type: "rectangle",
// };
