import React from "react";
import "./hero.css";
import HeroImg from "../img/heroImage.jpg";
function Hero() {
  return (
    <div>
      <main>
        <div className="hero">
          <div className="heading">
            <p>Unhappy with your website?</p>
            <h3>We create beautiful and fast web services</h3>
          </div>
          <img className="hero-img" src={HeroImg} alt="banner" />
        </div>
        <div className="story-bar">
          <h3>Story, emotion and purpose</h3>
          <p>
            We help transform your ideas into real world applications that will
            outperform your toughest competition and help you achieve your
            strategic goals in short period of time
          </p>
          <p className="small">Want us to contact you?</p>
          <input type="text" placeholder="Email" />{" "}
          <button className="inp-button">Join</button>
        </div>
      </main>
    </div>
  );
}

export default Hero;
