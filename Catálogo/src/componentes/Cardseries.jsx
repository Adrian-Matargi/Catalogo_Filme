import estilo from './Cardseries.module.css';

export function Cardseries({ serie, onOpenModal }){
    return(
        <div className={estilo.container}>
            <h3>{serie.name}</h3>
            <img src={`http://image.tmdb.org/t/p/w500/${serie.poster_path}`}onClick={()=>onOpenModal(serie)}/>
            <p>{serie.overview}</p>
        </div>
    );
}