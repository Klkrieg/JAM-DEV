import React from 'react';
import { Box } from '@material-ui/core';

import { ToggleButton } from '../../common/components/ToggleButton';

export const proofIds = {
  financialImpact: 'proof-of-financial-impact',
  employment: 'proof-of-employment',
  income: 'proof-of-income',
};

export const FinancialImpactSection = ({ activeProofs, onProofsChange }) => {
  const isButtonActive = (id) => {
    return activeProofs.includes(id);
  };

  const handleClick = (e) => {
    const id = e.target.id;
    const nextSelected = isButtonActive(id)
      ? activeProofs.filter((item) => item !== id)
      : [...activeProofs, id];

    onProofsChange(nextSelected);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="flex-start">
      <ToggleButton
        id={proofIds.financialImpact}
        active={isButtonActive(proofIds.financialImpact)}
        onClick={handleClick}
      >
        Proof that you were financially impacted by the pandemic. (e.g. lost
        gigs, shows, bookings, contracts, unemployment etc.)
      </ToggleButton>
      <Box mt={1.5} />
      <ToggleButton
        id={proofIds.employment}
        active={isButtonActive(proofIds.employment)}
        onClick={handleClick}
      >
        Proof of professional musicianship and/or music industry employment.
      </ToggleButton>
      <Box mt={1.5} />
      <ToggleButton
        id={proofIds.income}
        active={isButtonActive(proofIds.income)}
        onClick={handleClick}
      >
        The music industry is over 50% of my income
      </ToggleButton>
    </Box>
  );
};
