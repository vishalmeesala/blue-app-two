import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services'; // Import the Services component
import Products from './components/pages/Products'; // Import the Products component
import SignUp from './components/pages/SignUp'; // Import the SignUp component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/services' element={<Services />} /> {/* Add Services route */}
          <Route path='/products' element={<Products />} /> {/* Add Products route */}
          <Route path='/sign-up' element={<SignUp />} /> {/* Add SignUp route */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
