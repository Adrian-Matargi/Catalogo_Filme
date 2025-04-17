import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Rotas } from "./rotas/Rotas";

//estrutura básica pra usar o React é atraves das funções
function App() {
 //para trazer o resultado da função eu coloco o que quero no return que deve ter apenas 1 componente
  return (
    //para chamar o css dei um apelido de estilos e chamei usando o classname
    //tags fantasmas servem para que eu consiga usar duas tags no mesmo componente
    <BrowserRouter>
      <Rotas/>
    </BrowserRouter>
  );
}

export default App
