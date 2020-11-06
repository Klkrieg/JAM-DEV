import Link from 'next/link';
import React from 'react';

import Backdrop from '../Backdrop/Backdrop.component';
import SignInModal from '../Modals/SignInModal.component';
import SignUpModal from '../Modals/SignUpModal.component';
import styles from './Navbar.module.scss';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInOpen: false,
      signUpOpen: false,
    };
    this.handleEscKeyPress = this.handleEscKeyPress.bind(this);
    this.handleOffModalClick = this.handleOffModalClick.bind(this);
    this.handleModalSwitch = this.handleModalSwitch.bind(this);
  }
  componentDidMount() {
    document.addEventListener('keydown', this.handleEscKeyPress);
    document.addEventListener('click', this.handleOffModalClick);
  }

  handleSignInOpen() {
    this.setState({ signInOpen: true });
  }
  handleSignUpOpen() {
    this.setState({ signUpOpen: true });
  }

  handleOffModalClick(e) {
    if (e.target.className.match(/backdrop/i)) {
      this.setState({
        signInOpen: false,
        signUpOpen: false,
      });
    }
  }
  handleEscKeyPress(e) {
    if (e.keyCode == 27) {
      this.setState({
        signInOpen: false,
        signUpOpen: false,
      });
    }
  }
  handleModalSwitch(e) {
    let text = e.target.innerHTML;
    text == 'Sign up.'
      ? this.setState({
          signInOpen: false,
          signUpOpen: true,
        })
      : this.setState({
          signInOpen: true,
          signUpOpen: false,
        });
    console.log(e.target.innerHTML);
  }

  render() {
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
          <button className={styles.orange} onClick={this.handleSignInOpen}>
            Sign in
          </button>
          <button className={styles.white} onClick={this.handleSignUpOpen}>
            Sign up
          </button>
        </div>
        {this.state.signInOpen && <Backdrop />}
        {this.state.signInOpen && (
          <SignInModal switchHandle={this.handleModalSwitch} />
        )}
        {this.state.signUpOpen && <Backdrop />}
        {this.state.signUpOpen && (
          <SignUpModal switchHandle={this.handleModalSwitch} />
        )}
      </div>
    );
  }
}

export default Navbar;
