import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";
import CloseButton from "react-bootstrap/esm/CloseButton";
import NumericInput from "react-numeric-input";
import { useNavigate } from "react-router-dom";

import "../../styles/ShoppingCart.css";
import { useState } from "react";

function ShoppingCart() {
    function getItemsForCart() {
        const numberOfItemsInCart = localStorage.getItem("cartCounter");
        if (numberOfItemsInCart == null || numberOfItemsInCart === 0) {
            // document.getElementById("shopping-cart-proceed-btn").setAttribute("disabled", true) //not loaded yet
            return ([])
        }
        else {   
            const arrayOfItems = [];
            for (let i = 1; i <= numberOfItemsInCart; i++){
                const itemDetails = JSON.parse(localStorage.getItem("cart-item-"+i.toString()));
                itemDetails.id = i;
                arrayOfItems.push(itemDetails);
            }
            return(arrayOfItems);
        }
    }

    const [cartItemsState, setCartItemsState] = useState(getItemsForCart())

    //calculate total

    const [totalCostState, setTotalCostState] = useState(() => {
        var totalGrossCost = 0;
        cartItemsState.forEach(item => {totalGrossCost += item.price * item.quantity});
        return totalGrossCost;
    });

    const handleChangeInCart = () => {
        var totalGrossCost = 0;
        cartItemsState.forEach(item => {totalGrossCost += item.price * item.quantity});

        setTotalCostState(totalGrossCost);        
    };

    const setNewQuantity = (productRef, value) => {
        const newCartItems = cartItemsState;
        newCartItems.map(item => {
            if (item.ref === productRef){
                item.quantity = value;
                localStorage.setItem("cart-item-"+item.id, JSON.stringify(item));
            }
            return item;
        })

        setCartItemsState(newCartItems);
        handleChangeInCart();
    }


    //move to checkout
    const navigate = useNavigate();

    const handleCostToCheckout = () => {
        navigate('/Checkout', {
            state: {
                grossCost: totalCostState
            }
        });
    }

    return (
        <Container className="mt-5 mb-5">
            <h1>Shopping Cart</h1>
            { 
                (cartItemsState.length > 0) ? 
                    cartItemsState.map((item) =>
                        <Row className="cart-item-row">
                            <Col md={8} className="cart-item">
                                <h5>{item.name}</h5>&nbsp;
                                <span className="product-ref">{item.ref}</span>
                            </Col>
                            <Col md={4} className="cart-item">
                                <span className="me-4">
                                    Quantity: 
                                    <NumericInput min={0} max={10} value={item.quantity} onChange={(value) => {setNewQuantity(item.ref, Number(value))}} className="product-selected-quantity-input"/>
                                </span>
                                <span className="product-price price-each me-2">
                                    {Number(item.price).toFixed(2)}
                                </span>
                                <span className="cart-item-close">
                                    <CloseButton />
                                </span>
                                
                            </Col>
                        </Row>
                    )
                :
                <span><br/>----- Empty -----</span>
            }
            <Row className="mt-5 cart-cto-row">
                <div>
                    Total: ${Number(totalCostState).toFixed(2)}
                </div>
                <Button variant="dark" className="cart-cto" id="shopping-cart-proceed-btn" onClick={handleCostToCheckout}>
                    Proceed to Checkout
                </Button>
            </Row>
            

        </Container>
    );
}

export default ShoppingCart;