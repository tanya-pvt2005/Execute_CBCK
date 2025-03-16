import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Register.css";

function Register() {
  return (
    <div className="register">
      <h1>Register</h1>

      <Link to="/userRegister">Register as user</Link>
      <br />
      <Link to="/businessRegister">Register as business</Link>
      <br />

      <Link to="/dashboard">
        <button className="btn">Dashboard</button>
      </Link>
    </div>
  );
}

export default Register;
