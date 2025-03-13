import { Link } from "react-router-dom";

function P1() {
  return (
    <>
      <div className="p1">
        <h1>Page 1</h1>
        <p>You have reached the final page in the flow.</p>
      </div>
      <Link to="/dashboard">
        <button>GO to Dashboard</button>
      </Link>
    </>
  );
}

export default P1;
