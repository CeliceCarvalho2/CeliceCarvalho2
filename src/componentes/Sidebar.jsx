import styles from './Sidebar.module.css';

export function Sidebar(){ 
    return (
        <aside className={styles.Sidebar}>
            <img
                className={styles.cover}
             src={"https://images.unsplash.com/photo-1604964432806-254d07c11f32?q=60&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
            
            <div className={styles.profile}>
                <img 
                    className={styles.avatar}
                    src={"https://images.unsplash.com/photo-1607294846590-fd005d7973e8?q=80&w=653&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
                <strong>Diego Fernandes</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}