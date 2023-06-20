import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import MainNavbar from './components/MainNavbar';
import GardenCenter from './components/pages/GardenCenter';
import FAQ from './components/pages/FAQ';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <MainNavbar />

          <Routes>
            <Route path='/' element = {<Home />} />
            <Route path='/AboutUs' element = {<AboutUs />} />
            <Route path='/GardenCenter' element = {<GardenCenter />} />
            <Route path='/FAQ' element = {<FAQ />} />

          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
