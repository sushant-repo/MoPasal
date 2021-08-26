import React from "react";
import Button from "./common/button";
import heroImage from "../images/home-hero.jpg";
const HomeHero = (props) => {
  return (
    <section className="hero">
      <img className="hero__image" src={heroImage} alt="" />
      <div className="hero__content">
        <h1 className="hero__heading">
          MORE THAN PASAL <span className="green">IT’S A MOVEMENT</span>
        </h1>
        <p>
          MoPasal, where your online shopping experience will never be the same.
          Join the movement. Make an impact.
        </p>
        <div className="button-group">
          <Button className="btn btn--primary">join now</Button>
          <Button className="btn btn--accent--outline">shop now</Button>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
