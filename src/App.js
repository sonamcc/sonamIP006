import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import HeroSection from './components/HeroSection';
import Courses from './components/Courses'; 
import Teachers from './components/Teachers'; // Import the Teachers component
import About from './components/About'; // Import the About component

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroSection />} /> {/* Home route */}
          <Route path="/courses" element={<Courses />} /> {/* Courses route */}
          <Route path="/teachers" element={<Teachers />} /> {/* Teachers route */}
          <Route path="/about" element={<About />} /> {/* About route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
