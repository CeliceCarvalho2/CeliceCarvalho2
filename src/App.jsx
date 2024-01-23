import { Post } from './componentes/Post';
import { Header } from './componentes/Header';
import './global.css'
import styles from './App.module.css';
import { Sidebar } from './componentes/Sidebar';

export function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post/>
        </main>
      </div>
    </div>
  )
}
 

