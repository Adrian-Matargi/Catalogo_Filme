import estilos from './Cabecalho.module.css'
//estrutura basica para os componentes
export function Cabecalho(){
    return(
        <header className={estilos.conteiner}>
            <h1>Adiflix</h1>
            <img src="../src/assets/banner.png" alt="banner" />
        </header>
    )

}