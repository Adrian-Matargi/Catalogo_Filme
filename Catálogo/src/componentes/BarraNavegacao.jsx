import estilos from './BarraNavegacao.module.css';
import { Link } from 'react-router-dom';

//estrutura
export function BarraNavegacao(){
    return(
        <nav className={estilos.container}>
            <ul>
                <Link to='/'>
                <li>
                    <span class="material-symbols-outlined">home</span>
                    Home
                </li>
                </Link>
                <Link to='series'>
                <li>
                    <span class="material-symbols-outlined">theaters</span>
                    Series
                </li>
                </Link>
                <Link to='perfil'>
                <li>
                    <span class="material-symbols-outlined">person</span>
                    Perfil
                </li>
                </Link>

            </ul>
        </nav>
    )
}