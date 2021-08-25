import React, { useState } from "react";
import logo from "../../images/logo-initial.png";
import Icon from "./icon";
const NavBar = () => {
  const [isOpen, setisOpen] = useState(false);
  console.log(isOpen);
  function reportWindowSize() {
    window.innerWidth >= 768 ? setisOpen(true) : setisOpen(false);
  }
  window.onresize = reportWindowSize;

  const handleMenuToggle = () => {
    setisOpen(!isOpen);
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
      </div>
    </nav>
  );
};

export default NavBar;
