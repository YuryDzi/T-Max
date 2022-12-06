import React from 'react';
import Bages from '../components/Bages';
import Features from '../containers/Features';
import '../css/mainPage.scss';

/* eslint-disable */ 
function MainPage() {
  return (
    <>
    <div className="landing-page">
      <div className="info">
        <h1>Looking For Inspiration</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          odit nihil ullam nesciunt quidem iste, Repellendus odit nihil
        </p>
        <button>Button name</button>
      </div>
      <div className="image">
        <img src="https://i.postimg.cc/65QxYYzh/001234.png" />
      </div>
    </div>
    <Bages />

    <Features />
    </>
  );
}

export default MainPage;
