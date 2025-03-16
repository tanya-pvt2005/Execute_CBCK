import Sidebar from "../../components/Sidebar/Sidebar";
import BrandCards from "../../components/Brands/BrandCards";
// import Profile from "../../components/Profile/Profile";
import "./UserDash.css";

function UserDash() {
  return (

    <>
    <div className="user-dash">
      {/* Sidebar - Fixed Position */}
      <Sidebar />

      {/* Main Content Section */}
      <div className="main-content">
        <h1 id="heading">Welcome <span id="bus">User</span> </h1>
        <BrandCards />
      </div>
    </div>

    {/* <Profile/> */}


    </>
  );
}

export default UserDash;
