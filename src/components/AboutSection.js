import React from "react";
import person1 from "../img/person1.jpg";
// JSX
const AboutSection = () => {
  return (
    <div>
      <div className="description">
        {/* For title using layers to design the text */}
        <div className="title">
          <div className="hide">
            <h2>Key Values About Me</h2>
          </div>
          <div className="hide">
            <h3> 1. <span>Team Player</span> </h3>
          </div>
          <div className="hide">
            <h3> 2. <span>Punctuality</span></h3>
          </div>
          <div className="hide">
            <h3> 3. <span>Self Driven</span></h3>
          </div>
        </div>
        <p> Contact me for any questions regarding my projects for interview</p>
        <button> Contact Me </button>
      </div>
      <div className="image">
          <img src={person1} alt="No Img Displayed" />
      </div>
    </div>
  );
};

export default AboutSection;
