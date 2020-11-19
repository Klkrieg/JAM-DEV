import React from 'react';
import styled from 'styled-components';
import { Box, Slider, Typography } from '@material-ui/core';

import { ToggleButton } from '../../common/components/ToggleButton';

export const roleIds = {
  musician: 'musician',
  engineer: 'engineer',
  business: 'business',
  educator: 'educator',
};

const VerticalDivider = styled.div`
  height: 17px;
  width: 2px;
  background-color: black;
  margin: 0 15px;
`;

export const ExperienceSection = ({
  activeRoles,
  onRolesChange,
  years,
  onYearsChange,
}) => {
  const isRoleActive = (id) => {
    return activeRoles.includes(id);
  };

  const handleRoleClick = (e) => {
    const id = e.target.id;
    const nextSelected = isRoleActive(id)
      ? activeRoles.filter((item) => item !== id)
      : [...activeRoles, id];

    onRolesChange(nextSelected);
  };

  return (
    <div>
      <Box display="flex" alignItems="center">
        <ToggleButton
          id={roleIds.musician}
          variant="text"
          active={isRoleActive(roleIds.musician)}
          onClick={handleRoleClick}
        >
          Musician
        </ToggleButton>
        <VerticalDivider />
        <ToggleButton
          id={roleIds.engineer}
          variant="text"
          active={isRoleActive(roleIds.engineer)}
          onClick={handleRoleClick}
        >
          Engineer/Crew
        </ToggleButton>
        <VerticalDivider />
        <ToggleButton
          id={roleIds.business}
          variant="text"
          active={isRoleActive(roleIds.business)}
          onClick={handleRoleClick}
        >
          Business
        </ToggleButton>
        <VerticalDivider />
        <ToggleButton
          id={roleIds.educator}
          variant="text"
          active={isRoleActive(roleIds.educator)}
          onClick={handleRoleClick}
        >
          Educator
        </ToggleButton>
      </Box>
      <Box mt={7} />
      <Box display="flex" alignItems="bottom">
        <Typography
          component="label"
          htmlFor="year-slider"
          variant="caption"
          color="textSecondary"
        >
          Years in industry:
        </Typography>
        <Box ml={2} />
        <Typography>1</Typography>
        <Box mx={2} width="100%" maxWidth="400px">
          <Slider
            id="years-slider"
            valueLabelDisplay="on"
            valueLabelFormat={years === 20 ? '20+' : years.toString()}
            min={1}
            max={20}
            step={1}
            value={years}
            onChange={(_, value) => onYearsChange(value)}
          />
        </Box>
        <Typography>20+</Typography>
      </Box>
    </div>
  );
};
