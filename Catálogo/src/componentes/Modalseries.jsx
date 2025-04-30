import estilos from './Modalseries.module.css';

export function Modalseries({ serie, onClose }) {
    if (!serie) return null;

    return (
        <div className={estilos.modalback} onClick={onClose}>
            <div className={estilos.modalConteiner} onClick={(e) => e.stopPropagation()}>
                <button className={estilos.closeButton} onClick={onClose}>×</button>
                <div className={estilos.modalContent}>
                    <img className={estilos.imgModal} src={`http://image.tmdb.org/t/p/w500/${serie.poster_path}`} alt={serie.name} />
                    <div className={estilos.movieDetails}>
                        <h2>{serie.name}</h2>
                        <p>{serie.overview}</p>
                        <ul>
                            <li><strong>Popularidade:</strong> {serie.popularity}</li>
                            <li><strong>Data de Lançamento:</strong> {serie.first_air_date}</li>
                            <li><strong>Quantidade de Votos:</strong> {serie.vote_count}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
