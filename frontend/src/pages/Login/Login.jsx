import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <h1>Login Page</h1>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
      </form>

      <Link to="/dashboard">
        <button className="btn">Login</button>
      </Link>
    </div>
  );
}

export default Login;
