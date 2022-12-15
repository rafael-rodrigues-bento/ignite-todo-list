import styles from './NotTaskCreated.module.css';

import imageClipboard from '../assets/Clipboard.svg';

export function NotTaskCreated() {
  return (
    <div className={styles.wrapper}>
      <img src={imageClipboard} alt="Ícone de uma planilha" />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  )
}