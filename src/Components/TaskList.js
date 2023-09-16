import React, { useState } from 'react';
import './TaskList.css';
import Task from './Task';
import Filter from './Filter'; 
import { useSelector } from 'react-redux';
const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const [status, setStatus] = useState('ALL'); 

  const handleFilterChange = (newStatus) => {
    setStatus(newStatus);
  };

  return (
    <div>
      <Filter filterStatus={status} onFilterChange={handleFilterChange} />

      {status === 'Active'
        ? tasks
            .filter((el) => el.completed === true)
            .map((task) => <Task key={task.id} task={task} />)
        : status === 'Completed'
        ? tasks
            .filter((el) => el.completed === false)
            .map((task) => <Task key={task.id} task={task} />)
        : tasks.map((task) => <Task key={task.id} task={task} />)}
    </div>
  );
};

export default TaskList;
