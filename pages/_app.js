/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import wrapper from 'redux/store';
import Loader from 'components/loader';
import Layout from 'components/layout';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  const { name } = Component;

  if (name === 'Login') {
    return <Component {...pageProps} />;
  }

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Loader />
    </>
  );
};

export default wrapper.withRedux(MyApp);
