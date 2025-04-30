import estilo from './Cardseries.module.css';

export function Cardseries({ serie, onOpenModal }) {
    console.log(serie);  // Verifique os dados da série no console

    return (
        <div className={estilo['cardseries-container']} onClick={() => onOpenModal(serie)}>
            <div className={estilo['cardseries-imageWrapper']}>
                <img src={`http://image.tmdb.org/t/p/w500/${serie.poster_path}`} alt={serie.name} className={estilo['cardseries-image']}/>
                <div className={estilo['cardseries-overlay']}>
                    <h3>{serie.name}</h3>
                    <button className={estilo['cardseries-button']}>Ver mais</button>
                </div>
            </div>
        </div>
    );
}
