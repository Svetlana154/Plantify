import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";

import "../styles/SignInModal.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Alert } from "react-bootstrap";


function SignInModal({promptState, promptCloseCallback, promptSwitchToRecoveryModalCallback}) {
    var initState = (promptState === true) ? true : false;

    const navigate = useNavigate();

    const handleProcessSignInModalClose = (event) => {
        const form = document.getElementById("sign-in-form");
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            setValidated("invalid");
        }
        else {
            if (checkEmailAndPasswordMatch()) {
                setValidated("valid");
                promptCloseCallback()
            }
            else {
                event.preventDefault();
                event.stopPropagation();
                setValidated("invalid");
            }
        }
    };

    const checkEmailAndPasswordMatch = () => {
        const keepSignedIn = document.getElementById("sign-in-keep-signed-in").checked;

        const person = JSON.parse(localStorage.getItem("allPersonas"));
        
        if ((person) && (person[signInEmail]) && person[signInEmail].password === signInPassword) {
            localStorage.setItem("activeAccount", signInEmail)
            return true;
        }

        setSignInEmail("");
        setSignInPassword("");
        setShowInvalidAlert(true);
        return false
    }

    const handleSignInModalClose = () => {promptCloseCallback()}

    const handleSwitchToRecoveryModal = () => {promptSwitchToRecoveryModalCallback()};

    const [validated, setValidated] = useState("");
    const [signInEmail, setSignInEmail] = useState("");
    const handleSignInEmail = (e) => {setSignInEmail(e.target.value)}
    const [signInPassword, setSignInPassword] = useState("");
    const handleSignInPassword = (e) => {setSignInPassword(e.target.value)}
    const [showInvalidAlert, setShowInvalidAlert] = useState(false);
    const handleCloseInvalidAlert = () => {setShowInvalidAlert(false)}


  return (
    <>
        <Modal show={initState} onHide={handleSignInModalClose}>
            <Modal.Header closeButton>
                <Modal.Title>Sign In</Modal.Title>
            </Modal.Header>
            <Modal.Body className='w-100'>
                <Button variant="outline-secondary" className='w-100 mb-2' href="https://www.facebook.com/" target="_blank">
                    Sign in with Facebook
                </Button>
                <Button variant="outline-secondary" className='w-100 mb-2' href="https://accounts.google.com/signin" target="_blank">
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
                <Form validated={validated} id="sign-in-form">
                    <Alert variant="danger" show={showInvalidAlert} dismissible onClose={handleCloseInvalidAlert}>No such email/password found.</Alert>
                    <Form.Group className="mb-3" id="sign-in-email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control id="sign-in-email-input"
                            type="email"
                            placeholder="name@example.com"
                            required
                            value={signInEmail}
                            onChange={handleSignInEmail}
                        />
                        <Form.Control.Feedback type='invalid'>Not a valid email.</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" id="sign-in-password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control id="sign-in-password-input"
                            type="password"
                            required
                            value={signInPassword}
                            onChange={handleSignInPassword}
                        />
                        <Form.Control.Feedback type='invalid'>Not a valid password.</Form.Control.Feedback>
                    </Form.Group>
                    <Row className="mb-2">
                        <Col md={7}>
                            <Form.Check type="checkbox" label="Keep me signed in" id="sign-in-keep-signed-in" defaultChecked />
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
                <Button variant="secondary" className="w-100" type="submit" onClick={handleProcessSignInModalClose}>
                    Sign In
                </Button>
                <Container fluid className='log-in-prompt'>
                    <div>Don't have an account?</div>
                    <a href='/SignUp' onClick={handleSignInModalClose}>Sign Up</a>
                </Container>
            </Modal.Footer>
        </Modal>



    </>
  );
}

export default SignInModal;