import { useState, useEffect } from "react";
import "./Profile.css";

function ProfileSection() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [coins, setCoins] = useState(0);
  const [stats, setStats] = useState({ feedbacksGiven: 0, brandsRated: 0 });

  // Load data from localStorage
  useEffect(() => {
    const savedCoins = localStorage.getItem("coins") || 0;
    const savedStats = JSON.parse(localStorage.getItem("stats")) || {
      feedbacksGiven: 0,
      brandsRated: 0,
    };
    setCoins(savedCoins);
    setStats(savedStats);
  }, []);

  return (
    <div className="profile-section">
      {/* Profile Image */}
      <img
        src="your-profile-image.jpg"  // Replace with dynamic image
        alt="Profile"
        className="profile-pic"
        onClick={() => setShowDropdown(!showDropdown)}
      />

      {/* Dropdown Content */}
      {showDropdown && (
        <div className="profile-dropdown">
          <p>💰 Coins: <strong>{coins}</strong></p>
          <p>📊 Feedbacks Given: <strong>{stats.feedbacksGiven}</strong></p>
          <p>🏆 Brands Rated: <strong>{stats.brandsRated}</strong></p>
          <button className="close-profile" onClick={() => setShowDropdown(false)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default Profile;
