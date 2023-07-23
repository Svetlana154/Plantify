import { useState } from 'react';

import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/esm/Form";
import Container from "react-bootstrap/esm/Container";
import InputGroup from 'react-bootstrap/InputGroup';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useRef } from 'react';
import {useForm} from "react-hook-form";

import "../../styles/SignUp.css";
import officePic from "../../images/office-cropped-square.jpg";
import { Alert } from 'react-bootstrap';
import PromptTooltip from '../PromptTooltip';

function SignUp() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const [validated, setValidated] = useState("");
    const [signUpName, setSignUpName] = useState("");
    const handleUpdateSignUpName = (e) => {setSignUpName(e.target.value)}
    const [signUpEmail, setSignUpEmail] = useState("");
    const handleUpdateSignUpEmail = (e) => {setSignUpEmail(e.target.value)}
    const [signUpPassword, setSignUpPassword] = useState("");
    const handleUpdateSignUpPassword = (e) => {setSignUpPassword(e.target.value)}

    const [showEmailInUse, setShowEmailInUse] = useState(false);
    const handleCloseShowEmailInUse = () => {
        setShowEmailInUse(false);
    }

    const validateFormAndConfirm = (event) => {
        const form = document.getElementById("sign-up-form");
        if (form.checkValidity() === false) {
            doNotAllowContinue(event)
        }
        else {
            console.log("checking if email already in use");
            const allPersonas = localStorage.getItem("allPersonas")
            if (allPersonas && JSON.parse(allPersonas)[signUpEmail]){
                console.log("email already in use!");
                setSignUpEmail("");
                setShowEmailInUse(true)
                doNotAllowContinue(event)
            }
            else {
                console.log("email not in use!");
                setShowEmailInUse(false)
                const newPerson = {}
                newPerson.name = signUpName;
                newPerson.password = signUpPassword;
                newPerson["address street"] = "";
                newPerson["address country"] = "";
                newPerson["address province"] = "";
                newPerson["address postal code"] = "";
                if (allPersonas){
                    console.log("existing parent entry");
                    const newAllPersonas = JSON.parse(allPersonas);
                    newAllPersonas[signUpEmail] = newPerson;
                    localStorage.setItem("allPersonas", JSON.stringify(newAllPersonas));
                }
                else {
                    console.log("new parent entry");
                    const startPersonas = {}
                    startPersonas[signUpEmail] = newPerson;
                    localStorage.setItem("allPersonas", JSON.stringify(startPersonas))
                }                
                setValidated("valid");
                setShow(true);
            }
        }
    }

    const doNotAllowContinue = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setValidated("invalid");
    }

    return(
        <Container className="sign-up">
            <Row>
                <Col className="sign-up-content">
                    <h1 className="mt-4 mb-5">Create a new account</h1>
                    <Form className="sign-up-form" id="sign-up-form" validated={validated}>
                        <Alert variant='danger' show={showEmailInUse} dismissible onClose={handleCloseShowEmailInUse}>This email is already tied to an account. Please use a different email.</Alert>
                        <Row className="mb-5">
                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Label>Name</Form.Label>
                                <InputGroup>
                                    <Form.Control type="text" placeholder="Enter your name" required onChange={handleUpdateSignUpName}/>
                                    <Form.Control.Feedback type='invalid'>No name found</Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <InputGroup>
                                    <Form.Control type="email" placeholder="sample@example.com" required value={signUpEmail} onChange={handleUpdateSignUpEmail}/>
                                    <Form.Control.Feedback type='invalid'>Invalid email entered</Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Row>
                        <Row className="mb-5">
                            <Form.Group as={Col}>
                                <Form.Label>Password</Form.Label>
                                <PromptTooltip 
                                    text="A valid password must contain the following: 
                                        at least one digit (0-9),
                                        at least one lowercase character (a-z),
                                        at least one uppercase character (A-Z).
                                        at least one special character,
                                        at least 8 characters in length."
                                    placement="top" />
                                <InputGroup>
                                    <Form.Control 
                                        type="password"
                                        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                                        name="password"
                                        required
                                        id="sign-up-password-input"
                                        onChange={handleUpdateSignUpPassword}/>
                                    
                                    <Form.Control.Feedback type='invalid'>Invalid password. Make sure it contains all the requirements for a valid password (check the ? for details).</Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formConfirmPassword">
                                <Form.Label>Confirm password</Form.Label>
                                <InputGroup>
                                    <Form.Control 
                                        type="password"
                                        pattern={'^'+signUpPassword+'$'}
                                        required
                                        />
                                    <Form.Control.Feedback type='invalid'>Invalid password entered. Ensure password exists and the passwords entered must match.</Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Row>
                        
                        <Container fluid className="sign-up-action-btn-section">
                            <Button as={Row} variant="outline-dark" type='submit' onClick={validateFormAndConfirm} className="sign-up-action-btn">
                                Sign Up
                            </Button>
                        </Container>
                        
                    </Form>
                </Col>
                <Col>
                    <img src={officePic} className="sign-up-img"/>
                </Col>
            </Row>

            <Modal show={show} onHide={handleClose}>
                <Modal.Body className='w-100 text-align-center'>
                    <h1>Welcome!</h1>
                    <Container fluid>
                        Your account has been created successfully. A confirmation email has been sent! Please follow the link in the email to finish the set-up process.
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" className="w-100" onClick={handleClose} href="/">
                        Back to Homepage
                    </Button>
                </Modal.Footer>
            </Modal>


            
        </Container>
    );
}

export default SignUp;