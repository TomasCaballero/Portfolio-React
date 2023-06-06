
const PaginaCarga = () => {
    return (
        <div className="paginaCarga">
            <div className="textoYSpinner">
                {/* <img src="https://ayudawp.com/wp-content/uploads/2017/07/loading_apple_wordpress.gif" alt="Spinner carga" /> */}
                <h5>Cargando Portfolio</h5>
                <h5 className="animacionPuntos">...</h5>
            </div>
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/edc3ab78364175.5ca3009cb66a0.gif" alt="Imagen de carga" className="imgCarga"/>
        </div>
    )
}

export default PaginaCarga