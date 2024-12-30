// src/components/Layout.jsx
import React from 'react';
import Navbar from './Navbar';  // Import the Navbar component
import Footer from './Footer';  // Import the Footer component

function Layout({ children }) {  // The 'children' prop will hold the page content
  return (
    <div>
      <Navbar />  {/* Always show the Navbar */}
      <main>{children}</main>  {/* This is where the page content will go */}
      <Footer />  {/* Always show the Footer */}
    </div>
  );
}

export default Layout;
