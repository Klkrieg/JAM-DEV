import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { Box, Button, Typography } from '@material-ui/core';

import Layout from '../common/components/Layout';

const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 320px;
  width: 100%;
  padding: 0px 90px;
  background-color: rgba(74, 74, 74, 0.3);
  background-image: url('/assets/landing-hero.jpg');
  background-blend-mode: color;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  h1 {
    font-style: italic;
    line-height: normal;
  }
`;

const CovidSupportSection = styled.section`
  width: 100%;
  padding: 50px 90px;
  background-color: ${({ theme }) => theme.palette.secondary.main};
`;

const Index = () => (
  <Layout>
    <div>
      <HeroSection>
        <Typography variant="h1" className="white">
          We exist to connect, support and give the music industry to the
          musician.
        </Typography>
      </HeroSection>

      <CovidSupportSection>
        <Typography variant="h5" className="white">
          Are you a musician that has been affected by the COVID-19 Pandemic?
        </Typography>

        <Box mt={3} />
        <Typography className="white">
          Check out our Support and Resources section. We organized all of the
          resources available to musical Austinites. Answer some simple
          questions and see if you are eligible for support from the Nonprofits
          supporting Austin Music.
        </Typography>

        <Box mt={5} />
        <Typography className="white">
          If you can…
          <br />
          - Prove that you lost gigs/bookings, you were layed off or unemployed
          due to the COVID-19 Pandemic?
          <br />- Prove your Professional Muscianship/Music Industry Employment?
        </Typography>

        <Box mt={3} />
        <Link href="/resources">
          <Button variant="contained" color="primary">
            Check it out
          </Button>
        </Link>
      </CovidSupportSection>
    </div>
  </Layout>
);

export default Index;
