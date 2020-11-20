import Axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import { Box, Button } from '@material-ui/core';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: '100%';
`;

const FormInput = styled.input`
  height: 36px;
  width: 100%;
  padding: 10px 12px;
  margin-top: 10px;
  color: white;
  background-color: transparent;
  border: solid 0.5px white;
  border-radius: 5px;

  &:focus {
    outline: none;
  }
`;

export const SubscribeToNewsletterForm = () => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');

  const handleSubscribeClick = async (e) => {
    e.preventDefault();

    try {
      // TODO: Sign up and handle response
      // eslint-disable-next-line no-unused-vars
      const response = await Axios.post('api/newsletter', {
        email,
        firstName,
        lastName,
      });

      setFirstName('');
      setLastName('');
      setEmail('');
    } catch (e) {
      console.log(`Signup error: ${e}`);
    }
  };

  return (
    <Form>
      <FormInput
        placeholder="First name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <FormInput
        placeholder="Last name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <FormInput
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Box mt={2} />
      <Button
        fullWidth
        type="submit"
        variant="outlined"
        color="secondary"
        onClick={handleSubscribeClick}
      >
        Subscribe
      </Button>
    </Form>
  );
};
