import React from 'react'
import { Link } from 'react-router-dom'
import '../componentes/estilos/tarea6.css'
import Titulo from '../componentes/Titulo'

class Crudpacientes extends React.Component{
    state={
        pacientes:[]
    }

    componentDidMount(){
        fetch('http://127.0.0.1:8000/api/cargapacientes')
            .then(response => response.json())
            .then(pacientesJson => this.setState({pacientes:pacientesJson}))
    }

    render(){
        const{pacientes}= this.state
        return(
            <div id="fondo">
                <div>
                    <Titulo />
                </div>
                <div className="alta">
                <Link to ={{pathname:'/Crudalta'}}>
                    <button type="button" className="btn btn-success">
                        Crear paciente
                    </button>
                </Link>
                </div>
                <table className="content-table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Foto</th>
                            <th scope="col">Clave</th>
                            <th scope="col">Nombre completo</th>
                            <th scope="col">Curp</th>
                            <th scope="col">Sexo</th>
                            <th scope="col">Tipo de sangre</th>
                            <th scope="col">Enfermedad</th>
                            <th scope="col">Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pacientes.map((paciente,i)=>
                            <tr key={i}>
                                <th scope="row">{i+1}</th>
                                <td><img src={paciente.foto} className="rounded" height='50'
                            width='50' alt="Foto paciente"/></td>
                            <td>{paciente.idpaciente}</td>
                            <td>{paciente.apellidop} {paciente.apellidom} {paciente.nombre}</td>
                            <td>{paciente.curp}</td>
                            <td>{paciente.sexo==='F'?'Femenino':'Masculino'}</td>
                            <td>{paciente.sangre}</td>
                            <td>{paciente.enfermedad}</td>
                            <td>

                            <Link to ={{pathname:'/Cruddetalle', state:{idpaciente:paciente.idpaciente}}}>
                                    <button type="button" className="btn btn-primary">
                                        Detalle
                                    </button>
                            </Link>

                            <Link to ={{pathname:'/Crudelimina', state:{idpaciente:paciente.idpaciente}}}>
                                <button type="button" className="btn btn-danger">
                                    Elimina
                                </button>
                            </Link>

                            <Link to ={{pathname:'/Crudactualiza', state:{idpaciente:paciente.idpaciente}}}>
                                    <button type="button" className="btn btn-dark">
                                        Modifica
                                    </button>
                                </Link>
                            
                            </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Crudpacientes