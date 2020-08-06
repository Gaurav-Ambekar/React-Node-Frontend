import { Box, Container } from '@material-ui/core';
import React from 'react';
import MainLayout from '../layouts/MainLayout';

const Users: React.FC = () => {
  return (
    <MainLayout>
      <Container>
        <Box my={2}>List of System Users</Box>
      </Container>
    </MainLayout>
  );
};

export default Users;
