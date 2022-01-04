import React from 'react'
import { Link } from 'react-router-dom'

class Crudactualiza extends React.Component{
    state={
        pacientes:{
            idpaciente:'',
            curp:'',
            nombre:'',
            apellidop:'',
            apellidom:'',
            direccion:'',
            fechanac:'',
            telefono:'',
            edad:'',
            foto:'',
            alergias:'',
            correo:'',
            sexo:'',
            idmun:'',
            idtipossan:'',
            idenfermedad:'',
            resultado:''
        },
        isFetch:true,
        municipios:[],
        enfermedades:[],
        sangres:[],
        resultado:'',
    }

    handleChange = async e=>{
        e.persist();
        await this.setState({
            pacientes:{
                ...this.state.pacientes,
                [e.target.name]:e.target.value
            }
        });
    }

    async componentDidMount(){

        fetch('http://127.0.0.1:8000/api/buscarpaciente/'+this.props.location.state.idpaciente)
            .then(response=>response.json())
            .then(pacientesJson => this.setState({pacientes:pacientesJson, isFetch:false}))

        fetch('http://127.0.0.1:8000/api/cargamunicipios')
            .then(response => response.json())
            .then(municipiosJson => this.setState({municipios:municipiosJson, isFetch:false}))

            fetch('http://127.0.0.1:8000/api/cargaenfermedades')
            .then(response => response.json())
            .then(enfermedadesJson => this.setState({enfermedades:enfermedadesJson, isFetch:false}))

        fetch('http://127.0.0.1:8000/api/cargasangres')
            .then(response => response.json())
            .then(sangresJson => this.setState({sangres:sangresJson, isFetch:false}))

    }

    subForm=(e)=>{
        e.preventDefault();
        let data={
            idpaciente:this.state.pacientes.idpaciente,
            curp:this.state.pacientes.curp,
            nombre:this.state.pacientes.nombre,
            apellidop:this.state.pacientes.apellidop,
            apellidom:this.state.pacientes.apellidom,
            direccion:this.state.pacientes.direccion,
            fechanac:this.state.pacientes.fechanac,
            telefono:this.state.pacientes.telefono,
            edad:this.state.pacientes.edad,
            foto:this.state.pacientes.foto,
            alergias:this.state.pacientes.alergias,
            correo:this.state.pacientes.correo,
            idmun:this.state.pacientes.idmun,
            idtipossan:this.state.pacientes.idtipossan,
            idenfermedad:this.state.pacientes.idenfermedad,
            sexo:this.state.pacientes.sexo,
        };
        fetch('http://127.0.0.1:8000/api/modificapaciente',{
          method:'PUT',
          headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
          },
          mode:"cors",
          body:JSON.stringify(data)
        })
        .then(response=>response.json())
        .then(response=>this.setState({resultado:"Paciente modificado exitosamente"}))
      }

    render(){
        const {isFetch,municipios,pacientes,enfermedades,sangres,errores}=this.state
        if(isFetch){
            return("No se pudo conectar a la API")
        }
        return(
            <center>
                <div>
                <div id="padre5">
                    <div id="hijo5" className="mb-3">
                        <form onSubmit={this.subForm}>
                            <table border="1" >
                                <thead>
                                    <tr>
                                        <td colSpan="2">
                                            <h1>ACTUALIZA PACIENTES</h1>
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td id='campo'>ID:<span>*</span></td>
                                        <td id='campos'>
                                            <input type="text"
                                            onKeyUp={this.handleChange} value={pacientes.idpaciente} readOnly="readonly"
                                            className="form-control" name="idpaciente" id="idpaciente" />

                                        </td>
                                    </tr>

                                    <tr>
                                    <td id='campo'>Nombre:<span>*</span></td>
                                    <td id='campos'>
                                        <input type="text" value={pacientes.nombre}
                                        onChange={this.handleChange}
                                        className="form-control" name="nombre" id="nombre"/>
                                    </td>
                                </tr>

                                <tr>
                                        <td id='campo'>Apellido paterno:<span>*</span></td>
                                        <td id='campos'>
                                            <input type="text" value={pacientes.apellidop}
                                            onChange={this.handleChange}className="form-control" name="apellidop" id="apellidop" />

                                        </td>
                                    </tr>

                                    <tr>
                                        <td id='campo'>Apellido materno:<span>*</span></td>
                                        <td id='campos'>
                                            <input type="text" value={pacientes.apellidom}
                                            onChange={this.handleChange}className="form-control" name="apellidom" id="apellidom" />
                                        </td>
                                    </tr>

                                    <tr>
                                        <td id='campo'>Dirección:<span>*</span></td>
                                        <td id='campos'>
                                            <input type="text" value={pacientes.direccion}
                                            onChange={this.handleChange}className="form-control" name="direccion" id="direccion" />

                                        </td>
                                    </tr>

                                    <tr>
                                        <td id='campo'>Fecha de nacimiento:<span>*</span></td>
                                        <td id='campos'>
                                            <input type="text" value={pacientes.fechanac}
                                            onChange={this.handleChange}className="form-control" name="fechanac" id="fechanac" />

                                        </td>
                                    </tr>

                                    <tr>
                                        <td id='campo'>Telefono:<span>*</span></td>
                                        <td id='campos'>
                                            <input type="text" value={pacientes.telefono}
                                            onChange={this.handleChange}className="form-control" name="telefono" id="telefono" />

                                        </td>
                                    </tr>

                                    <tr>
                                        <td id='campo'>Edad:<span>*</span></td>
                                        <td id='campos'>
                                            <input type="text" value={pacientes.edad}
                                            onChange={this.handleChange}className="form-control" name="edad" id="edad" />

                                        </td>
                                    </tr>

                                    <tr>
                                        <td id='campo'>Foto:<span>*</span></td>
                                        <td id='campos'>
                                        <img src={pacientes.foto} width='100' height='100' alt='img' /><br />
                                            <input type="text" value={pacientes.foto}
                                            onChange={this.handleChange} className="form-control" name="foto" />

                                        </td>
                                    </tr>

                                    <tr>
                                        <td id='campo'>Alergias:<span>*</span></td>
                                        <td id='campos'>
                                            <input type="text" value={pacientes.alergias}
                                            onChange={this.handleChange}className="form-control" name="alergias" id="alergias" />

                                        </td>
                                    </tr>

                                    <tr>
                                        <td id='campo'>Correo:<span>*</span></td>
                                        <td id='campos'>
                                            <input type="text" value={pacientes.correo}
                                            onChange={this.handleChange}className="form-control" name="correo" id="correo" />

                                        </td>
                                    </tr>

                                    <tr>
                                        <td id='campo'>Municipio:<span>*</span></td>
                                        <td id='campos'>
                                            <select name='idmun' className="form-control" onChange={this.handleChange}>
                                                <option selected="selected" className="txtselect" value={pacientes.idmun}>{pacientes.municipio}</option>
                                                {municipios.map((municipios,i) =>
                                                    <option value={municipios.idmun} key={i}>{municipios.nombre}</option>
                                                )}
                                            </select>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td id='campo'>Tipo sangre:<span>*</span></td>
                                        <td id='campos'>
                                            <select name='idtipossan' className="form-control" onChange={this.handleChange}>
                                                <option selected="selected" className="txtselect" value={pacientes.idtipossan}>{pacientes.sangre}</option>
                                                {sangres.map((sangres,i) =>
                                                    <option value={sangres.idtipossan} key={i}>{sangres.tipo}</option>
                                                )}
                                            </select>

                                        </td>
                                    </tr>

                                    <tr>
                                        <td id='campo'>Enfermedad:<span>*</span></td>
                                        <td id='campos'>
                                            <select name='idenfermedad' className="form-control" onChange={this.handleChange}>
                                                <option selected="selected" className="txtselect" value={pacientes.idenfermedad}>{pacientes.enfermedad}</option>
                                            </select>
                                        </td>
                                    </tr>


                                    <tr>
                                        <td colSpan='2'>
                                            <input type='submit' className="btn btn-info" value='Guardar' />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2">
                                        {this.state.resultado
                        ? <div className="alert alert-success">{this.state.resultado}</div>
                        : <div></div>
                    }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2">
                                        <Link to ="/Crudpacientes">
                        <button type="button" className="btn btn-secondary">
                            Volver
                        </button>
                    </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </form>
                    </div>
                </div>
            </div>
            </center>
        )
    }

}

export default Crudactualiza
