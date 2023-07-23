import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/esm/Form";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import InputGroup from 'react-bootstrap/InputGroup';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

import "../styles/ProfileForm.css";
import { useNavigate } from "react-router-dom";

function ProfileForm () {
    const [profileDetails, setProfileDetails] = useState("");
    const [profileEmail, setProfileEmail] = useState("");
    
    const handleProcessFormAndSaveChanges = () => {
        const savedData = JSON.parse(localStorage.getItem("allPersonas"));
        savedData[profileEmail] = profileDetails;
        localStorage.setItem("allPersonas", JSON.stringify(savedData));
        resetBackToDisbled();
    }

    const resetBackToDisbled = () => {
        const newInputDisabled = inputDisabled;
        for (let field in inputDisabled){
            newInputDisabled[field] = true;
        }
        setInputDisabled({...newInputDisabled});
    }
    
    const handleClearForm = () => {
        const savedData = (JSON.parse(localStorage.getItem("allPersonas")))[profileEmail];
        setProfileDetails(savedData);
        resetBackToDisbled();
    }

    const navigate = useNavigate();

    const handleSignOut = () => {
        localStorage.removeItem("activeAccount");
        navigate("/");
    }

    const defaultStatusOfInputFields = {
        "name": true,
        "address street": true,
        "address province": true,
        "address country": true,
        "address postal code": true
    }

    const handleSetProfileDetails = (field, value) => {
        const newProfileDetails = profileDetails;
        newProfileDetails[field] = value;
        setProfileDetails({...newProfileDetails})
    }

    useEffect(() => {
        const activeEmail = localStorage.getItem("activeAccount");
        const accountDetails = (JSON.parse(localStorage.getItem("allPersonas")))[activeEmail];
        setProfileDetails(accountDetails)
        setProfileEmail(activeEmail)
    }, [])

    const [inputDisabled, setInputDisabled] = useState(defaultStatusOfInputFields);

    const handleActivateInputDisabled = (inputFieldName) => {
        const newInputDisabled = inputDisabled;
        console.log("disabling name input: " + newInputDisabled[inputFieldName])
        newInputDisabled[inputFieldName] = false;
        console.log("disabling name input: " + newInputDisabled[inputFieldName])
        setInputDisabled({...newInputDisabled});
    }

    return(
        <Form className="profile-form">
            <Row className="mb-5">
                <h3 className="mb-4">Personal Information </h3>

                <Form.Group as={Col} controlId="profileName">
                    <Form.Label>Name</Form.Label>
                    <InputGroup>
                        <Form.Control 
                            type="text" 
                            disabled={inputDisabled["name"]}
                            value={profileDetails["name"]}
                            aria-describedby="edit-name"
                            onChange={(event) => handleSetProfileDetails("name", event.target.value)}
                            />
                        <InputGroup.Text id="edit-name" onClick={() => handleActivateInputDisabled("name")}>
                            <FontAwesomeIcon icon={faPencil} size="lg" />
                        </InputGroup.Text>
                    </InputGroup>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <InputGroup>
                        <Form.Control type="email" disabled value={profileEmail} aria-describedby="edit-email"/>
                    </InputGroup>
                </Form.Group>
            </Row>

            {/* <Container className="form-change-password">
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
            </Container> */}
            

            <h3 className="mt-5 mb-4">Shipping Address </h3>

            <Form.Group as={Row} className="mb-3" controlId="formGridAddressStreet">
                <Form.Label>Street</Form.Label>
                <InputGroup>
                    <Form.Control type="text" 
                        disabled={inputDisabled["address street"]}
                        value={profileDetails["address street"]}
                        aria-describedby="edit-address-street"
                        onChange={(event) => handleSetProfileDetails("address street", event.target.value)} />
                    <InputGroup.Text id="edit-address-street" onClick={() => handleActivateInputDisabled("address street")}>
                        <FontAwesomeIcon icon={faPencil} size="lg" />
                    </InputGroup.Text>
                </InputGroup>
            </Form.Group>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridAddressState">
                    <Form.Label>State/Province</Form.Label>
                    <InputGroup>
                        <Form.Control type="text"
                            disabled={inputDisabled["address province"]}
                            value={profileDetails["address province"]}
                            aria-describedby="edit-address-province"
                            onChange={(event) => handleSetProfileDetails("address province", event.target.value)} />
                        <InputGroup.Text id="edit-address-province" onClick={() => handleActivateInputDisabled("address province")}>
                            <FontAwesomeIcon icon={faPencil} size="lg"/>
                        </InputGroup.Text>
                    </InputGroup>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridAddressCountry">
                    <Form.Label>Country</Form.Label>
                    <InputGroup>
                        <Form.Control type="text" 
                            disabled={inputDisabled["address country"]}
                            value={profileDetails["address country"]}
                            aria-describedby="edit-address-country"
                            onChange={(event) => handleSetProfileDetails("address country", event.target.value)} />
                        <InputGroup.Text id="edit-address-country" onClick={() => handleActivateInputDisabled("address country")}>
                            <FontAwesomeIcon icon={faPencil} size="lg" />
                        </InputGroup.Text>
                    </InputGroup>
                </Form.Group>


                <Form.Group as={Col} controlId="formGridAddressPostalCode">
                    <Form.Label>Postal Code</Form.Label>
                    <InputGroup>
                        <Form.Control type="text" disabled={inputDisabled["address postal code"]}
                            value={profileDetails["address postal code"]}
                            aria-describedby="edit-address-postal-code"
                            onChange={(event) => handleSetProfileDetails("address postal code", event.target.value)} />
                        <InputGroup.Text id="edit-address-postal-code" onClick={() => handleActivateInputDisabled("address postal code")}>
                            <FontAwesomeIcon icon={faPencil} size="lg" />
                        </InputGroup.Text>
                    </InputGroup>
                </Form.Group>
            </Row>

            <Row className="mt-5">
                <Button as={Col} variant="outline-dark" className="profile-action-btn" onClick={handleClearForm}>
                    Clear changes
                </Button>
                <Button as={Col} variant="dark" className="profile-action-btn" onClick={handleProcessFormAndSaveChanges}>
                    Save changes
                </Button>
            </Row>

            <Row className="mt-5 text-center justify-content-end mx-0 w-100">
                <hr/>
                <Button as={Col} md={1} variant="outline-danger" className="profile-action-btn g-0 m-0" onClick={handleSignOut}>
                    Sign out
                </Button>
            </Row>
        </Form>
    );
}

export default ProfileForm;