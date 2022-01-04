import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
// import Aplicacion from './componentes/Aplicacion'
import Tarea4 from './componentes/Tarea4'


const elementos=(<div>
                    
                    <div>
                        <Tarea4/>
                    </div>
                </div>
                )

const container = document.getElementById('root')

ReactDOM.render(elementos, container)