import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/esm/Form";
import Container from "react-bootstrap/esm/Container";
import InputGroup from "react-bootstrap/esm/InputGroup";
import Button from "react-bootstrap/esm/Button";
import { useLocation, useNavigate } from "react-router-dom";

import "../../styles/Checkout.css";

function Checkout() {
    const location = useLocation();
    let grossCost = location.state.grossCost;

    const packagingCost = 0;
    const shippingCost = 0;
    const taxCost = (grossCost + packagingCost + shippingCost) * 0.15;
    const totalCost = grossCost + packagingCost + shippingCost + taxCost;

    const navigate = useNavigate();

    const handleBacktoShoppingCart = () => {
        navigate(-1);
    }

    const handleProceedtoThankYou = () => {
        navigate("/ThankYou");
    }

    return (
        <Container>
            <Row className="checkout-row">
                <Col>
                    <Form className="checkout-form">
                        <h3 className="mt-5 mb-4">Shipping Address </h3>

                        <Form.Group as={Row} className="mb-3" controlId="formGridAddressStreet">
                            <Form.Label>Street</Form.Label>
                            <InputGroup>
                                <Form.Control type="text" placeholder="1234 Main st."/>
                            </InputGroup>
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridAddressState">
                                <Form.Label>State</Form.Label>
                                <InputGroup>
                                    <Form.Control type="text" placeholder="Ontario"/>
                                </InputGroup>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridAddressCountry">
                                <Form.Label>Country</Form.Label>
                                <InputGroup>
                                    <Form.Control type="text" placeholder="Canada" />
                                </InputGroup>
                            </Form.Group>


                            <Form.Group as={Col} controlId="formGridAddressPostalCode">
                                <Form.Label>Postal Code</Form.Label>
                                <InputGroup>
                                    <Form.Control type="text" placeholder="A1B 2C3"/>
                                </InputGroup>
                            </Form.Group>
                        </Row>

                        <h3 className="mt-5 mb-4">Packaging Options </h3>
                        
                        <Row className="mb-3">
                            <Col md={2}>Type: </Col>
                            <Form.Group as={Col} controlId="formGridAddressState">
                                <InputGroup >
                                    <Form.Check name="packagingGroup" type="radio" label="Regular"/>
                                </InputGroup>                                
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridAddressState">
                                <InputGroup >
                                    <Form.Check name="packagingGroup" type="radio" label="Premium"/>
                                </InputGroup>                                
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Col md={3}>
                                <Form.Group controlId="formGridAddressStreet">
                                    <InputGroup>
                                        <Form.Check type="checkbox" label="This is a gift" />
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="formGridAddressStreet">
                                    <InputGroup>
                                        <Form.Control type="text" placeholder="Add a message"/>
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                        </Row>
                        
                        <h3 className="mt-5 mb-4">Payment Information </h3>

                        <Form.Group as={Row} className="mb-3" controlId="formGridAddressStreet">
                            <Form.Label>Credict Card Number</Form.Label>
                            <InputGroup>
                                <Form.Control type="text" placeholder="1234-1234-1234-1234"/>
                            </InputGroup>
                        </Form.Group>
                        
                        <Row className="mb-3">
                            <Form.Group as={Col} className="mb-3" controlId="formGridAddressStreet">
                                <Form.Label>Expiry Date</Form.Label>
                                <InputGroup>
                                    <Form.Control type="text" placeholder="01/25"/>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} className="mb-3" controlId="formGridAddressStreet">
                                <Form.Label>Security Code</Form.Label>
                                <InputGroup>
                                    <Form.Control type="text" placeholder="123"/>
                                </InputGroup>
                            </Form.Group>                        
                        </Row>

                    </Form>
                </Col>
                <Col>
                    <Container className="checkout-cost-calculator">
                        <div>
                            Cost of items
                        </div>
                        <span className="product-price checkout-important-cost">
                            {Number(grossCost).toFixed(2)}
                        </span>
                        <Row className="mt-4">
                            <div>
                                + packaging fees
                            </div>
                            <div className="product-price">
                                {Number(packagingCost).toFixed(2)}
                            </div>
                        </Row>
                        <Row className="mt-4">
                            <div>
                                + shipping fees
                            </div>
                            <div className="product-price">
                                {Number(shippingCost).toFixed(2)}
                            </div>
                        </Row>
                        <Row className="mt-4">
                            <div>
                                + tax fees
                            </div>
                            <div className="product-price">
                                {Number(taxCost).toFixed(2)}
                            </div>
                        </Row>
                        <Row className="mt-4">
                            <hr />
                            <div>
                                <b>
                                    Total: &nbsp;
                                    <span className="product-price checkout-important-cost">
                                        {Number(totalCost).toFixed(2)}
                                    </span>
                                </b>
                            </div>
                        </Row>
                    </Container>
                </Col>
            </Row>
            <Row className="mt-5 mb-5">
                <Col md={2}>
                    <Button variant="dark" onClick={handleBacktoShoppingCart}>
                        &lt; Cancel
                    </Button>
                </Col>
                <Col md={8}></Col>
                <Col md={2}>
                    <Button variant="dark" onClick={handleProceedtoThankYou}>
                        Confirm Purchase &gt; 
                    </Button>
                </Col>
            </Row>

        </Container>
    );
}

export default Checkout;