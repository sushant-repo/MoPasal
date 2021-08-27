import React from "react";

import PersonCard from "../components/common/personCard";
import FeatureCard from "../components/common/featureCard";
import Icon from "../components/common/icon";

import HomeHero from "../components/homeHero";
import Block, { BlockItems } from "../components/common/block";

import { getBlockData } from "../blockData";
import { ReactComponent as AgricultureLogo } from "../images/icons/agriculture.svg";
import { ReactComponent as QualityLogo } from "../images/icons/muscle.svg";
import heroImage from "../images/home-hero.jpg";
import Button from "../components/common/button";

const Home = () => {
  const blocks = getBlockData();
  const { featuredPeople, features, aboutUs, process, network } = blocks[0];
  return (
    <>
      <HomeHero backgroundImage={heroImage} />
      <Block
        wrapper="container"
        className="block--featured-person"
        data={featuredPeople}
      >
        <BlockItems className="grid feature-person">
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
        </BlockItems>
      </Block>

      <Block wrapper="container" className="block--features" data={features}>
        <BlockItems className="grid features">
          <FeatureCard
            title="farmer-consumer relation"
            body="We act to bridge the direct consumers and producers."
          >
            <Icon
              className="icon icon--large icon--flat"
              name="fa fa-handshake-o"
            />
          </FeatureCard>
          <FeatureCard
            title="100% organic"
            body="We promote locally produced organic products."
          >
            <AgricultureLogo className="icon icon--large icon--flat" />
          </FeatureCard>
          <FeatureCard
            title="customer centric"
            body="We value customer satisfaction and feedback."
          >
            <Icon
              className="icon icon--large icon--flat"
              name="fa fa-smile-o"
            />
          </FeatureCard>
          <FeatureCard
            title="Quality of life"
            body="Our principle is improving quality of life of all our customers."
          >
            <QualityLogo className="icon icon--large icon--flat" />
          </FeatureCard>
          <FeatureCard
            title="Global Online Store"
            body="We aim to provide global market to our customers."
          >
            <Icon className="icon icon--large icon--flat" name="fa fa-globe" />
          </FeatureCard>
          <FeatureCard
            title="Inclusive"
            body="MoPasal is all about inclusive. MoPasal is for everyone."
          >
            <Icon
              className="icon icon--large icon--flat"
              name="fa fa-universal-access"
            />
          </FeatureCard>
        </BlockItems>
      </Block>

      <Block wrapper="container" data={aboutUs}>
        <Button className="btn btn--primary">Read More</Button>
      </Block>
    </>
  );
};

export default Home;
