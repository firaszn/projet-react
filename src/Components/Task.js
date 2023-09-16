import React, { useState } from 'react';
import './Task.css';
import { useDispatch } from 'react-redux'; // Import useDispatch
import { deleteTask } from '../JS/Action';

const Task = ({ task }) => {
  const [isCompleted, setIsCompleted] = useState(task.completed);
  const dispatch = useDispatch(); // Get the dispatch function from Redux

  const toggleCompleted = () => {
    setIsCompleted(!isCompleted);
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id)); // Dispatch the deleteTask action
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
