import Layout from '../common/components/Layout';
import React from 'react';
import { Button, Container, TextField, Typography } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';

const WideTextField = styled(TextField)({
  width: '100%',
});

const LoginContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  height: '300px',
  marginTop: '10rem',
  marginBottom: '10rem',
  alignItems: 'center',
  justifyContent: 'space-around',
  border: 'solid',
  borderWidth: '1px',
  borderRadius: '8px',
});

const LoginHead = styled(Typography)({
  fontSize: '18px',
  alignSelf: 'flex-start',
});

const LoginButton = styled(Button)({
  alignSelf: 'flex-end',
});
const login = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch('email'));
  console.log(watch('password'));
  return (
    <Layout title="JAM | login">
      <form onSubmit={handleSubmit(onSubmit)}>
        <LoginContainer maxWidth="sm">
          <LoginHead>Login</LoginHead>
          <WideTextField
            type="email"
            variant="outlined"
            label="Email"
            size="small"
            color="primary"
            name="email"
            inputRef={register}
          ></WideTextField>
          {errors.email && <span>This fielf is required</span>}
          <WideTextField
            type="password"
            variant="outlined"
            label="Password"
            size="small"
            color="primary"
            inputRef={register}
            name="password"
          />
          <LoginButton type="submit" variant="contained" color="primary">
            Login
          </LoginButton>
        </LoginContainer>
      </form>
    </Layout>
  );
};

export default login;
