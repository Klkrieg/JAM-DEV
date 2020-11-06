import React from 'react';

import styles from './Modal.module.scss';
class SignInModal extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className={styles.modal}>
          <h1>Sign in</h1>
          <form className={styles.SignInModal}>
            <div className={styles.email}>
              <label htmlFor="email-input">Email</label>
              <input id="email-input" type="text"></input>
            </div>
            <div className={styles.password}>
              <label htmlFor="password-input">Password</label>
              <input id="password-input" type="password"></input>
            </div>

            <div className={styles.switch}>
              <p>Not a member of JAM?</p>
              <a className={styles.bold} onClick={this.props.switchHandle}>
                Sign up.
              </a>
            </div>
            <button type="submit" className={styles.submit}>
              Sign in
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignInModal;
