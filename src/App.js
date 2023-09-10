import React, { useState } from 'react';
import './App.css';
import TaskList from './Components/TaskList';
import TaskForm from './Components/TaskForm';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Complete React Project',
      description: 'Finish the React project by the end of the week.',
      completed: false,
    },
    {
      id: 2,
      title: 'Write Blog Post',
      description: 'Write a blog post about React development.',
      completed: true,
    },
  ]);

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const addTask = (newTask) => {
    const taskId = tasks.length + 1;
    setTasks([
      ...tasks,
      {
        id: taskId,
        ...newTask,
        completed: false,
      },
    ]);
  };

  return (
    <div className="App">
      <h1>Task List</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
