import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { Box, Button } from '@material-ui/core';

const NavContainer = styled.nav`
  background-color: ${({ theme }) => theme.palette.secondary.main};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.8);
`;

const LinkList = styled.ul`
  display: flex;
  align-items: center;

  li {
    list-style: none;
    margin-left: 30px;

    a {
      color: white;
      text-decoration: none;
    }
  }
`;

const WideButton = styled(Button)`
  width: 140px;
`;

const Navbar = () => {
  return (
    <NavContainer>
      <Box display="flex">
        <img
          alt="JAM logo"
          src="/assets/jam-logo-1.png"
          height={80}
          width={87}
        />
        <LinkList>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/connect">
              <a>Connect</a>
            </Link>
          </li>
          <li>
            <Link href="/resources">
              <a>Resources</a>
            </Link>
          </li>
        </LinkList>
      </Box>

      <Box display="flex" mr="90px">
        <Link href="/login">
          <WideButton variant="outlined" color="primary">
            Login
          </WideButton>
        </Link>
        <Box ml={3} />
        <Link href="/signup">
          <WideButton variant="outlined" color="secondary">
            Sign up
          </WideButton>
        </Link>
      </Box>
    </NavContainer>
  );
};

export default Navbar;
