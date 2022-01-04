import React from 'react'
import {Link} from 'react-router-dom'
import Detalle from '../componentes/Detalle'
import '../componentes/estilos/tarea5.css'

class Cruddetalle extends React.Component{
    state={
        pacientes:[]
    }

    componentDidMount(){
        fetch('http://127.0.0.1:8000/api/buscarpaciente/'+this.props.location.state.idpaciente)
        .then(response => response.json())
        .then(pacientesJson => this.setState({pacientes:pacientesJson}))
    }

    render(){
        const {pacientes}=this.state
        return(
            <div className="padre5" id="padre5">
                <div id="hijo5">

               
                <div><Detalle /></div> <br />
                <img src ={pacientes.foto} alt='img' className="img-thumbnail" id="paciente"/>
                <br /> <br/>
                <div id="detallepaciente">
                    <b>
                Nombre: {pacientes.nombre} {pacientes.apellidop} {pacientes.apellidom} <br />
                Genero: {pacientes.sexoo==='F'?'Femenino':'Masculino'} <br />
                Edad: {pacientes.edad}<br/>
                Curp: {pacientes.curp} <br />
                Fecha de nacimiento: {pacientes.fechanac} <br />
                Tipo de sangre: {pacientes.sangre} <br />
                Municipio: {pacientes.municipio} <br />
                Dirección: {pacientes.direccion} <br />
                Enfermedad: {pacientes.enfermedad} <br />
                Telefono: {pacientes.telefono} <br />
                Alergias: {pacientes.alergias} <br />
                Correo: {pacientes.correo} <br />
                </b>
                </div>
                <div>
                    <Link to ="/Crudpacientes">
                        <button type="button" className="btn btn-secondary">
                            Volver
                        </button>
                    </Link>
                </div>
                </div>
            </div>
                
        )
    }
}

export default Cruddetalle