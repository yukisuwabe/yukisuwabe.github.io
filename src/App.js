import './App.css';
import React from 'react';
import NavBar from './components/Navbar';
import Home from './pages/index';
import About from './pages/about';
import Projects from './pages/projects';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
