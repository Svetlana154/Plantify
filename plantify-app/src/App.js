import './App.css';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import MainNavbar from './components/MainNavbar';
import Footer from './components/Footer'
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import OurProducts from './components/pages/OurProducts';
import FAQ from './components/pages/FAQ';
import Profile from './components/pages/Profile';
import SignUp from './components/pages/SignUp';
import ProductSelected from './components/pages/ProductSelected';
import Checkout from './components/pages/Checkout';
import ThankYou from './components/pages/ThankYou';
import Location from './components/Location';

import "./styles/SignInModal.css";
import ModalManager from './components/ModalManager';
import ShoppingCart from './components/pages/ShoppingCart';

function App() {
  var allModalData = {
    modalState: 0
  }

  const [modalData, setModalData] = useState('');

  const promptSignIn = () => {
    allModalData.modalState = 1;
    setModalData(allModalData);
  };

  return (
    <div className="App">
      <Router>
        <div>
          <MainNavbar promptSignIn={promptSignIn}/>

          <Routes>
            <Route path='Plantify/' element = {<Home />} />
            <Route path='Plantify/AboutUs' element = {<AboutUs />} />
            <Route path='Plantify/OurProducts' element = {<OurProducts />} />
            <Route path='Plantify/FAQ' element = {<FAQ />} />
            <Route path='Plantify/Profile' element = {<Profile />} />
            <Route path='Plantify/SignUp' element = {<SignUp />} />
            <Route path='Plantify/ProductSelected' element = {<ProductSelected />} />
            <Route path='Plantify/ShoppingCart' element = {<ShoppingCart />} />
            <Route path='Plantify/Checkout' element = {<Checkout />} />
            <Route path='Plantify/ThankYou' element = {<ThankYou />} />

          </Routes>
          
          <ModalManager modalData={modalData} />

          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
