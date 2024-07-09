import AuthContext from "../../index.js";
import { useEffect, useRef, useState } from "react";
import TrabajosModulo from "../trabajos/TrabajosModulo.js";
import EducacionModulo from "../educacion/EducacionModulo.js";
import handleLogout from "../../utils/handleLogout.js";
import EstadisticasModulo from "../estadisticas/EstadisticasModulo.js";
const wait = (time) => new Promise((resolve) => setTimeout(resolve, time));
const MainDashboard = ({ userData }) => {
    const urls = [
        {
            nombre: "Trabajos",
            url: "/trabajos",
            component: <TrabajosModulo userData={userData} />,
            onlyAdmin: false

        },
        {
            nombre: "Educación",
            url: "/educacion",
            component: <EducacionModulo userData={userData} />,
            onlyAdmin: false
        },
        {
            nombre: "Estadísticas",
            url: "/estadisticas",
            component: <EstadisticasModulo userData={userData} />,
            onlyAdmin: true
        }
    ]
    const { isAdmin } = !userData ? { isAdmin: false } : userData;
    const [currentComponent, setCurrentComponent] = useState(<TrabajosModulo />);
    const { nombres, apellidos } = !userData ? { nombres: "", apellidos: "" } : userData;

    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar bg-base-300">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2">{nombres} {apellidos} {isAdmin ? "(Administrador)" : ""}</div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal">
                            {/* Map but check if the user is admin */}
                            {urls.map(({ nombre, url, component, onlyAdmin }) => {
                                if (onlyAdmin && !isAdmin) {
                                    return;
                                }
                                return <li key={url}><a onClick={() => {
                                    setCurrentComponent(component)
                                }}>{nombre}</a></li>
                            })}
                            <li><a onClick={handleLogout}>Cerrar Sesión</a></li>
                        </ul>
                    </div>
                </div>
                {currentComponent}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200">
                    {/* Sidebar content here */}
                    {urls.map(({ nombre, url, component, onlyAdmin }) => {
                        if (onlyAdmin && !isAdmin) {
                            return;
                        }
                        return <li key={url}><a onClick={() => {
                            setCurrentComponent(component)
                        }}>{nombre}</a></li>
                    })}
                    <li><a onClick={handleLogout}>Cerrar Sesión</a></li>
                </ul>
            </div>
        </div>
    )
}

export default MainDashboard;