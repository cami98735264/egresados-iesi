import { Navigate, useNavigate } from "react-router-dom";
import AuthContext from "../index.js";
import { useContext, useEffect } from "react";

const HandleAuthenticated = ({ children, redirectRoute }) => {
    const { requestCompleted, isLogged } = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
        if(requestCompleted && !isLogged) {
            navigate("/login", { replace: true });
            return;
        }

    }, [requestCompleted]);
    return (
        <>
            {children}
        </>
    )
    
}


export default HandleAuthenticated;