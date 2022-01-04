import React from 'react'
import {Link} from 'react-router-dom'

class Crudelimina extends React.Component{
    state={
        pacientes:[]
    }

    componentDidMount(){
        fetch('http://127.0.0.1:8000/api/buscarpaciente/'+this.props.location.state.idpaciente)
            .then(response=>response.json())
            .then(pacientesJson => this.setState({pacientes:pacientesJson}))

            fetch('http://127.0.0.1:8000/api/eliminarpaciente/'+this.props.location.state.idpaciente,
            {method:'delete'})
    } 
    render(){
        return(
            <div id="padre5">
                <br /><br /><br /><br />
            <div className="alert alert-success" id="hijo6" >

            <div id="hijo7">

                <strong>Sucess !!</strong> El paciente <b>
                {this.state.pacientes.nombre} {this.state.pacientes.apellidop} {this.state.pacientes.apellidom} </b><br />
                Con clave del paciente <b>{this.state.pacientes.idpaciente}</b> y curp <b>{this.state.pacientes.curp}</b> ha sido <br />
                eliminado correctamente !
                <br />
                <br/>

                    <Link to ="/Crudpacientes">
                        <button type="button" className="btn btn-secondary">
                            Volver
                        </button>
                    </Link>
            </div>
            </div>
                <br /><br /><br />
            </div>
        )
    }
}

export default Crudelimina