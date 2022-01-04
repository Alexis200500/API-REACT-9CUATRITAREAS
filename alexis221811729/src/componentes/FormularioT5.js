import React,{ Component } from 'react'
import './estilos/tarea5.css'

const nombre = RegExp(/^[A-Za-záéíóú ]+$/);
const apellidop = RegExp(/^[A-Za-záéíóú ]+$/);
const apellidom = RegExp(/^[A-Za-záéíóú ]+$/);
const direccion = RegExp(/^[A-Z0-9a-záéíóú ]+$/);
const alergias = RegExp(/^[A-Z0-9a-záéíóú ]+$/);

const curp = RegExp(/^[A-Z]{4}[0-9]{6}[HM]{1}[A-Z]{5}[A-Z0-9]{2}$/);
const telefono = RegExp(/^[0-9]{10}$/);
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

class FormularioT5 extends Component{

    state={
        curp:null,
        nombre:null,
        appaterno:null,
        apmaterno:null,
        direccion:null,
        fechanac:null,
        telefono:null,
        correo:null,
        estado:null,
        tiposangre:null,
        sexo:null,
        alergias:null,
        statusform:null,
            errores:{
                curp:"",
                nombre:"",
                appaterno:"",
                apmaterno:"",
                direccion:"",
                fechanac:"",
                telefono:"",
                correo:"",
                estado:"",
                tiposangre:"",
                sexo:"",
                alergias:""
            }
    }

