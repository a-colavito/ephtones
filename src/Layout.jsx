// src/Layout.jsx
import React from 'react';
import Navbar from './components/common/Navbar/Navbar';
import Footer from './components/common/Footer/Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
