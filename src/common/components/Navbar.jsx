import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { Box, Button } from '@material-ui/core';

import Backdrop from './Backdrop';
import SignInModal from './SignInModal';
import SignUpModal from './SignUpModal';

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
  const [isSignInOpen, setSignInOpen] = React.useState(false);
  const [isSignUpOpen, setSignUpOpen] = React.useState(false);

  React.useEffect(() => {
    const handleOffModalClick = (e) => {
      if (e.target.className.match(/backdrop/i)) {
        setSignInOpen(false);
        setSignUpOpen(false);
      }
    };

    const handleEscKeyPress = (e) => {
      if (e.keyCode == 27) {
        setSignInOpen(false);
        setSignUpOpen(false);
      }
    };

    document.addEventListener('click', handleOffModalClick);
    document.addEventListener('keydown', handleEscKeyPress);

    return () => {
      document.removeEventListener('click', handleOffModalClick);
      document.removeEventListener('keydown', handleEscKeyPress);
    };
  }, []);

  const handleSwitchToSignUpClick = () => {
    setSignInOpen(false);
    setSignUpOpen(true);
  };

  const handleSwitchToSignInClick = () => {
    setSignUpOpen(false);
    setSignInOpen(true);
  };

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
        <WideButton
          variant="outlined"
          color="primary"
          onClick={() => setSignInOpen(true)}
        >
          Sign in
        </WideButton>
        <Box ml={3} />
        <WideButton
          variant="outlined"
          color="secondary"
          onClick={() => setSignUpOpen(true)}
        >
          Sign up
        </WideButton>
      </Box>

      {(isSignInOpen || isSignUpOpen) && <Backdrop />}
      {isSignInOpen && <SignInModal switchHandle={handleSwitchToSignUpClick} />}
      {isSignUpOpen && <SignUpModal switchHandle={handleSwitchToSignInClick} />}
    </NavContainer>
  );
};

export default Navbar;
