
const SobreMi = () => {
    return (
        <div className="sobreMi" id="sobreMi">
            <div className="container" data-aos="zoom-in-right">
                <div className="titulo">
                    <h3>SOBRE MI</h3>
                </div>
                <p className="descripcion">
                    <strong>Hola! Soy Tomás Bautista Caballero</strong>, un apasionado desarrollador enfocado en el front-end y con aspiraciones de convertirme en un desarrollador full stack.
                </p>
                <div className="datosEInteres">
                    <div className="datos">
                        <h5 className="titulo">Datos Personales</h5>
                        <div className="nacionalidad">
                            <p><strong>Nacionalidad: </strong>Argentina</p>
                        </div>
                        <div className="nacimiento">
                            <p><strong>Fecha de nacimiento: </strong>07 / 11 / 1997</p>
                        </div>
                        <div className="ubicacion">
                            <p><strong>Localidad: </strong>Ciudad Autónoma de Buenos Aires, Argentina</p>
                        </div>
                        <div className="email">
                            <p><strong>Email: </strong>caballerotomas97@gmail.com</p>
                        </div>
                    </div>
                    <div className="interes">
                        <h5 className="titulo">Mis Intereses</h5>
                        <div className="contenidoInteres">
                            <div className="tecnologia box"><box-icon className="icon" name='devices' type='solid' color='#ffffff' ></box-icon>Tecnología</div>
                            <div className="musica box"><box-icon className="icon" name='headphone' color='#ffffff' ></box-icon>Música</div>
                            <div className="deportes box"><box-icon className="icon" name='football' color='#ffffff' ></box-icon>Deportes</div>
                            <div className="fotografia box"><box-icon className="icon" name='camera' type='solid' color='#ffffff' ></box-icon>Fotografía</div>
                            <div className="viajar box"><box-icon className="icon" name='plane-alt' type='solid' color='#ffffff' ></box-icon>Viajar</div>
                            <div className="juegos box"><box-icon className="icon" name='joystick' type='solid' color='#ffffff' ></box-icon>Juegos</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SobreMi