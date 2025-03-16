import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Landing from "../pages/Landing/Landing"
import Login from "../pages/Login/Login"
import Register from "../pages/Register/Register"
import UserRegister from "../pages/Register/userRegister"
import Dashboard from "../pages/Dashboard/Dashboard"
import Blogs from "../pages/Blogs/Blogs"
import Page1 from "../pages/P1/Page1"
import Page2 from "../pages/P2/Page2"
import BusinessRegister from "../pages/Register/businessRegister"
import UserDashboard from "../pages/Dashboard/userDashboard"
import BusinessDashboard from "../pages/Dashboard/BusinessDashboard"

function AppRouter(){
    return(
        <>
        <Router>
            <Routes>
                <Route path = "/" element={<Landing/>} />
                <Route path = "/login" element={<Login/>} />
                <Route path = "/register" element={<Register/>} />
                <Route path = "/userRegister" element={<UserRegister/>} />
                <Route path = "/businessRegister" element={<BusinessRegister/>} />
                <Route path = "/dashboard" element={<Dashboard/>} />
                <Route path = "/userDashboard" element={<UserDashboard/>} />
                <Route path = "/businessDashboard" element={<BusinessDashboard/>} />
                <Route path = "/blogs" element={<Blogs/>} />
                <Route path = "/page1" element={<Page1/>} />
                <Route path = "/page2" element={<Page2/>} />
            </Routes>   
        </Router>     
        </>
    )
}

export default AppRouter;