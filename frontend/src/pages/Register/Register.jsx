import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./Register.css"

function Register() {
    return <>
    <Navbar/>
    <div id="register">
    <h1>Register</h1>
        <Link to="/user-register">Register as consumer</Link>
        <br />
        <Link to="/business-register">Register as business</Link>
    </div>
    </>
}

export default Register;