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

const LoginContainer = styled(Container)({
  margin: '10vh auto',
  border: 'solid',
  borderWidth: '1px',
  borderRadius: '8px',
  padding: '20px',
});

const LoginHead = styled(Typography)({
  fontSize: '18px',
});
const SwitchText = styled(Typography)({
  fontWeight: 'bold',
  cursor: 'pointer',
});
const login = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch('email'));
  console.log(watch('password'));
  return (
    <Layout title="JAM | login">
      <form onSubmit={handleSubmit(onSubmit)}>
        <LoginContainer maxWidth="sm">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <LoginHead>Login</LoginHead>
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="email"
                variant="outlined"
                label="Email"
                size="small"
                color="primary"
                name="email"
                fullWidth
                inputRef={register}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="password"
                variant="outlined"
                label="Password"
                size="small"
                color="primary"
                inputRef={register}
                name="password"
                fullWidth
              />
            </Grid>
            <Grid item xs={10}>
              <Typography>Not a member of JAM?</Typography>
              <Link href="/signup">
                <SwitchText tabIndex="0">Sign Up.</SwitchText>
              </Link>
            </Grid>
            <Grid item>
              <Button type="submit" variant="contained" color="primary">
                Login
              </Button>
            </Grid>
          </Grid>
        </LoginContainer>
      </form>
    </Layout>
  );
};

export default login;
