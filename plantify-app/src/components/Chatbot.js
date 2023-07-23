import { faComments } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from 'react';

import "../styles/Chatbot.css";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/esm/Form";
import Button from "react-bootstrap/esm/Button";
import CloseButton from "react-bootstrap/esm/CloseButton";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import ChatbotContent from "./ChatbotContent";

function Chatbot () {
    const [showChatbotExpanded, setShow] = useState(false);

    const handleChatbotExpandedShow = () => setShow(true);
    const handleChatbotExpandedClose = () => setShow(false);

    useEffect(() => {
        document.getElementById("chatbot-expanded").style.display = (showChatbotExpanded) ? "block" : "none";
    });

    const chatbotMessage = 
        <Row>
            <div className="chatbot-message bot-message">
                Hello! How can I help you?
            </div>
        </Row>;

    const [data, setData] = useState([]);

    const handleMessageSent = () => {
        const userInput = document.getElementById("chatbot-user-input").value.trim();

        if (userInput) {
            document.getElementById("chatbot-user-input").value = "";

            var messageLog = data.concat( [
                <Row className="user-message-row">
                    <div className="chatbot-message user-message">
                        {userInput}
                    </div>
                </Row> ]
                ).concat([chatbotMessage]);

            setData(messageLog);
        }
    }

    return (
        <>
            <Container className="chatbot-icon-container" onClick={handleChatbotExpandedShow} aria-description="This is a collapsed chatbot icon. Click to expand.">
                <FontAwesomeIcon icon={faComments} size="2xl" className="chatbot-icon"/>
            </Container>

            <div className="chatbot-expanded" id="chatbot-expanded">
                <div className="chatbot-expanded-close-btn">
                    <CloseButton onClick={handleChatbotExpandedClose} />
                </div>
                <div className="chatbot-expanded-top-bar">
                    <b>Chatbot</b>
                </div>
                <ChatbotContent log={data} />
                <div className="chatbot-user-message">
                    <Form>
                        <Form.Group as={Row} id="exampleForm.ControlInput1" className="chatbot-input-group">
                            <Col md={9} className="">
                                <Form.Control type="text" id="chatbot-user-input" autoFocus/>
                            </Col>
                            <Col md={2} className="chatbot-input-send-btn">
                                <Button variant="outline-dark" onClick={handleMessageSent}>
                                    <FontAwesomeIcon icon={faPaperPlane} size="xl"/>
                                </Button>
                            </Col>
                            <Col md={1} className="g-0"></Col>
                        </Form.Group>
                    </Form>
                </div>
            </div>

        </>
        
    );
}

export default Chatbot;

