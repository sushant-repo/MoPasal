import React from "react";

const FeatureCard = ({ title, body, children }) => {
  return (
    <article className="feature-card">
      {children}
      <h3 className="title">{title}</h3>
      <p className="body">{body}</p>
    </article>
  );
};

export default FeatureCard;
