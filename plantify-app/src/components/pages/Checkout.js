import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/esm/Form";
import Container from "react-bootstrap/esm/Container";
import InputGroup from "react-bootstrap/esm/InputGroup";
import Button from "react-bootstrap/esm/Button";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CreditCard from "../../images/credit-card.png";
import PromptTooltip from "../PromptTooltip";

import "../../styles/Checkout.css";

function Checkout() {
    const location = useLocation();
    let grossCost = location.state.grossCost;

    const navigate = useNavigate();

    const handleBacktoShoppingCart = () => {
        navigate(-1);
    }
    
    const [validated, setValidated] = useState('');
    const [doNotRequireShippingAddress, setDoNotRequireShippingAddress] = useState(false);
    const [doNotRequireMessage, setDoNotRequireMessage] = useState(true);
    const [packagingCost, setPackagingCost] = useState(0);
    const [shippingCost, setShippingCost] = useState(20);

    const handleProceedtoThankYou = (event) => {
        const form = document.getElementById("checkout-form");
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            setValidated('invalid');
        }
        else {
            setValidated('valid');
            navigate('/ThankYou');
            localStorage.removeItem("cart-items");
        }
    };

    const handleShippingAddressNotRequired = () => {
        if (doNotRequireShippingAddress) {
            setDoNotRequireShippingAddress(false);
            setShippingCost(20)
        }
        else {
            setDoNotRequireShippingAddress(true);
            setShippingCost(0)
        }
    };

    const handleGiftMessageRequired = () => {
        if (doNotRequireMessage)
            setDoNotRequireMessage(false);
        else 
            setDoNotRequireMessage(true);
    }

    const handlePremiumFees = () => {
        if (packagingCost === 0){
            setPackagingCost(20);
        }
        else {
            setPackagingCost(0);
        }
    }
    
    const taxCost = (grossCost + packagingCost + shippingCost) * 0.13;
    const totalCost = grossCost + packagingCost + shippingCost + taxCost;

    return (
        <Container className="mt-5 mb-5 checkout">
            <h1>Checkout</h1>
            <hr className="checkout-title-line"/>
            <Form noValidate validated={validated} className="checkout-form" id="checkout-form">
                <Row className="checkout-row">
                    <Col>
                        <h3 className="mt-5 mb-4">Shipping Address </h3>
                        <fieldset disabled={doNotRequireShippingAddress}>
                            <Row className="mb-3">
                                <Form.Group controlId="validationAddressStreet">
                                    <Form.Label>Street</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="1234 Main st."
                                        required
                                        />
                                    <Form.Control.Feedback type='invalid'>No street address found! Please enter a valid apt & street address.</Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="validationAddressState">
                                    <Form.Label>State/Province</Form.Label>
                                    <Form.Control 
                                        type="text"
                                        placeholder="Ontario"
                                        required
                                        />
                                    <Form.Control.Feedback type='invalid'>No state/province found! Please enter a valid state or province.</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group as={Col} controlId="validationAddressCountry">
                                    <Form.Label>Country</Form.Label>
                                    <Form.Control 
                                        type="text"
                                        placeholder="Canada"
                                        required
                                        />
                                    <Form.Control.Feedback type='invalid'>No country entered! Please enter the name of a country.</Form.Control.Feedback>
                                </Form.Group>


                                <Form.Group as={Col} controlId="validationAddressPostalCode">
                                    <Form.Label>Postal Code</Form.Label>
                                    <Form.Control 
                                        type="text"
                                        placeholder="A1B2C3"
                                        required
                                        />
                                    <Form.Control.Feedback type='invalid'>No postal code entered! Please enter the postal code for the address.</Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                        </fieldset>

                        <Form.Group controlId="validationPackagingOptionGift" onChange={handleShippingAddressNotRequired}>
                            <InputGroup>
                                <Form.Check 
                                    type="checkbox" 
                                    label="I will pick it up from the store location" />
                            </InputGroup>
                        </Form.Group>

                        <h3 className="mt-5 mb-4">Packaging Options </h3>
                        
                        <Row className="mb-3">
                            <Col md={2}>
                                Type: 
                                <PromptTooltip text={"The default packaging option is 'Regular'. The Premium packaging option includes higher-quality wrapping paper - perfect for gifts."} 
                                    placement={"right"}/>
                            </Col>
                            <Form.Group as={Col} controlId="validationPackagingOptionRegular">
                                <Form.Check 
                                    name="packagingGroup"
                                    type="radio"
                                    label="Regular"
                                    defaultChecked
                                    onChange={handlePremiumFees}/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="validationPackagingOptionPremium">
                                <Form.Check 
                                    name="packagingGroup"
                                    type="radio"
                                    label="Premium"
                                    required
                                    onChange={handlePremiumFees}/>
                            </Form.Group>
                            
                            <Form.Control.Feedback type='invalid'>Please enter a valid postal code</Form.Control.Feedback>  
                        </Row>

                        <Row className="mb-3">
                            <Col md={4}>
                                <Form.Group controlId="validationPackagingOptionGift" onChange={handleGiftMessageRequired}>
                                    <Form.Check 
                                        type="checkbox" 
                                        label="Add a custom message" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <fieldset disabled={doNotRequireMessage}>
                                <Form.Group controlId="validationPackagingOptionGiftMessage" >
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Enter a message"
                                        required/>
                                    <Form.Control.Feedback type='invalid'>No message found! Please enter what you would to include in the gift message.</Form.Control.Feedback>
                                </Form.Group>
                            </fieldset>
                        </Row>
                    </Col>
                    <Col>
                        <Container className="checkout-cost-calculator">
                            <div>
                                Cost of items
                                <PromptTooltip text={"The raw price of the products."}  
                                    placement={"top"}/>
                            </div>
                            <span className="product-price checkout-important-cost">
                                {Number(grossCost).toFixed(2)}
                            </span>
                            <Row className="mt-4">
                                <div>
                                    + packaging fees
                                    <PromptTooltip text={"Any extra costs associated with wrapping the products."}  
                                    placement={"top"}/>
                                </div>
                                <div className="product-price">
                                    {Number(packagingCost).toFixed(2)}
                                </div>
                            </Row>
                            <Row className="mt-4">
                                <div>
                                    + shipping fees
                                    <PromptTooltip text={"Any extra costs associated with trasporting the products to the desired location."}  
                                    placement={"top"}/>
                                </div>
                                <div className="product-price">
                                    {Number(shippingCost).toFixed(2)}
                                </div>
                            </Row>
                            <Row className="mt-4">
                                <div>
                                    + tax fees
                                    <PromptTooltip text={"13% HST tax applied on the purchase, as per the law."}  
                                        placement={"top"}/>
                                </div>
                                <div className="product-price">
                                    {Number(taxCost).toFixed(2)}
                                </div>
                            </Row>
                            <Row className="mt-4">
                                <hr />
                                <div>
                                    <b>
                                        Total cost: &nbsp;
                                        <span className="product-price checkout-important-cost">
                                            {Number(totalCost).toFixed(2)}
                                        </span>
                                    </b>
                                </div>
                            </Row>
                        </Container>
                    </Col>
                </Row>
                <Row>           
                    <h3 className="mt-5 mb-4">Payment Information </h3>
                    <Col>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="validationCreditCardNumber">
                                <Form.Label>
                                    Credict Card Number
                                    <PromptTooltip text={"The full credit card number as specified on the card. Please do not add any spaces or punctuation marks in between the numbers."}  
                                        placement={"right"}/>
                                </Form.Label>
                                <Form.Control 
                                    type="text"
                                    pattern='[0-9]{12,}'
                                    placeholder="1234123412341234"
                                    required/>
                                <Form.Control.Feedback type='invalid'>Invalid credit card format! The credit card number entered should be at least 12 digits long.</Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                            

                        <Row className="mb-3">
                            <Form.Group as={Col} className="mb-3" controlId="validationCreditCardExpiryDate">
                                <Form.Label>
                                    Expiration Date
                                    <PromptTooltip text={"The expiration date specified on the credit card. The date must be in the future (in 2024 and later) and presented in the following format: YYYY/MM."}  
                                        placement={"right"} />
                                </Form.Label>
                                <Form.Control 
                                    type="text"
                                    placeholder="YYYY/MM"
                                    pattern='^20((2[4-9])|([3-9][0-9]))\/((0[1-9])|(1[0-2]))$'
                                    required/>
                                <Form.Control.Feedback type='invalid'>Invalid expiry date! Please ensure the card has not expired (we only accept 2024 and later) and the date has been entered in the format: YYYY/MM</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md={5} className="mb-3" controlId="validationCreditCardSecurityCode">
                                <Form.Label>
                                    Verification Code (CVC/CVV)
                                    <PromptTooltip text={"The verification (security) code found on the back of the credit card. It must be 3 or 4 digits long."}  
                                        placement={"right"}/>
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    pattern='^(([0-9]{3})|([0-9]{4}))$'
                                    placeholder="123"
                                    required/>
                                <Form.Control.Feedback type='invalid'>Invalid verification code! Please ensure the code entered has 3-4 digits.</Form.Control.Feedback>
                            </Form.Group>              
                        </Row>
                    </Col>
                    <Col className="text-center">
                        <img src={CreditCard} className="checkout-credict-card-image"/>
                    </Col>
                </Row>
            </Form>
            <hr/>
            <Row className="mt-5 mb-5">
                <Col>
                    <Button variant="dark" onClick={handleBacktoShoppingCart}>
                        &lt; Cancel
                    </Button>
                </Col>
                <Col />
                <Col>
                    <Button variant="dark" onClick={(e) => {handleProceedtoThankYou(e)}}>
                        Confirm Purchase &gt; 
                    </Button>
                </Col>
            </Row>

        </Container>
    );
}

export default Checkout;