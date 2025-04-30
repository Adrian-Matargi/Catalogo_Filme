import estilos from './Rodape.module.css';

export function Rodape() {
    return (
        <footer className={estilos.container}>
            <p>© {new Date().getFullYear()} Adrian Mataragi. Todos os direitos reservados.</p>
        </footer>
    );
}