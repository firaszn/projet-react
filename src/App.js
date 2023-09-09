
import React, { useState } from 'react';
import './App.css';
import Task from './Components/Task';

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

  return (
    <div className="App">
      <h1>Task List</h1>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={deleteTask} />
      ))}
    </div>
  );
}

export default App;
