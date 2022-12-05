import React from 'react';
import '../css/feature.scss';
/* eslint-disable */
const Feature = ({ title, text, img }) => (
    /* eslint-disable */
    <div className="landing-page">
      <div className="info">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="info">
      <p>{text}</p>
    </div>
    <div className="image">
        <img src={img} />
    </div>
  </div>
);

export default Feature;