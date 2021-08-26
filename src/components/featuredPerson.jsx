import React from "react";
import { Link } from "react-router-dom";
import PersonCard from "./common/personCard";

const FeaturedPerson = () => {
  return (
    <section className="block container block--featured-person">
      <header className="block__header">
        <h2 className="block__heading">Featured Members</h2>
        <Link to="/" className="block__link">
          How do I get featured?
        </Link>
      </header>
      <div className="grid feature-person">
        <PersonCard
          name="Chameli Nani"
          company="MoPasal Farm Ltd."
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis voluptas  doloremque numquam."
          photo="/images/girl.jpg"
        />
        <PersonCard
          name="Chameli Nani"
          company="MoPasal Farm Ltd."
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis voluptas  doloremque numquam."
          photo="/images/girl.jpg"
        />
        <PersonCard
          name="Chameli Nani"
          company="MoPasal Farm Ltd."
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis voluptas  doloremque numquam."
          photo="/images/girl.jpg"
        />
        <PersonCard
          name="Chameli Nani"
          company="MoPasal Farm Ltd."
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis voluptas  doloremque numquam."
          photo="/images/girl.jpg"
        />
        <PersonCard
          name="Chameli Nani"
          company="MoPasal Farm Ltd."
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis voluptas  doloremque numquam."
          photo="/images/girl.jpg"
        />
        <PersonCard
          name="Chameli Nani"
          company="MoPasal Farm Ltd."
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis voluptas  doloremque numquam."
          photo="/images/girl.jpg"
        />
      </div>
    </section>
  );
};

export default FeaturedPerson;
