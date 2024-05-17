import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import './Layout.css';

const Layout = ({ children }) => {
    return (
            <div className='main-layout-logged'>
                <Navbar/>
                {children}
                <Footer/>
            </div>
    );
    }

export default Layout;