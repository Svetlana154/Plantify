import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/esm/Form";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import InputGroup from 'react-bootstrap/InputGroup';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

import "../styles/ProfileForm.css";

function ProfileForm ({readOnly}) {
    return(
        <Form className="profile-form">
            <Row className="mb-5">
                <h3 className="mb-4">Personal Information </h3>

                <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Name</Form.Label>
                    <InputGroup>
                        <Form.Control type="text" disabled placeholder="John Doe" aria-describedby="edit-name"/>
                        <InputGroup.Text id="edit-name">
                            <FontAwesomeIcon icon={faPencil} size="lg" />
                        </InputGroup.Text>
                    </InputGroup>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <InputGroup>
                        <Form.Control type="email" disabled placeholder="email@example.com" aria-describedby="edit-email"/>
                        <InputGroup.Text id="edit-email">
                            <FontAwesomeIcon icon={faPencil} size="lg" />
                        </InputGroup.Text>
                    </InputGroup>
                </Form.Group>
            </Row>

            <Container className="form-change-password">
                <Row className="mb-3">
                    <h3 className="mt-3 mb-4">Change Password </h3>
        
                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Old Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter the old password" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter the new password" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Confirm New Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter the new password again" />
                    </Form.Group>
                </Row>
            </Container>
            

            <h3 className="mt-5 mb-4">Shipping Address </h3>

            <Form.Group as={Row} className="mb-3" controlId="formGridAddressStreet">
                <Form.Label>Street</Form.Label>
                <InputGroup>
                    <Form.Control type="text" disabled placeholder="1234 Main st." aria-describedby="edit-address-street"/>
                    <InputGroup.Text id="edit-address-street">
                        <FontAwesomeIcon icon={faPencil} size="lg" />
                    </InputGroup.Text>
                </InputGroup>
            </Form.Group>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridAddressState">
                    <Form.Label>State</Form.Label>
                    <InputGroup>
                        <Form.Control type="text" disabled placeholder="Ontario" aria-describedby="edit-address-state"/>
                        <InputGroup.Text id="edit-address-state">
                            <FontAwesomeIcon icon={faPencil} size="lg" />
                        </InputGroup.Text>
                    </InputGroup>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridAddressCountry">
                    <Form.Label>Country</Form.Label>
                    <InputGroup>
                        <Form.Control type="text" disabled placeholder="Canada" aria-describedby="edit-address-country"/>
                        <InputGroup.Text id="edit-address-country">
                            <FontAwesomeIcon icon={faPencil} size="lg" />
                        </InputGroup.Text>
                    </InputGroup>
                </Form.Group>


                <Form.Group as={Col} controlId="formGridAddressPostalCode">
                    <Form.Label>Postal Code</Form.Label>
                    <InputGroup>
                        <Form.Control type="text" disabled placeholder="A1B 2C3" aria-describedby="edit-address-postal-code"/>
                        <InputGroup.Text id="edit-address-postal-code">
                            <FontAwesomeIcon icon={faPencil} size="lg" />
                        </InputGroup.Text>
                    </InputGroup>
                </Form.Group>
            </Row>

            <Row className="mt-5">
                <Button as={Col} variant="outline-dark" type="submit" className="profile-action-btn">
                    Clear changes
                </Button>
                <Button as={Col} variant="dark" type="submit" className="profile-action-btn">
                    Save changes
                </Button>

            </Row>
        </Form>
    );
}

export default ProfileForm;