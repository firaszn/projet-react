import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const TaskForm = () => {
  const [newTask, setNewTask] = useState({ title: '', description: '' });
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (newTask.description) {
      dispatch({ type: 'ADD_TASK', payload: { id: Math.random(), ...newTask, completed: false } });
    } else {
      alert('Cannot add an empty task');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Form>
        <FormControl
          type="text"
          placeholder="Task Title"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        />
        <FormControl
          type="text"
          placeholder="Task Description"
          value={newTask.description}
          onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
        />
        <Button onClick={handleAddTask}>Add Task</Button>
      </Form>
    </div>
  );
};

export default TaskForm;
