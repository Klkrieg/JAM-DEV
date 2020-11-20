import React from 'react';
import { Button, Container, TextField } from '@material-ui/core';
const signup = () => {
  return (
    <Container>
      <TextField label="Test1"></TextField>
      <TextField label="Test2"></TextField>
      <TextField label="Test3"></TextField>
      <TextField label="Test4"></TextField>
      <Button>This is a button</Button>
    </Container>
  );
};

export default signup;
