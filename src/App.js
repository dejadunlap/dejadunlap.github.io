import './App.css';
import Project from './pages/project';
import Home from './pages/home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-wrapper">
      <Router >
        <Navbar/>
        <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
        </Routes>
        </div>
      </Router>
      <Footer />
    </div>
    
  );
}

export default App;
