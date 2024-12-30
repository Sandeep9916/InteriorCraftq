// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './assets/components/Layout';  // Import the Layout component
import Home from './assets/Pages/Home';  // Import the Home page
import Portfolio from './assets/Pages/Portfolio';  // Import the Portfolio page
import AboutUs from './assets/Pages/AboutUs';  // Import the About Us page
import Services from './assets/Pages/Services';  // Import the Services page
import Process from './assets/Pages/Process';
import Contact from './assets/Pages/ContactUs';  // Import the Contact page

function App() {
  return (
    <Router>
      {/* Layout wraps the content of every page */}
      <Layout>
        <Routes>
          {/* Define all your routes here */}
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/Process" element={<Process />} />
          <Route path="/contact" element={<Contact />} />

          
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
