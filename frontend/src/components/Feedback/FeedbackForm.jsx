import { useState } from "react";
import "./FeedbackForm.css";

function FeedbackForm({ brand, closeForm }) {
  const [rating, setRating] = useState(null);
  const [trustLevel, setTrustLevel] = useState("");
  const [feedback, setFeedback] = useState("");
  const [brandPersonality, setBrandPersonality] = useState("");
  const [recommendation, setRecommendation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const feedbackData = {
      brand: brand.name,
      rating,
      trustLevel,
      feedback,
      brandPersonality,
      recommendation,
    };

    // Save feedback to local storage
    localStorage.setItem("feedbackData", JSON.stringify(feedbackData));

    alert("✅ Your response has been submitted! Thank you! 😊");
    closeForm();
  };

  return (
    <div className="feedback-modal">
      <div className="feedback-content">
        
        {/* 🔴 Close Button */}
        <button className="close-btn" onClick={closeForm}>❌</button>

        <h2>Share Your Thoughts on {brand.name}</h2>

        {/* ⭐ Rating Question */}
        <div className="question">
          <p><strong>How would you rate your experience with {brand.name}?</strong></p>
          <div className="emoji-rating">
            {["😡", "😐", "😊", "😍"].map((emoji, index) => (
              <button key={index} onClick={() => setRating(emoji)}>
                {emoji}
              </button>
            ))}
          </div>
        </div>

        {/* 👥 Brand as a Person */}
        <div className="question">
          <p><strong>If {brand.name} were a person, how would you describe them?</strong></p>
          <select onChange={(e) => setBrandPersonality(e.target.value)}>
            <option value="">Select an option</option>
            <option value="Nerd 🤓">Nerd 🤓 - Smart & reliable</option>
            <option value="Cool Kid 😎">Cool Kid 😎 - Trendy & stylish</option>
            <option value="Drama Queen 🎭">Drama Queen 🎭 - Too much excitement</option>
            <option value="Gym Bro 🏋️">Gym Bro 🏋️ - Strong & tough</option>
          </select>
        </div>

        {/* 🔐 Trust Level */}
        <div className="question">
          <p><strong>How much do you trust {brand.name} when making a purchase?</strong></p>
          <select onChange={(e) => setTrustLevel(e.target.value)}>
            <option value="">Select trust level</option>
            <option value="Not at all">Not at all</option>
            <option value="A little">A little</option>
            <option value="Moderately">Moderately</option>
            <option value="Fully">Fully</option>
          </select>
        </div>

        {/* 🔄 Recommendation */}
        <div className="question">
          <p><strong>Would you recommend {brand.name} to your friends?</strong></p>
          <select onChange={(e) => setRecommendation(e.target.value)}>
            <option value="">Select an option</option>
            <option value="Yes, absolutely!">Yes, absolutely!</option>
            <option value="Maybe, depends on the product">Maybe, depends on the product</option>
            <option value="No, not really">No, not really</option>
          </select>
        </div>

        {/* 💡 Improvement Suggestion */}
        <div className="question">
          <p><strong>What’s one thing {brand.name} could do better?</strong></p>
          <textarea
            placeholder="Your feedback..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          ></textarea>
        </div>

        {/* 🚀 Submit Button */}
        <button className="submit-btn" onClick={handleSubmit}>Submit Feedback</button>
      </div>
    </div>
  );
}

export default FeedbackForm;
