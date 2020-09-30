import React from 'react';
import PropTypes from 'prop-types';
import base from '../../styles/base.css';
import normalizeCss from '../../styles/normalize.css';
import Header from '../Header';

const Layout = ({ children }) => (
  <>
    <style jsx global>
      {base}
    </style>
    <style jsx global>
      {normalizeCss}
    </style>
    <Header />
    <div role="main" style={{ position: 'relative' }}>
      {children}
    </div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
