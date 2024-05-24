import React, { useState } from 'react';
import AddTaskForm from './Components/AddTaskForm';
import Task from './Components/Task';
import './App.css';


interface ITask {
  id: string;
  text: string;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<ITask[]>([
    { id: 'task-1', text: 'Buy milk' },
    { id: 'task-2', text: 'Walk with dog' },
    { id: 'task-3', text: 'Do homework' },
  ]);

  const addTask = (text: string) => {
    const newTask: ITask = {
      id: `task-${Date.now()}`,
      text,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId: string) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <AddTaskForm onAdd={addTask} />
      {tasks.map((task) => (
        <Task key={task.id} id={task.id} text={task.text} onDelete={deleteTask} />
      ))}
    </div>
  );
};

export default App;