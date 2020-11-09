import React from 'react';

import styles from './SignUpModal.module.scss';
import validator from '../utils/passwordValidator';

const SignUpModal = ({ switchHandle }) => {
  const [form, setForm] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    zipCode: '',
    password: '',
    profileType: '',
  });

  const [errors, setErrors] = React.useState({
    email: '',
    zipCode: '',
    password: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handlePasswordChange = (password) => {
    let passwordErrors = validator(password);
    if (passwordErrors.length > 0) {
      const errorMessages = passwordErrors.map((error) => {
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

      setErrors({
        ...errors,
        password: errorMessages,
      });
    } else {
      setErrors({
        ...errors,
        password: [],
      });
    }
  };

  const handleChange = (e) => {
    let id = e.target.id;
    let value = e.target.value;
    if (id == 'password') {
      handlePasswordChange(value);
    }

    setForm({
      ...form,
      [id]: value,
    });
  };

  const handleButtonClick = (e) => {
    setForm({
      ...form,
      profileType: e.target.name,
    });
  };

  return (
    <div>
      <div className={styles.modal}>
        <h1>Sign up</h1>
        <form className={styles.SignUpModal} onSubmit={handleSubmit}>
          <div className={styles.fName}>
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              id="firstName"
              value={form.firstName}
              onChange={handleChange}
              required
            ></input>
          </div>
          <div className={styles.lName}>
            <label htmlFor="lastName">Last name</label>
            <input
              type="text"
              id="lastName"
              value={form.lastName}
              onChange={handleChange}
              required
            ></input>
          </div>
          <div className={styles.email}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              value={form.email}
              onChange={handleChange}
              required
            ></input>
          </div>
          <div className={styles.zip}>
            <label htmlFor="zipcode">Zip code</label>
            <input
              type="text"
              id="zipCode"
              value={form.zipcode}
              onChange={handleChange}
              required
            ></input>
          </div>
          <div className={styles.password}>
            <label htmlFor="password">Password</label>
            {errors.password.length > 0 && (
              <span>{`Your password must contain: ${this.state.errors.password.join(
                ', ',
              )}`}</span>
            )}
            <input
              type="password"
              id="password"
              value={form.password}
              onChange={handleChange}
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
                onClick={handleButtonClick}
                className={styles.profileBtn}
              >
                Indivudual/Professional
              </button>
              <button
                type="button"
                name="Band"
                onClick={handleButtonClick}
                className={styles.profileBtn}
              >
                Band
              </button>
              <button
                type="button"
                name="Org_biz"
                onClick={handleButtonClick}
                className={styles.profileBtn}
              >
                Organization/Business
              </button>
            </div>
          </div>

          <div className={styles.switch}>
            <p>Already have an account?</p>
            <a className={styles.bold} onClick={switchHandle}>
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
};

export default SignUpModal;
