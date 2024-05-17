import axios from 'axios';


const handleLogout = async () => {
    try {
        await axios.post('/api/auth/logout', {
            withCredentials: true
        });
        window.location.reload();
    } catch(err) {
        console.log(err);
    }
}

export default handleLogout;

