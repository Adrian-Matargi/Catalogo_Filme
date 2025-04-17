import { BarraNavegacao } from "../componentes/BarraNavegacao";
import { Cabecalho } from "../componentes/Cabecalho";
import { Outlet } from "react-router-dom";
import { Rodape } from "../componentes/Rodape";
import { Conteudo } from "../componentes/Conteudo";

export function Inicial(){
    return(
        <>
            <Cabecalho />
            <BarraNavegacao />
            <Conteudo/>
            < Outlet />
        </>
    )
}