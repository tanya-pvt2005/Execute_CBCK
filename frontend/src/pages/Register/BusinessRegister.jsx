import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function BusinessRegister() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [industry, setIndustry] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Log the registration request data
      console.log('Sending registration request:', { email, password, companyName, industry });

      // Send registration request to backend
      const response = await axios.post('http://localhost:5000/businesses/register', {
        email,
        password,
        companyName,
        industry,
      });

      // Log the backend response
      console.log('Backend response:', response.data);

      // Redirect to login page after successful registration
      navigate('/login');
    } catch (err) {
      // Log and display errors
      console.error('Registration error:', err.response?.data || err.message);
      setError(err.response?.data?.error || 'Registration failed. Please try again.');
    }
  };

  return (
    <div>
      <h1>Business Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Company Name:</label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Industry:</label>
          <input
            type="text"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <a href="/login">Log in</a>
      </p>
    </div>
  );
}

export default BusinessRegister;