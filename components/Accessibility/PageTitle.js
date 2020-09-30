import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

const PageTitle = ({ title }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <h1 style={{ display: 'none' }}>{title}</h1>
  </>
);

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageTitle;
