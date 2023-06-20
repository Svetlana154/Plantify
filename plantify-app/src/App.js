import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import MainNavbar from './components/MainNavbar';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <MainNavbar />

          <Routes>
            <Route path='/' element = {<Home />} />
            <Route path='/AboutUs' element = {<AboutUs />} />

          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
