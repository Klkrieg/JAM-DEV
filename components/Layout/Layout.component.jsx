import Head from 'next/head';
import React from 'react';

import Footer from '../Footer/Footer.component';
import Navbar from '../Navbar/Navbar.component';
import styles from './Layout.module.scss';

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }
  handleModalOpen() {}
  render() {
    return (
      <div>
        <Head>
          <title>JAM: Joining All Musicians</title>
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <Navbar />
        {this.props.children}
        <Footer className={styles.footer} />
      </div>
    );
  }
}

export default Layout;
