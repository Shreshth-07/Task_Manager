import React, { useState } from 'react';
import { Container, Grid, Paper } from '@mui/material';
import Layout from './components/Layout';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
  const [editingTask, setEditingTask] = useState(null);

  const handleEditTask = (task) => {
    setEditingTask(task);
  };

  const handleTaskAdded = () => {
    setEditingTask(null);
  };

  const handleTaskUpdated = () => {
    setEditingTask(null);
  };

  return (
    <Layout>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <TaskList onEditTask={handleEditTask} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <TaskForm 
                task={editingTask}
                onTaskAdded={handleTaskAdded}
                onTaskUpdated={handleTaskUpdated}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

export default App;