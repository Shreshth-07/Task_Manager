import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, Box, Typography } from '@mui/material';

const TaskForm = ({ task, onTaskAdded, onTaskUpdated }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setDueDate(task.dueDate.split('T')[0]);
    }
  }, [task]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const taskData = { title, description, dueDate };

    try {
      if (task) {
        await axios.put(`http://localhost:5000/api/tasks/${task.id}`, taskData);
        onTaskUpdated();
      } else {
        await axios.post('http://localhost:5000/api/tasks', taskData);
        onTaskAdded();
      }
      setTitle('');
      setDescription('');
      setDueDate('');
    } catch (error) {
      console.error('Error saving task:', error);
    }
  };

  return (
    <Box my={4}>
      <Typography variant="h2" gutterBottom>{task ? 'Edit Task' : 'Add New Task'}</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          margin="normal"
          multiline
          rows={4}
        />
        <TextField
          fullWidth
          label="Due Date"
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          required
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          {task ? 'Update Task' : 'Add Task'}
        </Button>
      </form>
    </Box>
  );
};

export default TaskForm;