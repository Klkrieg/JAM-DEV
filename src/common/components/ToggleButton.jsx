import React from 'react';
import styled from 'styled-components';

const TextToggleButton = styled.button`
  color: ${({ active, theme }) =>
    active ? theme.palette.primary.main : 'black'};
  background: none;
  cursor: pointer;
  border: none;

  &:focus {
    outline: none;
  }
`;

const ContainedToggleButton = styled.button`
  color: white;
  background-color: ${({ active, theme }) =>
    active ? theme.palette.primary.main : theme.palette.grey[500]};
  cursor: pointer;
  padding: 3px 8px;
  height: 25px;
  min-width: 80px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  text-align: center;

  &:focus {
    outline: none;
  }
`;

export const ToggleButton = ({ variant, ...rest }) => {
  return variant === 'text' ? (
    <TextToggleButton {...rest} />
  ) : (
    <ContainedToggleButton {...rest} />
  );
};
