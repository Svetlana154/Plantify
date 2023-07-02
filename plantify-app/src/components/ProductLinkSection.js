import "../styles/ProductLinkSection.css";
import Button from "react-bootstrap/esm/Button";

function ProductLinkSection({handleGoToProducts}) {
  return (
    <div className="product-link-section align-items-center">
      <div className="cto">
        <Button variant="outline-light" onClick={handleGoToProducts}>View All Products</Button>
      </div>
    </div>
  );
}

export default ProductLinkSection;