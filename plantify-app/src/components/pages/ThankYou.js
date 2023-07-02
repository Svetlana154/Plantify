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
                Sed a augue vel leo tincidunt accumsan. Etiam ut est gravida, mollis nunc a, lacinia elit. Nunc ac nunc augue. Duis eu malesuada urna, at pulvinar libero. Mauris nunc risus, dapibus eget tincidunt et, malesuada quis orci. In hac habitasse platea dictumst. Sed quis bibendum diam. Aliquam at feugiat metus. Vivamus at elit quam.
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
