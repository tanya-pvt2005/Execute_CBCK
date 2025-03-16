// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Navbar from "../../components/Navbar/Navbar";
// import './Dashboard.css'; // Optional: Add styles for the dashboard

// function UserDashboard() {
//   const [userData, setUserData] = useState(null);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchUserData = async () => {
//       const token = localStorage.getItem('token');

//       if (!token) {
//         navigate('/login'); // Redirect to login if no token
//         return;
//       }

//       console.log(token)

//       try {
//         // Fetch user data from backend
//         const response = await axios.get('http://localhost:5000/users/profile', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         setUserData(response.data);
//       } catch (err) {
//         console.error('Failed to fetch user data:', err);
//         setError('Failed to fetch user data. Please try again.');
//         navigate('/login'); // Redirect to login if token is invalid
//       }
//     };

//     fetchUserData();
//   }, [navigate]);

//   if (!userData) {
//     return <div>Loading...</div>; // Show loading state
//   }

//   return (
//     <div className="dashboard">
//         <Navbar/>
//       <h1>Welcome, {userData.username}!</h1>
//       <div className="user-info">
//         <p><strong>Email:</strong> {userData.email}</p>
//         <p><strong>Username:</strong> {userData.username}</p>
//         {/* Add more user data here */}
//       </div>
//       {error && <p className="error">{error}</p>}
//     </div>
//   );
// }

// export default UserDashboard;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from "../../components/Navbar/Navbar";
import './Dashboard.css'; // Optional: Add styles for the dashboard

function UserDashboard() {
  const [userData, setUserData] = useState(null);
  const [companyName, setCompanyName] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');
  const [review, setReview] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        navigate('/login'); // Redirect to login if no token
        return;
      }

      try {
        // Fetch user data from backend
        const response = await axios.get('http://localhost:5000/users/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUserData(response.data);
      } catch (err) {
        console.error('Failed to fetch user data:', err);
        setError('Failed to fetch user data. Please try again.');
        navigate('/login'); // Redirect to login if token is invalid
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleSubmitReview = async (e) => {
    e.preventDefault();

    if (!companyName || !companyEmail || !review) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      await axios.post(
        'http://localhost:5000/users/submitReview',
        { companyName, companyEmail, review },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setSuccess('Review submitted successfully!');
      setCompanyName('');
      setCompanyEmail('');
      setReview('');
      setError('');
    } catch (err) {
      console.error('Failed to submit review:', err);
      setError('Failed to submit review. Please try again.');
    }
  };

  if (!userData) {
    return <div>Loading...</div>; // Show loading state
  }

  return (
    <>
      <Navbar />
    <div className="dashboard">
      <h1>Welcome, {userData.username}!</h1>
      <div className="user-info">
        <p><strong>Email:</strong> {userData.email}</p>
        <p><strong>Username:</strong> {userData.username}</p>
      </div>

      {/* Review Submission Form */}
      <div className="review-form">
        <h2>Submit a Review</h2>
        <form onSubmit={handleSubmitReview}>
          <div className="form-group">
            <label>Company Name</label>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Company Email</label>
            <input
              type="email"
              value={companyEmail}
              onChange={(e) => setCompanyEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Your Review</label>
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              rows="4"
              required
            ></textarea>
          </div>
          {error && <p className="error">{error}</p>}
          {success && <p className="success">{success}</p>}
          <button type="submit">Submit Review</button>
        </form>
      </div>

      {/* {error && <p className="error">{error}</p>} */}
    </div>
    </>
  );
}

export default UserDashboard;