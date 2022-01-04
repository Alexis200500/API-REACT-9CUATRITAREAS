import React from 'react'
import fotologo from '../fotos/logo.jpg'
import fotovendedor from '../fotos/vendedor.jpg'
import './estilos/estilos.css'
import 'bootstrap/dist/css/bootstrap.css'

class Fichacomponentes extends React.Component{
    render(){
        return (<div className="contenido"> 
            <div className="foto">
            <p>
                Contacto: Alexis Morales
            </p>
            <img src={fotovendedor} class="fotito" alt="hola" /> <br />

            <button type="detalles" class="btn btn-success">Detalle de la empresa</button>

        </div>

        <div className="logo">
            <img src={fotologo} className="logococa" alt="hola"/> <br/>
            <p>Nombre empresa: Coca cola<br />
                Teléfono: 7228032683 <br/>
                Estado: México
            </p>
        </div> 

        <div class="informacion">
            <button class="btn btn-warning">Warning: Empresa pendiente de pago</button>
        </div>


        </div>)
    }
}

export default Fichacomponentes