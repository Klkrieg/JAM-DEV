import Link from 'next/link';
import React from 'react';

import Backdrop from './Backdrop';
import SignInModal from './SignInModal';
import SignUpModal from './SignUpModal';
import styles from './Navbar.module.scss';

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
    <div className={styles.Navbar}>
      <img
        alt="JAM logo"
        src="/assets/jam-logo-1.png"
        className={styles.navbar__logo}
      />
      <ul className={styles.PageLinks}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/connect">Connect</Link>
        </li>
        <li>
          <Link href="/resources">Resources</Link>
        </li>
      </ul>
      <div className={styles.buttonContainer}>
        <button className={styles.orange} onClick={() => setSignInOpen(true)}>
          Sign in
        </button>
        <button className={styles.white} onClick={() => setSignUpOpen(true)}>
          Sign up
        </button>
      </div>

      {(isSignInOpen || isSignUpOpen) && <Backdrop />}
      {isSignInOpen && <SignInModal switchHandle={handleSwitchToSignUpClick} />}
      {isSignUpOpen && <SignUpModal switchHandle={handleSwitchToSignInClick} />}
    </div>
  );
};

export default Navbar;
