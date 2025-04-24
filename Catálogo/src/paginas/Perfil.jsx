import estilo from "./Perfil.module.css";

export function Perfil(){
    return(
        <main className={estilo.conteiner}>
            <div className={estilo.perfilConteiner}>
                <div className={estilo.PerfilHeader}>
                    <h1>Meu Perfil</h1>
                    <div className={estilo.imagemPerfil}>
                        <h2>Adrian Mataragi</h2>
                        <p>Filmes Favoritos: 3</p>
                        <p>Series Favoritas: 3</p>
                        <p>Generos Favoritos: Ação, Ficção científica e Comédia</p>
                        <div>
                            <img src="https://cdn-icons-png.freepik.com/512/64/64572.png" alt="" />
                        </div>
                    </div>
                    <div className={estilo.filmeTitle}> 
                        <h1>Filmes Favoritos</h1>
                    </div>
                    <div className={estilo.filme}>
                        <img src="https://media.themoviedb.org/t/p/w300_and_h450_bestv2/pp74uUjwQTknGPqNrerj4FvU0ce.jpg" alt="" />
                        <img src="https://media.themoviedb.org/t/p/w300_and_h450_bestv2/8aIvm8OaJISOpVTt7rMIh7X35G5.jpg" alt="" />
                        <img src="https://media.themoviedb.org/t/p/w300_and_h450_bestv2/8qBccgSj0Ru9Odm1Mjv82cxDr7l.jpg" alt="" />
                    </div>
                    <div className={estilo.filmeTitle}> 
                        <h1>Series Favoritas</h1>
                    </div>
                    <div className={estilo.filme}>
                        <img src="https://media.themoviedb.org/t/p/w300_and_h450_bestv2/9lb02gTh4LLB17yAEXFd4C3R4JP.jpg" alt="" />
                        <img src="https://media.themoviedb.org/t/p/w300_and_h450_bestv2/hgRMSOt7a1b8qyQR68vUixJPang.jpg" alt="" />
                        <img src="https://media.themoviedb.org/t/p/w300_and_h450_bestv2/i0uajcHH9yogXMfDHpOXexIukG9.jpg" alt="" />
                    </div>
                </div>
            </div>
        </main>
    );
}
