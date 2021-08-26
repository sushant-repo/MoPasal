import React from "react";
import HomeHero from "../components/homeHero";
import heroImage from "../images/home-hero.jpg";
import FeaturedPerson from "../components/featuredPerson";
const Home = () => {
  return (
    <>
      <HomeHero backgroundImage={heroImage} />
      <FeaturedPerson />
    </>
  );
};

export default Home;
