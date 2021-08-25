import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "./icon";

import logo from "../../images/logo-initial.png";

const NavBar = (props) => {
  const [isOpen, setisOpen] = useState(false);

  const handleMenuToggle = () => {
    setisOpen(!isOpen);
  };

  const getMenuOptions = () => {
    if (props.currentPage === "landing") {
      return (
        <ul className="list list--inline nav__list">
          <li className="list__item">
            <button className="btn btn--primary--round">login</button>
          </li>
          <li className="list__item">
            <button className="btn btn--accent--round--outline">
              register
            </button>
          </li>
        </ul>
      );
    }

    return (
      <ul className="list list--inline nav__list">
        <li className="list__item">
          <Link to="/">Home</Link>
        </li>
        <li className="list__item">
          <Link to="/shop">
            <span className="item-group">
              Shop
              <Icon name="fa fa-angle-down" className="icon nav__icon" />
            </span>
          </Link>
        </li>
        <li className="list__item">Our Network</li>
        <li className="list__item">News</li>
        <li className="list__item">Careers</li>
        <li className="list__item">
          <button className="btn btn--primary">login</button>
        </li>
      </ul>
    );
  };
  return (
    <nav>
      <div className={`container nav ${isOpen ? "nav--expanded" : ""}`}>
        <header className="nav__header">
          <img
            className="nav__logo"
            src={logo}
            alt="Ecommerce that shows online purchase of items"
          />
          <Icon
            onClick={handleMenuToggle}
            className="icon icon--primary icon--round icon--outline nav__toggler"
            name="fa fa-bars"
          />
        </header>
        {getMenuOptions()}
      </div>
    </nav>
  );

  function reportWindowSize() {
    window.innerWidth >= 768 ? setisOpen(true) : setisOpen(false);
  }
  window.onresize = reportWindowSize;
};

export default NavBar;
