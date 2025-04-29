import estilo from './Card.module.css';

export function Card({ movie, onOpenModal }) {
    return (
        <div className={estilo.container} onClick={() => onOpenModal(movie)}>
            <div className={estilo.imageWrapper}>
                <img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className={estilo.image}/>
                <div className={estilo.overlay}>
                    <h3>{movie.title}</h3>
                    <button className={estilo.button}>Ver mais</button>
                </div>
            </div>
        </div>
    );
}