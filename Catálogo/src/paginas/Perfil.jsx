import estilo from "./Perfil.module.css";

export function Perfil() {
    return (
        <main className={estilo.conteiner}>
            <div className={estilo.perfilConteiner}>
                <div className={estilo.perfilHeader}>
                    <img
                        className={estilo.fotoPerfil}
                        src="https://cdn-icons-png.freepik.com/512/64/64572.png"
                        alt="Foto de perfil"
                    />
                    <h1>Adrian Mataragi</h1>
                    <p><strong>Gêneros Favoritos:</strong> Ação, Ficção científica, Comédia</p>
                </div>

                <section>
                    <h2 className={estilo.tituloSecao}>Filmes Favoritos</h2>
                    <div className={estilo.galeria}>
                        <div className={estilo.card}>
                            <img src="https://media.themoviedb.org/t/p/w300_and_h450_bestv2/pp74uUjwQTknGPqNrerj4FvU0ce.jpg" alt="Filme 1" />
                            <p>Gigantes de Aço</p>
                        </div>
                        <div className={estilo.card}>
                            <img src="https://media.themoviedb.org/t/p/w300_and_h450_bestv2/8aIvm8OaJISOpVTt7rMIh7X35G5.jpg" alt="Filme 2" />
                            <p>O Rei Leão</p>
                        </div>
                        <div className={estilo.card}>
                            <img src="https://media.themoviedb.org/t/p/w300_and_h450_bestv2/8qBccgSj0Ru9Odm1Mjv82cxDr7l.jpg" alt="Filme 3" />
                            <p>Homem-Aranha: Sem Volta para Casa</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className={estilo.tituloSecao}>Séries Favoritas</h2>
                    <div className={estilo.galeria}>
                        <div className={estilo.card}>
                            <img src="https://media.themoviedb.org/t/p/w300_and_h450_bestv2/9lb02gTh4LLB17yAEXFd4C3R4JP.jpg" alt="Série 1" />
                            <p>The Walking Dead</p>
                        </div>
                        <div className={estilo.card}>
                            <img src="https://media.themoviedb.org/t/p/w300_and_h450_bestv2/hgRMSOt7a1b8qyQR68vUixJPang.jpg" alt="Série 2" />
                            <p>Brooklyn Nine-Nine</p>
                        </div>
                        <div className={estilo.card}>
                            <img src="https://media.themoviedb.org/t/p/w300_and_h450_bestv2/i0uajcHH9yogXMfDHpOXexIukG9.jpg" alt="Série 3" />
                            <p>Peaky Blinders</p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
