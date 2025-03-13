import {Link} from "react-router-dom";
import "./Navbar.css"

function Navbar(){
    return(
        <nav className="navbar">
            <h1>Execute DTU</h1>
            <ul>
                <li><Link to ="/">Home</Link></li>
                <li><Link to="/blogs">Blogs</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;