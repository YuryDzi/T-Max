/* eslint-disable */
import React from "react";
import Feature from "../components/Feature";
import FeatureLeft from "../components/FeatureLeft";
import builderwz from "../assets/builderwz.gif";
import pipeworkers from "../assets/pipeworkers.gif";
// import callcenter from "../assets/callcenter.gif";
import crane from "../assets/crane.gif";
// import "../css/features.scss";

const featuresData = [
  {
    title: "Kitchen Drains: Sink",
    text: "If you don’t clean out your shower and sink drains regularly, all the buildup can wreak havoc on your home’s sewage lines and pipes. It is important that you schedule drain cleaning routinely in order to minimize future problems and damage to your home. We provide efficient drain cleaning services for homeowners throughout Los Angeles and Orange County.",
    img: crane,
  },
];

const featuresData2 = [
  {
    title: "Kitchen Drains: Sink",
    text: "If you don’t clean out your shower and sink drains regularly, all the buildup can wreak havoc on your home’s sewage lines and pipes. It is important that you schedule drain cleaning routinely in order to minimize future problems and damage to your home. We provide efficient drain cleaning services for homeowners throughout Los Angeles and Orange County.",
    img: pipeworkers,
  },
];

const featuresDataLeft = [
  {
    title: "Kitchen Drains: Sink",
    text: "If you don’t clean out your shower and sink drains regularly, all the buildup can wreak havoc on your home’s sewage lines and pipes. It is important that you schedule drain cleaning routinely in order to minimize future problems and damage to your home. We provide efficient drain cleaning services for homeowners throughout Los Angeles and Orange County.",
    img: builderwz,
  },
];

const Features = () => (
  <div className="feature-box">
    {featuresData.map((item, index) => (
      <Feature title={item.title} text={item.text} img={item.img} key={item.title + index} />
    ))}
    <div className="feature-box">
        {featuresData2.map((item, index) => (
      <FeatureLeft title={item.title} text={item.text} img={item.img} key={item.title + index} />
    ))}
  </div>
  <div className="feature-box">
        {featuresDataLeft.map((item, index) => (
      <Feature title={item.title} text={item.text} img={item.img} key={item.title + index} />
    ))}
  </div>
   </div>
);

export default Features;
