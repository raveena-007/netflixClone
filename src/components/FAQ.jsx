import React from "react";
import "./FAQ.css";

const FAQ = () => {
  const questions = [
    "What is Netflix?",
    "How much does Netflix cost?",
    "Where can I watch?",
    "How do I cancel?",
    "What can I watch on Netflix?",
    "Is Netflix good for kids?",
  ];

  return (
    <div className="question">
      <h1>Frequently Asked Questions</h1>
      {questions.map((question, index) => (
        <div className="quest" key={index}>
          <div className="textbox">{question}</div>
          <i className="las la-plus"></i>
        </div>
      ))}

      <h4>
        Ready to watch? Enter your email to create or restart your membership.
      </h4>
      <div className="search1">
        <input type="text" className="box1" placeholder="Email address" />
        <span className="try1">
          Get Started <i className="fas fa-chevron-right"></i>
        </span>
      </div>
    </div>
  );
};

export default FAQ;
