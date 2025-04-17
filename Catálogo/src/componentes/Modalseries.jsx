import estilos from './Modalseries.module.css';

export function Modalseries({ serie, onClose }){
    if(!serie){
        return null;
    }
    console.log(serie);

    return(
        <div className={estilos.modalback}>
            <div className={estilos.modalConteiner}>
                <div className={estilos.ModalHeader}>
                    <button onClick={onClose}>x</button>
                    <h2>{serie.name}</h2>
                    <img className={estilos.imgModal} src={`http://image.tmdb.org/t/p/w500/${serie.poster_path}`}></img>
                    <div className={estilos.serieDetails}>
                        <ul>
                            <li>{`Popularidade: ${serie.popularity}`}</li>
                            <li>{`Data de Lançamento: ${serie.first_air_date}`}</li>
                            <li>{`Quantidade de Votos: ${serie.vote_count}`}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )

}