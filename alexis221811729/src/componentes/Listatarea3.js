import React from 'react'
import Fichatarea3 from './Fichatarea3'

function Listatarea3(props){
    return(
       <div> 
        {props.detalle.map((reporte) =>{
            return(
        <Fichatarea3
         actor= {reporte.actor}
         personaje= {reporte.personaje}
        //  escribe= "Escribe tu nombre"
         foto= {reporte.foto} 
         colorfondo= {reporte.colorfondo}
         colorinfo= {reporte.colorinfo}
         tipomen="alert alert-danger "/>
         )})}
        </div>
          
    )
}

export default Listatarea3