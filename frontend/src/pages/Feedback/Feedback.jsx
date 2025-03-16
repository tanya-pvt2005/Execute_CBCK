import React, { useState } from 'react';
import './Feedback.css';

const Feedback = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(5);
  const [quality, setQuality] = useState(5);
  const [service, setService] = useState(5);
  const [comments, setComments] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ name, price, quality, service, comments });
    alert('Thank you for your feedback!');
  };

  return (
    <div className="feedback-container">
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Your Name (Optional):</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Leave blank to remain anonymous"
          />
        </div>
        <div className="form-group">
          <label>Price (1-5):</label>
          <select value={price} onChange={(e) => setPrice(e.target.value)}>
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num} - {num === 5 ? 'Excellent' : ''}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Quality (1-5):</label>
          <select value={quality} onChange={(e) => setQuality(e.target.value)}>
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num} - {num === 5 ? 'Excellent' : ''}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Service (1-5):</label>
          <select value={service} onChange={(e) => setService(e.target.value)}>
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num} - {num === 5 ? 'Excellent' : ''}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Additional Comments:</label>
          <textarea
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            placeholder="Your feedback..."
          />
        </div>
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default Feedback;