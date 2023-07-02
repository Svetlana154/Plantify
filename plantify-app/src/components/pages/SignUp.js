import { useState } from 'react';

import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/esm/Form";
import Container from "react-bootstrap/esm/Container";
import InputGroup from 'react-bootstrap/InputGroup';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import "../../styles/SignUp.css";
import officePic from "../../images/office-cropped-square.jpg";

function SignUp() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <Container className="sign-up">
            <Row>
                <Col className="sign-up-content">
                    <h1 className="mt-4 mb-5">Create a new account</h1>
                    <Form className="sign-up-form">
                        <Row className="mb-5">
                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Label>Name</Form.Label>
                                <InputGroup>
                                    <Form.Control type="text" placeholder="John Doe"/>
                                </InputGroup>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <InputGroup>
                                    <Form.Control type="email" placeholder="email@example.com"/>
                                </InputGroup>
                            </Form.Group>
                        </Row>
                        <Row className="mb-5">
                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Label>Password</Form.Label>
                                <InputGroup>
                                    <Form.Control type="password"/>
                                </InputGroup>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Confirm password</Form.Label>
                                <InputGroup>
                                    <Form.Control type="password"/>
                                </InputGroup>
                            </Form.Group>
                        </Row>
                        
                        <Container fluid className="sign-up-action-btn-section">
                            <Button as={Row} variant="outline-dark" onClick={handleShow} className="sign-up-action-btn">
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
                    <Button variant="secondary" className="w-100" onClick={handleClose} href="#/">
                        Back to Homepage
                    </Button>
                </Modal.Footer>
            </Modal>


            
        </Container>
    );
}

export default SignUp;