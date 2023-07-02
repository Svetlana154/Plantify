import { faComments } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from 'react';

import "../styles/Chatbot.css";
import Container from "react-bootstrap/esm/Container";
import Modal from "react-bootstrap/esm/Modal";
import CloseButton from "react-bootstrap/esm/CloseButton";

function Chatbot () {
    const [showChatbotExpanded, setShow] = useState(false);

    const handleChatbotExpandedShow = () => setShow(true);
    const handleChatbotExpandedClose = () => setShow(false);

    return (
        <>
            <Container className="chatbot-icon-container" onClick={handleChatbotExpandedShow}>
                <FontAwesomeIcon icon={faComments} size="2xl" className="chatbot-icon"/>
            </Container>

            <Modal show={showChatbotExpanded} onHide={handleChatbotExpandedClose} className="chatbot-expanded">
                <CloseButton onClick={handleChatbotExpandedClose}/>

            </Modal>

        </>
        
    );
}

export default Chatbot;