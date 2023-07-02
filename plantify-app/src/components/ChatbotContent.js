import { useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

import "../styles/Chatbot.css";

function ChatbotContent ({log}) {
    useEffect( () => {
        var objDiv = document.getElementById("chatbot-scroll-container");
        objDiv.scrollTop = objDiv.scrollHeight;
    });

    return (
        <div className="chatbot-expanded-content">
            <Container fluid className="chatbot-expanded-content-container" id="chatbot-scroll-container">
                <Row className="bot-message-row">
                    <div className="chatbot-message bot-message">
                        Hello! How can I help you?
                    </div>
                </Row>
                {log}
            </Container>
        </div>
    );
}

export default ChatbotContent;