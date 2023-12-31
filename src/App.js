import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Experience from './Components/Experience';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Tech from './Components/Tech';
import HomePage from './Pages/HomePage';
import More_About_me from './Components/More_About_me';
import Resume from './Components/Resume';
import Mouse from './MouseMove';
import MovingText from './HorizontalScrollText';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<HomePage/>} />
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/skills' element={<Tech/>} />
          <Route exact path='/More_About_me' element={<More_About_me/>} />
          <Route exact path='/projects' element={<HomePage/>} />
          <Route exact path='/resume' element={<Resume/>} />
          <Route exact path='/mouse' element={<Mouse/>} />

         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
