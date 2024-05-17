import logo from '../../assets/logo/escudo-iesi.png';
import './Navbar.css';
import defaultProfile from '../../assets/utils/default-profile.png';
import AuthContext from '../../index.js';
import { useContext } from 'react';
import handleLogout from '../../utils/handleLogout.js';

const Navbar = () => {
    const { isLogged, requestCompleted } = useContext(AuthContext);
    if(!requestCompleted) return;
    return (
        <header>
            <nav className="navbar bg-base-100">
                <div className="navbar-start">
                  <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                      <li><a href='#introduccion'>Introducción</a></li>
                      <li><a href='#preguntas-frecuentes'>Preguntas Frecuentes</a></li>
                      <li>
                        <a>Guía</a>
                        <ul className="p-2">
                          <li><a>Ingreso a la plataforma</a></li>
                          <li><a>Uso de la plataforma</a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <img src={logo} className='logo-iesi' alt='Logo del San Isidoro'></img><a className="btn btn-ghost text-base">Egresados I.E.S.I</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                  <ul className="menu menu-horizontal px-1">
                    <li><a href='#introduccion'>Introducción</a></li>
                    <li><a href='#preguntas-frecuentes'>Preguntas Frecuentes</a></li>
                    <li>
                      <details>
                        <summary>Guía</summary>
                        <ul className="p-2">
                          <li><a>Ingreso a la plataforma</a></li>
                          <li><a>Uso de la plataforma</a></li>
                        </ul>
                      </details>
                    </li>
                  </ul>
                </div>
                {!isLogged ? <>
                  <div className="navbar-end">
                  <a className="btn mr-3 hidden md:flex lg:flex" href='/login'>Iniciar Sesión</a>
                  <a className="btn hidden md:flex lg:flex" href='/register'>Registrarse</a>
                </div>
                </> : <div className="navbar-end">
                  <a className="btn mr-3 hidden md:flex lg:flex" href='/dashboard'>Ir al Dashboard</a>
                  <a className="btn hidden md:flex lg:flex" onClick={handleLogout}>Cerrar Sesión</a>
                </div>}
                <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar md:hidden lg:hidden">
        <div className="w-10 rounded-full">
          <img alt="Foto de perfil" src={defaultProfile} />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {!isLogged ? <>
        <li><a href='/login'>Iniciar Sesión</a></li>
        <li><a href='/register'>Registrarse</a></li>
        </> :
        <>
        <li>
          <a className="justify-between">
            Perfil
            <span className="badge">Nuevo</span>
          </a>
        </li>
        <li><a>Configuración</a></li>
        <li><a onClick={handleLogout}>Cerrar Sesión</a></li>
        <li><a href='/dashboard'>Ir al Dashboard</a></li>
        </>
        }
      </ul>
    </div>
            </nav>
        </header>
    );
    };


export default Navbar;