import Form from "react-bootstrap/esm/Form";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Dropdown from "react-bootstrap/esm/Dropdown";
import InputGroup from 'react-bootstrap/InputGroup';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Accordion from "react-bootstrap/esm/Accordion";
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


import productData from "../../data/products.json";
import "../../styles/OurProducts.css";
import ProductCard from "../ProductCard";

function OurProducts() {

  const handleProductSelected = (productSelected) => {
    // useNavigate('/ProductSelected', {
    //   state: {
    //     product: productSelected,
    //   }
    // });
    console.log("handling on click");
  }
  
  const [show, setFilterShow] = useState(false);

  const handleFilterClose = () => setFilterShow(false);
  const handleFilterShow = () => setFilterShow(true);

  const applyFilterToProductList = () => {
    // apply filter option
    setFilterShow(false);
  };

  // Generating product list
  var numberOfResults = 0;

  const generatedProductsList = [];
  productData.forEach(product =>{
    generatedProductsList.push(
      <Col xs={6} sm={4} md={3}>
        <ProductCard product={product} handleProductSelected={handleProductSelected}/>
      </Col>
    );
    generatedProductsList.push(
      <Col xs={6} sm={4} md={3}>
        <ProductCard product={product} handleProductSelected={handleProductSelected}/>
      </Col>
    );
    generatedProductsList.push(
      <Col xs={6} sm={4} md={3}>
        <ProductCard product={product} handleProductSelected={handleProductSelected}/>
      </Col>
    );
    generatedProductsList.push(
      <Col xs={6} sm={4} md={3}>
        <ProductCard product={product} handleProductSelected={handleProductSelected}/>
      </Col>
    );
    generatedProductsList.push(
      <Col xs={6} sm={4} md={3}>
        <ProductCard product={product} handleProductSelected={handleProductSelected}/>
      </Col>
    );
    generatedProductsList.push(
      <Col xs={6} sm={4} md={3}>
        <ProductCard product={product} handleProductSelected={handleProductSelected}/>
      </Col>
    );
    generatedProductsList.push(
      <Col xs={6} sm={4} md={3}>
        <ProductCard product={product} handleProductSelected={handleProductSelected}/>
      </Col>
    );
    generatedProductsList.push(
      <Col xs={6} sm={4} md={3}>
        <ProductCard product={product} handleProductSelected={handleProductSelected}/>
      </Col>
    );
    generatedProductsList.push(
      <Col xs={6} sm={4} md={3}>
        <ProductCard product={product} handleProductSelected={handleProductSelected}/>
      </Col>
    );
    numberOfResults += 1;
  });


  return (
    <Container fluid className="products">
      <h1>Our Products</h1>
      <hr />
      {/*Search bar*/}
      <Container>
        <Form className="products-search-bar">
          <InputGroup>
              <Form.Control type="text" placeholder="Search" aria-describedby="edit-name"/>
              <InputGroup.Text id="edit-name">
                  <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
              </InputGroup.Text>
          </InputGroup>
        </Form>
      </Container>

      {/*Control bar*/}
      <Container className="products-control-row">
        <span>
          <FontAwesomeIcon icon={faFilter} size="lg" className="me-2 clickable" onClick={handleFilterShow}/>
          <span>
            Sort By:
            <Dropdown className="d-inline mx-2">
              <Dropdown.Toggle id="dropdown-autoclose-true" variant="light">
                Relevance
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">Relevance</Dropdown.Item>
                <Dropdown.Item href="#">Price High to Low</Dropdown.Item>
                <Dropdown.Item href="#">Price Low to High</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </span>
        </span>
        <span className="text-align-left">
          Found {numberOfResults} result(s)
        </span>
      </Container>
      <Container>
        <Row>
          {generatedProductsList}
        </Row>
      </Container>

      {/*Filter*/}
      <Offcanvas show={show} onHide={handleFilterClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <FontAwesomeIcon icon={faFilter} size="lg" className="me-2" />
            Filter Options
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form>
            <Accordion variant="dark" alwaysOpen>
              <Accordion.Item eventKey="0" className="filter-option">
                <Accordion.Header>
                  <h6>Brand</h6>
                </Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <Col>
                      <Form.Check type="checkbox" label="Brand1" />
                      <Form.Check type="checkbox" label="Brand2" />
                      <Form.Check type="checkbox" label="Brand3" />
                      <Form.Check type="checkbox" label="Brand4" />
                    </Col>
                    <Col>
                      <Form.Check type="checkbox" label="Brand1" />
                      <Form.Check type="checkbox" label="Brand2" />
                      <Form.Check type="checkbox" label="Brand3" />
                      <Form.Check type="checkbox" label="Other" />
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
              
              <Accordion.Item eventKey="1" className="filter-option">
                <Accordion.Header>
                  <h6>Price</h6>
                </Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <Col>
                      <Form.Check type="checkbox" label="Less than $10.00" />
                      <Form.Check type="checkbox" label="$10.00 - $24.99" />
                      <Form.Check type="checkbox" label="$25.00 - $49.99" />
                    </Col>
                    <Col>
                      <Form.Check type="checkbox" label="$50.00 - $74.99" />
                      <Form.Check type="checkbox" label="$75.00 +"/>
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
              
              <Accordion.Item eventKey="2" className="filter-option">
                <Accordion.Header>
                  <h6>Size</h6>
                </Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <Col>
                      <Form.Check type="checkbox" label="Small (<5ft)"/>
                    </Col>
                    <Col>
                      <Form.Check type="checkbox" label="Medium"/>
                    </Col>
                    <Col>
                      <Form.Check type="checkbox" label="Large (>10ft)"/>
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
              
              <Accordion.Item eventKey="3" className="filter-option">
                <Accordion.Header>
                  <h6>Lifetime</h6>
                </Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <Col>
                      <Form.Check name="lifetimeGroup" type="radio" label="Annual" />
                    </Col>
                    <Col>
                      <Form.Check name="lifetimeGroup" type="radio" label="Perrenial" />
                    </Col>
                    <Col>
                      <Form.Check name="lifetimeGroup" type="radio" label="Both"/>
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
              
              <Accordion.Item eventKey="4" className="filter-option">
                <Accordion.Header>
                  <h6>Colour</h6>
                </Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <Col>
                      <Form.Check type="checkbox" label="Red" />
                      <Form.Check type="checkbox" label="Orange" />
                      <Form.Check type="checkbox" label="Yellow" />
                      <Form.Check type="checkbox" label="Green" />
                    </Col>
                    <Col>
                      <Form.Check type="checkbox" label="Pink" />
                      <Form.Check type="checkbox" label="Purple" />
                      <Form.Check type="checkbox" label="Blue" />
                      <Form.Check type="checkbox" label="Other" />
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
              
              <Accordion.Item eventKey="5" className="filter-option">
                <Accordion.Header>
                  <h6>Hardiness Zone</h6>
                </Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <Col className="filter-hardiness-zone-dropdown-container">
                        <span>Zone #</span>
                        <Dropdown>
                          <Dropdown.Toggle variant="light" id="dropdown-basic">
                          -
                          </Dropdown.Toggle>
                          <Dropdown.Menu className="filter-hardiness-zone-menu">
                            <Dropdown.Item>-</Dropdown.Item>
                            <Dropdown.Item>0</Dropdown.Item>
                            <Dropdown.Item>1</Dropdown.Item>
                            <Dropdown.Item>2</Dropdown.Item>
                            <Dropdown.Item>3</Dropdown.Item>
                            <Dropdown.Item>4</Dropdown.Item>
                            <Dropdown.Item>5</Dropdown.Item>
                            <Dropdown.Item>6</Dropdown.Item>
                            <Dropdown.Item>7</Dropdown.Item>
                            <Dropdown.Item>8</Dropdown.Item>
                            <Dropdown.Item>9</Dropdown.Item>
                            <Dropdown.Item>10</Dropdown.Item>
                            <Dropdown.Item>11</Dropdown.Item>
                            <Dropdown.Item>12</Dropdown.Item>
                            <Dropdown.Item>13</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col className="filter-hardiness-zone-dropdown-container">
                          <span>Letter</span>
                          <Dropdown>
                            <Dropdown.Toggle variant="light" id="dropdown-basic">
                            -
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="filter-hardiness-zone-menu">
                              <Dropdown.Item>-</Dropdown.Item>
                              <Dropdown.Item>A</Dropdown.Item>
                              <Dropdown.Item>B</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                    </Col>
                  </Row>                    
                </Accordion.Body>
              </Accordion.Item>
              
              <Accordion.Item eventKey="6" className="filter-option">
                <Accordion.Header>
                  <h6>Rarity</h6>
                </Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <Col>
                      <Form.Check type="checkbox" label="Common" />
                      <Form.Check type="checkbox" label="Regular" />
                    </Col>
                    <Col>
                      <Form.Check type="checkbox" label="Rare"/>  
                      <Form.Check type="checkbox" label="Super Rare"/>  
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
              
              <Accordion.Item eventKey="7" className="filter-option">
                <Accordion.Header>
                  <h6>Producer</h6>
                </Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <Col>
                      <Form.Check type="checkbox" label="Location1"/>
                      <Form.Check type="checkbox" label="Location2"/>
                      <Form.Check type="checkbox" label="Location3"/>
                      <Form.Check type="checkbox" label="Location4"/>
                    </Col>
                    <Col>
                      <Form.Check type="checkbox" label="Location5"/>  
                      <Form.Check type="checkbox" label="Location6"/>  
                      <Form.Check type="checkbox" label="Location7"/>
                      <Form.Check type="checkbox" label="Other"/>
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <Container className="filter-cto">
              <Button variant="dark" onClick={() => {applyFilterToProductList()}}>Apply Filters</Button>
              <div>
                <a href="">Reset filters</a>
              </div>
            </Container>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>


    </Container>
  );
}

export default OurProducts;