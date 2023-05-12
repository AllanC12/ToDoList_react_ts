import { useState, useEffect, ChangeEvent, FormEvent } from "react";

import styles from "./TaskForm.module.css";

//interface
import { ITask } from "../interface/Task";

interface Props {
  btnText: string;
  taskList: ITask[];
  setTaskList: React.Dispatch<React.SetStateAction<ITask[]>>;
}

const TaskForm = ({ btnText, taskList, setTaskList }: Props) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else {
      setDifficulty(parseInt(e.target.value));
    }
  };

  const handleAddTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 1000);
    const newTask: ITask = { id, title, difficulty };
    setTaskList([...taskList, newTask]);
    setTitle('')
    setDifficulty(0)

    console.log(taskList)
  };

  return (
    <form onSubmit={handleAddTask} className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor="title"></label>
        <input
          type="text"
          name="title"
          onChange={handleChange}
          placeholder="Título da tarefa"
          value={title}
        />
      </div>

      <div className={styles.input_container}>
        <label htmlFor="difficulty"></label>
        <input
          type="text"
          name="difficulty"
          onChange={handleChange}
          placeholder="Dificuldade da tarefa"
          value={difficulty}
        />
      </div>

      <input type="submit" value={btnText} />
    </form>
  );
};

export default TaskForm;
