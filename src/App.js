import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import './App.css';
import Stills from './Components/Stills/Stills';
import Contact from './Components/Contact/Contact';

function App() {

  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedVideoHeader, setSelectedVideoHeader] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleHoveredProject = (project) => {
    setHoveredProject(project);
  }

  const handleSelectedVideoHeader = (selected) => {
    console.log(selected);
    setSelectedVideoHeader(selected);
  }

  const handleSelectedVideo = (video) => {
    setSelectedVideo(video);
  }

  return (
    <Router>
      <div className={`app-container ${selectedVideoHeader ? 'selected' : ''}`}>
        <div
          className='background-image'
          style={{
            opacity: hoveredProject !== null ? 1 : 0,
            // backgroundImage: hoveredProject ? `url(${hoveredProject.gif})` : 'none',
          }}>
          {hoveredProject && (
            <video autoPlay muted loop id="myVideo">
              <source src={hoveredProject.preview} type="video/mp4" />
            </video>
          )}
        </div>
        <Header selected={selectedVideoHeader} setSelectedVideoHeader={setSelectedVideoHeader} hoveredProject={hoveredProject} setSelectedVideo={handleSelectedVideo} />
        <Routes>
          <Route path="/" element={<Main setHoveredProject={handleHoveredProject} setSelectedVideoHeader={handleSelectedVideoHeader} selectedVideo={selectedVideo} setSelectedVideo={handleSelectedVideo} />} />
          <Route path="/stills" element={<Stills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router >
  );
}

export default App;
