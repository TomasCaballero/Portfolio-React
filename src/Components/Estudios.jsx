
const Estudios = () => {
    return (
        <div className="estudios" id="estudios">
            <div className="container" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="700">
                <div className="cursos">
                    <div className="finalizados">
                        <h4>ESTUDIOS FINALIZADOS</h4>
                        <div className="misCursos">
                            <div>- CURSO DE DESARROLLO WEB - <img src="src\assets\cursos\coderhouse.png" alt="CODERHOUSE" /></div>
                            <div>- CURSO DE JAVASCRIPT - <img src="src\assets\cursos\coderhouse.png" alt="CODERHOUSE" /></div>
                            <div>- CURSO DE REACT JS - <img src="src\assets\cursos\coderhouse.png" alt="CODERHOUSE" /></div>
                        </div>
                    </div>
                    <div className="enCurso">
                        <h4>ESTUDIOS EN CURSO</h4>
                        <div className="misCursos">
                            <div>- MASTER EN REACT JS - <img src="src\assets\cursos\UDMY.png" alt="UDEMY" /></div>
                            <div>- DIPLOMATURA EN PROGRAMACIÓN WEB FULL STACK - <img src="src\assets\cursos\utn.png" alt="UTN" className="utn" /></div>
                        </div>
                    </div>
                </div>
                <div className="certi">
                    <div className="certificadosYCV" id="scrollspyHeading4">
                        <div className="certificados">
                            <a href="https://www.coderhouse.com/certificados/62b0fe027c15120021c67340" className="item"
                                target="_blank" rel="noopener noreferrer"><img src="src\assets\certificados\desarrolloweb.png" alt="CERTIFICADO DESARROLLO WEB" /></a>
                            <a href="https://www.coderhouse.com/certificados/63028ded2f4a900024460970" className="item"
                                target="_blank" rel="noopener noreferrer"><img src="src\assets\certificados\js.png" alt="CERTIFICADO JS" /></a>
                            <a href="https://www.coderhouse.com/certificados/6368a279e6706a000fb9f23e" className="item"
                                target="_blank" rel="noopener noreferrer"><img src="src\assets\certificados\reactjs.png" alt="CERTIFICADO REACT_JS" /></a>
                        </div>
                    </div>
                </div>
                <div className="redes">
                <a href="https://www.linkedin.com/in/tomás-bautista-caballero-205a1b24a/" target="_blank" rel="noopener noreferrer"><img src="src/assets/iconosTecnologias/linkedin.png" alt="linkedin"/></a>
                <a href="https://github.com/TomasCaballero" target="_blank" rel="noopener noreferrer"><img src="src/assets/iconosTecnologias/github-sign.png" alt="github"/></a>
                <a href="src\assets\certificados\Tomás_Bautista_Caballero_CV.pdf" download="CV_Tomas_Caballero" title="Descargar CV"><img src="src/assets/iconosTecnologias/resume.png" alt="CV"/></a>
                </div>
            </div>
        </div>
    )
}

export default Estudios