import React from 'react'

//Interface
import { ITask } from '../interface/Task'

//CSS
import styles from './TaskList.module.css'

interface Props {
  taskList: ITask[]
  deleteTask(id:number): void
  handleEdit(task:ITask | null): void
  }

const TaskList = ({taskList,deleteTask,handleEdit}: Props) => {
  return (
     <>
        {taskList.length > 0 ?(
          taskList.map(task=> (
            <div className={styles.task} key={task.id}>
              <div className={styles.details}>
                <h4>{task.title}</h4>
                <p>{task.difficulty}</p>
              </div>
              <div className={styles.actions}>
                <i className="bi bi-pencil" onClick={()=>handleEdit(task)}></i>
                <i className="bi bi-trash" onClick={()=> deleteTask(task.id)}></i>
              </div>
            </div>  
          ))
        ):(
          <p>Não há tarefas no momento.</p>
        )}
     </>
  )
}

export default TaskList