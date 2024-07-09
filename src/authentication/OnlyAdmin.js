import { useNavigate } from 'react-router-dom';
import AuthContext from '../index.js';
import { useContext, useEffect } from 'react';

const OnlyAdmin = ({ children }) => {
    const { requestCompleted, userData } = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
        if(requestCompleted && !userData.data.isAdmin) {
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

export default OnlyAdmin;