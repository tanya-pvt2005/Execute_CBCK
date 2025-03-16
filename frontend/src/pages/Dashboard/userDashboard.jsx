import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from "../../components/Navbar/Navbar";
import './Dashboard.css'; // Optional: Add styles for the dashboard

function UserDashboard() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        navigate('/login'); // Redirect to login if no token
        return;
      }

      console.log(token)

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

  if (!userData) {
    return <div>Loading...</div>; // Show loading state
  }

  return (
    <div className="dashboard">
        <Navbar/>
      <h1>Welcome, {userData.username}!</h1>
      <div className="user-info">
        <p><strong>Email:</strong> {userData.email}</p>
        <p><strong>Username:</strong> {userData.username}</p>
        {/* Add more user data here */}
      </div>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default UserDashboard;