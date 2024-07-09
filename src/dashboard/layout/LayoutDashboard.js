import HandleAuthenticated from "../../authentication/HandleAuthenticated.js";
import Footer from "../../components/footer/Footer.js";
import MainDashboard from "../main_dashboard/MainDashboard.js";
import { useContext, useEffect } from "react";
import AuthContext from "../../index.js";
import "./LayoutDashboard.css";
const LayoutDashboard = () => {
    const context = useContext(AuthContext);
    return (
            <HandleAuthenticated redirectRoute={"/login"}>
                <MainDashboard userData={context.userData.data} className="maindashboard"/>
                <Footer/>
            </HandleAuthenticated>
    );
    }


export default LayoutDashboard;