import React, { useState } from 'react';
import './Task.css'; 

const Task = ({ task, onDelete }) => {
  const [isCompleted, setIsCompleted] = useState(task.completed);

  const toggleCompleted = () => {
    setIsCompleted(!isCompleted);
  };

  const handleDelete = () => {
    onDelete(task.id);
  };

  return (
    <div className={`task ${isCompleted ? 'completed' : ''}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={toggleCompleted}>
        {isCompleted ? 'Mark Active' : 'Mark Completed'}
      </button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Task;
