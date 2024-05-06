import backgroundMain from '../../assets/backgrounds/background-main-spa.jpg';
import logo from '../../assets/logo/escudo-iesi.png';
import './SPA_Main.css';

const SPA_Main = () => {
    return (
        <section id='introduccion'>
            <div className='main-spa h-svh' style={{backgroundImage: `url(${backgroundMain})`}}>
                <h1 className='text-4xl font-black md:text-5xl lg:text-6xl p-4 spa-titles main-title-spa'>Egresados San Isidoro {new Date().getFullYear()}</h1>
                <span className='text-sm desc-spa font-extrabold bg-gray-800 p-5 rounded-lg opacity-95 transition-all'>
                    <p>Amigo ex-isidorista, le damos un cordial saludo 👋, en esta plataforma podrás encontrar toda la información necesaria para que desarrolles las encuestas vigentes.</p>
                </span>
                <span className='text-sm desc-spa2 font-extrabold bg-gray-800 p-5 rounded-lg opacity-95 transition-all'>
                    <p>Puedes registrarte dirigiéndote al siguiente link: <a href='/register' className='link link-primary'>Registrarte</a></p>
                    <p>Puedes iniciar sesión dirigiéndote al siguiente link: <a href='/login' className='link link-primary'>Iniciar Sesión</a></p>
                </span>
                <span className='text-sm desc-spa3 font-extrabold bg-gray-800 p-5 rounded-lg opacity-95'>
                    <p>Si tienes alguna duda, puedes dirigirte a la sección de preguntas frecuentes, o a la guía de uso de la plataforma.</p>
                </span>
                <div className='text-sm font-extrabold  bg-gray-800 w-96 p-5 opacity-90 transition-all icon-title-cont rounded-lg'>
                    <img src={logo} className='img-logo transition-all hover:opacity-95' alt='Logo del San Isidoro'></img>
                </div>
            </div>
        </section>
    )
}

export default SPA_Main;