import React from 'react';
import styled from 'styled-components';
import { Box, Typography } from '@material-ui/core';

const OrganizationLink = styled.a`
  color: ${({ theme }) => theme.palette.secondary.main};
  font-weight: bold;
  text-decoration: underline;
`;

const NotRelevantButton = styled.button`
  color: ${({ theme }) => theme.palette.grey[500]};
  padding-left: 24px;
  cursor: pointer;
  border: none;
  background-color: inherit;
`;

export const ResourceCard = ({
  name,
  url,
  amount,
  status,
  eligibilities,
  onNotRelevantClick,
}) => {
  let statusText = '';
  switch (status) {
    case 'open':
      statusText = 'Open';
      break;
    case 'paused':
      statusText = 'Paused - Waitlist';
      break;
    case 'closed':
      statusText = 'Closed';
      break;
    default:
      statusText = status;
  }

  const renderDetailRow = (name, values) => {
    return (
      <Box display="flex" mt={1}>
        <Box minWidth="112px">
          <Typography variant="caption" color="textSecondary">
            {name}
          </Typography>
        </Box>
        <div>
          {values.map((value) => (
            <Typography key={value} gutterBottom>
              {value}
            </Typography>
          ))}
        </div>
      </Box>
    );
  };

  return (
    <Box mt={3}>
      <div>
        <OrganizationLink href={url} target="_blank" rel="noreferrer">
          {name}
        </OrganizationLink>
        <NotRelevantButton onClick={onNotRelevantClick}>
          Not relevant to me
        </NotRelevantButton>
      </div>

      <Box mt={2}>
        {renderDetailRow('Benefit Amount', [amount])}
        {renderDetailRow('Grant Status', [statusText])}
        {renderDetailRow('Eligibilities', eligibilities)}
      </Box>
    </Box>
  );
};
