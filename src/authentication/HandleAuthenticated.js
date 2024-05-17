import { Navigate } from "react-router-dom";
import AuthContext from "../index.js";
import { useContext } from "react";

const HandleAuthenticated = ({ children, redirectRoute }) => {
    const { requestCompleted, isLogged } = useContext(AuthContext);
    if(!requestCompleted) return;
    return (
        <>
            {isLogged ? <>{children}</> : <Navigate to={!redirectRoute ? "/login" : redirectRoute} replace={true}/>}
        </>
    )
    
}


export default HandleAuthenticated;