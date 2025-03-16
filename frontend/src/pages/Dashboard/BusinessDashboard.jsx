import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from "../../components/Navbar/Navbar";
import './BusinessDashboard.css'; 

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

//   return (
//     <div className="dashboard">
//         <Navbar/>
//       <h1>Welcome, {businessData.companyName}!</h1>
//       <div className="user-info">
//         <p><strong>Email:</strong> {businessData.email}</p>
//         {/* Add more user data here */}
//       </div>
//       {error && <p className="error">{error}</p>}
//     </div>
//   );

return (
    <div className="dashboard">
      <Navbar />
      <h1>Welcome, {businessData.companyName}!</h1>
      <div className="dashboard-content">
        <div className="user-info">
          <p><strong>Email:</strong> {businessData.email}</p>
          <p><strong>Industry:</strong> {businessData.industry}</p>
        </div>
  
        <div className="metrics">
          <h2>Key Metrics</h2>
          <div className="metrics-grid">
            <div className="metric-card">
              <h3>Customer Satisfaction</h3>
              <p>92%</p>
            </div>
            <div className="metric-card">
              <h3>Feedback Received</h3>
              <p>1,234</p>
            </div>
            <div className="metric-card">
              <h3>Response Rate</h3>
              <p>85%</p>
            </div>
          </div>
        </div>
  
        <div className="recent-activity">
          <h2>Recent Activity</h2>
          <ul>
            <li>New feedback received from Customer A</li>
            <li>Response sent to Customer B</li>
            <li>Updated business profile</li>
          </ul>
        </div>
  
        <div className="insights">
          <h2>Insights & Recommendations</h2>
          <p>Based on recent feedback, consider improving your customer service response time.</p>
        </div>
      </div>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default BusinessDashboard;