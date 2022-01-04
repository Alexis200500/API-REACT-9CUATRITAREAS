import React from 'react'
import './estilos/estilos.css'

class Fichatarea3 extends React.Component{
    render(){
        const{actor,personaje,foto,colorfondo,tipomen,colorinfo} = this.props
        return(
           
        <div className="hijo" style={{backgroundColor: `${colorfondo}`}}>
            <div id="imagen">
                <img src={foto} alt="img" />
            </div>        
            <div id="informacion">
                <div style={{backgroundColor: `${colorinfo}` }}>Actor: {actor}</div>
                <div style={{backgroundColor: `${colorinfo}` }}>Personaje: {personaje}</div>
            </div>
            <div id="detalle">
                <button type="button" className={tipomen}>Ver detalles</button>
            </div>         
        </div>  
  
        )
    }

}

export default Fichatarea3