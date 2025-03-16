import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Landing from "../pages/Landing/Landing"
import ULogin from "../pages/Login-User/ULogin"
import BLogin from "../pages/Login-Bus/BLogin"
import Community from "../pages/Community/Community"
import UserDash from "../pages/userDash/UserDash"
import FeedbackForm from "../pages/Feedback/FeedbackForm"
import BusDash from "../pages/busDash/BusDash"
import BusinessDashboard from "../pages/Dashboard/BusinessDashboard"

function AppRouter(){
    return(
        <>
        <Router>
            <Routes>
                <Route path = "/" element={<Landing/>} />
                <Route path = "/user-login" element={<ULogin/>} />
                <Route path = "/business-login" element={<BLogin/>} />
                <Route path = "/user-dashboard" element={<UserDash/>} />
                <Route path = "/businessDashboard" element={<BusinessDashboard/>} />
                <Route path = "/community" element={<Community/>} />
                <Route path = "/feedback" element={<FeedbackForm/>} />
            </Routes>   
        </Router>     
        </>
    )
}

export default AppRouter;