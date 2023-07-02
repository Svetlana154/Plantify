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

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import "../../styles/OurProducts.css";
import ProductCard from "../ProductCard";

function OurProducts({productData, filters, search}) {
  
  const [show, setFilterShow] = useState(false);
  const handleFilterClose = () => setFilterShow(false);
  const handleFilterShow = () => setFilterShow(true);

  // convergent/divergent search elements
  const [searchTerm, setSearchTerm] = useState(search);
  const [filtersApplied, setFiltersApplied] = useState(filters);
  const [productsShown, setProductsShown] = useState(productData);


  function handleSearchTermChange(event){
    setSearchTerm((searchTerm) => 
      {
        const value = event.target.value.trim();
        
        const newProducts = productData.filter((product) =>
          product.name.toLowerCase().includes(value.toLowerCase()));

        setProductsShown(newProducts);

        filtersApplied.searchTerm = value;
        const newFilters = filtersApplied;
        setFiltersApplied(newFilters);

        return value;
      } );
  };

  const applyFilterToProductList = () => {
    const newFiltersApplied = {}

    const brand = {};
    brand["Burley's Gardens"] = document.getElementById("filter-brand-1").checked;
    brand["Knippel Gardens"] = document.getElementById("filter-brand-2").checked;
    brand["High Country Roses"] = document.getElementById("filter-brand-3").checked;
    brand["Canada Flowers"] = document.getElementById("filter-brand-4").checked;
    brand["Other"] = document.getElementById("filter-brand-5").checked;
    newFiltersApplied.brand = brand;

    const price = {};
    price["0 9.99"] = document.getElementById("filter-price-1").checked;
    price["10.00 24.99"] = document.getElementById("filter-price-2").checked;
    price["25.00 49.99"] = document.getElementById("filter-price-3").checked;
    price["50.00 74.99"] = document.getElementById("filter-price-4").checked;
    price["75.00 1000.00"] = document.getElementById("filter-price-5").checked;
    newFiltersApplied.price = price;

    const size = {};
    size["0 3"] = document.getElementById("filter-size-1").checked;
    size["3 7"] = document.getElementById("filter-size-2").checked;
    size["7 100"] = document.getElementById("filter-size-3").checked;
    newFiltersApplied.size = size;

    const lifetime = {};
    lifetime["Annual"] = document.getElementById("filter-lifetime-1").checked;
    lifetime["Perennial"] = document.getElementById("filter-lifetime-2").checked;
    lifetime["Both"] = document.getElementById("filter-lifetime-3").checked;
    newFiltersApplied.lifetime = lifetime;

    const colour = {};
    colour["Red"] = document.getElementById("filter-colour-1").checked;
    colour["Orange"] = document.getElementById("filter-colour-2").checked;
    colour["Yellow"] = document.getElementById("filter-colour-3").checked;
    colour["Green"] = document.getElementById("filter-colour-4").checked;
    colour["Pink"] = document.getElementById("filter-colour-5").checked;
    colour["Purple"] = document.getElementById("filter-colour-6").checked;
    colour["Blue"] = document.getElementById("filter-colour-7").checked;
    colour["Other"] = document.getElementById("filter-colour-8").checked;
    newFiltersApplied.colour = colour;

    const newProducts = productData.filter((product) => (
      checkIfProductApplies(product, newFiltersApplied)
    ));

    setFiltersApplied(newFiltersApplied);

    setProductsShown(newProducts);
    setFilterShow(false);
  };

  function getPriceInterval(given) {
    if (given >= 0 && given <= 9.99) return("0 9.99");
    if (given >= 10.00 && given <= 24.99) return ("10.00 24.99");
    if (given >= 25.00 && given <= 49.99) return ("25.00 49.99");
    if (given >= 50.00 && given <= 74.99) return ("50.00 74.99");
    if (given >= 75.00 && given <= 1000.00) return ("75.00 1000.00");
    console.log(given);
  }

  function getSizeInterval(given) {
    if (given >= 0 && given < 3) return("0 3");
    if (given >= 3 && given <= 7) return ("3 7");
    if (given >= 7 && given <= 100) return ("7 100");
  }

  function checkAllColours(colours, filter){
    let foundMatch = false;

    colours.forEach(colour => {
      if ((filter.colour.hasOwnProperty(colour) && (filter.colour[colour] === true)) ||
      ((filter.colour.hasOwnProperty(colour) === false) && filter.colour["Other"] === true)){
        foundMatch = true;
      }
    });

    return (foundMatch);
  }

  function checkIfProductApplies (product, newFiltersApplied) {
    const checkBrandMatch = (newFiltersApplied.brand.hasOwnProperty(product.brand) && (newFiltersApplied.brand[product.brand] === true)) ||
      ((newFiltersApplied.brand.hasOwnProperty(product.brand) === false) && newFiltersApplied.brand["Other"] === true);
      
    const checkPriceMatch = (newFiltersApplied.price[getPriceInterval(product.price)] === true);

    const checkSizeMatch = (newFiltersApplied.size[getSizeInterval(product.size)] === true);

    const isTool = product.category == "tools";

    const checkLifetimeMatch = 
      ((newFiltersApplied.lifetime["Both"] === true) || 
        ((newFiltersApplied.lifetime["Both"] === false) && newFiltersApplied.lifetime[product.lifetime] === true));
    
    const checkColourMatch = checkAllColours(product.colour, newFiltersApplied);

    return(checkBrandMatch && checkPriceMatch && checkSizeMatch && checkLifetimeMatch && checkColourMatch);
  }

  // Generating product list
  var numberOfResults = 0;

  const generatedProductsList = [];
  productsShown.forEach(product =>{
    generatedProductsList.push(
      <Col xs={6} sm={4} md={3}>
        <ProductCard product={product}/>
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
              <Form.Control type="text" placeholder="Search" aria-describedby="edit-name" value={searchTerm} onChange={handleSearchTermChange}/>
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
                <Dropdown.Item href="#">Rating High to Low</Dropdown.Item>
                <Dropdown.Item href="#">Rating Low to High</Dropdown.Item>
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
          <Form onSubmit={applyFilterToProductList}>
            <Accordion variant="dark" alwaysOpen>
              <Accordion.Item eventKey="0" className="filter-option">
                <Accordion.Header>
                  <h6>Brand</h6>
                </Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <Col>
                      <Form.Check type="checkbox" label="Burley's Gardens" defaultChecked={filtersApplied.brand["Burley's Gardens"]} id="filter-brand-1"/>
                      <Form.Check type="checkbox" label="Knippel Gardens" defaultChecked={filtersApplied.brand["Knippel Gardens"]} id="filter-brand-2"/>
                      <Form.Check type="checkbox" label="High Country Roses" defaultChecked={filtersApplied.brand["High Country Roses"]}  id="filter-brand-3" />
                    </Col>
                    <Col>
                      <Form.Check type="checkbox" label="Canada Flowers" defaultChecked={filtersApplied.brand["Canada Flowers"]} id="filter-brand-4" />
                      <Form.Check type="checkbox" label="Other" defaultChecked={filtersApplied.brand["Other"]} id="filter-brand-5" /> 
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
                      <Form.Check type="checkbox" label="Less than $10.00" defaultChecked={filtersApplied.price["0 9.99"]} id="filter-price-1"/>
                      <Form.Check type="checkbox" label="$10.00 - $24.99" defaultChecked={filtersApplied.price["10.00 24.99"]} id="filter-price-2" />
                      <Form.Check type="checkbox" label="$25.00 - $49.99" defaultChecked={filtersApplied.price["25.00 49.99"]} id="filter-price-3" />
                    </Col>
                    <Col>
                      <Form.Check type="checkbox" label="$50.00 - $74.99" defaultChecked={filtersApplied.price["50.00 74.99"]} id="filter-price-4" />
                      <Form.Check type="checkbox" label="$75.00 +" defaultChecked={filtersApplied.price["75.00 1000.00"]} id="filter-price-5"/>
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
                      <Form.Check type="checkbox" label="Small (<3ft)" defaultChecked={filtersApplied.size["0 3"]} id="filter-size-1"/>
                    </Col>
                    <Col>
                      <Form.Check type="checkbox" label="Medium" defaultChecked={filtersApplied.size["3 7"]} id="filter-size-2"/>
                    </Col>
                    <Col>
                      <Form.Check type="checkbox" label="Large (>7ft)" defaultChecked={filtersApplied.size["7 100"]} id="filter-size-3"/>
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
                      <Form.Check name="lifetimeGroup" type="radio" label="Annual" defaultChecked={filtersApplied.lifetime["Annual"]} id="filter-lifetime-1"/>
                    </Col>
                    <Col>
                      <Form.Check name="lifetimeGroup" type="radio" label="Perennial" defaultChecked={filtersApplied.lifetime["Perennial"]} id="filter-lifetime-2" />
                    </Col>
                    <Col>
                      <Form.Check name="lifetimeGroup" type="radio" label="Both" defaultChecked={filtersApplied.lifetime["Both"]} id="filter-lifetime-3"/>
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
                      <Form.Check type="checkbox" label="Red" defaultChecked={filtersApplied.colour["Red"]} id="filter-colour-1"/>
                      <Form.Check type="checkbox" label="Orange" defaultChecked={filtersApplied.colour["Orange"]} id="filter-colour-2" />
                      <Form.Check type="checkbox" label="Yellow" defaultChecked={filtersApplied.colour["Yellow"]} id="filter-colour-3" />
                      <Form.Check type="checkbox" label="Green" defaultChecked={filtersApplied.colour["Green"]} id="filter-colour-4" />
                    </Col>
                    <Col>
                      <Form.Check type="checkbox" label="Pink" defaultChecked={filtersApplied.colour["Pink"]} id="filter-colour-5" />
                      <Form.Check type="checkbox" label="Purple" defaultChecked={filtersApplied.colour["Purple"]} id="filter-colour-6" />
                      <Form.Check type="checkbox" label="Blue" defaultChecked={filtersApplied.colour["Blue"]} id="filter-colour-7" />
                      <Form.Check type="checkbox" label="Other" defaultChecked={filtersApplied.colour["Other"]} id="filter-colour-8" />
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
              <Button variant="dark" type="submit">
                Apply Filters
              </Button>
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