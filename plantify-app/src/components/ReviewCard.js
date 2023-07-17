import CardHeader from "react-bootstrap/esm/CardHeader";
import Card from "react-bootstrap/esm/Card";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar as faStarFull} from '@fortawesome/free-solid-svg-icons';
import {faStar as faStarOutline} from '@fortawesome/free-regular-svg-icons';
import "../styles/ReviewCard.css";

function ReviewCard ({review}) {

    //generate star rating
    const starRating = [];

    for (let i=0; i<5; i++){
        if (i < review.rating){
            starRating.push(<FontAwesomeIcon icon={faStarFull} size="lg" key={"review-entry-rating-"+i}/>);
        }
        else {
            starRating.push(<FontAwesomeIcon icon={faStarOutline} size="lg" key={"review-entry-rating-"+i} />);
        }
    }

    return (
        <Card className="review-card">
            <CardHeader>
                <Row className="mt-2 mb-2">
                    <Col md={10}>
                        <i>From {review.name}</i>
                    </Col>
                    <Col md={2}>
                         {starRating} &nbsp; {review.rating}
                    </Col>
                </Row>
                <Row className="mt-2 mb-2">
                    <Container>
                        {review.comment}
                    </Container>
                </Row>
            </CardHeader>
        </Card>
    );
}

export default ReviewCard;