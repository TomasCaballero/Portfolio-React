// import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navBar">
            <div className="img">
                <a href="#inicio"><div className="foto"></div></a>
            </div>
            <nav id="navbar-example2">
                <ul className="nav nav-pills">
                    <li className="nav-item inicioBtn">
                        <a href="#inicio" className="active"><img src="src\assets\iconNavbar\home-regular-72.png" alt="icono_inicio"/><p>Inicio</p> </a>
                    </li>
                    <li className="nav-item">
                        <a href="#sobreMi"><img src="src\assets\iconNavbar\user-solid-72.png" alt="icono-sobre_mi"/><p>Sobre mi</p></a>
                    </li>
                    <li className="nav-item">
                        <a href="#skills"><img src="src\assets\iconNavbar\brain-regular-72.png" alt="icono_skills"/><p>Skills</p></a>
                    </li>
                    <li className="nav-item">
                        <a href="#sitios"><img src="src\assets\iconNavbar\devices-solid-72.png" alt="icono-sitios"/><p>Sitios</p></a>
                    </li>
                    <li className="nav-item">
                        <a href="#estudios"><img src="src\assets\iconNavbar\certification-regular-72.png" alt="icono_estudios"/><p>Estudios</p></a>
                    </li>
                </ul>
            </nav>
            <div className="redes">
                <a href="https://www.linkedin.com/in/tomás-bautista-caballero-205a1b24a/" target="_blank" rel="noopener noreferrer"><img src="src/assets/iconosTecnologias/linkedin.png" alt="linkedin"/></a>
                <a href="https://github.com/TomasCaballero" target="_blank" rel="noopener noreferrer"><img src="src/assets/iconosTecnologias/github-sign.png" alt="github"/></a>
                <a href="src\assets\certificados\Tomás_Bautista_Caballero_CV.pdf" download="CV_Tomas_Caballero" title="Descargar CV"><img src="src/assets/iconosTecnologias/resume.png" alt="CV"/></a>
            </div>
        </div>
    )
}

export default Navbar