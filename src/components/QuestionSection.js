import React from "react";

const QuestionSection = () => {
  return (
    <div className="questions">
      <h2>
        Any Question <span>FAQ</span>
      </h2>
      <div className="question">
        <h4>What is my Major ? </h4>
        <div className="answer">
          <p>Double Major In Computer Science And Web Mobile Development</p>
        </div>
      </div>

      <div className="question">
        <h4>What is my best Language ? </h4>
        <div className="answer">
          <p>It can be Java or Python , both quite similar</p>
        </div>
      </div>
      <div className="question">
        <h4>What is my favorite design principal? </h4>
        <div className="answer">
          <p> Single Responsibility Principle so as to ensure that 
              each class perform one responsibility</p>
        </div>
      </div>
      
    </div>
  );
};

export default QuestionSection;
