import Card from "react-bootstrap/esm/Card";

import "../styles/ProductCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar as faStarFull} from '@fortawesome/free-solid-svg-icons';
import {faStar as faStarOutline} from '@fortawesome/free-regular-svg-icons';
import { useNavigate } from "react-router-dom";

function ProductCard({product}) {
    const starRating = [];

    for (let i=0; i<5; i++){
        if (i < product.rating.star){
            starRating.push(<FontAwesomeIcon icon={faStarFull} />);
        }
        else {
            starRating.push(<FontAwesomeIcon icon={faStarOutline} />);
        }
    }

    const navigate = useNavigate();

    const handleProductSelected = () => {
        navigate('/ProductSelected', {
        state: {
            productRef: product.ref
        }
        });
    }

    return (
        <Card className="product-card" onClick={() => handleProductSelected()}>
            <Card.Img src={product.image} alt="image" className="product-card-image"/>
            <Card.Body>
                <Card.Text className="product-card-top-text">
                    <div className="product-price"> {Number(product.price).toFixed(2)}</div>
                    <div className="product-ref">{product.ref} </div>
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