import React from 'react'

import './estilos/estilos.css'

function Quiensoy(){
    return(
        <div id="padre5">
            <div id="titulo">
                ¿Quién soy?
            </div>
            
            <div className="hijo4">
                Nombre: Alexis Morales Gómez <br/>
                Edad: 21 años <br/>
                Fecha de nacimiento: 20-05-2000
            </div>

            <div id="imagen4">
                <img src="fotos/Alex.jpeg" alt="" id="foto" />
            </div> <br /><br />
            
             <br/>
            
            <div id="informacion4">
                Gustos: Estar con la familia y amigos, comer, salir a jugar futbol < br/> y 
                salir a pasear con mis amigos, me gustan mucho los < br/>superheroes en especial 
                spider-man, me gustan armar mucho los cubos de rubik
            </div>

            <div id="informacion4">
                Que me gusta de la UTVT: Estar con mis compañeros, hablar con todos,  <br />
                escuchar a los maestros, comer, jugar en los futbolitos de afuera con los demas
            </div>
            
            <div>
                <a href="inicio" >
                    <input type="submit" className="btn btn-success" value="Regresar"></input>
                </a>
            </div>

        </div>
    )
}

export default Quiensoy