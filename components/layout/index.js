import React from 'react';
import PropTypes from 'prop-types';
import Drawer from 'components/drawer';
import Head from 'next/head';
import Appbar from 'components/app-bar';
import Footer from 'components/footer';

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Vorágine Backoffice</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Appbar />
    <main>
      {children}
    </main>
    <Drawer />
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
