import estilo from './Cardseries.module.css';

export function Cardseries({ serie, onOpenModal }) {
    return (
        <div className={estilo.container} onClick={() => onOpenModal(serie)}>
            <div className={estilo.imageWrapper}>
                <img
                    src={`http://image.tmdb.org/t/p/w500/${serie.poster_path}`}
                    alt={serie.name}
                    className={estilo.image}
                />
                <div className={estilo.overlay}>
                    <h3>{serie.name}</h3>
                    <button className={estilo.button}>Ver mais</button>
                </div>
            </div>
        </div>
    );
}
