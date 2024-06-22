import React from 'react';
import { AppBar, Toolbar, Typography, Container, Box } from '@mui/material';

const Layout = ({ children }) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Task Management App</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Box my={4}>
          {children}
        </Box>
      </Container>
    </>
  );
};

export default Layout;