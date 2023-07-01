import { useState, useEffect } from 'react';

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";

function RecoveryPasswordModal( {promptState, promptCloseCallback, promptSwitchToSignInModalCallback}) {
    var initState = (promptState === true) ? true : false;

    const handleRecoveryPasswordModalClose = () => {promptCloseCallback()};  
    const handleSwitchToSignInModal = () => {promptSwitchToSignInModalCallback()};      

    return (
        <>
            <Modal show={initState} onHide={handleRecoveryPasswordModalClose}>
                <Modal.Body className='w-100 text-align-center'>
                    <h1>Oh no!</h1>
                    <Container fluid>
                        Forgot your password? Don't worry! We have sent a temporary recovery password to your email. Use it to sign into your account and set your new password!
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" className="w-100" onClick={handleSwitchToSignInModal}>
                        Sign In
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default RecoveryPasswordModal;