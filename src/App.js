import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Experience from './Components/Experience';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Tech from './Components/Tech';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<HomePage/>} />
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
