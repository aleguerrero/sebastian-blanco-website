import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import './App.css';

function App() {

  const [hoveredProject, setHoveredProject] = useState(null);

  const handleHoveredProject = (project) => {
    setHoveredProject(project);
  }

  return (
    <Router>
      <div className="container">
        <div
          className='background-image'
          style={{
            opacity: hoveredProject !== null ? 1 : 0,
            backgroundImage: hoveredProject ? `url(${hoveredProject.gif})` : 'none',
          }}>
        </div>
        <Header />
        <Routes>
          <Route path="/" element={<Main setHoveredProject={handleHoveredProject} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
