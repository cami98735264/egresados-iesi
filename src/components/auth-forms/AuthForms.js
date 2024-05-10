import './AuthForms.css';
import ReCAPTCHA from "react-google-recaptcha";
import { createRef, useState } from 'react';
import axios from 'axios';

const AuthForms = ({ razon }) => {
    const recaptchaRef = createRef();
    const [modalMessage, setModalMessage] = useState('null');


    const handleSubmit = async (e) => {
        const modal = document.getElementById('captcha_error_modal');
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        data.recaptcha = recaptchaRef.current.getValue();
        console.log(razon + ":\n", data);
        if (Object.values(data).some(value => value === "")) {
            setModalMessage("Por favor, llena todos los campos");
            modal.showModal();
            return;
        }
        else if (!data.cookies_checkbox) {
            setModalMessage("Por favor, acepta el uso de cookies");
            modal.showModal();
        }
        else if (!data.recaptcha) {
            setModalMessage("Por favor, verifica el captcha");
            modal.showModal();
        }
        else {
            try {
                const url = razon === "login" ? "/api/auth/login" : "/api/auth/register";
                const response = await axios.post(url, data, {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

            } catch (err) {
                console.log(err);
                switch (err.response.data.errorType) {
                    case "NO_CAPTCHA":
                        setModalMessage("Por favor, verifica el captcha");
                        modal.showModal();
                        break;
                    case "DATA_LENGTH":
                        setModalMessage(err.response.data.message + ": " + err.response.data.errors.join(", "));
                        modal.showModal();
                        break;
                    case "INTERNAL_ERROR":
                        setModalMessage("Ocurrió un error interno en el servidor: " + JSON.stringify(err));
                        modal.showModal();
                        break;
                    case "CAPTCHA_ERROR":
                        setModalMessage("Error al verificar el captcha: " + err.response.data.errors.join(", "));
                        modal.showModal();
                        break;
                    default:
                        setModalMessage("Error desconocido: " + JSON.stringify(err));
                        modal.showModal();
                        break;
                }

            }
        }
    }
    return (
        <div className="authforms_main">
            <form className={`authforms_container ${razon}`} onSubmit={handleSubmit}>
                <h2 className='text-lg'>Ingresa tus credenciales para {razon === "login" ? "Iniciar Sesión" : "registrarse"}</h2>

                <div className={`inputs-container`}>
                    <label className={`input input-bordered flex items-center gap-2 ${razon === "register" && "input-accent"}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                        <input type="text" className="grow placeholder-[#678098] " placeholder="Número de documento" name='documento' />
                    </label>
                    <label className={`input input-bordered flex items-center gap-2 ${razon === "register" && "input-accent"}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                        <input type="password" className="grow placeholder-[#678098]" placeholder='Digita tu contraseña' name='contraseña' />
                    </label>
                    {razon === "register" && (
                        <>
                        <label className="input input-bordered flex items-center input-primary gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                            <input type="text" className="grow placeholder-[#678098]" placeholder="Nombres Completos" name='nombres'/>
                        </label>
                        <label className="input input-bordered flex items-center gap-2 input-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                            <input type="text" className="grow placeholder-[#678098]" placeholder="Primer Apellido" name='primer_apellido'/>
                        </label>
                        <label className="input input-bordered flex items-center gap-2 input-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                            <input type="text" className="grow placeholder-[#678098]" placeholder="Segundo Apellido" name='segundo_apellido'/>
                        </label>
                        <label className="input input-bordered flex items-center gap-2 input-primary">
                            Teléfono
                            <input type="text" className="grow placeholder-[#678098]" placeholder="311898xxxx" name='telefono'/>
                        </label>
                        <label className="input input-bordered flex items-center gap-2 input-primary">
                            Dirección
                            <input type="text" className="grow placeholder-[#678098]" placeholder="Av. 12, Calle #45-67" name='direccion'/>
                            <span className="badge badge-info">Opcional</span>
                        </label>
                        </>
                    )}
                    <label className="label cursor-pointer cookies-checkbox-cont">
                        <span className="label-text">Acepta el uso de cookies</span>
                        <input type="checkbox" defaultChecked className="checkbox" name='cookies_checkbox' />
                    </label>
                    <ReCAPTCHA sitekey="6LdrxtEpAAAAACsDG_49cbTo_MhyyftWvb6aJ730" className='recaptcha-cont' ref={recaptchaRef} />
                </div>
                <button className="btn btn-active btn-block btn-outline btn-primary">{razon === "login" ? "Iniciar Sesión" : "Registrarse"}</button>
                <a className='link link-primary' href={razon === "login" ? "/register" : "/login"}>{razon === "login" ? "Registrarse" : "Iniciar Sesión"}</a>
            </form>
            <dialog id="captcha_error_modal" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Error</h3>
                    <p className="py-4">{modalMessage}</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>

            </dialog>
        </div>
    )
}

export default AuthForms;