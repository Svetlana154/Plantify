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

import "./styles/SignInModal.css";
import ModalManager from './components/ModalManager';

function App() {
  var allModalData = {
    modalState: 0
  }

  const [modalData, setModalData] = useState('');

  const promptSignIn = () => {
    allModalData.modalState = 1;
    setModalData(allModalData);
    console.log("=================\nApp received prompt for: " + modalData.modalState);
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

          </Routes>
          
          {/* Recovery Password Modal */}
          {/* <Modal show={showRecoveryPasswordModal} onHide={handleRecoveryPasswordModalClose}>
              <Modal.Body className='w-100 text-align-center'>
                  <h1>Oh no!</h1>
                  <Container fluid>
                      Forgot your password? Don't worry! We have sent a temporary recovery password to your email. Use it to sign into your account and set your new password!
                  </Container>
              </Modal.Body>
              <Modal.Footer>
                  <Button variant="secondary" className="w-100" onClick={() => {promptSignIn();}}>
                      Sign In
                  </Button>
              </Modal.Footer>
          </Modal> */}
          {/* <RecoveryPasswordModal promptRecoveryPassword={promptRecoveryPassword}/> */}
          <ModalManager modalData={modalData} />

          {/* Sign In Modal */}
          {/* <Modal show={showSignInModal} onHide={handleSignInModalClose}>
            <Modal.Header closeButton>
                <Modal.Title>Sign In</Modal.Title>
            </Modal.Header>
            <Modal.Body className='w-100'>
                <Button variant="outline-secondary" className='w-100 mb-2'>
                    Sign in with Facebook
                </Button>
                <Button variant="outline-secondary" className='w-100 mb-2'>
                    Sign in with Google
                </Button>
                <Row className='mt-2 mb-2'>
                    <Col className='g-0'>
                        <hr/>
                    </Col>
                    <Col className='g-0'>
                        <Container className='or-divider'>OR</Container>
                    </Col>
                    <Col className='g-0'>
                        <hr/>
                    </Col>
                </Row>
                <Form>
                    <Form.Group className="mb-3" id="exampleForm.ControlInput1">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="name@example.com"
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" id="exampleForm.ControlInput2">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                        />
                    </Form.Group>
                    <Row className="mb-2">
                        <Col md={7}>
                            <Form.Check type="checkbox" label="Keep me signed in" id="exampleForm.ControlInput2" />
                        </Col>
                        <Col>
                            <a href="" onClick={handlePromptRecoveryPassword}>
                                Forgot your password?
                            </a>
                        </Col>
                    </Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" className="w-100" onClick={handleSignInModalClose}>
                    Sign In
                </Button>
                <Container fluid className='log-in-prompt'>
                    <div>Don't have an account?</div>
                    <a href='/SignUp' onClick={handleSignInModalClose}>Sign Up</a>
                </Container>
            </Modal.Footer>
          </Modal> */}

          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
