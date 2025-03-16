import React, { useState } from "react";
import "./Feed.css";

const Feed = ({ brand, closeForm }) => {
  const [answers, setAnswers] = useState({});

  const questions = [
    { id: 1, text: `How often do you use ${brand.name} products?`, type: "radio", options: ["Daily", "Weekly", "Monthly", "Rarely"] },
    { id: 2, text: `What do you like most about ${brand.name}?`, type: "text" },
    { id: 3, text: `Rate your overall experience with ${brand.name} (1-5):`, type: "rating" },
    { id: 4, text: `Would you recommend ${brand.name} to a friend?`, type: "radio", options: ["Yes", "No", "Maybe"] },
  ];

  const handleAnswerChange = (questionId, value) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Answers:", answers);
    alert("Thank you for your feedback!");
    closeForm();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{brand.name} Feedback</h2>
        <form onSubmit={handleSubmit}>
          {questions.map((question) => (
            <div key={question.id} className="question-group">
              <label>{question.text}</label>
              {question.type === "radio" ? (
                <div className="radio-group">
                  {question.options.map((option, index) => (
                    <label key={index}>
                      <input
                        type="radio"
                        name={`question-${question.id}`}
                        value={option}
                        onChange={() => handleAnswerChange(question.id, option)}
                      />
                      {option}
                    </label>
                  ))}
                </div>
              ) : question.type === "text" ? (
                <textarea
                  onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                  placeholder="Your answer..."
                />
              ) : (
                <div className="rating-group">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={`star ${answers[question.id] >= star ? "filled" : ""}`}
                      onClick={() => handleAnswerChange(question.id, star)}
                    >
                      ★
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button type="submit">Submit</button>
        </form>
        <button className="close-button" onClick={closeForm}>Close</button>
      </div>
    </div>
  );
};

export default Feed;