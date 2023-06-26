import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEarthAmericas, faShoppingCart, faSearch, faLocation, faLocationPin, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import "../styles/Navbar.css";

function MainNavbar() {
  return (
    <div className='main-navbar'>
      <div className='top-navbar'>
        <span className='top-navbar-item'>
          <FontAwesomeIcon icon={faPhone} className='top-navbar-item-icon'/>
          <span>
            +1 (343) 543-3456
          </span>
        </span>
        <span className='top-navbar-item'>
          <FontAwesomeIcon icon={faEnvelope} className='top-navbar-item-icon'/>
          <span>
            customer-service@plantify.com
          </span>
        </span>
        <span className='top-navbar-item'>
          <FontAwesomeIcon icon={faEarthAmericas} className='top-navbar-item-icon'/>
          <span>
            EN | LA
          </span>
        </span>
      </div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand className="navbar-brand" href="/">Plantify</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/AboutUs">About Us</Nav.Link>
              <NavDropdown id="basic-nav-dropdown" title="Garden Center">
                <NavDropdown.Item href="/GardenCenter">Seeds</NavDropdown.Item>
                <NavDropdown.Item href="/GardenCenter">Succulents</NavDropdown.Item>
                <NavDropdown.Item href="/GardenCenter">Ferns & Shrubs</NavDropdown.Item>
                <NavDropdown.Item href="/GardenCenter">Crops</NavDropdown.Item>
                <NavDropdown.Item href="/GardenCenter">Flowers</NavDropdown.Item>
                <NavDropdown.Item href="/GardenCenter">Trees</NavDropdown.Item>
                <NavDropdown.Item href="/GardenCenter">
                  Tools & Accessories
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/GardenCenter">
                  View All
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown id="basic-nav-dropdown" title="Contact Us">
                <NavDropdown.Item href="/FAQ">FAQ</NavDropdown.Item>
                <NavDropdown.Item href="/FAQ">Leave a Review</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Contact Us
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className='ms-auto'>
              <Nav.Link href="/">
                <FontAwesomeIcon icon={faLocationDot} />
              </Nav.Link>
              <Nav.Link href="/">
                <FontAwesomeIcon icon={faShoppingCart} />
              </Nav.Link>
              <Nav.Link href="/">
                <FontAwesomeIcon icon={faCircleUser} />
              </Nav.Link>
              <Nav.Link href="/">
                <FontAwesomeIcon icon={faSearch} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
    
  );
}

export default MainNavbar;