    handleChange=e=>{
        const{name,value} = e.target
        let errores={...this.state.errores}
        switch(name){
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
            case "appaterno":
                errores.appaterno = apellidop.test(value)
                                ? ""
                                : "Solo se aceptan letras y espacios";
            break;
            case "apmaterno":
                errores.apmaterno = apellidom.test(value)
                                ? ""
                                : "Solo se aceptan letras y espacios";
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
    
    handleSubmit=e=>{
        e.preventDefault();
        if(formValid(this.state))
        {
            console.log(`
                Listo para la aplicación 
                Nombre: ${this.state.nombre}
                Apellido: ${this.state.appaterno} ${this.state.apmaterno} 
                Correo: ${this.state.correo}
                `)
            this.setState({statusform:"Formulario Valido"})
        }
        else{
            this.setState({statusform:"Favor de corregir la información del formulario"})
        }
    }


    render(){
        const{errores}=this.state
        return(
            <div>                
                <div id="padre5">
                    <div id="hijo5" class="mb-3">
                            <form onSubmit={this.handleSubmit}>
                        <table border="1" > 
                            <thead>
                                <tr>
                                    <td colspan="2">
                                        <h1>
                                            ALTA PACIENTES
                                        </h1>
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td id='campo'>CURP:<span>*</span> </td>
                                    <td id='campos'>
                                        <input type="text"
                                        className={errores.curp.length>0 ?"error":null}
                                        onKeyUp={this.handleChange}
                                        className="form-control" name="curp" id="curp" />  
                                            {errores.curp.length>0 &&(
                                                <span className="errorMessage">{errores.curp}</span>
                                            )}
                                    </td>
                                        
                                </tr>
                                <tr>
                                    <td id='campo'>Nombre:<span>*</span></td>
                                    <td id='campos'>
                                        <input type="text"
                                        className={errores.nombre.length>0 ?"error":null}
                                        onKeyUp={this.handleChange}
                                        className="form-control" name="nombre" id="nombre"/>
                                        {errores.nombre.length>0 &&(
                                                <span className="errorMessage">{errores.nombre}</span>
                                            )}
                                    </td>
                                </tr>
                                <tr>
                                    <td id='campo'>Apellido paterno: <span>*</span></td>
                                        <td id='campos'>
                                            <input type="text"
                                            className={errores.appaterno.length>0 ?"error":null}
                                            onKeyUp={this.handleChange}                                            
                                            className="form-control" name="appaterno" id="appaterno" />
                                            {errores.appaterno.length>0 &&(
                                                <span className="errorMessage">{errores.appaterno}</span>
                                            )}
                                    </td>
                                </tr>
                                <tr>
                                    <td id='campo'>Apellido materno:<span>*</span></td>
                                    <td id='campos'>
                                        <input type="text" 
                                        
                                        className={errores.apmaterno.length>0 ?"error":null}
                                        onKeyUp={this.handleChange}

                                        className="form-control" name="apmaterno" id="apmaterno" />
                                        {errores.apmaterno.length>0 &&(
                                                <span className="errorMessage">{errores.apmaterno}</span>
                                            )}
                                    </td>
                                </tr>
                                <tr>
                                    <td id='campo'>Dirección:<span>*</span></td>
                                        <td id='campos'>
                                            <input type="text" 
                                            
                                            className={errores.direccion.length>0 ?"error":null}
                                            onKeyUp={this.handleChange}

                                            className="form-control" name="direccion" id="direccion" />
                                            {errores.direccion.length>0 &&(
                                                <span className="errorMessage">{errores.direccion}</span>
                                            )}
                                        </td>
                                </tr>
                                <tr>
                                    <td id='campo'>Fecha de nacimiento (D/M/A):<span>*</span> </td>
                                    <td id='campos'>
                                        <input type="text" 
                                        
                                        className={errores.fechanac.length>0 ?"error":null}
                                        onKeyUp={this.handleChange}

                                        className="form-control" name="fechanac" id="fechanac"/> 
                                        {errores.fechanac.length>0 &&(
                                                <span className="errorMessage">{errores.fechanac}</span>
                                            )}
                                    </td>
                                </tr>
                                <tr>
                                    <td id='campo'>Telefono:<span>*</span></td>
                                    <td id='campos'>
                                        <input type="text" 
                                        className={errores.telefono.length>0 ?"error":null}
                                        onKeyUp={this.handleChange}
                                        className="form-control" name="telefono" id="telefono"/> 
                                        {errores.telefono.length>0 &&(
                                                <span className="errorMessage">{errores.telefono}</span>
                                            )}
                                    </td>
                                </tr>
                                <tr>
                                    <td id='campo'>Correo:<span>*</span></td>
                                    <td id='campos'>
                                        <input type="email" 
                                        className={errores.correo.length>0 ?"error":null}
                                        onKeyUp={this.handleChange}
                                        className="form-control" name="correo" id="correo" />
                                        {errores.correo.length>0 &&(
                                                <span className="errorMessage">{errores.correo}</span>
                                            )}
                                    </td>
                                </tr>
                                <tr>
                                    <td id='campo'>Estado:</td>
                                    <td id='campos'>
                                        <select class="form-control" name="estado" id="estado" onClick={this.handleChange}>
                                            <option selected="selected" class="txtselect" value=""> Selecciona una opción</option>
                                            <option class="txtselect" value="1">México</option>
                                            <option class="txtselect" value="2">Morelos</option>
                                            <option class="txtselect" value="3">Jalisco</option>
                                            <option class="txtselect" value="4">Guerrero</option>
                                            <option class="txtselect" value="5">Nuevo León</option>
                                            <option class="txtselect" value="6">Tabasco</option>
                                        </select>
                                        {errores.estado.length>0 &&(
                                                <span className="errorMessage">{errores.estado}</span>
                                            )}
                                    </td>
                                </tr>
                                <tr>
                                    <td id='campo'>Tipo de sangre: </td>
                                    <td id='campos'>
                                        <select class="form-control" name="tiposangre" id="tiposangre" onClick={this.handleChange}>
                                            <option selected="selected" class="txtselect" value=""> Selecciona una opción</option>
                                            <option class="txtselect" value="1">A positivo (A+)</option>
                                            <option class="txtselect" value="2">A negativo (A-)</option>
                                            <option class="txtselect" value="3">B positivo (B+)</option>
                                            <option class="txtselect" value="4">B negativo (B-)</option>
                                            <option class="txtselect" value="5">AB positivo (AB+)</option>
                                            <option class="txtselect" value="6">AB negativo (AB-)</option>
                                            <option class="txtselect" value="7">O positivo (O+)</option>
                                            <option class="txtselect" value="8">O negativo (O-)</option>
                                        </select>
                                        {errores.tiposangre.length>0 &&(
                                                <span className="errorMessage">{errores.tiposangre}</span>
                                            )}
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
                                    <td id='campo'>Alergias:<span>*</span></td>
                                    <td>
                                        <textarea name="alergias" 
                                        className={errores.alergias.length>0 ?"error":null}
                                        onKeyUp={this.handleChange}
                                        id="alergias" cols="40" rows="3"></textarea> <br />
                                        {errores.alergias.length>0 &&(
                                                <span className="errorMessage">{errores.alergias}</span>
                                            )}
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan='2'>
                                        <button type='submit'class="btn btn-success">Crear empleado</button>
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
                            </tbody>
                        </table>
                            </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default FormularioT5