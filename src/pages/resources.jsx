import React from 'react';
import styled from 'styled-components';
import { Box, Divider, Typography } from '@material-ui/core';

import Layout from '../common/components/Layout';
import ResourceCard from '../resources/components/ResourceCard';
import { ExperienceSection } from '../resources/components/ExperienceSection';
import { FinancialImpactSection } from '../resources/components/FinancialImpactSection';
import {
  ResourceListHeader,
  sortByIds,
} from '../resources/components/ResourceListHeader';

const Title = styled(Typography)`
  font-style: italic;
  font-weight: bold;
`;

const Resources = ({ resources }) => {
  const [relevantResources, setRelevantResources] = React.useState(resources);
  const [filters, setFilters] = React.useState({
    financialImpact: [],
    roles: [],
    years: 1,
    statuses: ['all'],
  });
  const [sortBy, setSortBy] = React.useState(sortByIds.nameAsc);

  const updateFilter = (key, value) => {
    setFilters({
      ...filters,
      [key]: value,
    });
  };

  const handleNotRelevantClick = (id) => {
    setRelevantResources(
      relevantResources.filter((resource) => resource._id !== id),
    );
  };

  return (
    <Layout title="JAM | Resources">
      <Box width="80%" margin="40px auto">
        <Title gutterBottom variant="h2">
          Are you a musician that has been affected by the COVID-19 Pandemic?
        </Title>
        <Typography>
          We’ve built a clear and valuable toolkit of Support Resources
          available to Austin musicians and industry.
        </Typography>
        <Box mt={3} />
        <Typography>
          <strong>Select what you can provide and/or is true for you…</strong>
        </Typography>

        <Box mt={2} />
        <FinancialImpactSection
          activeProofs={filters.financialImpact}
          onProofsChange={(value) => updateFilter('financialImpact', value)}
        />

        <Box my={3}>
          <Divider variant="fullWidth" />
        </Box>

        <ExperienceSection
          activeRoles={filters.roles}
          years={filters.years}
          onRolesChange={(value) => updateFilter('roles', value)}
          onYearsChange={(value) => updateFilter('years', value)}
        />

        <Box my={3}>
          <Divider variant="fullWidth" />
        </Box>

        <ResourceListHeader
          activeStatuses={filters.statuses}
          sortBy={sortBy}
          onStatusesChange={(value) => updateFilter('statuses', value)}
          onSortByChange={setSortBy}
        />

        <Box mt={2} />
        {relevantResources.map((resource) => {
          return (
            <ResourceCard
              key={resource._id}
              name={resource.organization}
              amount={resource.amount}
              link={resource.url}
              status={resource.status}
              handleNotRelevantClick={() =>
                handleNotRelevantClick(resource._id)
              }
            />
          );
        })}
      </Box>
    </Layout>
  );
};

export async function getServerSideProps() {
  const response = await fetch(`${process.env.VERCEL_URL}/api/resources`);
  const resources = await response.json();

  return {
    props: {
      resources,
    },
  };
}

export default Resources;
