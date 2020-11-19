import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { Box } from '@material-ui/core';

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
            <Link href="/resources">
              <a>Resources</a>
            </Link>
          </li>
        </LinkList>
      </Box>
    </NavContainer>
  );
};

export default Navbar;
