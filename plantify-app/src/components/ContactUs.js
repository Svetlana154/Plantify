import Container from "react-bootstrap/esm/Container";
import Alert from "react-bootstrap/esm/Alert";
import "../styles/ContactUs.css";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import Button from "react-bootstrap/esm/Button";


function ContactUs () {
    return (
        <Container className="contact-us" id="ContactUs">
            <Row>
                <Col>
                    <Container className="contact-us-other">
                        <h2>Have a question? Contact Us!</h2>
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
                <Col>
                    <Container>
                        <textarea id="client-response" rows="8" cols="80"></textarea>
                    </Container>
                    <Container>
                        <Alert variant="success">
                            Message has been sent successfully!
                        </Alert>
                        <Button variant="dark" className="float-end">
                            Send
                        </Button>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}

export default ContactUs;