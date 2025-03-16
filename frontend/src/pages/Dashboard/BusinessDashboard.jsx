import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from "../../components/Navbar/Navbar";
import { FaStar, FaUser, FaChartLine, FaReply } from 'react-icons/fa';
import './BusinessDashboard.css';

function BusinessDashboard() {
  const [businessData, setBusinessData] = useState(null);
  const [topReviews, setTopReviews] = useState([]);
  const [error, setError] = useState('');
  const [replyingTo, setReplyingTo] = useState(null); // Track which review is being replied to
  const [replyText, setReplyText] = useState(''); // Store the reply text
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBusinessData = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        navigate('/login'); // Redirect to login if no token
        return;
      }

      try {
        // Fetch business profile data
        const profileResponse = await axios.get('http://localhost:5000/businesses/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setBusinessData(profileResponse.data);

        // Fetch top 5 reviews for the business
        const reviewsResponse = await axios.get('http://localhost:5000/businesses/topReviews', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setTopReviews(reviewsResponse.data);
      } catch (err) {
        console.error('Failed to fetch data:', err.response?.data?.message || err.message);
        setError(err.response?.data?.message || 'Failed to fetch data. Please try again.');
      }
    };

    fetchBusinessData();
  }, [navigate]);

  const handleReplySubmit = async (reviewId) => {
    const token = localStorage.getItem('token');

    if (!replyText) {
      setError('Reply cannot be empty.');
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:5000/businesses/reviews/${reviewId}/reply`,
        { reply: replyText },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Update the UI with the new reply
      setTopReviews((prevReviews) =>
        prevReviews.map((review) =>
          review._id === reviewId ? { ...review, reply: replyText } : review
        )
      );

      setReplyingTo(null); // Close the reply form
      setReplyText(''); // Clear the reply text
      setError('');
    } catch (err) {
      console.error('Failed to submit reply:', err.response?.data?.message || err.message);
      setError(err.response?.data?.message || 'Failed to submit reply. Please try again.');
    }
  };

  if (!businessData) {
    return <div>Loading...</div>; // Show loading state
  }

  return (
    <>
      <Navbar />
    <div className="dashboard">
      <h1>Welcome, {businessData.companyName}!</h1>
      <div className="dashboard-content">
        {/* Key Metrics */}
        <div className="metrics">
          <h2>Key Metrics</h2>
          <div className="metrics-grid">
            <div className="metric-card">
              <div className="metric-icon">
                <FaStar />
              </div>
              <h3>Total Reviews</h3>
              <p>{businessData.reviews?.length || 0}</p>
            </div>
            <div className="metric-card">
              <div className="metric-icon">
                <FaChartLine />
              </div>
              <h3>Average Rating</h3>
              <p>
                {businessData.reviews?.length > 0
                  ? (
                      businessData.reviews.reduce((sum, review) => sum + review.rating, 0) /
                      businessData.reviews.length
                    ).toFixed(2)
                  : 'N/A'}
              </p>
            </div>
            <div className="metric-card">
              <div className="metric-icon">
                <FaReply />
              </div>
              <h3>Response Rate</h3>
              <p>
                {businessData.reviews?.length > 0
                  ? Math.round(
                      (businessData.reviews.filter((review) => review.reply).length /
                        businessData.reviews.length) *
                        100
                    ) + '%'
                  : '0%'}
              </p>
            </div>
          </div>
        </div>

        {/* Top 5 Reviews */}
        <div className="top-reviews">
          <h2>Top 5 Reviews</h2>
          {topReviews.length > 0 ? (
            <ul>
              {topReviews.map((review, index) => (
                <li key={index}>
                  <div className="review-header">
                    <FaUser className="user-icon" />
                    <p><strong>{review.userId?.username || 'Anonymous'}</strong></p>
                  </div>
                  <p><strong>Review:</strong> {review.review}</p>
                  <p><strong>Rating:</strong> {review.rating}/5</p>
                  {review.reply && (
                    <div className="reply-section">
                      <p><strong>Your Reply:</strong> {review.reply}</p>
                    </div>
                  )}
                  {!review.reply && (
                    <div className="reply-section">
                      {replyingTo === review._id ? (
                        <div className="reply-form">
                          <textarea
                            value={replyText}
                            onChange={(e) => setReplyText(e.target.value)}
                            rows="3"
                            placeholder="Type your reply here..."
                          ></textarea>
                          <button onClick={() => handleReplySubmit(review._id)}>Submit Reply</button>
                          <button onClick={() => setReplyingTo(null)}>Cancel</button>
                        </div>
                      ) : (
                        <button onClick={() => setReplyingTo(review._id)}>Reply</button>
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p>No reviews yet.</p>
          )}
        </div>
      </div>
      {error && <p className="error">{error}</p>}
    </div>
    </>
  );
}

export default BusinessDashboard;