import Form from "react-bootstrap/esm/Form";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Dropdown from "react-bootstrap/esm/Dropdown";
import InputGroup from 'react-bootstrap/InputGroup';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Accordion from "react-bootstrap/esm/Accordion";
import { useState, useEffect } from 'react';
import filtersData from "../../data/filters.json";
import sadEggs from "../../images/eggs.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import "../../styles/OurProducts.css";
import ProductsListView from "../ProductsListView";
import PromptTooltip from "../PromptTooltip";

function OurProducts({productData, filters}) {
  
  const [show, setFilterShow] = useState(false);
  const handleFilterClose = () => {
    setFilterShow(false);
  }
  const handleFilterShow = () => {
    setCategory(filters.category);
    setFilterShow(true);
  } 

  const [searchTerm, setSearchTerm] = useState("");
  const [hardinessZoneLevel, setHardinessZoneLevel] = useState("-");

  const handleHardinesZoneLevelChange = (eventKey, event) => {
    setHardinessZoneLevel(eventKey);
  }
  
  const [productCategorySelected, setCategory] = useState(filters.category);

  const handleProductCategoryChange = (eventKey, event) => {
    setCategory(eventKey);
  }

  const [sortByState, setSortByState] = useState("Relevance");

  const handleSortByStateChange = (eventKey, event) => {
    setSortByState(eventKey)
    if (eventKey === "Price High to Low"){
      const productsSorted = [...productsShown].sort((a, b) => { 
        return b.price - a.price;
      })
      setProductsShownSortView(productsSorted);
    }
    if (eventKey === "Price Low to High"){
      const productsSorted = [...productsShown].sort((a, b) => { 
        return a.price - b.price;
      })
      setProductsShownSortView(productsSorted);
    }
    if (eventKey === "Rating High to Low"){
      const productsSorted = [...productsShown].sort((a, b) => { 
        return b.rating.star - a.rating.star;
      })
      setProductsShownSortView(productsSorted);
    }
    if (eventKey === "Rating Low to High"){
      const productsSorted = [...productsShown].sort((a, b) => { 
        return a.rating.star - b.rating.star;
      })
      setProductsShownSortView(productsSorted);
    }
    if (eventKey === "Relevance"){
      setProductsShownSortView(productsShown)
    }

  }

  const resetSortByState = (newProductsShown) => {
    setProductsShownSortView(newProductsShown)
    setSortByState("Relevance")
    setProductsShown(newProductsShown);
  }

  const [filtersApplied, setFiltersApplied] = useState(filters);
  const [productsShown, setProductsShown] = useState(productData);
  const [productsShownSortView, setProductsShownSortView] = useState(productData);

  function handleSearchTermChange(event){
    setSearchTerm((searchTerm) => 
      {
        const value = event.target.value.trim();

        filterProductsBasedOnSearchTerm(value);
        resetFilters()

        return value;
      } );
  };

  const filterProductsBasedOnSearchTerm = (term) => {
    const newProducts = productData.filter((product) =>
      product.name.toLowerCase().includes(term.toLowerCase()));

    resetSortByState(newProducts)

    filtersApplied.term = term;
    const newFilters = filtersApplied;
    setFiltersApplied(newFilters);
  }

  const applyFilterToProductList = () => {
    const newFiltersApplied = {}

    newFiltersApplied.category = productCategorySelected;

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

    newFiltersApplied.hardinessZoneLevel = hardinessZoneLevel;
    
    const rarity = {};
    rarity["1"] = document.getElementById("filter-rarity-1").checked;
    rarity["2"] = document.getElementById("filter-rarity-2").checked;
    rarity["3"] = document.getElementById("filter-rarity-3").checked;
    rarity["4"] = document.getElementById("filter-rarity-4").checked;
    newFiltersApplied.rarity = rarity;
    
    const location = {};
    location["Canada"] = document.getElementById("filter-producer-loc-1").checked;
    location["US"] = document.getElementById("filter-producer-loc-2").checked;
    location["Ukraine"] = document.getElementById("filter-producer-loc-3").checked;
    newFiltersApplied.producer = {}
    newFiltersApplied.producer.location = location;

    const newProducts = productData.filter((product) => (
      checkIfProductApplies(product, newFiltersApplied)
    ));

    setFiltersApplied(newFiltersApplied);
    setSearchTerm("");
    resetSortByState(newProducts)

    setFilterShow(false);
  };

  function getPriceInterval(given) {
    if (given >= 0 && given <= 9.99) return("0 9.99");
    if (given >= 10.00 && given <= 24.99) return ("10.00 24.99");
    if (given >= 25.00 && given <= 49.99) return ("25.00 49.99");
    if (given >= 50.00 && given <= 74.99) return ("50.00 74.99");
    if (given >= 75.00 && given <= 1000.00) return ("75.00 1000.00");
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

    const isTool = product.category === "Tools & Accessories";

    const checkLifetimeMatch = 
      ((newFiltersApplied.lifetime["Both"] === true) || 
        ((newFiltersApplied.lifetime["Both"] === false) && newFiltersApplied.lifetime[product.lifetime] === true));
    
    const checkColourMatch = checkAllColours(product.colour, newFiltersApplied);

    const checkHardinessZoneLevelMatch = (newFiltersApplied.hardinessZoneLevel !== "-") ? ((!isTool) ? product.zone.includes(Number.parseInt(newFiltersApplied.hardinessZoneLevel)) : false) : true;

    const checkRarity = (!isTool) ? (newFiltersApplied.rarity[product.rarity.toString()]) : true;

    const checkProducerLocation = newFiltersApplied.producer.location[product.producer.location] ;

    const checkCategory = (newFiltersApplied.category !== "-") ? (product.category === newFiltersApplied.category) : true;

    return(checkBrandMatch && checkPriceMatch && checkSizeMatch && checkLifetimeMatch && checkColourMatch && checkRarity && checkHardinessZoneLevelMatch && checkProducerLocation && checkCategory);
  }

  const resetFilters = () => {
    setFiltersApplied(filtersData);
    setCategory("-");
  }

  useEffect(() => {
    const anyCategoryRequested = sessionStorage.getItem("productCategoryRequested");
    if (anyCategoryRequested !== null){
      const newFilters = filtersApplied;
      newFilters.category = anyCategoryRequested;
      setFiltersApplied(newFilters);
      sessionStorage.removeItem("productCategoryRequested")
    }
    const newProducts = productData.filter((product) => (
      checkIfProductApplies(product, filtersApplied)
    ));

    setProductsShown(newProducts)
    setProductsShownSortView(newProducts)
  }, [, filtersApplied]);
  
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
            <Dropdown className="d-inline mx-2" onSelect={handleSortByStateChange}>
              <Dropdown.Toggle id="dropdown-autoclose-true" variant="light">
                {sortByState}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item eventKey={"Relevance"}>Relevance</Dropdown.Item>
                <Dropdown.Item eventKey={"Price High to Low"}>Price High to Low</Dropdown.Item>
                <Dropdown.Item eventKey={"Price Low to High"}>Price Low to High</Dropdown.Item>
                <Dropdown.Item eventKey={"Rating High to Low"}>Rating High to Low</Dropdown.Item>
                <Dropdown.Item eventKey={"Rating Low to High"}>Rating Low to High</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </span>
        </span>
        <span className="text-align-left">
          Found {productsShown.length} result(s)
        </span>
      </Container>
      <Container>
        <Row>
          {(productsShown.length === 0)? 
              <Container className="products-no-results-container">
                <h2 className="products-no-results-title">No results found...</h2>
                <span className="products-no-results">
                  Oops! We don't have anything with those properties right now! Let us know exactly what you're looking for through the <a href="/FAQ">Contact Us</a> and we can custom order it just for you!
                </span>
                <img className="products-no-results-img" src={sadEggs} alt="sad eggs"/>
              </Container>
            :
            <ProductsListView items={productsShownSortView}></ProductsListView>
          }
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
          <Form >
            <hr/>
            <Row className="filter-category">
              <Col md="4">
                <span> Category: </span>
              </Col>
              <Col md="8" className="filter-category-dropdown-col">
                <Container className="filter-category-dropdown">
                  <Dropdown onSelect={handleProductCategoryChange}>
                    <Dropdown.Toggle variant="light" id="dropdown-basic2" className="filter-category-dropdown-toggle">
                    {productCategorySelected}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item eventKey="-" >-</Dropdown.Item>
                      <Dropdown.Item eventKey="Seeds">Seeds</Dropdown.Item>
                      <Dropdown.Item eventKey="Succulents">Succulents</Dropdown.Item>
                      <Dropdown.Item eventKey="Ferns & Shrubs">Ferns & Shrubs</Dropdown.Item>
                      <Dropdown.Item eventKey="Crops">Crops</Dropdown.Item>
                      <Dropdown.Item eventKey="Flowers">Flowers</Dropdown.Item>
                      <Dropdown.Item eventKey="Trees">Trees</Dropdown.Item>
                      <Dropdown.Item eventKey="Tools & Accessories">Tools & Accessories</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Container>
              </Col>
            </Row>
            <hr/>
            <Accordion variant="dark" alwaysOpen>
              <Accordion.Item eventKey="0" className="filter-option">
                <Accordion.Header>
                  <h6>Brand</h6>
                  <PromptTooltip text={"The brand is the company that produces and distributes the product"}
                    placement={"right"}/>
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
                  <PromptTooltip text={"Filter the products by a specific price range. Select multiple to combine ranges."}
                    placement={"right"} />
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
                  <PromptTooltip text={"Size of product in feet. FOR SEED ONLY: average size of plant at maturity"} 
                    placement={"right"}/>
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
                  <PromptTooltip text={"Plants can be annual, which means they are only good for one year, or perennial, which means they survive for multiple years"} 
                    placement={"right"}/>
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
                  <PromptTooltip text={"The main colours expressed by the product"} 
                    placement={"right"}/>
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
                  <PromptTooltip text={"The temperature zone the plant is usually found in. To find out more, visit our Home page."} 
                    placement={"right"}/>
                </Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <Col className="filter-hardiness-zone-dropdown-container me-2">
                        <span>Zone #</span>
                        <Dropdown onSelect={handleHardinesZoneLevelChange}>
                          <Dropdown.Toggle variant="light" id="dropdown-basic" >
                          {hardinessZoneLevel}
                          </Dropdown.Toggle>
                          <Dropdown.Menu className="filter-hardiness-zone-menu">
                            <Dropdown.Item eventKey="-" >-</Dropdown.Item>
                            <Dropdown.Item eventKey="0">0</Dropdown.Item>
                            <Dropdown.Item eventKey="1">1</Dropdown.Item>
                            <Dropdown.Item eventKey="2">2</Dropdown.Item>
                            <Dropdown.Item eventKey="3">3</Dropdown.Item>
                            <Dropdown.Item eventKey="4">4</Dropdown.Item>
                            <Dropdown.Item eventKey="5">5</Dropdown.Item>
                            <Dropdown.Item eventKey="6">6</Dropdown.Item>
                            <Dropdown.Item eventKey="7">7</Dropdown.Item>
                            <Dropdown.Item eventKey="8">8</Dropdown.Item>
                            <Dropdown.Item eventKey="9">9</Dropdown.Item>
                            <Dropdown.Item eventKey="10">10</Dropdown.Item>
                            <Dropdown.Item eventKey="11">11</Dropdown.Item>
                            <Dropdown.Item eventKey="12">12</Dropdown.Item>
                            <Dropdown.Item eventKey="13">13</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                  </Row>                    
                </Accordion.Body>
              </Accordion.Item>
              
              <Accordion.Item eventKey="6" className="filter-option">
                <Accordion.Header>
                  <h6>Rarity</h6>
                  <PromptTooltip text={"The rarity of the product comprised of 4 levels"} 
                    placement={"right"}/>
                </Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <Col>
                      <Form.Check type="checkbox" label="Very Common" defaultChecked={filtersApplied.rarity["1"]} id="filter-rarity-1" />
                      <Form.Check type="checkbox" label="Regular" defaultChecked={filtersApplied.rarity["2"]} id="filter-rarity-2" />
                    </Col>
                    <Col>
                      <Form.Check type="checkbox" label="Rare" defaultChecked={filtersApplied.rarity["3"]} id="filter-rarity-3" />  
                      <Form.Check type="checkbox" label="Super Rare" defaultChecked={filtersApplied.rarity["4"]} id="filter-rarity-4" />  
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
              
              <Accordion.Item eventKey="7" className="filter-option">
                <Accordion.Header>
                  <h6>Producer</h6>
                  <PromptTooltip text={"Origin of product"}
                    placement={"right"}/>
                </Accordion.Header> 
                <Accordion.Body>
                  <Row>
                    <Col>
                      <Form.Check type="checkbox" label="Canada" defaultChecked={filtersApplied.producer.location["Canada"]} id="filter-producer-loc-1"/>
                      <Form.Check type="checkbox" label="US" defaultChecked={filtersApplied.producer.location["US"]} id="filter-producer-loc-2"/>
                    </Col>
                    <Col>
                      <Form.Check type="checkbox" label="Ukraine" defaultChecked={filtersApplied.producer.location["Ukraine"]} id="filter-producer-loc-3"/>
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <Container className="filter-cto">
              <Button variant="dark" onClick={applyFilterToProductList}>
                Apply Filters
              </Button>
              <div>
                <a href="" onClick={resetFilters}>Reset filters</a>
              </div>
            </Container>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>


    </Container>
  );
}

export default OurProducts;