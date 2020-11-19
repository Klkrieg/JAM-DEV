import Head from 'next/head';
import React from 'react';

import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ title = 'JAM | Joining All Musicians', children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
