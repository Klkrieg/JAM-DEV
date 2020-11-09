import Axios from 'axios';
import React from 'react';

import styles from './Footer.module.scss';

const Footer = () => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');

  const handleSubscribeClick = async (e) => {
    e.preventDefault();

    try {
      // TODO: Sign up and handle response
      // eslint-disable-next-line no-unused-vars
      const response = await Axios.post('api/newsletter', {
        email,
        firstName,
        lastName,
      });

      setFirstName('');
      setLastName('');
      setEmail('');
    } catch (e) {
      console.log(`Signup error: ${e}`);
    }
  };

  return (
    <div>
      <footer className={styles.footerContainer}>
        <div className={styles.logoContainer}>
          <img alt="JAM logo" src="assets/jam-logo-1.png"></img>
          <p>Austin, Texas</p>
        </div>
        <div className={styles.contactContainer}>
          <h2>CONTACT INFO</h2>
          <p>info@joiningallmusicians.com</p>
        </div>
        <div className={styles.subscribeContainer}>
          <form className="newsForm">
            <h2>STAY TUNED</h2>
            <input
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            ></input>
            <input
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            ></input>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <button type="submit" onClick={handleSubscribeClick}>
              Subscribe
            </button>
          </form>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
