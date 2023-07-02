import { useState, useEffect } from 'react';

import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";

import "../styles/SignInModal.css";


function SignInModal({promptState, promptCloseCallback, promptSwitchToRecoveryModalCallback}) {
    var initState = (promptState === true) ? true : false;

    const handleSignInModalClose = () => {promptCloseCallback()};
    const handleSwitchToRecoveryModal = () => {promptSwitchToRecoveryModalCallback()};

  return (
    <>
        <Modal show={initState} onHide={handleSignInModalClose}>
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
                            <a href="javascript:void(0);" onClick={handleSwitchToRecoveryModal}>
                                Forgot your password?
                            </a>
                        </Col>
                    </Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" className="w-100" onClick={handleSignInModalClose} href="#/Profile">
                    Sign In
                </Button>
                <Container fluid className='log-in-prompt'>
                    <div>Don't have an account?</div>
                    <a href='#/SignUp' onClick={handleSignInModalClose}>Sign Up</a>
                </Container>
            </Modal.Footer>
        </Modal>



    </>
  );
}

export default SignInModal;