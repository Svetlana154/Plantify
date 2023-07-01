import Card from "react-bootstrap/esm/Card";

import "../styles/ProductCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar as faStarFull} from '@fortawesome/free-solid-svg-icons';
import {faStar as faStarOutline} from '@fortawesome/free-regular-svg-icons';

function ProductCard({product, handleProductSelected}) {
    const starRating = [];

    for (let i=0; i<5; i++){
        if (i < product.rating.star){
            starRating.push(<FontAwesomeIcon icon={faStarFull} />);
        }
        else {
            starRating.push(<FontAwesomeIcon icon={faStarOutline} />);
        }
    }

    return (
        <Card className="product-card" onClick={handleProductSelected(product)}>
            <Card.Img src={product.image} alt="image" className="product-card-image"/>
            <Card.Body>
                <Card.Text className="product-card-top-text">
                    <div className="product-card-price"> {product.price}</div>
                    <div className="product-card-ref">{product.ref} </div>
                </Card.Text>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text className="product-card-description">
                    <div className="product-card-rating">{starRating} {product.rating.star}</div>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default ProductCard;