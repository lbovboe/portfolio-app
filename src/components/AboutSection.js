import React from "react";
import person1 from "../img/person1.jpg";
// style component 
//import styled from "styled-components"

import { StyleAbout, StyleDescription , StyleImg , StyleHidden } from "../styles";
// JSX
const AboutSection = () => {
  return (
    <StyleAbout>
      <StyleDescription>
        {/* For title using layers to design the text */}
        <div className="title">
          <StyleHidden>
            <h1>Key Values About Me</h1>
          </StyleHidden>
          <StyleHidden>
            <h2> 1. <span>Team Player</span> </h2>
          </StyleHidden>
          <StyleHidden>
            <h2> 2. <span>Meet Deadlines</span></h2>
          </StyleHidden>
          <StyleHidden>
            <h2> 3. <span>Self Driven</span></h2>
          </StyleHidden>
        </div>
        <p> Contact me for any questions regarding interview</p>
        <button> Contact Me </button>
      </StyleDescription>
      <StyleImg>
          <img src={person1} alt="No Img Displayed" />
      </StyleImg>
    </StyleAbout>
  );
};


export default AboutSection;
