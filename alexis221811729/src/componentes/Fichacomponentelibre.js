import React from 'react'
import './estilos/estilos.css'
import 'bootstrap/dist/css/bootstrap.css'
import yo from '../fotos/yo.jpg'


class Fichacomponentelibre extends React.Component{
    render(){
        return (
            <div className="fondo">
                <div className="titulo">
                 <h1>UTVT</h1>
                </div>
                <div className="div4">
                    Nombre: <input type="text" class="form-control"/> <br/> <br/>
                    Apellido: <input type="text" class="form-control" /> <br/> <br/>
                <button type="button" class="btn btn-success">Guardar datos </button>
                </div>
                <div className="imagen">
            <img src={yo}  alt="hola" /> <br/>    <br/>
            <button class="alert alert-info">Bienvenido a la UTVT  !!! </button>
        </div>
            </div>            
        )
    }
}

export default Fichacomponentelibre