import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
 
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
  });

  const addTask = () => {
    if (newTask.title.trim() !== '') {
      onAddTask(newTask);
      setNewTask({ title: '', description: '' });
    }
  };

  return (
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
  );
};

export default TaskForm;
