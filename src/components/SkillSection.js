import React from "react";
import logoL from "../img/logoL.png";
import logoF from "../img/logoF.png";
import logoDB from "../img/logoDB.png";
import logoW from "../img/logoW.png";
import SkillSets from "../img/Skillsets.jpg";
import styled from "styled-components";
import { StyleAbout, StyleDescription , StyleImg  } from "../styles";
const SkillSection = () =>{
    return(
        <StyleSkill>
            {/* Using cards for different skills sets */}
            <StyleDescription>
                <h2> Profession In <span>Languages</span> And <span>Skills</span></h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={logoL} alt="No img Yet" />
                            <h3>Languages</h3>
                        </div>
                        <p>Profession in Javascript, Java, Python, C++, C#</p>
                    </Card>
                    
                    <Card>
                        <div className="icon">
                            <img src={logoF} alt="No img Yet" />
                            <h3>Frameworks</h3>
                        </div>
                        <p>React JS, .Net MVC, Android Studio</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={logoDB} alt="No img Yet" />
                            <h3>Databases</h3>
                        </div>
                        <p>Database : MySqL, Oracle SQL</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={logoW} alt="No img Yet" />
                            <h3>Web </h3>
                        </div>
                        <p>Others Basic Skills: HTML, CSS , SASS </p>
                    </Card>
                    
                </Cards>

            </StyleDescription>
         
            
            <StyleImg>
                <img src={SkillSets} alt="Skill Sets Img" />
            </StyleImg>
        </StyleSkill>
    )
}
// inherit the css from about
const StyleSkill = styled(StyleAbout)`
    h2{
        padding-bottom: 3rem;
       

    }
    p{
        //width:70%;
        padding: 2rem 0rem 4rem 0rem; // give some padding to top and bottom
    }
` 
const Cards = styled.div`
    display:flex;
    flex-wrap: wrap;

`
const Card = styled.div`
    flex-basis:10rem; // sets the initial main size of a flex item
    padding-right:2rem;
    .icon{
        display:flex;
        align-items:center;
        
        h3{
            color:white;
            
            margin-left:1rem;
            padding: 1rem;
            font-size:1rem;
        }
        img{
            width:40px;
            height:40px;
            object-fit: cover;
        }
    }
    p{
        font-size: 1rem;
    }

`
export default SkillSection;