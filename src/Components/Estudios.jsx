
const Estudios = () => {
    return (
        <div className="estudios" id="estudios">
            <div className="container" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="700">
                <div className="cursos">
                    <div className="finalizados">
                        <h4>ESTUDIOS FINALIZADOS</h4>
                        <div className="misCursos">
                            <div>- CURSO DE DESARROLLO WEB - <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Logo_blackbg.png/1199px-Logo_blackbg.png" alt="CODERHOUSE" /></div>
                            <div>- CURSO DE JAVASCRIPT - <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Logo_blackbg.png/1199px-Logo_blackbg.png" alt="CODERHOUSE" /></div>
                            <div>- CURSO DE REACT JS - <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Logo_blackbg.png/1199px-Logo_blackbg.png" alt="CODERHOUSE" /></div>
                        </div>
                    </div>
                    <div className="enCurso">
                        <h4>ESTUDIOS EN CURSO</h4>
                        <div className="misCursos">
                            <div>- MASTER EN REACT JS - <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Udemy_logo.svg/1920px-Udemy_logo.svg.png" alt="UDEMY" className="udemy" /></div>
                            <div>- DIPLOMATURA EN PROGRAMACIÓN WEB FULL STACK - <img src="https://upload.wikimedia.org/wikipedia/commons/6/67/UTN_logo.jpg" alt="UTN" className="utn" /></div>
                        </div>
                    </div>
                </div>
                <div className="certi">
                    <div className="certificadosYCV" id="scrollspyHeading4">
                        <div className="certificados">
                            <a href="https://www.coderhouse.com/certificados/62b0fe027c15120021c67340" className="item"
                                target="_blank" rel="noopener noreferrer"><img src="https://live.staticflickr.com/65535/52954548565_cca4b04b96_c.jpg" alt="CERTIFICADO DESARROLLO WEB" /></a>
                            <a href="https://www.coderhouse.com/certificados/63028ded2f4a900024460970" className="item"
                                target="_blank" rel="noopener noreferrer"><img src="https://live.staticflickr.com/65535/52953570627_734b56b225_c.jpg" alt="CERTIFICADO JS" /></a>
                            <a href="https://www.coderhouse.com/certificados/6368a279e6706a000fb9f23e" className="item"
                                target="_blank" rel="noopener noreferrer"><img src="https://live.staticflickr.com/65535/52953570637_414d08d3b8_c.jpg" alt="CERTIFICADO REACT_JS" /></a>
                        </div>
                    </div>
                </div>
                <div className="redes">
                    <a href="https://www.linkedin.com/in/tomás-bautista-caballero-205a1b24a/" target="_blank" rel="noopener noreferrer"><img src="https://e7.pngegg.com/pngimages/40/781/png-clipart-computer-icons-linkedin-logo-others-angle-text.png" alt="linkedin"/></a>
                    <a href="https://github.com/TomasCaballero" target="_blank" rel="noopener noreferrer"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="github"/></a>
                    <a href="src\assets\certificados\Tomás_Bautista_Caballero_CV.pdf" download="CV_Tomas_Caballero" title="Descargar CV"><img src="https://png.pngtree.com/png-vector/20190411/ourlarge/pngtree-vector-resume-icon-png-image_927259.jpg" alt="CV"/></a>
                </div>
            </div>
        </div>
    )
}

export default Estudios