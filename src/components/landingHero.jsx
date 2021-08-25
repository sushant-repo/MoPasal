import React from "react";
import Button from "./common/button";
import ecommerce from "../images/ecommerce.png";
const LandingHero = () => {
  return (
    <React.Fragment>
      <div className=" landing">
        <div className="container grid grid--1x2">
          <div className="content">
            <h1 className="landing__header">
              MoPasal: Where Your{" "}
              <span className="green">Journey Begins...</span>
            </h1>
            <p>
              MoPasal is an online shopping platform crafted and created
              beautifully to provide a whole new business experience for farmers
              and customers. MoPasal aims to connect prime producers with
              potential customers with whole lot of exciting features.
            </p>
            <h2 className="landing__sub-header">Excited?</h2>
            <p>(Click Here to learn more) or hit the buttons below to</p>
            <div className="button-group">
              <Button className="btn btn--primary">Get Started</Button>
              <Button className="btn btn--primary--outline">Shop now</Button>
            </div>
          </div>
          <img className="landing__image" src={ecommerce} alt="" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default LandingHero;
