import HandleAuthenticated from "../../authentication/HandleAuthenticated.js";
import Footer from "../../components/footer/Footer.js";
import MainDashboard from "../main_dashboard/MainDashboard.js";
import { useContext } from "react";
import AuthContext from "../../index.js";

const LayoutDashboard = () => {
    const { userData } = useContext(AuthContext);
    return (
            <HandleAuthenticated redirectRoute={"/login"}>
                <MainDashboard userData={userData.data}/>
                <Footer/>
            </HandleAuthenticated>
    );
    }


export default LayoutDashboard;