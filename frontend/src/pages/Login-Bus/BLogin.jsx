import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function BLogin() {
  return (
<<<<<<< HEAD:frontend/src/pages/Login-Bus/BLogin.jsx
    <div className="login">
      <h1>Login</h1>
      <Form className="container" action="http://localhost:5000/users/login" method="POST">
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" required/>
        </Form.Group>
        <Button variant="primary" type="submit">
            Login
        </Button>
    </Form>
=======
    <div className="register">
      <h1>Register</h1>

      <Link to="/userRegister">Register as user</Link>
      <br />
      <Link to="/businessRegister">Register as business</Link>
      <br />
>>>>>>> backend:frontend/src/pages/Register/Register.jsx

      <div className="register">
        <p>Don't have an account? </p>
        <Link to="/register">Register</Link>
      </div>

      <Link to="/dashboard">
        <button className="btn">Dashboard</button>
      </Link>
    </div>
  );
}

export default BLogin;
