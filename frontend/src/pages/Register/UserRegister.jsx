// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import "./UserRegister.css"

// function UserRegister() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [username, setUsername] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Send registration request to backend
//       await axios.post('http://localhost:5000/users/register', {
//         email,
//         password,
//         username,
//       });

//       // Redirect to login page after successful registration
//       navigate('/login'); // 👈 Simple redirect
//     } catch (err) {
//       setError(err.response?.data?.error || 'Registration failed. Please try again.');
//     }
//   };

//   return (
//     <div>
//       <h1>Register</h1>
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
//           <label>Username:</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         {error && <p style={{ color: 'red' }}>{error}</p>}
//         <button type="submit">Register</button>
//       </form>
//       <p>
//         Already have an account? <a href="/user-login">Log in</a>
//       </p>
//     </div>
//   );
// }

// export default UserRegister;

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import './UserRegister.css'; // Optional: Add custom styles if needed
import Navbar from '../../components/Navbar/Navbar';

function UserRegister() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send registration request to backend
      await axios.post('http://localhost:5000/users/register', {
        email,
        password,
        username,
      });

      // Redirect to login page after successful registration
      navigate('/user-login');
    } catch (err) {
      setError(err.response?.data?.error || 'Registration failed. Please try again.');
    }
  };

  return (
    <>
    <Navbar/>
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row className="w-100">
        <Col md={6} className="mx-auto">
          <div className="user-register" style={{ background: 'rgba(255, 255, 255, 0.9)' , marginTop: '-100px', marginLeft:"-100px"}}>
            <div className="user-register-left">
            <h1 className="text-center mb-4">Register</h1>
            <Form onSubmit={handleSubmit}>
              {/* Username Field */}
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </Form.Group>

              {/* Email Field */}
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              {/* Password Field */}
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              {/* Error Message */}
              {error && <Alert variant="danger">{error}</Alert>}

              {/* Submit Button */}
              <Button variant="primary" type="submit" className="w-100 mb-3 user-register-btn">
                Register
              </Button>

              {/* Login Link */}
              <p className="text-center">
                Already have an account? <Link to="/user-login">Log in</Link>
              </p>
            </Form>
            </div>

            <div className="user-register-right"></div>
          </div>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default UserRegister;