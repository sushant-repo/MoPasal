import React from "react";

const MediaCard = ({ children, title, body, className }) => {
  return (
    <article className={`media ${className}`}>
      <div className="media__icon">{children}</div>
      <div className="media__details">
        <h3 className="media__title">{title}</h3>
        <p className="media__body">{body}</p>
      </div>
    </article>
  );
};

export default MediaCard;
