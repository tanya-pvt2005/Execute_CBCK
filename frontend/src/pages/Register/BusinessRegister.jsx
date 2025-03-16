// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function BusinessRegister() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [companyName, setCompanyName] = useState('');
//   const [industry, setIndustry] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Log the registration request data
//       console.log('Sending registration request:', { email, password, companyName, industry });

//       // Send registration request to backend
//       const response = await axios.post('http://localhost:5000/businesses/register', {
//         email,
//         password,
//         companyName,
//         industry,
//       });

//       // Log the backend response
//       console.log('Backend response:', response.data);

//       // Redirect to login page after successful registration
//       navigate('/login');
//     } catch (err) {
//       // Log and display errors
//       console.error('Registration error:', err.response?.data || err.message);
//       setError(err.response?.data?.error || 'Registration failed. Please try again.');
//     }
//   };

//   return (
//     <div>
//       <h1>Business Register</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Company Name:</label>
//           <input
//             type="text"
//             value={companyName}
//             onChange={(e) => setCompanyName(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Industry:</label>
//           <input
//             type="text"
//             value={industry}
//             onChange={(e) => setIndustry(e.target.value)}
//           />
//         </div>
//         {error && <p style={{ color: 'red' }}>{error}</p>}
//         <button type="submit">Register</button>
//       </form>
//       <p>
//         Already have an account? <a href="/login">Log in</a>
//       </p>
//     </div>
//   );
// }

// export default BusinessRegister;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import { Form, Button, Alert } from 'react-bootstrap'; // Import React-Bootstrap components
import './BusinessRegister.css';

function BusinessRegister() {
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [industry, setIndustry] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!companyName || !email || !password || !industry) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/businesses/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ companyName, email, password, industry }),
      });

      const data = await response.json();

      if (response.ok) {
        // Save the token in localStorage and redirect to the business dashboard
        localStorage.setItem('token', data.token);
        navigate('/businessDashboard');
      } else {
        setError(data.message || 'Registration failed. Please try again.');
      }
    } catch (err) {
      console.error('Registration error:', err);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="business-register-container">
        <div className="register-left">
        <h2>Business Registration</h2>
        {error && <Alert variant="danger">{error}</Alert>} {/* Use Alert for error messages */}
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="companyName">
            <Form.Label>Company Name</Form.Label>
            <Form.Control
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="industry">
            <Form.Label>Industry</Form.Label>
            <Form.Control
              type="text"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              required
            />
          </Form.Group>

          <Button className='businessRegister' variant="primary" type="submit">
            Register
          </Button>
        </Form>
        <p className="mt-3">
          Already have an account? <Link to="/user-login">Login here</Link>.
        </p>
        </div>

        <div className="register-right">
          {/* hello */}
        </div>
      </div>
    </>
  );
}

export default BusinessRegister;