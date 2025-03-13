import {Link} from "react-router-dom"
import Navbar from "../../components/Navbar/Navbar";
import "./Landing.css"

function Landing(){
    return(
        <>
            <Navbar/>
            <div className="landing">
                <h1>Welcome to our project for EXECUTE DTU</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit sint qui, vel nisi officia quibusdam aliquam dolores minus eum laudantium?</p>
            </div>
            {/* nav buttons */}

            <Link to ="/login">
                <button className = "btn">LOGIN</button>            
            </Link>
            <Link to ="/blogs">
                <button className = "btn">BLOGS</button>            
            </Link>
            <Link to ="/page2">
                <button className = "btn">PAGE2</button>            
            </Link>
        </>
    )
}

export default Landing;