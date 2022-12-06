import React from 'react';
import '../css/featureLeft.scss';
/* eslint-disable */
const FeatureLeft = ({ title, text, img }) => (
    /* eslint-disable */
    <div className="landing-page-bot-left">
    <div className="image">
        <img src={img} />
    </div>
    <div className="info-left">
      <div />
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  </div>
);

export default FeatureLeft;