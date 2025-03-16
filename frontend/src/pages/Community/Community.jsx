import React, { useState, useEffect } from 'react';
import './community.css';
import Navbar from "../../components/Navbar/Navbar"

const Community = () => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [blockedUsers, setBlockedUsers] = useState({});
  const [showSpamAlert, setShowSpamAlert] = useState(false);

  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem('messages')) || [];
    setMessages(storedMessages);
  }, []);

  const sendMessage = () => {
    if (username.trim() === '' || message.trim() === '') {
      alert('Both fields are required!');
      return;
    }

    if (blockedUsers[username]) {
      setShowSpamAlert(true);
      return;
    }

    const newMessage = {
      username,
      message,
      timestamp: new Date().toLocaleTimeString(),
    };

    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    localStorage.setItem('messages', JSON.stringify(updatedMessages));

    setMessage('');
  };

  const clearMessages = () => {
    localStorage.removeItem('messages');
    setMessages([]);
  };

  const blockUser = (username) => {
    setBlockedUsers((prev) => ({ ...prev, [username]: true }));
    setShowSpamAlert(true);
    setTimeout(() => {
      setBlockedUsers((prev) => {
        const newBlockedUsers = { ...prev };
        delete newBlockedUsers[username];
        return newBlockedUsers;
      });
      setShowSpamAlert(false);
    }, 30000);
  };

  return (
    <>
    <Navbar/>
    <div className="container">
      <div className="side">
        <div className="brand"><a href="https://www.apple.com" target="_blank" rel="noopener noreferrer">Apple</a></div>
        <div className="brand"><a href="https://www.samsung.com" target="_blank" rel="noopener noreferrer">Samsung</a></div>
        <div className="brand"><a href="https://www.tesla.com" target="_blank" rel="noopener noreferrer">Tesla</a></div>
        <div className="brand"><a href="https://www.microsoft.com" target="_blank" rel="noopener noreferrer">Microsoft</a></div>
        <div className="brand"><a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer">Amazon</a></div>
      </div>
      <div className="chat-container">
        <h2>Post Your Queries</h2>
        <div className="messages" id="messages">
          {messages.map((msg, index) => (
            <div key={index} className="message">
              <span className="username">{msg.username}</span>: {msg.message}
              <span className="timestamp">{msg.timestamp}</span>
            </div>
          ))}
        </div>
        {showSpamAlert && <div className="alert-box" id="spamAlert">⚠️ You are blocked for 30 seconds due to spamming!</div>}
        <div className="input-area">
          <input
            type="text"
            id="usernameInput"
            placeholder="Your Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            id="messageInput"
            placeholder="Type your query..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={sendMessage}>Post</button>
        </div>
        <button className="clear-btn" onClick={clearMessages}>🗑 Clear All Posts</button>
      </div>
    </div>
    </>
  );
};

export default Community;