import React from "react";
import Icon from "../common/icon";

const Resources = () => {
  return (
    <div className="footer__block">
      <h2 className="footer__title">Resources</h2>
      <ul className="list footer__item">
        <li className="footer__menu-item">
          <span className="item-group footer__item">
            Help
            <Icon name="fa fa-info-circle" className="icon footer-icon" />
          </span>
        </li>
        <li className="footer__menu-item">
          <span className="item-group footer__item">
            Your Profile
            <Icon name="fa fa-user-circle-o" className="icon footer-icon" />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Resources;
