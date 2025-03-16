import { Link } from "react-router-dom";

function Community() {
  return (
    <div className="community">
      <h1>Bazaar speaks with the community</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, et.</p>

      <Link to="/">
        <button className="btn">Back to Home</button>
      </Link>
    </div>
  );
}

export default Community;
