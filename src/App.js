import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import './App.css';
import Stills from './Components/Stills/Stills';

function App() {

  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedVideoHeader, setSelectedVideoHeader] = useState(false);

  const handleHoveredProject = (project) => {
    setHoveredProject(project);
  }

  const handleSelectedVideoHeader = (selected) => {
    console.log(selected);
    setSelectedVideoHeader(selected);
  }

  return (
    <Router>
      <div className="app-container">
        <div
          className='background-image'
          style={{
            opacity: hoveredProject !== null ? 1 : 0,
            backgroundImage: hoveredProject ? `url(${hoveredProject.gif})` : 'none',
          }}>
        </div>
        <Header selected={selectedVideoHeader} setSelectedVideoHeader={setSelectedVideoHeader}  hoveredProject={hoveredProject}/>
        <Routes>
          <Route path="/" element={<Main setHoveredProject={handleHoveredProject} setSelectedVideoHeader={handleSelectedVideoHeader}/>} />
          <Route path="/stills" element={<Stills />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
