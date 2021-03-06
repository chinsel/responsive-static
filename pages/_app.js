import React from 'react';
import Layout from '../components/Layout';

// eslint-disable-next-line react/prop-types
const MyApp = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default MyApp;
