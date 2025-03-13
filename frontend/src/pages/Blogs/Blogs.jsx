import { Link } from "react-router-dom";
import "./Blogs.css";

function Blogs() {
  return (
    <div className="blogs">
      <h1>Blogs</h1>
      <p>Read our latest blogs here!</p>

      <Link to="/">
        <button className="btn">Back to Home</button>
      </Link>
    </div>
  );
}

export default Blogs;
