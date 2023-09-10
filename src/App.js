import React, { useState } from 'react';
import './App.css';
import TaskList from './Components/TaskList';

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

  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
  });

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const addTask = () => {
    if (newTask.title.trim() !== '') {
      const taskId = tasks.length + 1;
      setTasks([
        ...tasks,
        {
          id: taskId,
          title: newTask.title,
          description: newTask.description,
          completed: false,
        },
      ]);
      setNewTask({ title: '', description: '' });
    }
  };

  return (
    <div className="App">
      <h1>Task List</h1>
      <div className="task-form">
        <input
          type="text"
          placeholder="Task Title"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Task Description"
          value={newTask.description}
          onChange={(e) =>
            setNewTask({ ...newTask, description: e.target.value })
          }
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <TaskList tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
