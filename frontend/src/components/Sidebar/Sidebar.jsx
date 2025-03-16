import React from "react";
import { Home, FileText, Users, BookOpen, MessageCircle } from "lucide-react";
import logo from "../../assets/logo.png"
import "./Sidebar.css"; // Import the CSS file

const Sidebar = () => {
  const menuItems = [
    { name: "Feedback Mechanism", icon: <Home />, link: "#" },
    { name: "Consumer Support", icon: <FileText />, link: "#" },
    { name: "Community", icon: <Users />, link: "#" },
    { name: "Insights from Data", icon: <BookOpen />, link: "#" },
    { name: "Business Inbox", icon: <MessageCircle />, link: "#" },
  ];

  return (
    <div className="sidebar">
      <div className="name">
      <img src={logo}></img>

      <h1 id="dash">Dashboard</h1>
      </div>
            <ul className="menu">
        {menuItems.map((item, index) => (
          <li key={index} className="menu-item">
            {item.icon}
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
