import axios from 'axios';
import { useEffect, useState } from 'react';
import AuthContext from '../index.js';


const AuthenticationContext = ({ children }) => {
    const [userData, setUserData] = useState({});
    const [requestCompleted, setRequestCompleted] = useState(false);
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get('/api/auth/check', {
                    withCredentials: true
                });
                setUserData(response.data);
                setRequestCompleted(true);
            } catch(err) {
                console.log(err);
                setRequestCompleted(true);
            }
        }
        fetchUser();
    }, []);
    return (
        <AuthContext.Provider value={{ userData, requestCompleted, isLogged: userData.success }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthenticationContext;