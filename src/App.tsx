import { Header } from "./components/Header";
import { FiPlusCircle } from 'react-icons/fi';

import './css/global.css';

import styles from './App.module.css';

export function App() {
  return (
    <>
      <Header />

      <main className={styles.wrapper}>
        <form>
          <input
            placeholder="Adicione uma nova tarefa" 
            type="text" 
          />

          <button 
            type="submit"
          >
            Criar
            <FiPlusCircle size={16} />
          </button>
        </form>

        <div className={styles.countTasks}>
          <div className={styles.countCreatedTasks}>
            <strong>Tarefas criadas</strong>
            <span>0</span>
          </div>
          
          <div className={styles.countDoneTasks}>
            <strong>Concluídas</strong>
            <span>0</span>
          </div>
        </div>

        
      </main>

    </>
  )
}