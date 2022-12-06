/* eslint-disable */
import React from 'react';
import yelp from '../assets/yelp.png';
import google from '../assets/google.png';
import thumb from '../assets/thumb.png';
import '../css/bages.scss';

function Bages() {
  return (
    <div className="bage-container">
              <img className="bage-image-yelp"
        src= {yelp}
        alt="Yelp Logo 5 Stars Wide Black Left - Yelp@pngkey.com"
      />
      <img className="bage-image-google"
        src= {google}
        alt="Yelp Logo 5 Stars Wide Black Left - Yelp@pngkey.com"
      />
            <img className="bage-image-thumb"
        src= {thumb}
        alt="Yelp Logo 5 Stars Wide Black Left - Yelp@pngkey.com"
      />
    </div>
  );
}

export default Bages;
