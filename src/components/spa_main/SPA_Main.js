import backgroundMain from '../../assets/backgrounds/background-main-spa.jpg';
import logo from '../../assets/logo/escudo-iesi.png';
import './SPA_Main.css';

const SPA_Main = () => {
    return (
        <div>
            <div className='main-spa h-svh' style={{backgroundImage: `url(${backgroundMain})`}}>
                <h1 className='text-2xl titulo-spa font-black md:text-4xl lg:text-4xl p-4'>EGRESADOS SAN ISIDORO {new Date().getFullYear()}</h1>
                <span className='text-sm desc-spa font-extrabold bg-gray-800 p-5 rounded-lg opacity-95 transition-all'>
                <p>Amigo ex-isidorista, le damos un cordial saludo 👋, en esta plataforma podrás encontrar toda la información necesaria para que desarrolles las encuestas vigentes.</p>
                <p className='mt-4'>Te invitamos a registrarte e iniciar sesión para iniciar tu proceso, de esta forma, ayudas a nuestra institución a generar estadísticas de manera precisa y amigable.</p>
                </span>
                <span className='text-sm desc-spa2 font-extrabold bg-gray-800 p-5 rounded-lg opacity-95 transition-all'>
                <p>Puedes registrarte dirigiéndote al siguiente link: <a href='/register' className='link link-primary'>Click Aquí</a></p>
                <p>Puedes iniciar sesión dirigiéndote al siguiente link: <a href='/login' className='link link-primary'>Click Aquí</a></p>
                </span>
                <span className='text-sm desc-spa3 font-extrabold bg-gray-800 p-5 rounded-lg opacity-95'>
                <p>Si tienes alguna duda, puedes dirigirte a la sección de preguntas frecuentes, o a la guía de uso de la plataforma.</p>
                </span>
                <div className='text-sm desc-spa4 font-extrabold bg-gray-800 w-96 p-5 opacity-95 transition-all icon-title-cont rounded-lg'>
                    <img src={logo} className='img-logo transition-all hover:opacity-95'></img>
                </div>
            </div>

        </div>
    )
}

export default SPA_Main;