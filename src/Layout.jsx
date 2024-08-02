import React from 'react';
import Navbar from './components/common/Navbar/Navbar';
import Footer from './components/common/Footer/Footer';


const Layout = ({ children }) => {
  return (
   
    <div>
    
      <Navbar />
      <main className="flex items-center justify-center min-h-screen bg-slate-50">{children}</main>
      <Footer />
    </div>
     
   
  );
};

export default Layout;
