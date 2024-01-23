import styles from "./Post.module.css";

export function Post(){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img                     
                        src={"https://images.unsplash.com/photo-1607294846590-fd005d7973e8?q=80&w=653&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                        alt="foto"
                        className={styles.avatar} />
                    <div className={styles.authorInfo}>
                        <strong>Jane Cooper </strong>
                        <span>Dev Front End</span>
                    </div>
                </div>
                <time title="11 de maio 08:13:30" dateTime="2022-05-11 08:13:30">
                    Publicado há 1h
                </time>
            </header>
            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p>👉 <a href="">jane.design/doctorcare</a></p>

                <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
                
            </div>
        </article>    
    )
}