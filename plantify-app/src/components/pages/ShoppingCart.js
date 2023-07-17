import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";
import CloseButton from "react-bootstrap/esm/CloseButton";
import NumericInput from "react-numeric-input";
import { useNavigate } from "react-router-dom";

import "../../styles/ShoppingCart.css";
import { useEffect, useState } from "react";

function ShoppingCart() {

    //move to checkout
    const navigate = useNavigate();

    const handleCostToCheckout = () => {
        navigate('/Checkout', {
            state: {
                grossCost: totalCostState
            }
        });
    }

    function getItemsForCart() {
        const itemsInCart = localStorage.getItem("cart-items");
        if (itemsInCart == null || JSON.parse(itemsInCart).length === 0) {
            return [];
        }
        else {   
            return JSON.parse(itemsInCart);
        }
    }

    const [cartItemsState, setCartItemsState] = useState(getItemsForCart())

    const proceedToCheckoutBtn = 
        <Button variant="dark" className="cart-cto" id="shopping-cart-proceed-btn" onClick={handleCostToCheckout}>
            Proceed to Checkout
        </Button>
    const proceedToCheckoutBtnDisabled = 
        <Button variant="dark" className="cart-cto" id="shopping-cart-proceed-btn" disabled onClick={handleCostToCheckout}>
            Proceed to Checkout
        </Button>
    
    const [continueBtn, setContinueBtn] = useState(proceedToCheckoutBtn);

    //calculate total

    const calculateTotal = (itemList) => {
        let totalGrossCost = 0;
        itemList.forEach((item) => {
            totalGrossCost += item.price * item.quantity;
        })
        return totalGrossCost;
    }

    const handleUpdateTotalInCart = (itemsList) => {
        setTotalCostState(calculateTotal(itemsList));
    };

    const [totalCostState, setTotalCostState] = useState(calculateTotal(cartItemsState));

    useEffect(() => {
        console.log("activate effect");
        handleUpdateTotalInCart(cartItemsState);
        localStorage.setItem("cart-items", JSON.stringify(cartItemsState));
        setContinueBtn(cartItemsState.length > 0? proceedToCheckoutBtn : proceedToCheckoutBtnDisabled)
    }, [cartItemsState])

    const setNewQuantity = (productRef, value) => {
        const newCartItems = [...cartItemsState];
        
        let valueNumber = Number.parseInt(value);
        if (!valueNumber) valueNumber = 1;

        newCartItems.map(item => {
            if (item.ref === productRef){
                item.quantity = valueNumber;
            }
            return item;
        })

        setCartItemsState(newCartItems);
    }

    const removeCartItem = (itemRef) => {
        console.log("processing remove");
        const newCartItems = [...cartItemsState].filter(item => (item.ref !== itemRef));
        setCartItemsState(newCartItems)
    }

    return (
        <Container className="mt-5 mb-5">
            <h1>Shopping Cart</h1>
            { 
                (cartItemsState.length > 0) ? 
                    cartItemsState.map((item) =>
                        <Row className="cart-item-row" key={"cart-item-row-"+item.ref}>
                            <Col md={8} className="cart-item g-0">
                                <h5>{item.name}</h5>&nbsp;
                                <span className="product-ref">{item.ref}</span>
                            </Col>
                            <Col md={3} className="cart-item g-0">
                                <span className="me-4">
                                    Quantity: 
                                    <NumericInput min={1} max={10} value={item.quantity} onChange={(value) => {setNewQuantity(item.ref, value)}} className="product-selected-quantity-input"/>
                                </span>
                                <span className="product-price price-each me-2">
                                    {Number(item.price).toFixed(2)}
                                </span>
                            </Col>
                            <Col md={1} className="g-0">
                                <span className="cart-item-close">
                                    <CloseButton onClick={()=>{removeCartItem(item.ref)}}/>
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
                {continueBtn}
            </Row>
            

        </Container>
    );
}

export default ShoppingCart;