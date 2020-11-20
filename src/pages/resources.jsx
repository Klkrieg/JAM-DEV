import React from 'react';
import styled from 'styled-components';
import { Box, Divider, Typography } from '@material-ui/core';

import Layout from '../common/components/Layout';
import { buildQueryString } from '../common/utils/buildQueryString';
import { ExperienceSection } from '../resources/components/ExperienceSection';
import { fetcher } from '../swrConfig';
import { FinancialImpactSection } from '../resources/components/FinancialImpactSection';
import { ResourceCard } from '../resources/components/ResourceCard';
import { ResourceListHeader } from '../resources/components/ResourceListHeader';

const Title = styled(Typography)`
  font-style: italic;
  font-weight: bold;
`;

const Resources = ({ resources }) => {
  const [filteredResources, setFilteredResources] = React.useState(resources);
  const [notRelevantIds, setNotRelevantIds] = React.useState([]);
  const [filters, setFilters] = React.useState({
    proofs: [],
    roles: [],
    years: 1,
    statuses: ['all'],
    sortBy: 'organization',
    sortDirection: 'asc',
  });

  React.useEffect(() => {
    const fetchResources = async () => {
      const queryString = buildQueryString(filters);
      const data = await fetcher(`/api/resources?${queryString}`);
      if (data) {
        setFilteredResources(data);
      }
    };

    fetchResources();
  }, [filters]);

  const updateFilter = (key, value) => {
    setFilters({
      ...filters,
      [key]: value,
    });
  };

  const updateSort = (by, direction) => {
    setFilters({
      ...filters,
      sortBy: by,
      sortDirection: direction,
    });
  };

  const handleNotRelevantClick = (id) => {
    setNotRelevantIds([...notRelevantIds, id]);
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
          activeProofs={filters.proofs}
          onProofsChange={(value) => updateFilter('proofs', value)}
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
          sortBy={filters.sortBy}
          sortDirection={filters.sortDirection}
          onStatusesChange={(value) => updateFilter('statuses', value)}
          onSortChange={updateSort}
        />

        <Box mt={2} />
        {filteredResources.map((resource) => {
          if (notRelevantIds.includes(resource._id)) {
            return null;
          }

          return (
            <ResourceCard
              key={resource._id}
              name={resource.organization}
              url={resource.url}
              amount={resource.amountDetail}
              status={resource.status}
              eligibilities={resource.eligibilities}
              onNotRelevantClick={() => handleNotRelevantClick(resource._id)}
            />
          );
        })}
      </Box>
    </Layout>
  );
};

export async function getServerSideProps() {
  const resources = await fetcher('/api/resources');

  return {
    props: {
      resources,
    },
  };
}

export default Resources;
