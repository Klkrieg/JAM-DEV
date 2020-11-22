import Layout from '../common/components/Layout';
import React from 'react';
import { Button, Container, TextField } from '@material-ui/core';
const signup = () => {
  return (
    <Layout title="JAM | Sign Up">
      <Container>
        <TextField label="Test1"></TextField>
        <TextField label="Test2"></TextField>
        <TextField label="Test3"></TextField>
        <TextField label="Test4"></TextField>
        <Button>This is a button</Button>
      </Container>
    </Layout>
  );
};

export default signup;
