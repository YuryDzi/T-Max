/* eslint-disable */
import React from "react";
import Feature from "../components/Feature";
import FeatureLeft from "../components/FeatureLeft";
import builder from "../assets/builder.svg";
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
    title: "Your On-Demand General Counsel",
    text: "Your committed in-house counsel, there to dissect problems, deliver practical advice and manage legal operations.",
    img: builder,
  },
];

const Features = () => (
    // <div className="gpt3__features section__padding" id="features">
    //   <div className="gpt3__features-heading">
    //     <h1 className="gradient__text">Services built for you!</h1>
    //     <p>Transparent pricing. No surprise bills. Services tailored for your business.</p>
    //   </div>
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
