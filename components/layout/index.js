import React from 'react';
import PropTypes from 'prop-types';
import Drawer from 'components/drawer';
import Head from 'next/head';
import Appbar from 'components/app-bar';

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
    <footer>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by
        {' '}
        <img src="/vercel.svg" alt="Vercel Logo" />
      </a>
    </footer>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
