import Layout from '../common/components/Layout';
import Link from 'next/link';
import React from 'react';
import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';

const SignUpContainer = styled(Container)({
  margin: '10vh auto',
  border: 'solid',
  borderWidth: '1px',
  borderRadius: '8px',
  padding: '20px',
});
const SwitchText = styled(Typography)({
  fontWeight: 'bold',
  cursor: 'pointer',
});
const SignUpHead = styled(Typography)({
  fontSize: '18px',
});

const signup = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Layout title="JAM | Sign Up">
      <form onSubmit={handleSubmit(onSubmit)}>
        <SignUpContainer maxWidth="sm">
          <Grid container spacing={2}>
            <Grid item sm={12}>
              <SignUpHead>Sign Up</SignUpHead>
            </Grid>
            <Grid item sm={12}>
              <TextField
                label="First Name"
                variant="outlined"
                size="small"
                name="firstName"
                type="text"
                fullWidth
                inputRef={register}
              />
            </Grid>
            <Grid item sm={12}>
              <TextField
                label="Last Name"
                variant="outlined"
                size="small"
                name="lastName"
                type="text"
                fullWidth
                inputRef={register}
              />
            </Grid>
            <Grid item sm={12}>
              <TextField
                label="Email"
                variant="outlined"
                size="small"
                name="email"
                type="email"
                fullWidth
                inputRef={register}
              />
            </Grid>
            <Grid item sm={12}>
              <TextField
                label="Password"
                variant="outlined"
                size="small"
                name="password"
                type="password"
                fullWidth
                inputRef={register}
              />
            </Grid>
            <Grid item sm={9}>
              <Typography>Already a member of JAM?</Typography>
              <Link href="/login">
                <SwitchText>Login</SwitchText>
              </Link>
            </Grid>
            <Grid item>
              <Button color="primary" type="submit" variant="contained">
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </SignUpContainer>
      </form>
    </Layout>
  );
};

export default signup;
