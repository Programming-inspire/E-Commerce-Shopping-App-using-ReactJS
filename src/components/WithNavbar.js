// WithNavbar.js
import React from 'react';
import Navbar from './Navbar';

const WithNavbar = (WrappedComponent) => {
  return (props) => (
    <div>
      <Navbar />
      <WrappedComponent {...props} />
    </div>
  );
};

export default WithNavbar;
