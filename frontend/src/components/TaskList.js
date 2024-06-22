import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Chip, TextField, Box, Button } from '@mui/material';
import { Delete as DeleteIcon, Edit as EditIcon, Search as SearchIcon } from '@mui/icons-material';
import { format } from 'date-fns';
import { API_BASE_URL } from '../config';

const TaskList = ({ onEditTask }) => {
  const [tasks, setTasks] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const checkServerConnection = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/health`);
      console.log('Server health check:', response.data);
    } catch (error) {
      console.error('Error connecting to server:', error);
    }
  };

  useEffect(() => {
    checkServerConnection();
    fetchTasks();
  }, []);

  useEffect(() => {
    console.log('Current tasks:', tasks);
  }, [tasks]);

  const fetchTasks = async (query = '') => {
    try {
      let url = `${API_BASE_URL}/api/tasks`;
      if (query.trim()) {
        url = `${API_BASE_URL}/api/tasks/search?query=${encodeURIComponent(query.trim())}`;
      }
      console.log('Fetching from URL:', url);
      const res = await axios.get(url);
      console.log('API response:', res.data);
      setTasks(res.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
      }
      setTasks([]);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/api/tasks/${id}`);
      fetchTasks(searchInput);
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearchClick = () => {
    console.log('Search clicked. Input:', searchInput);
    fetchTasks(searchInput);
  };

  return (
    <div>
      {console.log('Rendering tasks:', tasks)}
      <Typography variant="h2" gutterBottom>Tasks</Typography>
      <Box mb={2} display="flex" alignItems="center">
        <TextField
          fullWidth
          label="Search tasks"
          variant="outlined"
          value={searchInput}
          onChange={handleInputChange}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSearchClick();
            }
          }}
        />
        <Button
          variant="contained"
          color="primary"
          startIcon={<SearchIcon />}
          onClick={handleSearchClick}
          style={{ marginLeft: '10px' }}
        >
          Search
        </Button>
      </Box>
      {tasks.length === 0 ? (
        <Typography>No tasks found.</Typography>
      ) : (
        <List>
          {tasks.map(task => (
            <ListItem key={task.id} divider>
              <ListItemText
                primary={task.title}
                secondary={
                  <>
                    <Typography component="span" variant="body2" color="textPrimary">
                      {task.description}
                    </Typography>
                    <br />
                    <Chip 
                      label={`Due: ${format(new Date(task.dueDate), 'PP')}`} 
                      size="small" 
                      color="primary"
                    />
                  </>
                }
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="edit" onClick={() => onEditTask(task)}>
                  <EditIcon />
                </IconButton>
                <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteTask(task.id)}>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
};

export default TaskList;
