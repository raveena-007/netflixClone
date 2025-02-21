import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="main">
      <div className="area">
        <h1>
          Unlimited movies, TV <br /> shows, and more
        </h1>
        <h3>Watch anywhere. Cancel anytime.</h3>
        <h4>
          Ready to watch? Enter your email to create or restart your membership.
        </h4>

        <div className="search">
          <input type="text" className="box" placeholder="Email address" />
          <span className="try">
            Get Started <i className="fa-solid fa-chevron-right"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
