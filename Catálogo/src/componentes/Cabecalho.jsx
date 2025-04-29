import estilos from './Cabecalho.module.css'
//estrutura basica para os componentes
export function Cabecalho(){
    return(
        <header className={estilos.conteiner}>
            <img src="../src/assets/banner.png" alt="banner" />
        </header>
    )

}