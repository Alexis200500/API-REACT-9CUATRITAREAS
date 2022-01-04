import React from 'react'

class Miformulario extends React.Component{

    constructor(){
        super();
        this.state={
            nombre:'',
            apellidos:'',
            precio:0,
            municipio:'',
            status:'',
            marca:'',
            color:'',
            total:0,
            accesorio1:'',
            accesorio2:'',
            accesorio3:'',
            mensaje:''

            

        }
        this.valoresformularios=this.valoresformularios.bind(this);
        this.calculatotal=this.calculatotal.bind(this);
        this.guarda=this.guarda.bind(this);



    }

    valoresformularios=({name,value,checked,type})=>{
        this.setState(()=>{
            return{[name]:type==="checkbox" ? checked:value};
        });
    };   

    calculatotal(e){

        if(this.state.marca==="Xiaomi")
        {
            this.setState({total:parseInt(this.state.precio) - 500 });
        }
        else
        {
            this.setState({total:parseInt(this.state.precio) - 100 });
        }

        switch(this.state.precio){
            case '3000':
            return this.setState({status:'Celular de gama alta'})
            break;
            case '2000':
            return this.setState({status:'Celular de gama media'})
            break;
            case '1000':
            return this.setState({status:'Celular de gama baja'})
            break;
            default:
                return this.setState({status:'Celular de diferente marca'})
        }
        
    }

    guarda(e){

        if(this.state.municipio==="Toluca")
        {
            this.setState({total:parseInt(this.state.precio) - 600 });
        }
        else
        {
            this.setState({total:parseInt(this.state.precio) - 100 });
        }

        switch(this.state.municipio){
            case 'Toluca':
            return this.setState({mensaje:'Has comprado en un buen lugar'})
            break;
            default:
                return this.setState({mensaje:'Compraste en un lugar diferente'})
        }
        
    }

    render(){
        return (
            <div id="padre5">
                <pre>{JSON.stringify(this.state,null,2)}</pre>

                <div>
                    <label >Nombre: </label>
                    <input type="text" name="nombre" className="form-control" placeholder="Escriba su nombre"
                    onKeyUp = {event=>this.valoresformularios(event.target)} />
                </div>

                <div>
                    <label >Apellidos: </label>
                    <input type="text" name="apellidos" className="form-control" placeholder="Escriba sus apellidos"
                    onKeyUp = {event=>this.valoresformularios(event.target)} />
                </div>

             
                <div>
                    Municipio <select name='municipio' className="form-control" onChange = {event=>this.valoresformularios(event.target)}>
                                <option value={'Toluca'}>Toluca</option>
                                <option value={'San Mateo Atenco'}>San Mateo Atenco</option>
                                <option value={'Lerma'}>Lerma</option>
                               </select>                        
                </div>

                <div>
                    Marca <select name='marca' className="form-control" onChange = {event=>this.valoresformularios(event.target)}>
                            <option value={'Xiaomi'}>Xiaomi</option>
                            <option value={'Samsung'}>Samsung</option>
                            <option value={'Sony'}>Sony</option>
                            <option value={'Huawei'}>Huawei</option>
                          </select>                        
                </div>

                <div>
                    <label >Precio: </label>
                    <input type="text" name="precio" className="form-control" placeholder="Precio"
                    onKeyUp = {event=>this.valoresformularios(event.target)} />
                </div>

                <div>
                        Color:  <input type='radio' className="form-check-input" name='color' value={"rojo"} 
                                onChange = {event=>this.valoresformularios(event.target)} /> Rojo
                                <input type='radio' className="form-check-input" name='color' value={"verde"} 
                                onChange = {event=>this.valoresformularios(event.target)} /> Verde
                                <input type='radio' className="form-check-input" name='color' value={"azul"} 
                                onChange = {event=>this.valoresformularios(event.target)} /> azul
                                <input type='radio' className="form-check-input" name='color' value={"negro"} 
                                onChange = {event=>this.valoresformularios(event.target)} /> Negro
                    </div>

                    <div>
                        Acessorio       <input type='checkbox' className="form-check-input" name='accesorio1' value='torreon' 
                                        onChange = {event=>this.valoresformularios(event.target)}  /> Funda
                                        <input type='checkbox' className="form-check-input" name='accesorio2' value='toluca' 
                                        onChange = {event=>this.valoresformularios(event.target)}  /> Cargador 
                                        <input type='checkbox' className="form-check-input" name='accesorio3' value='toluca' 
                                        onChange = {event=>this.valoresformularios(event.target)}  /> Audifonos 
                    </div>

                    <div>
                    <input type="submit" value='calcula' className="btn btn-primary stretched-link" onClick={this.calculatotal} />
                </div>

                <div>
                        Total: <input type="text" className="form-control" name="total" value={this.state.total} />
                    </div>
                <div>
                        <label>Mensaje:</label> 
                        <input type='text' name='men' className="form-control" value={this.state.status} disabled='disable' />
                    </div>
                <div>
                        <label>Mensaje 2:</label> 
                        <input type='text' name='men' className="form-control" value={this.state.mensaje} disabled='disable' />
                    </div>

            
                <div>
                    <input type="submit" value='Guardar' className="btn btn-primary stretched-link" onClick={this.guarda} />
                </div>

            </div>
        )
    }
}

export default Miformulario