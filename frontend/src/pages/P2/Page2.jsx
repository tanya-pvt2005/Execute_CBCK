import { Link } from "react-router-dom";

function P1() {
  return (
    <>
      <div className="p2">
        <h1>Page 2</h1>
        <p>You accessed this page from landing</p>
      </div>
      <Link to="/">
        <button>GO to landing</button>
      </Link>
    </>
  );
}

export default P1;
