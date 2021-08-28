import React from "react";
import ConditionalWrapper from "../../utils/conditionalWrapper";

const Footer = (props) => {
  const { className, children, wrapper = "" } = props;

  return (
    <footer className={`block ${className}`}>
      <ConditionalWrapper
        condition={wrapper}
        wrapper={(children) => <div className={wrapper}>{children}</div>}
      >
        {children}
      </ConditionalWrapper>
    </footer>
  );
};

export const FooterItems = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

export default Footer;
