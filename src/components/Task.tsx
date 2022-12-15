import styles from './Task.module.css';

import { FiTrash2 } from 'react-icons/fi';
interface TaskProps {
  content: string;
  isComplete: boolean;
  onChangeStatusTask: () => void;
  onDeleteTask: () => void;
}

export function Task({ content, isComplete, onChangeStatusTask, onDeleteTask }: TaskProps) {  
  return (
    <div className={styles.wrapper}>
      <input 
        type="checkbox"
        onChange={onChangeStatusTask} 
        name="" 
        id="" 
      />
      <p 
        className={isComplete ? styles.taskNotComplete : styles.taskComplete}>
          {content}
      </p>
      <button
        onClick={onDeleteTask}
      >
        <FiTrash2 size={20}/>
      </button>
    </div>
  )
}