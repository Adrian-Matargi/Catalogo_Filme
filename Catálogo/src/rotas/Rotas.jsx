import {Routes, Route} from "react-router-dom";
import { Inicial } from "../paginas/inicial";
import { Perfil } from "../paginas/Perfil";
import { Series } from "../paginas/Series";
import { Lista } from "../componentes/Lista";
import { Listaseries } from "../componentes/Listaseries";

export function Rotas(){
    return(
        <Routes>
            <Route path = '/' element={<Inicial/>}>
                <Route index element = {<Lista/>}/>
                <Route path ='perfil' element={<Perfil/>}/>
                <Route path='series' element={<Listaseries/>}/>
            </Route>
        </Routes>
    )
}