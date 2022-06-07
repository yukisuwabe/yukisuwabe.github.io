import './App.css';
import React from 'react';
import NavBar from './components/Navbar';
import Home from './pages/index';
import About from './pages/about';
import Projects from './pages/projects';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
      </Routes>
    </Router>
  );
}

export default App;
