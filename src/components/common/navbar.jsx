import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Icon from "./icon";

import logo from "../../images/logo-initial.png";

const NavBar = (props) => {
  // this function is used to always hide the navbar menu options of screen load
  window.onresize = reportWindowSize;

  const [isOpen, setisOpen] = useState(false);

  const handleMenuToggle = () => {
    setisOpen(!isOpen);
  };

  const getMenuOptions = () => {
    if (props.currentPage === "landing") {
      // Return menu options for landing page only
      return (
        <ul className="list list--inline nav__list">
          <li className="list__item">
            <NavLink to="/">
              <button className="btn btn--primary--round">login</button>
            </NavLink>
          </li>
          <li className="list__item">
            <NavLink to="/">
              <button className="btn btn--accent--round--outline">
                register
              </button>
            </NavLink>
          </li>
        </ul>
      );
    }

    // return menu options for all pages except landing
    return (
      <ul className="list list--inline nav__list">
        <li className="list__item" onClick={() => setisOpen(false)}>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li className="list__item" onClick={() => setisOpen(false)}>
          <NavLink to="/shop">
            <span className="item-group">
              Shop
              <Icon name="fa fa-angle-down" className="icon menu__chevron" />
            </span>
          </NavLink>
        </li>
        <li className="list__item" onClick={() => setisOpen(false)}>
          <NavLink to="">Our Network</NavLink>
        </li>
        <li className="list__item" onClick={() => setisOpen(false)}>
          <NavLink to="">News</NavLink>
        </li>
        <li className="list__item" onClick={() => setisOpen(false)}>
          <NavLink to="">Careers</NavLink>
        </li>
        <li className="list__item" onClick={() => setisOpen(false)}>
          <NavLink to="">
            <button className="btn btn--primary">login</button>
          </NavLink>
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
};

export default NavBar;
