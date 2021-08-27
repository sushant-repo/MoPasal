import React from "react";

import PersonCard from "../components/common/personCard";
import FeatureCard from "../components/common/featureCard";
import Icon from "../components/common/icon";
import MediaCard from "../components/common/mediaCard";
import Button from "../components/common/button";

import HomeHero from "../components/homeHero";
import Block, { BlockItems } from "../components/common/block";

import { getBlockData } from "../blockData";
import { ReactComponent as AgricultureLogo } from "../images/icons/agriculture.svg";
import { ReactComponent as QualityLogo } from "../images/icons/muscle.svg";
import { ReactComponent as UserIcon } from "../images/icons/user.svg";
import { ReactComponent as FarmerIcon } from "../images/icons/farmer.svg";
import { ReactComponent as PartnerIcon } from "../images/icons/partner.svg";
import heroImage from "../images/home-hero.jpg";

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

      <Block wrapper="container" className="block--process" data={process}>
        <BlockItems className="grid process">
          <MediaCard
            className="media--process"
            title="join as customer"
            body="Get exciting offers and discounts when you purchase from us. The more purchase you make, the more discounts you get. You are not just buying products, you are helping us change lives."
          >
            <UserIcon />
          </MediaCard>
          <MediaCard
            className="media--process"
            title="join as producer"
            body="When you partner up with MoPasal, you are not just selling your products, but you are helping us being revolution to how agro business works. Support us and we will ensure your security and sustainability."
          >
            <FarmerIcon />
          </MediaCard>
          <MediaCard
            className="media--process"
            title="join as partner/sponsor"
            body="MoPasal is all about bringing in a revolutionary change in agro business and community. You can join our movement as a producer/supply chain or be our supporter through sponsorships. We aim to change our society more than just doing profitable business. We work hard to heal before every meal."
          >
            <PartnerIcon />
          </MediaCard>
        </BlockItems>
      </Block>
    </>
  );
};

export default Home;
