import { Link } from "react-router-dom";


function UserDash() {
  return (
    <div className="user-dashboard">
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard!</p>

      <Link to="/page1">
        <button className="btn">Go to Page 1</button>
      </Link>

      <Link to="/">
        <button className="btn">Go to Landing</button>
      </Link>
    </div>
  );
}

export default UserDash;
