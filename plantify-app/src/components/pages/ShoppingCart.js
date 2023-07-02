import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";
import CloseButton from "react-bootstrap/esm/CloseButton";
import NumericInput from "react-numeric-input";
import { useNavigate } from "react-router-dom";

import "../../styles/ShoppingCart.css";

function ShoppingCart({cart}) {
    //assuming
    var cart2 = [
        {
            productName: "Earth Angel Peony",
            productRef: "7BARQ",
            quantity: 2,
            price: 21.90
        },
        {
            productName: "White Lily",
            productRef: "JUASV",
            quantity: 1,
            price: 56.50
        }
    ]

    //calculate total
    var totalGrossCost = 0;
    cart2.forEach(item => {totalGrossCost += item.price * item.quantity})

    //move to checkout
    const navigate = useNavigate();

    const handleCostToCheckout = () => {
        navigate('/Checkout', {
            state: {
                grossCost: totalGrossCost
            }
        });
    }

    return (
        <Container className="mt-5 mb-5">
            <h1>Shopping Cart</h1>
            {cart2.map((item) =>
                <Row className="cart-item-row">
                    <Col md={8} className="cart-item">
                        <h5>{item.productName}</h5>&nbsp;
                        <span className="product-ref">{item.productRef}</span>
                    </Col>
                    <Col md={4} className="cart-item">
                        <span className="me-4">
                            Quantity: 
                            <NumericInput min={0} max={10} value={item.quantity} className="product-selected-quantity-input"/>
                        </span>
                        <span className="product-price price-each me-2">
                            {Number(item.price).toFixed(2)}
                        </span>
                        <span className="cart-item-close">
                            <CloseButton />
                        </span>
                        
                    </Col>
                </Row>

            )}
            <Row className="mt-5 cart-cto-row">
                <div>
                    Total: ${Number(totalGrossCost).toFixed(2)}
                </div>
                <Button variant="dark" className="cart-cto" onClick={handleCostToCheckout}>
                    Proceed to Checkout
                </Button>
            </Row>
            

        </Container>
    );
}

export default ShoppingCart;