import estilos from './Modal.module.css';

export function Modal({ movie, onClose }) {
    if (!movie) return null;

    return (
        <div className={estilos.modalback} onClick={onClose}>
            <div className={estilos.modalConteiner} onClick={(e) => e.stopPropagation()}>
                <button className={estilos.closeButton} onClick={onClose}>×</button>
                <div className={estilos.modalContent}>
                    <img className={estilos.imgModal} src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}/>
                    <div className={estilos.movieDetails}>
                        <h2>{movie.title}</h2>
                        <p>{movie.overview}</p>
                        <ul>
                            <li><strong>Popularidade:</strong> {movie.popularity}</li>
                            <li><strong>Data de Lançamento:</strong> {movie.release_date}</li>
                            <li><strong>Quantidade de Votos:</strong> {movie.vote_count}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
