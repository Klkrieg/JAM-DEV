import React from 'react';
import styled from 'styled-components';
import { Box, Link, Typography } from '@material-ui/core';

import { SubscribeToNewsletterForm } from './SubscribeToNewsletterForm';

const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 30px 50px;
  background-color: #221f1f;
  color: white;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactColumn = styled(Column)`
  justify-content: space-between;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Column>
        <img
          alt="JAM logo"
          src="/assets/jam-logo-1.png"
          height={150}
          width={150}
        />
        <Box mt={1} />
        <Typography variant="h5">Austin, Texas</Typography>
      </Column>

      <ContactColumn>
        <Column>
          <Typography variant="h5">CONTACT INFO</Typography>
          <Box mt={1} />
          <Typography>
            <Link color="inherit" href="mailto:info@joiningallmusicians.com">
              info@joiningallmusicians.com
            </Link>
          </Typography>
        </Column>

        <Typography variant="caption">
          Copyright © 2020 Joining All Musicians
        </Typography>
      </ContactColumn>

      <Column>
        <Typography variant="h5">STAY TUNED</Typography>
        <Box width="220px">
          <SubscribeToNewsletterForm />
        </Box>
      </Column>
    </FooterContainer>
  );
};

export default Footer;
