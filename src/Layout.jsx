import React from 'react';
import Navbar from './components/common/Navbar/Navbar';
import Footer from './components/common/Footer/Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-slate-50">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
