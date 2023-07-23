import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
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
import PageNotFound from './components/pages/PageNotFound';
import productData from "./data/products.json";
import filtersData from "./data/filters.json";
import i18n from './i18n';
import LangContext from './LangContext';
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
    setModalData({...allModalData});
  };

  const [lang, setLocale] = useState(i18n.language);
  i18n.on('languageChanged', () => setLocale(i18n.language));

  return (
    <div className="App">
      <LangContext.Provider value={{lang, setLocale}}>
        <Router>
          <div>
            <MainNavbar promptSignIn={promptSignIn} />

            <Routes>
              <Route path='/' element = {<Home />} />
              <Route path='/AboutUs' element = {<AboutUs />} />
              <Route path='/OurProducts' element = {<OurProducts productData={productData} filters={filtersData}/>} />
              <Route path='/FAQ' element = {<FAQ />} />
              <Route path='/Profile' element = {<Profile />} />
              <Route path='/SignUp' element = {<SignUp />} />
              <Route path='/ProductSelected' element = {<ProductSelected />} />
              <Route path='/ShoppingCart' element = {<ShoppingCart promptSignIn={promptSignIn}/>} />
              <Route path='/Checkout' element = {<Checkout />} />
              <Route path='/ThankYou' element = {<ThankYou />} />
              <Route path='*' element = {<PageNotFound />} />

            </Routes>
            
            <ModalManager modalData={modalData} />
            <Chatbot />

            <Footer />
          </div>
        </Router>

      </LangContext.Provider>
    </div>
  );
}

export default App;
