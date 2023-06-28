import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MainNavbar from './components/MainNavbar';
import Footer from './components/Footer'
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import OurProducts from './components/pages/OurProducts';
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
            <Route path='/OurProducts' element = {<OurProducts />} />
            <Route path='/FAQ' element = {<FAQ />} />

          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
