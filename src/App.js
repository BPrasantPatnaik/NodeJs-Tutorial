import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Introduction from './components/Introduction/Introduction';
import Setup from './components/Setup/Setup';
import Modules from './components/Modules/Modules';
import Npm from './components/NPM/Npm';
import WebServer from './components/WebServer/WebServer';
import FileSystem from './components/FileSystem/FileSystem';
import Debugging from './components/Debugging/Debugging';
import Events from './components/Events/Events';
import Express from './components/Express/Express';
import StaticResources from './components/StaticResources/StaticResources';
import Database from './components/Database/Database';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/setup" element={<Setup />} />
        <Route path="/modules" element={<Modules />} />
        <Route path="/npm" element={<Npm />} />
        <Route path="/web-server" element={<WebServer />} />
        <Route path="/file-system" element={<FileSystem />} />
        <Route path="/debugging" element={<Debugging />} />
        <Route path="/events" element={<Events />} />
        <Route path="/express" element={<Express />} />
        <Route path="/static-resources" element={<StaticResources />} />
        <Route path="/database" element={<Database />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
