import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Landing from "../pages/Landing/Landing"
import Login from "../pages/Login/Login"
import Register from "../pages/Register/Register"
import Dashboard from "../pages/Dashboard/Dashboard"
import Blogs from "../pages/Blogs/Blogs"
import Page1 from "../pages/P1/Page1"
import Page2 from "../pages/P2/Page2"

function AppRouter(){
    return(
        <>
        <Router>
            <Routes>
                <Route path = "/" element={<Landing/>} />
                <Route path = "/login" element={<Login/>} />
                <Route path = "/register" element={<Register/>} />
                <Route path = "/dashboard" element={<Dashboard/>} />
                <Route path = "/blogs" element={<Blogs/>} />
                <Route path = "/page1" element={<Page1/>} />
                <Route path = "/page2" element={<Page2/>} />
            </Routes>   
        </Router>     
        </>
    )
}

export default AppRouter;