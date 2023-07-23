import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

import "../../styles/ThankYou.css";
import Button from "react-bootstrap/esm/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function ThankYou() {
    
    const navigate = useNavigate();

    const handleBackToHome = () => {
        navigate("/");
    }

    const referenceValue = Math.floor(Math.random() * (100000000 - 10000000 + 1) + 10000000);

    return (
        <Container className="mt-5 mb-5 thank-you-container">
            <FontAwesomeIcon icon={faCircleCheck} size="2xl" className="mb-3"/>
            <h2 style={{fontFamily:"Caveat", fontSize:"3em"}}>Purchase Complete!</h2>
            <div className="thank-you-reference">
                <span>Reference </span>
                <span className="product-ref thank-you-reference">
                    {referenceValue}
                </span></div>
            <div className="mt-3">
                Thank you for shopping with us! A confirmation email with all of the purchase details has been sent out. If you wish to contact us about your purchase, please call through <b>+1 (343) 543-3456</b> or email us at <b>customer-service@plantify.com</b> and we'll try to get back to you at our earliest convenience. Happy plantifying!
            </div>
            <div >
                <Button variant="outline-dark" className="mt-5" onClick={handleBackToHome}>
                    Back to Home
                </Button>
            </div>
        </Container>
    );
}

export default ThankYou;
