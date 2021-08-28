import React from "react";
import { Link } from "react-router-dom";
import Icon from "../common/icon";
const FooterSocial = () => {
  return (
    <div className="icon-group icon-group--inline footer__social">
      <Link to="">
        <Icon className="icon " name="fa fa-facebook-square" />
      </Link>

      <Link to="">
        <Icon className="icon " name="fa fa-instagram" />
      </Link>

      <Link to="">
        <Icon className="icon " name="fa fa-linkedin-square" />
      </Link>
    </div>
  );
};

export default FooterSocial;
