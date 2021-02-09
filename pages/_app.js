/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import wrapper from 'redux/store';
import Loader from 'components/loader';
import Layout from 'components/layout';
import { useRouter } from 'next/router';
import { LOGIN_PATHNAME } from 'utils/constants/pathnames';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <>
      {router.pathname === LOGIN_PATHNAME ? <Component {...pageProps} /> : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
      <Loader />
    </>
  );
};

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default wrapper.withRedux(MyApp);
