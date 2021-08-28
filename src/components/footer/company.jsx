import React from "react";
import { ReactComponent as MoPasalLogo } from "../../images/logo.svg";
import Icon from "../common/icon";

const Company = () => {
  return (
    <div className="footer__block">
      <MoPasalLogo height="80" width="100" />
      <span className="item-group footer__item">
        201 Mill St, Lake Wendouree VIC 3350
        <Icon name="fa fa-location-arrow" className="icon footer-icon" />
      </span>
      <span className="item-group footer__item">
        +61 449899882
        <Icon name="fa fa-phone" className="icon footer-icon" />
      </span>
    </div>
  );
};

export default Company;
