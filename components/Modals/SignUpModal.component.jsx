import React from 'react';

import styles from './SignUpModal.module.scss';
import validator from '../../utils/passwordValidator';
import { zipList } from '../../utils/ziplist';

class SignUpModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      zipcode: '',
      password: '',
      profileType: '',
      errors: {
        email: '',
        zipcode: '',
        password: [],
      },
    };
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handlePasswordChange(pswd) {
    let errs = validator(pswd);
    console.log(errs);
    if (errs.length > 0) {
      let errors = errs.map((error) => {
        switch (error) {
          case 'min':
            return 'eight characters';
          case 'uppercase':
            return 'one uppercase letter';
          case 'lowercase':
            return 'one lowercase letter';
          case 'digits':
            return 'one number';
          case 'symbols':
            return 'one symbol';
          case 'max':
            return 'no more than 50 characters';
          case 'spaces':
            return 'no spaces';
        }
      });
      this.setState(
        {
          errors: {
            password: errors,
          },
        },
        //() => console.log(this.state.errors)
      );
    } else if (!errs.length) {
      this.setState({
        errors: {
          password: [],
        },
      });
      console.log('Pass pass');
    }
  }

  handleChange(e) {
    let id = e.target.id;
    let value = e.target.value;
    if (id == 'password') {
      this.handlePasswordChange(value);
    }
    this.setState({
      [id]: value,
    });
  }
  handleButtonClick(e) {
    this.setState(
      {
        profileType: e.target.name,
      },
      () => console.log(this.state),
    );
  }

  render() {
    return (
      <div>
        <div className={styles.modal}>
          <h1>Sign up</h1>
          <form className={styles.SignUpModal} onSubmit={this.handleSubmit}>
            <div className={styles.fName}>
              <label htmlFor="firstName">First name</label>
              <input
                type="text"
                id="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
                required
              ></input>
            </div>
            <div className={styles.lName}>
              <label htmlFor="lastName">Last name</label>
              <input
                type="text"
                id="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
                required
              ></input>
            </div>
            <div className={styles.email}>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                value={this.state.email}
                onChange={this.handleChange}
                required
              ></input>
            </div>
            <div className={styles.zip}>
              <label htmlFor="zipcode">Zip code</label>
              <input
                type="text"
                id="zipcode"
                value={this.state.zipcode}
                onChange={this.handleChange}
                required
              ></input>
            </div>
            <div className={styles.password}>
              <label htmlFor="password">Password</label>

              {!this.state.errors.password.length ? (
                <span></span>
              ) : (
                <span>{`Your password must contain: ${this.state.errors.password.join(
                  ', ',
                )}`}</span>
              )}
              <input
                type="password"
                id="password"
                value={this.state.password}
                onChange={this.handleChange}
                required
              ></input>
            </div>
            <div className={styles.confirmPassword}>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input type="password" id="confirmPassword" required></input>
            </div>
            <div className={styles.profileType}>
              <label htmlFor="profileTypeContainer">Profile Type</label>
              <div className={styles.buttonContainer} id="profileTypeContainer">
                <button
                  type="button"
                  name="Ind_prof"
                  onClick={this.handleButtonClick}
                  className={styles.profileBtn}
                >
                  Indivudual/Professional
                </button>
                <button
                  type="button"
                  name="Band"
                  onClick={this.handleButtonClick}
                  className={styles.profileBtn}
                >
                  Band
                </button>
                <button
                  type="button"
                  name="Org_biz"
                  onClick={this.handleButtonClick}
                  className={styles.profileBtn}
                >
                  Organization/Business
                </button>
              </div>
            </div>

            <div className={styles.switch}>
              <p>Already have an account?</p>
              <a
                tabIndex="0"
                className={styles.bold}
                onClick={this.props.switchHandle}
              >
                Sign in.
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

export default SignUpModal;
