import React from 'react'
import Titulo from '../componentes/Titulo'
import Listatarea3 from '../componentes/Listatarea3'

class Reportetarea3 extends React.Component{

    constructor(props){
        super(props)
            this.state={
                datos:[{
                    "actor":"Tom Holland",
                    "personaje":"Peter Parker / Spider-man",
                    "foto":"fotos/4.jpg",
                    "colorfondo":"red",
                    "colorinfo":"blue"
                },
                {
                    "actor":"Charlie Cox",
                    "personaje":" Matt Murdock / Daredevil",
            "foto":"fotos/1.jpg",
            "colorfondo":"green",
            "colorinfo":"black",
                },{
                "actor":"Chris Pratt",
                    "personaje":"Star-Lord",
            "foto":"fotos/2.jpg",
            "colorfondo":"black",
            "colorinfo":"orange",
                },
                {
                    "actor":"Robert Downey Jr",
                        "personaje":"Iron man / Tony Stark",
                "foto":"fotos/3.jpg",
                "colorfondo":"yellow",
                "colorinfo":"red",
                    },
            ]
            }        
    }


    render(){
        return(
        <div>
                    <div><Titulo /></div>
                     <div id="padre">
                        <Listatarea3
                            detalle={this.state.datos}
                        />
                        <div>

                    <a href="inicio" >
                    <input type="submit" className="btn btn-success" value="Regresar"></input>
                </a>
            </div>
                    </div>
                    
                    
                  </div>
    
        )}
    }

export default Reportetarea3