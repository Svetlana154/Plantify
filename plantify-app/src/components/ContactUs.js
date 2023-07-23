import Container from "react-bootstrap/esm/Container";
import Alert from "react-bootstrap/esm/Alert";
import "../styles/ContactUs.css";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import Button from "react-bootstrap/esm/Button";
import { useState } from "react";
import Form from "react-bootstrap/esm/Form";


function ContactUs () {
    const success = 
    <Alert variant="success" onClose={() => setDisplayAlert(<></>)} dismissible>
        Message has been sent successfully!
    </Alert>

    const error = 
    <Alert variant="danger" onClose={() => setDisplayAlert(<></>)} dismissible>
        No message detected! Please enter a message before hitting send.
    </Alert>

    const [displayAlert, setDisplayAlert] = useState(<></>);

    const processContactUsForm = (event) => {
        const formInput = document.getElementById("contact-us-input");
        if (!formInput.value || formInput.value.trim().length <= 0) {
            setDisplayAlert(error)
        }
        else {
            setDisplayAlert(success)
            document.getElementById("contact-us-input").value = "";
        }
    }

    return (
        <Container fluid className="contact-us-container">
            <Row className="contact-us" id="ContactUs">
                <Col md="4">
                    <Container className="contact-us-other">
                        <h2>Have a question? Contact Us</h2>
                    </Container>
                    <Container className="contact-us-other">
                        <FontAwesomeIcon icon={faPhone} className='contact-us-other-icon'/>
                        <span>
                            +1 (343) 543-3456
                        </span>
                    </Container>
                    <Container className="contact-us-other">
                        <FontAwesomeIcon icon={faEnvelope} className='contact-us-other-icon'/>
                        <span>
                            customer-service@plantify.com
                        </span>
                    </Container>
                </Col>
                <Col md="4">
                    <Container>
                        <Form.Group className="mb-3">
                            <Form.Control as="textarea" rows={5} id="contact-us-input"/>
                        </Form.Group>
                    </Container>
                    <Container>
                        {displayAlert}
                        <Button variant="light" className="float-end" onClick={processContactUsForm}>
                            Send
                        </Button>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}

export default ContactUs;