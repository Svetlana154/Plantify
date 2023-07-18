import { Button, Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Row";
import catWalking from "../../images/cat-walking.jpg";

function PageNotFound() {
  return (
    <div className="mt-5 text-center mb-5">
      <Row>
        <h1>Sorry!<br/>It seems the page you are looking for does not exist...</h1>
        <div>
          Don't worry! We have sent Captain Kittens on the job - he will find exactly what you're looking for it no time!
          <br/>
          In the meantime, feel free to return to the Homepage or check out our product selection:
        </div>
      </Row>
      
      <div style={{display: "flex", float:"left", width:"100%", margin:"10px", textAlign:"center", justifyContent:"center"}} className="mt-4 mb-4">
          <Button href="/" variant="outline-success" className="me-2">Go Back to Homepage</Button>
          <Button href="/OurProducts" variant="success" className="ms-2">Check Out Products</Button>
      </div>
      <img src={catWalking} width={"600px;"} />
    </div>
  )

}

export default PageNotFound;