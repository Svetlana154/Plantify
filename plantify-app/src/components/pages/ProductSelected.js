import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Alert from "react-bootstrap/esm/Alert";
import NumericInput from "react-numeric-input";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlus, faStar as faStarFull} from '@fortawesome/free-solid-svg-icons';
import {faStar as faStarOutline} from '@fortawesome/free-regular-svg-icons';
import ReviewCard from "../ReviewCard";
import { useState, useEffect} from 'react';

import productData from "../../data/products.json";
import "../../styles/ProductSelected.css";

function ProductSelected () {
    const location = useLocation();
    let selectedProductRef = location.state.productRef;
    var selectedProduct;

    // get product object
    productData.forEach(product => {
        if (product.ref === selectedProductRef){
            selectedProduct = product;
        }
    })

    //generate star rating
    const starRating = [];

    for (let i=0; i<5; i++){
        if (i < selectedProduct.rating.star){
            starRating.push(<FontAwesomeIcon icon={faStarFull} size="xl" key={"rating-"+i}/>);
        }
        else {
            starRating.push(<FontAwesomeIcon icon={faStarOutline} size="xl" key={"rating-"+i} />);
        }
    }

    const isTool = selectedProduct.category === "Tools & Accessories";

    //generate reviews
    const reviews = [];

    selectedProduct.rating.reviews.forEach(review => {
        reviews.push (
            <ReviewCard review={review} key={"review-entry-"+review.name.replace(/\s/g, '')}/>
        );
    });
    
    const cartItem = {
        ref: selectedProduct.ref,
        name: selectedProduct.name,
        quantity: 1,
        price: selectedProduct.price
    }

    useEffect(() => {
        const inCart = isItemAlreadyInCart(cartItem)
        if (inCart){
            document.getElementById("product-add-to-cart-btn").click()
        }
    }, [])

    //set state for Added to cart alert
    const [alertState, setAlertState] = useState(false);
    const handleAlertShow = (event, quantityInput) => {
        setAlertState(true);

        cartItem.quantity = Number.parseInt(document.getElementById(quantityInput).value);

        var cartItems = localStorage.getItem("cart-items");
        if (cartItems === null){
            cartItems = "[]";
        }

        if (!isItemAlreadyInCart(cartItem)) {
            const newCartItems = JSON.parse(cartItems);
            newCartItems.push(cartItem);
            localStorage.setItem("cart-items", JSON.stringify(newCartItems));
        }

        event.target.disabled = true;
    }

    function isItemAlreadyInCart(itemToCompareTo) {
        const allItemsInCart = JSON.parse(localStorage.getItem("cart-items"));

        if (allItemsInCart === null) return false;

        const filteredAllItemsInCart = allItemsInCart.filter(item => item.ref === itemToCompareTo.ref);
        
        return filteredAllItemsInCart.length > 0? true : false;
    }

    return (
        <Container fluid className="product-selected">
            <span>&lt;
                <a href="/OurProducts">
                     Back to Search
                </a>
            </span>
            <Row className="w-100 product-selected-content">
                <Col md={6}>
                    <Container className="product-selected-image-col">
                        <img className="product-selected-image" src={selectedProduct.image} alt="product image" />
                    </Container>
                </Col>
                <Col md={5}>
                    <Container className="product-selected-text-col">
                        <span className="product-ref">{selectedProduct.ref}</span>
                        <h1>{selectedProduct.name}</h1>
                        {(!isTool)? <i>Species: {selectedProduct.species}</i> : <i></i>}                        
                        <Row className="product-star-rating-row">
                            <Col md={10}>
                                {starRating} {selectedProduct.rating.star}
                            </Col>
                            <Col>
                                {selectedProduct.rating.reviews.length} Reviews
                            </Col>
                        </Row>
                        <div className="w-100 product-selected-quantity-row">
                            <span>
                                Quantity:
                                <NumericInput min={0} max={10} value={1} className="product-selected-quantity-input" id={"product-selected-quantity-input-"+selectedProduct.ref}/>
                            </span>                            
                        </div>
                        <Row>
                            <h1 className="product-price">
                                {Number(selectedProduct.price).toFixed(2)}
                            </h1>
                        </Row>
                        <Row className="product-add-to-cart">
                            <Alert show={alertState} variant="success">Added to cart!</Alert>
                            <Button variant="outline-dark" className="product-add-to-cart-btn" id="product-add-to-cart-btn" onClick={(e) => handleAlertShow(e, "product-selected-quantity-input-"+selectedProduct.ref)}>
                                <FontAwesomeIcon icon={faPlus} className="me-2"/>
                                Add to Cart
                            </Button>
                        </Row>
                    </Container>
                </Col>
            </Row>
            <Row>
                <Container className="product-selected-specs">
                    <h3>Specifications</h3>
                    <Row>
                        <Col>
                            <div>
                                <b>Name: &nbsp;</b>
                                {selectedProduct.name}
                            </div>
                            {(!isTool)? 
                            <div>
                                <b>Species: &nbsp;</b>
                                {selectedProduct.species}
                            </div>
                            : <></>
                            }                            
                            <div>
                                <b>Brand: &nbsp;</b>
                                {selectedProduct.brand}
                            </div>
                            <div>
                                <b>Producer: &nbsp;</b>
                                {selectedProduct.producer.location}
                            </div>
                            {(!isTool)? 
                            <>
                            <div>
                                <b>Rarity: &nbsp;</b>
                                {selectedProduct.rarity}
                            </div>
                            <div>
                                <b>Lifetime: &nbsp;</b>
                                {selectedProduct.lifetime}
                            </div>
                            </>                            
                            : <></> }
                        </Col>
                        <Col>
                            <div>
                                <b>Size: &nbsp;</b>
                                {selectedProduct.size} feet
                            </div>
                            <div>
                                <b>Weight: &nbsp;</b>
                                {selectedProduct.weight} grams
                            </div>
                            <div>
                                <b>Color: &nbsp;</b>
                                {selectedProduct.colour.join(", ")}
                            </div>
                            {(!isTool)? 
                            <>
                                <div>
                                    <b>Hardiness Zone: &nbsp;</b>
                                    {selectedProduct.zone.join(", ")}
                                </div>
                                <div>
                                    <b>Root type: &nbsp;</b>
                                    {selectedProduct.rootType}
                                </div>
                                <div>
                                    <b>Thorns/Spikes: &nbsp;</b>
                                    {(selectedProduct['thorns/spikes'])? "yes" : "no"}
                                </div>
                            </>
                            : <></>}
                        </Col>
                    </Row>
                </Container>
            </Row>
            <Row>
                <Container className="product-selected-reviews">
                    <h3>Reviews</h3>
                    <Row>
                        <Col md={3}>
                            <Container className="product-selected-reviews-total-col">
                                <Row>
                                    <div>
                                        {starRating}
                                    </div>
                                    <br/>
                                    <div>
                                        {selectedProduct.rating.star} out of 5 stars
                                    </div>
                                </Row>
                            </Container>                         
                        </Col>
                        <Col md={8}>
                            {reviews}
                        </Col>
                    </Row>

                </Container>
            </Row>
            
        </Container>
    );
}

export default ProductSelected;