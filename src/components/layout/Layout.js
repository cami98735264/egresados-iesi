import Footer from '../footer/Footer';
import FQuestions from '../fquestions/FQuestions';
import Navbar from '../navbar/Navbar';
import SPA_Main from '../spa_main/SPA_Main';
import './Layout.css';

const Layout = ({ children }) => {
    return (
            <div className='main-layout-logged'>
                <Navbar/>
                <SPA_Main/>
                <FQuestions/>
                <Footer/>
            </div>
    );
    }

export default Layout;