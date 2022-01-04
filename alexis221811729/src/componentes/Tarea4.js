import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Noexiste from '../pages/Noexiste'
import Reportetarea3 from '../pages/Reportetarea3'
import Quiensoy from '../componentes/Quiensoy'
import Inicio from '../componentes/Inicio'
import Miformulario from '../pages/Miformulario'
import Formulario from '../pages/Formulario'
import Crudpacientes from '../pages/Crudpacientes'
import Cruddetalle from '../pages/Cruddetalle'
import Crudelimina from '../pages/Crudelimina'
import Crudalta from '../pages/Crudalta'
import Crudactualiza from '../pages/Crudactualiza'

function Tarea4(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/Quiensoy" component={Quiensoy} />
                <Route exact path="/Reportetarea3" component={Reportetarea3} />
                <Route exact path="/Inicio" component={Inicio} />
                <Route exact path="/Miformulario" component={Miformulario} />
                <Route exact path="/Formulario" component={Formulario} />
                <Route exact path="/Crudpacientes" component={Crudpacientes} />
                <Route exact path="/Cruddetalle" component={Cruddetalle} />
                <Route exact path="/Crudelimina" component={Crudelimina} />
                <Route exact path="/Crudalta" component={Crudalta} />
                <Route exact path="/Crudactualiza" component={Crudactualiza} />
                <Route component={Noexiste} />
            </Switch>
        </BrowserRouter>


        
    )
}

export default Tarea4