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
import Chatbot from './components/Chatbot';

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
            <Route path='/' element = {<Home />} />
            <Route path='/AboutUs' element = {<AboutUs />} />
            <Route path='/OurProducts' element = {<OurProducts />} />
            <Route path='/FAQ' element = {<FAQ />} />
            <Route path='/Profile' element = {<Profile />} />
            <Route path='/SignUp' element = {<SignUp />} />
            <Route path='/ProductSelected' element = {<ProductSelected />} />
            <Route path='/ShoppingCart' element = {<ShoppingCart />} />
            <Route path='/Checkout' element = {<Checkout />} />
            <Route path='/ThankYou' element = {<ThankYou />} />

          </Routes>
          
          <ModalManager modalData={modalData} />
          <Chatbot />

          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
