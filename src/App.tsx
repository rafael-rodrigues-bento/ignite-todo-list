import { Header } from "./components/Header";
import { FiPlusCircle } from 'react-icons/fi';

import './css/global.css';

import styles from './App.module.css';
import { Task } from "./components/Task";
import { ChangeEvent, FormEvent, useState } from "react";
import { NotTaskCreated } from "./components/NotTaskCreated";

interface TaskProps {
  id: number,
  content: string,
  isComplete: boolean
}

export function App() {

  const [tasks, setTasks] = useState<TaskProps[]>([]);

  const [newTaskContent, setNewTaskContent] = useState("");

  const countTasksCompleted = tasks.filter(task => task.isComplete === true);

  function handleNewTaskContent(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskContent(event.target.value);
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    const newTask = {
      id: Math.random(),
      content: newTaskContent,
      isComplete: false
    }

    setTasks(prevState => [newTask, ...prevState]);

    setNewTaskContent("")
  }

  function handleStatusTask(id: number) {
    const updatedTasks = tasks.map(task => task.id === id ? {
      ...task,
      isComplete: !task.isComplete
    } : task)

    setTasks(updatedTasks)
  }

  function handleDeleteTask(id: number) {
    const updatedTasks = tasks.filter(task => task.id !== id)

    setTasks(updatedTasks)
  }

  return (
    <>
      <Header />

      <main className={styles.wrapper}>
        <form>
          <input
            onChange={handleNewTaskContent}
            value={newTaskContent}
            placeholder="Adicione uma nova tarefa" 
            type="text" 
          />

          <button 
            type="submit"
            onClick={handleCreateNewTask}
          >
            Criar
            <FiPlusCircle size={16} />
          </button>
        </form>

        <div className={styles.countTasks}>
          <div className={styles.countCreatedTasks}>
            <strong>Tarefas criadas</strong>
            <span>{tasks.length}</span>
          </div>
          
          <div className={styles.countDoneTasks}>
            <strong>Concluídas</strong>
            <span>{tasks.length <= 0 ? 0 : `${countTasksCompleted.length} de ${tasks.length}`}</span>
          </div>
        </div>
        
        {
          tasks.length <= 0 ?
          
          <NotTaskCreated /> :

          tasks.map(task => {
            return (
              <Task
                key={task.id} 
                content={task.content}
                isComplete={task.isComplete}
                onChangeStatusTask={() => handleStatusTask(task.id)}
                onDeleteTask={() => handleDeleteTask(task.id)}
              />
            )
          })
        }  
      </main>

    </>
  )
}