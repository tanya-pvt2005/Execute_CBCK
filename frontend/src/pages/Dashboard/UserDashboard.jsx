// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Navbar from "../../components/Navbar/Navbar";
// import './UserDashboard.css'; // Optional: Add styles for the dashboard

// function UserDashboard() {
//   const [userData, setUserData] = useState(null);
//   const [companyName, setCompanyName] = useState('');
//   const [companyEmail, setCompanyEmail] = useState('');
//   const [review, setReview] = useState('');
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchUserData = async () => {
//       const token = localStorage.getItem('token');

//       if (!token) {
//         navigate('/login'); // Redirect to login if no token
//         return;
//       }

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

//   const handleSubmitReview = async (e) => {
//     e.preventDefault();

//     if (!companyName || !companyEmail || !review) {
//       setError('Please fill in all fields.');
//       return;
//     }

//     try {
//       const token = localStorage.getItem('token');
//       await axios.post(
//         'http://localhost:5000/users/submitReview',
//         { companyName, companyEmail, review },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       setSuccess('Review submitted successfully!');
//       setCompanyName('');
//       setCompanyEmail('');
//       setReview('');
//       setError('');
//     } catch (err) {
//       console.error('Failed to submit review:', err);
//       setError('Failed to submit review. Please try again.');
//     }
//   };

//   if (!userData) {
//     return <div>Loading...</div>; // Show loading state
//   }

//   return (
//     <>
//       <Navbar />
//     <div className="dashboard">
//       <h1>Welcome, {userData.username}!</h1>
//       <div className="user-info">
//         <p><strong>Email:</strong> {userData.email}</p>
//         <p><strong>Username:</strong> {userData.username}</p>
//       </div>

//       {/* Review Submission Form */}
//       <div className="review-form">
//         <h2>Submit a Review</h2>
//         <form onSubmit={handleSubmitReview}>
//           <div className="form-group">
//             <label>Company Name</label>
//             <input
//               type="text"
//               value={companyName}
//               onChange={(e) => setCompanyName(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Company Email</label>
//             <input
//               type="email"
//               value={companyEmail}
//               onChange={(e) => setCompanyEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Your Review</label>
//             <textarea
//               value={review}
//               onChange={(e) => setReview(e.target.value)}
//               rows="4"
//               required
//             ></textarea>
//           </div>
//           {error && <p className="error">{error}</p>}
//           {success && <p className="success">{success}</p>}
//           <button type="submit">Submit Review</button>
//         </form>
//       </div>

//       {/* {error && <p className="error">{error}</p>} */}
//     </div>
//     </>
//   );
// }

// export default UserDashboard;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Form, Button, Alert, Card } from 'react-bootstrap';
import Navbar from '../../components/Navbar/Navbar';
import './UserDashboard.css'; // Optional: Add custom styles for the dashboard

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
      <div className="container">
      <Container className="mt-4">
        <Row className="justify-content-center">
          <Col md={8}>
            <h1 className="text-center mb-4">Welcome, {userData.username}!</h1>

            {/* User Info Card */}
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>User Information</Card.Title>
                <Card.Text>
                  <strong>Email:</strong> {userData.email}
                  <br />
                  <strong>Username:</strong> {userData.username}
                </Card.Text>
              </Card.Body>
            </Card>

            {/* Review Submission Form */}
            <Card>
              <Card.Body>
                <Card.Title>Submit a Review</Card.Title>
                <Form onSubmit={handleSubmitReview}>
                  {/* Company Name Field */}
                  <Form.Group className="mb-3">
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter company name"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      required
                    />
                  </Form.Group>

                  {/* Company Email Field */}
                  <Form.Group className="mb-3">
                    <Form.Label>Company Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter company email"
                      value={companyEmail}
                      onChange={(e) => setCompanyEmail(e.target.value)}
                      required
                    />
                  </Form.Group>

                  {/* Review Field */}
                  <Form.Group className="mb-3">
                    <Form.Label>Your Review</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Write your review here"
                      value={review}
                      onChange={(e) => setReview(e.target.value)}
                      required
                    />
                  </Form.Group>

                  {/* Error and Success Messages */}
                  {error && <Alert variant="danger">{error}</Alert>}
                  {success && <Alert variant="success">{success}</Alert>}

                  {/* Submit Button */}
                  <Button variant="primary" type="submit" className="w-100 submit-review-btn">
                    Submit Review
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      </div>
    </>
  );
}

export default UserDashboard;