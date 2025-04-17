import estilos from './BarraNavegacao.module.css';
import { Link } from 'react-router-dom';

//estrutura
export function BarraNavegacao(){
    return(
        <nav className={estilos.container}>
            <ul>
                <Link to='/'>
                <li>
                    Home
                    <span class="material-symbols-outlined">home</span>
                </li>
                </Link>
                <Link to='series'>
                <li>
                    Series
                    <span class="material-symbols-outlined">theaters</span>
                </li>
                </Link>
                <Link to='perfil'>
                <li>
                    Perfil
                    <span class="material-symbols-outlined">person</span>
                </li>
                </Link>

            </ul>
        </nav>
    )
}