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

    return (
        <Container className="mt-5 mb-5">
            <FontAwesomeIcon icon={faCircleCheck} size="2xl" className="mb-3"/>
            <h2>Purchase Complete!</h2>
            <div className="thank-you-reference">
                <span>Reference </span>
                <span className="product-ref thank-you-reference">
                    12341234
                </span></div>
            <div className="mt-3">
                Thank you for shopping with us! A confirmation email with all of the purchase details has been sent out. If you wish to contact us about your purchase, please call through +1 (343) 543-3456 or email us at customer-service@plantify.com and we'll try to get back to you at our earliest convenience. Happy plantifying!
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
