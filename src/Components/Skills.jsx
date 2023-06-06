

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
                                <img src="https://cdn-icons-png.flaticon.com/512/226/226269.png?w=740&t=st=1686076708~exp=1686077308~hmac=d6b322da36aaa9d65bb487f938a5fd6fb3b385efe2f6a8cd1654b4304fe3d167" alt="HTML5" />
                                <p>HTML5</p>
                            </div>
                            <div className="contenedor">
                                <img src="https://img.freepik.com/iconos-gratis/css-3_318-566055.jpg?t=st=1686076708~exp=1686077308~hmac=b1f904214c7ac824acb4ff490ca3335017ea1fa21c8b6ecc9752051e4c3c2d5a" alt="CSS3" />
                                <p>CSS3</p>
                            </div>
                            <div className="contenedor">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png" alt="JS" />
                                <p>JAVASCRIPT</p>
                            </div>
                        </div>
                    </div>
                    <div className="librerias">
                        <h4>FRAMEWORKS Y LIBRERIAS</h4>
                        <div className="contenedorLibrerias">
                            <div className="contenedor">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1024px-Bootstrap_logo.svg.png" alt="BOOTSTRAP" />
                                <p>BOOTSTRAP</p>
                            </div>
                            <div className="contenedor">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1024px-React.svg.png" alt="REACT_JS" />
                                <p>REACT JS</p>
                            </div>
                            <div className="contenedor">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png" alt="SASS" />
                                <p>SASS</p>
                            </div>
                        </div>
                    </div>
                    <div className="herramientas">
                        <h4>HERRAMIENTAS</h4>
                        <div className="contenedorHerramientas">
                            <div className="contenedor">
                                <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="GIT" />
                                <p>GIT</p>
                            </div>
                            <div className="contenedor">
                                <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GITHUB" />
                                <p>GITHUB</p>
                            </div>
                            <div className="contenedor">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/800px-Visual_Studio_Code_1.35_icon.svg.png" alt="VSC" className="vscBg" />
                                <p>VSC</p>
                            </div>
                            <div className="contenedorFigma">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/800px-Figma-logo.svg.png" alt="FIGMA" className="figma" />
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