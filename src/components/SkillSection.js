import React from "react";
import logoL from "../img/logoL.png"
import logoF from "../img/logoF.png"
import logoDB from "../img/logoDB.png"
import logoW from "../img/logoW.png"
import SkillSets from "../img/Skillsets.jpg"
const SkillSection = () =>{
    return(
        <div className="skills">
            {/* Using cards for different skills sets */}
            <div className="description">
                <h2> Profession In<span>Languages</span> And <span>Skills</span></h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img src={logoL} alt="No img Yet" />
                            <h3>Profession Languages</h3>
                        </div>
                    </div>
                    <p>Profession in Javascript, Java, Python, C++, C#</p>
                </div>

                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img src={logoF} alt="No img Yet" />
                            <h3>Frameworks</h3>
                        </div>
                    </div>
                    <p>React JS, .Net MVC, Android Studio</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img src={logoDB} alt="No img Yet" />
                            <h3>Databases</h3>
                        </div>
                    </div>
                    <p>Database : MySqL, Oracle SQL</p>
                </div>

                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img src={logoW} alt="No img Yet" />
                            <h3>Web Skills</h3>
                        </div>
                    </div>
                    <p>Others Basic Skills: HTML, CSS , SASS </p>
                </div>
            </div>
            <img src={SkillSets} alt="Skill Sets Img" />
        </div>
    )
}

export default SkillSection;