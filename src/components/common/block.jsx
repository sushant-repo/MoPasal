import React from "react";
import ConditionalWrapper from "../../utils/conditionalWrapper";

const Block = (props) => {
  const { className, data, children, wrapper = "" } = props;

  return (
    <section className={`block ${className}`}>
      <ConditionalWrapper
        condition={wrapper}
        wrapper={(children) => <div className={wrapper}>{children}</div>}
      >
        {data && (
          <header className="block__header">
            <h2 className="block__heading">{data.title}</h2>
            <p>{data.description}</p>
          </header>
        )}
        {children}
      </ConditionalWrapper>
    </section>
  );
};

export const BlockItems = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

export default Block;
