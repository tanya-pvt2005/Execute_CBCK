import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from "../../components/Navbar/Navbar";
import './Dashboard.css'; 

function BusinessDashboard() {
  const [businessData, setBusinessData] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBusinessData = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        navigate('/login'); // Redirect to login if no token
        return;
      }

      console.log(token)

      try {
        // Fetch user data from backend
        const response = await axios.get('http://localhost:5000/businesses/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setBusinessData(response.data);
      } catch (err) {
        console.error('Failed to fetch business data:', err);
        setError('Failed to fetch business data. Please try again.');
        navigate('/login'); // Redirect to login if token is invalid
      }
    };

    fetchBusinessData();
  }, [navigate]);

  if (!businessData) {
    return <div>Loading...</div>; // Show loading state
  }

  return (
    <div className="dashboard">
        <Navbar/>
      <h1>Welcome, {businessData.companyName}!</h1>
      <div className="user-info">
        <p><strong>Email:</strong> {businessData.email}</p>
        {/* Add more user data here */}
      </div>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default BusinessDashboard;