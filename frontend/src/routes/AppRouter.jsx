import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Landing from "../pages/Landing/Landing"
import Login from "../pages/Login/Login"
import BLogin from "../pages/Login-Bus/BLogin"
import Community from "../pages/Community/Community"
import UserDash from "../pages/userDash/UserDash"
import BusDash from "../pages/busDash/BusDash"
import BusinessDashboard from "../pages/Dashboard/BusinessDashboard"
import Register from "../pages/Register/Register"
import BusinessRegister from "../pages/Register/BusinessRegister"
import UserRegister from "../pages/Login-Bus/UserRegister"
import UserDashboard from "../pages/Dashboard/userDashboard"

function AppRouter(){
    return(
        <>
        <Router>
            <Routes>
                <Route path = "/" element={<Landing/>} />
                <Route path = "/register" element={<Register/>} />
                <Route path = "/business-register" element={<BusinessRegister/>} />
                <Route path = "/user-register" element={<UserRegister/>} />
                <Route path = "/user-login" element={<Login/>} />
                <Route path = "/business-login" element={<BLogin/>} />
                <Route path = "/userDashboard" element={<UserDashboard/>} />
                <Route path = "/businessDashboard" element={<BusinessDashboard/>} />
                <Route path = "/community" element={<Community/>} />
            </Routes>   
        </Router>     
        </>
    )
}

export default AppRouter;