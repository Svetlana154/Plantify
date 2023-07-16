import Col from "react-bootstrap/esm/Col";
import ProductCard from "./ProductCard";

function ProductsListView ({items}) {
    const generatedProductsList = [];

    items.forEach(product =>{
        generatedProductsList.push(
            <Col xs={6} sm={4} md={3}>
                <ProductCard product={product}/>
            </Col>
        );
    });

    return (
        <>
            {generatedProductsList}
        </>
    );
}

export default ProductsListView;