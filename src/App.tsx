import {useState} from 'react'

//styles scss
import styles from './App.module.css';

//components
import Header from './components/Header';
import Footer from './components/Footer';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Modal from './components/Modal';

//interface
import { ITask } from './interface/Task';


function App() {

  const [taskList,setTaskList] = useState<ITask[]>([])

  const deleteTask = (id:number) => {
    setTaskList(
      taskList.filter(task =>{
      return task.id !== id
    }))
  }

  return (
    <div>
      <Modal/>
      <Header/>
       <main className={styles.main}>
          <div>
             <h2>O que você vai fazer?</h2>
             <TaskForm btnText="Criar Tarefa" taskList={taskList} setTaskList={setTaskList}/>
          </div>
          <div>
             <h2>Suas tarefas</h2>
             <TaskList deleteTask={deleteTask} taskList={taskList}/>
          </div>
       </main>
      <Footer/>
    </div>
  );
}

export default App;
