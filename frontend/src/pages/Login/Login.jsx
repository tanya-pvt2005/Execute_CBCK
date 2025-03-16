// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import axios from 'axios';
// import Navbar from '../../components/Navbar/Navbar';
// import './Login.css';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [accountType, setAccountType] = useState('user');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const endpoint = accountType === 'user' 
//         ? 'http://localhost:5000/users/login' 
//         : 'http://localhost:5000/businesses/login';

//       const response = await axios.post(endpoint, { email, password });

//       console.log('Login response:', response.data); 

//       // Save the token in localStorage
//       localStorage.setItem('token', response.data.token);

//       // Redirect to the appropriate dashboard
//       if (accountType === 'user') {
//         navigate('/userDashboard');
//       } else {
//         navigate('/businessDashboard');
//       }
//     } catch (err) {
//       setError(err.response?.data?.error || 'Login failed. Please try again.');
//     }
//   };

//   return (
//     <>
//     <Navbar/>
//     <div className="login">
//       <h1>Login</h1>
//       <Form className="container" onSubmit={handleSubmit}>
//         <Form.Group className="mb-3" controlId="formAccountType">
//           <Form.Label>Account Type</Form.Label>
//           <Form.Select 
//             value={accountType} 
//             onChange={(e) => setAccountType(e.target.value)}
//           >
//             <option value="user">User</option>
//             <option value="business">Business</option>
//           </Form.Select>
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control
//             type="email"
//             placeholder="Enter email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </Form.Group>

//         {error && <div className="text-danger mb-3">{error}</div>}

//         <Button variant="primary" type="submit">
//           Login
//         </Button>
//       </Form>

//       {/* Register link */}
//       <div className="register">
//         <p>Don't have an account? </p>
//         <Link to="/register">Register</Link>
//       </div>
//     </div>
//     </>
//   );
// }

// export default Login;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import './Login.css';
import Navbar from '../../components/Navbar/Navbar';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accountType, setAccountType] = useState('user');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const endpoint = accountType === 'user' 
        ? 'http://localhost:5000/users/login' 
        : 'http://localhost:5000/businesses/login';

      const response = await axios.post(endpoint, { email, password });

      console.log('Login response:', response.data); 

      // Save the token in localStorage
      localStorage.setItem('token', response.data.token);

      // Redirect to the appropriate dashboard
      if (accountType === 'user') {
        navigate('/userDashboard');
      } else {
        navigate('/businessDashboard');
      }
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed. Please try again.');
    }
  };

  return (
    <>
    <Navbar/>
    <div className="login">
      <div className="login-left">
      <h1>Login</h1>
      <Form className="container" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formAccountType">
          <Form.Label>Account Type</Form.Label>
          <Form.Select 
            value={accountType} 
            onChange={(e) => setAccountType(e.target.value)}
          >
            <option value="user">User</option>
            <option value="business">Business</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        {error && <div className="text-danger mb-3">{error}</div>}

        <Button className='loginButton' variant="primary" type="submit">
          Login
        </Button>
      </Form>

      {/* Register link */}
      <div className="register">
        <p>Don't have an account? </p>
        <Link to="/register">Register</Link>
      </div>
      </div>

      <div className="login-right">
        
      </div>
    </div>
    </>
  );
}

export default Login;