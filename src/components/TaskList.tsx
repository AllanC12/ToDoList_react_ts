import React from 'react'

//Interface
import { ITask } from '../interface/Task'

//CSS
import styles from './TaskList.module.css'

interface Props {
  taskList: ITask[]
}

const TaskList = ({taskList}: Props) => {
  return (
     <>
        {taskList.length > 0 ?(
          taskList.map(task=> (
            <div key={task.id}>
              <div>
                 {task.title}
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