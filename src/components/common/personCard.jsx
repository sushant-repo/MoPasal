import React from "react";
import { Link } from "react-router-dom";
import Icon from "./icon";

const PersonCard = ({ photo, name, company, description, rating }) => {
  return (
    <article className="card person">
      <div className="card__top"></div>
      <Link to="/profile">
        <div className="person__image">
          <img src={photo} alt={`Profile pic of ${name}`} />
        </div>
      </Link>
      <div className="card__bottom">
        <h3 className="person__name">{name}</h3>
        <p className="person__company">{company}</p>
        <p className="person__description">{description}</p>

        <div className="icon-group">
          <Link to="">
            <Icon className="icon icon--small" name="fa fa-facebook" />
          </Link>
          <Link to="">
            <Icon className="icon icon--small" name="fa fa-skype" />
          </Link>
          <Link to="">
            <Icon className="icon icon--small" name="fa fa-instagram" />
          </Link>
          <Link to="">
            <Icon className="icon icon--small" name="fa fa-twitter" />
          </Link>
          <Link to="">
            <Icon className="icon icon--small" name="fa fa-linkedin" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default PersonCard;
