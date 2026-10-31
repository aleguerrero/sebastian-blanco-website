import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Main from './Pages/Main/Main';
import './App.css';
import Info from './Pages/Info/Info';
import ProjectViewer from './Pages/ProjectViewer/ProjectViewer';
import Diary from './Pages/Diary/Diary';

function App() {

  return (
    <Router>
      <div className="app-container">
        <div className='app-block'>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/info" element={<Info />} />
            <Route path="/projects/:slug" element={<ProjectViewer />} />
            <Route path="/diary" element={<Diary />} />
          </Routes>
        </div>
      </div>
    </Router >
  );
}

export default App;
