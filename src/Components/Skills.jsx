

const Skills = () => {
    return (
        <div className="skills" id="skills">
            <div className="container">
                <div className="titulo">
                    <h3>SKILLS</h3>
                </div>
                <div className="tecnologias" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="700">
                    <div className="lenguajes">
                        <h4>LENGUAJES DE PROGRAMACIÓN</h4>
                        <div className="contenedorLenguajes">
                            <div className="contenedor">
                                <img src="src\assets\iconosTecnologias\html-5.png" alt="HTML5" />
                                <p>HTML5</p>
                            </div>
                            <div className="contenedor">
                                <img src="src\assets\iconosTecnologias\css-3.png" alt="CSS3" />
                                <p>CSS3</p>
                            </div>
                            <div className="contenedor">
                                <img src="src\assets\iconosTecnologias\js.png" alt="JS" />
                                <p>JAVASCRIPT</p>
                            </div>
                        </div>
                    </div>
                    <div className="librerias">
                        <h4>FRAMEWORKS Y LIBRERIAS</h4>
                        <div className="contenedorLibrerias">
                            <div className="contenedor">
                                <img src="src\assets\iconosTecnologias\bootstrap.png" alt="BOOTSTRAP" />
                                <p>BOOTSTRAP</p>
                            </div>
                            <div className="contenedor">
                                <img src="src\assets\iconosTecnologias\react.png" alt="REACT_JS" />
                                <p>REACT JS</p>
                            </div>
                            <div className="contenedor">
                                <img src="src\assets\iconosTecnologias\sass.png" alt="SASS" />
                                <p>SASS</p>
                            </div>
                        </div>
                    </div>
                    <div className="herramientas">
                        <h4>HERRAMIENTAS</h4>
                        <div className="contenedorHerramientas">
                            <div className="contenedor">
                                <img src="src\assets\iconosTecnologias\git.png" alt="GIT" />
                                <p>GIT</p>
                            </div>
                            <div className="contenedor">
                                <img src="src\assets\iconosTecnologias\github-sign.png" alt="GITHUB" />
                                <p>GITHUB</p>
                            </div>
                            <div className="contenedor">
                                <img src="src\assets\iconosTecnologias\visual-studio (1).png" alt="VSC" className="vscBg" />
                                <p>VSC</p>
                            </div>
                            <div className="contenedorFigma">
                                <img src="src\assets\iconosTecnologias\Figma-logo.svg" alt="FIGMA" className="figma" />
                                <p>FIGMA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills