import React from 'react'
import { Link } from 'react-router-dom'
import '../componentes/estilos/tarea5.css'

const idpaciente = RegExp(/^[0-9]+$/);
const nombre = RegExp(/^[A-Za-záéíóú ]+$/);
const apellidop = RegExp(/^[A-Za-záéíóúñ ]+$/);
const apellidom = RegExp(/^[A-Za-záéíóúñ ]+$/);
const direccion = RegExp(/^[A-Z0-9a-záéíóú ]+$/);
const alergias = RegExp(/^[A-Z0-9a-záéíóú ]+$/);

const curp = RegExp(/^[A-Z]{4}[0-9]{6}[HM]{1}[A-Z]{5}[A-Z0-9]{2}$/);
const telefono = RegExp(/^[0-9]{10}$/);
const edad = RegExp(/^[0-9]{2}$/);
const fechanac = RegExp(/^[0-9]{2}[/]{1}[0-9]{2}[/]{1}[0-9]{4}$/);
const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

const formValid=({errores,...rest}) =>{
    let valid = true;
        Object.values(errores).forEach(val=>{val.length>0 && (valid=false);
    })

    Object.values(rest).forEach(val=>{val===null && (valid=false);
    })

    return valid;
}

class Crudalta extends React.Component{
    state={
        idpaciente:null,
        curp:null,
        nombre:null,
        apellidop:null,
        apellidom:null,
        direccion:null,
        fechanac:null,
        telefono:null,
        edad:null,
        foto:null,
        alergias:null,
        correo:null,
        idmun:null,
        sexo:null,
        idtipossan:null,
        idenfermedad:null,
        municipios:[],
        enfermedades:[],
        sangres:[],
        statusform:null,
        
            errores:{
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

            }
    }

    


    campoChange = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleChange=e=>{
        const{name,value} = e.target
        let errores={...this.state.errores}
        switch(name){
            case "idpaciente":
                errores.idpaciente = idpaciente.test(value)
                                ? ""
                                : "Solo se aceptan numeros";
            break;
            case "curp":
                errores.curp = curp.test(value)
                                ? ""
                                : "Solo se aceptan mayusculas y numeros";
            break;
            case "nombre":
                errores.nombre = nombre.test(value)
                                ? ""
                                : "Solo se aceptan letras y espacios";
            break;
            case "apellidop":
                errores.apellidop = apellidop.test(value)
                                ? ""
                                : "Solo se aceptan letras y espacios";
            break;
            case "apellidom":
                errores.apellidom = apellidom.test(value)
                                ? ""
                                : "Solo se aceptan letras y espacios";
            break;
            case "edad":
                errores.edad = edad.test(value)
                                ? ""
                                : "Solo se aceptan numeros";
            break;

            case "direccion":
                errores.direccion = direccion.test(value)
                                ? ""
                                : "Solo se aceptan letras y espacios";
            break;
            case "fechanac":
                errores.fechanac = fechanac.test(value)
                                ? ""
                                : "Solo se aceptan numeros y guiones";
            break;
            case "telefono":
                errores.telefono = telefono.test(value)
                                ? ""
                                : "Solo se aceptan numeros";
            break;
            case "correo":
                errores.correo = emailRegex.test(value)
                                ? ""
                                : "No es un correo valido";
            break;
            case "estado":
                errores.estado = value===""
                                ? "Debe seleccionar un valor"
                                :"";
            break;
            case "tiposangre":
                errores.tiposangre = value===""
                                ? "Debe seleccionar un valor"
                                :"";
            break;  
            case "sexo":
                errores.sexo = value===""
                                ? "Debe seleccionar un valor del sexo"
                                :"";
            break;  
            case "alergias":
                errores.alergias = value.length <3 && value.length>0 && alergias.test(value)
                                ? "Se requieren 3 caracteres"
                                : "";
            break;
            default:
            break;
        }
        this.setState({errores,[name]:value})
    }


    componentDidMount(){
        fetch('http://127.0.0.1:8000/api/cargamunicipios')
            .then(response => response.json())
            .then(municipiosJson => this.setState({municipios:municipiosJson}))

        fetch('http://127.0.0.1:8000/api/cargaenfermedades')
            .then(response => response.json())
            .then(enfermedadesJson => this.setState({enfermedades:enfermedadesJson}))

        fetch('http://127.0.0.1:8000/api/cargasangres')
            .then(response => response.json())
            .then(sangresJson => this.setState({sangres:sangresJson}))
    }

    subForm=(e)=>{
        e.preventDefault();
        if(formValid(this.state))
        {
        let data={
            idpaciente:this.state.idpaciente,
            curp:this.state.curp,
            nombre:this.state.nombre,
            apellidop:this.state.apellidop,
            apellidom:this.state.apellidom,
            direccion:this.state.direccion,
            fechanac:this.state.fechanac,
            telefono:this.state.telefono,
            edad:this.state.edad,
            foto:this.state.foto,
            alergias:this.state.alergias,
            correo:this.state.correo,
            idmun:this.state.idmun,
            idtipossan:this.state.idtipossan,
            idenfermedad:this.state.idenfermedad,
            sexo:this.state.sexo,
        };
        fetch('http://127.0.0.1:8000/api/altapaciente',{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type':'application/json',
            },
            mode:"cors",
            body:JSON.stringify(data)
        })
            .then(response=>response.json())
            .then(response=> this.setState({statusform:"Formulario Valido"}))
    }else{
        this.setState({statusform:"Favor de corregir la información del formulario"})
    }
        
    }

    campoChange = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render(){
        const {municipios,enfermedades,sangres,errores}=this.state
        return(
            <div>
                <div id="padre5">
                    <div id="hijo5" class="mb-3">
                        <form onSubmit={this.subForm}>
                            <table border="1" >
                                <thead>
                                    <tr>
                                        <td colSpan="2">
                                            <h1>ALTA PACIENTES</h1>
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td id='campo'>ID:<span>*</span></td>
                                        <td id='campos'>
                                            <input type="text" className={errores.idpaciente.length>0 ?"error":null}
                                            onKeyUp={this.handleChange}
                                            className="form-control" name="idpaciente" id="idpaciente" />
                                            {errores.idpaciente.length>0 &&(<span className="errorMessage">{errores.idpaciente}</span>)}
                                        </td>
                                    </tr>

                                    <tr>
                                        <td id='campo'>CURP:<span>*</span></td>
                                        <td id='campos'>
                                            <input type="text" className={errores.curp.length>0 ?"error":null}
                                            onKeyUp={this.handleChange}className="form-control" name="curp" id="curp" />
                                            {errores.curp.length>0 &&(<span className="errorMessage">{errores.curp}</span>)}
                                        </td>
                                    </tr>

                                    <tr>
                                        <td id='campo'>Nombre:<span>*</span></td>
                                        <td id='campos'>
                                            <input type="text" className={errores.nombre.length>0 ?"error":null}
                                            onKeyUp={this.handleChange}className="form-control" name="nombre" id="nombre" />
                                            {errores.nombre.length>0 &&(<span className="errorMessage">{errores.nombre}</span>)}
                                        </td>
                                    </tr>

                                    <tr>
                                        <td id='campo'>Apellido paterno:<span>*</span></td>
                                        <td id='campos'>
                                            <input type="text" className={errores.apellidop.length>0 ?"error":null}
                                            onKeyUp={this.handleChange}className="form-control" name="apellidop" id="apellidop" />
                                            {errores.apellidop.length>0 &&(<span className="errorMessage">{errores.apellidop}</span>)}
                                        </td>
                                    </tr>

                                    <tr>
                                        <td id='campo'>Apellido materno:<span>*</span></td>
                                        <td id='campos'>
                                            <input type="text" className={errores.apellidom.length>0 ?"error":null}
                                            onKeyUp={this.handleChange}className="form-control" name="apellidom" id="apellidom" />
                                            {errores.apellidom.length>0 &&(<span className="errorMessage">{errores.apellidom}</span>)}
                                        </td>
                                    </tr>

                                    <tr>
                                        <td id='campo'>Dirección:<span>*</span></td>
                                        <td id='campos'>
                                            <input type="text" className={errores.direccion.length>0 ?"error":null}
                                            onKeyUp={this.handleChange}className="form-control" name="direccion" id="direccion" />
                                            {errores.direccion.length>0 &&(<span className="errorMessage">{errores.direccion}</span>)}
                                        </td>
                                    </tr>

                                    <tr>
                                        <td id='campo'>Fecha de nacimiento:<span>*</span></td>
                                        <td id='campos'>
                                            <input type="text" className={errores.fechanac.length>0 ?"error":null}
                                            onKeyUp={this.handleChange}className="form-control" name="fechanac" id="fechanac" />
                                            {errores.fechanac.length>0 &&(<span className="errorMessage">{errores.fechanac}</span>)}
                                        </td>
                                    </tr>

                                    <tr>
                                        <td id='campo'>Telefono:<span>*</span></td>
                                        <td id='campos'>
                                            <input type="text" className={errores.telefono.length>0 ?"error":null}
                                            onKeyUp={this.handleChange}className="form-control" name="telefono" id="telefono" />
                                            {errores.telefono.length>0 &&(<span className="errorMessage">{errores.telefono}</span>)}
                                        </td>
                                    </tr>

                                    <tr>
                                        <td id='campo'>Edad:<span>*</span></td>
                                        <td id='campos'>
                                            <input type="text" className={errores.edad.length>0 ?"error":null}
                                            onKeyUp={this.handleChange}className="form-control" name="edad" id="edad" />
                                            {errores.edad.length>0 &&(<span className="errorMessage">{errores.edad}</span>)}
                                        </td>
                                    </tr>

                                    <tr>
                                        <td id='campo'>Foto:<span>*</span></td>
                                        <td id='campos'>
                                            <input type="text" className={errores.foto.length>0 ?"error":null}
                                            onKeyUp={this.handleChange} className="form-control" name="foto" />
                                            {errores.foto.length>0 &&(<span className="errorMessage">{errores.foto}</span>)}
                                        </td>
                                    </tr>

                                    <tr>
                                        <td id='campo'>Alergias:<span>*</span></td>
                                        <td id='campos'>
                                            <input type="text" className={errores.alergias.length>0 ?"error":null}
                                            onKeyUp={this.handleChange}className="form-control" name="alergias" id="alergias" />
                                            {errores.alergias.length>0 &&(<span className="errorMessage">{errores.alergias}</span>)}
                                        </td>
                                    </tr>

                                    <tr>
                                        <td id='campo'>Correo:<span>*</span></td>
                                        <td id='campos'>
                                            <input type="text" className={errores.correo.length>0 ?"error":null}
                                            onKeyUp={this.handleChange}className="form-control" name="correo" id="correo" />
                                            {errores.correo.length>0 &&(<span className="errorMessage">{errores.correo}</span>)}
                                        </td>
                                    </tr>

                                    <tr>
                                        <td id='campo'>Municipio:<span>*</span></td>
                                        <td id='campos'>
                                            <select name='idmun' className="form-control" onChange={this.handleChange}>
                                                {municipios.map((municipios,i) =>
                                                <option selected="selected" className="txtselect" value={municipios.idmun} key={i}>{municipios.nombre}</option>
                                                )}
                                            </select>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td id='campo'>Tipo sangre:<span>*</span></td>
                                        <td id='campos'>
                                            <select name='idtipossan' className="form-control" onChange={this.handleChange}>
                                                {sangres.map((sangres,i) =>
                                                    <option selected="selected" className="txtselect" value={sangres.idtipossan} key={i}>{sangres.tipo}</option>
                                                )}
                                            </select>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td id='campo'>Enfermedad:<span>*</span></td>
                                        <td id='campos'>
                                            <select name='idenfermedad' className="form-control" onChange={this.handleChange}>
                                                {enfermedades.map((enfermedades,i) =>
                                                    <option selected="selected" className="txtselect" value={enfermedades.idenfermedad} key={i}>{enfermedades.enfermedad}</option>
                                                )}
                                            </select>
                                        </td>
                                    </tr>

                                    <tr>
                                    <td id='campo'>Sexo:</td>
                                    <td id='campos'>
                                            <input type="radio" id="default" className={errores.sexo.length>0 ?"error":null}
                                            onChange={this.handleChange} defaultChecked
                                            name="sexo" value='' /> Sin especificar
                                            <input type="radio" className={errores.sexo.length>0 ?"error":null}
                                            onChange={this.handleChange}
                                            name="sexo" value='M' />Masculino
                                            <input type="radio" className={errores.sexo.length>0 ?"error":null}
                                            onChange={this.handleChange}
                                            name="sexo" value='F' />Femenino <br />                                
                                        {errores.sexo.length>0 &&(
                                                <span className="errorMessage">{errores.sexo}</span>
                                            )}
                                    </td>
                                </tr>

                                    <tr>
                                        <td colSpan='2'>
                                            <input type='submit' className="btn btn-info" value='Guardar' />
                                        </td>
                                    </tr>
                                    <tr>
                                    <td colSpan="2">
                                        <h1>
                                            <p>
                                                <span className="errorMessage">
                                                    {this.state.statusform}
                                                </span>
                                            </p>
                                        </h1>
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
        )
}
}
export default Crudalta