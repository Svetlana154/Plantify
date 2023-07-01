import { useState } from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEarthAmericas, faShoppingCart, faSearch, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import "../styles/MainNavbar.css";
import logoClean from "../images/logo_clean.png";

function MainNavbar({promptSignIn}) {
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
      <Navbar expand="lg" className="bg-body-tertiary bottom-navbar">
          <Navbar.Brand className="navbar-brand" href="/">
            <img src={logoClean} alt="Plantify" width="100px"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/AboutUs">About Us</Nav.Link>
              <NavDropdown id="basic-nav-dropdown" title="Our Products">
                <NavDropdown.Item href="/OurProducts">Seeds</NavDropdown.Item>
                <NavDropdown.Item href="/OurProducts">Succulents</NavDropdown.Item>
                <NavDropdown.Item href="/OurProducts">Ferns & Shrubs</NavDropdown.Item>
                <NavDropdown.Item href="/OurProducts">Crops</NavDropdown.Item>
                <NavDropdown.Item href="/OurProducts">Flowers</NavDropdown.Item>
                <NavDropdown.Item href="/OurProducts">Trees</NavDropdown.Item>
                <NavDropdown.Item href="/OurProducts">
                  Tools & Accessories
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/OurProducts">
                  View All
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown id="basic-nav-dropdown" title="Support">
                <NavDropdown.Item href="/FAQ">FAQ</NavDropdown.Item>
                <NavDropdown.Item href="/#ContactUs">Contact Us</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className='ms-auto'>
                <Nav.Link href="/">
                  <FontAwesomeIcon icon={faLocationDot} size='xl'/>
                </Nav.Link>
                <Nav.Link href="/">
                  <FontAwesomeIcon icon={faShoppingCart} size='xl'/>
                </Nav.Link>
                <Nav.Link href="" onClick={() => {promptSignIn(true);}}>
                  <FontAwesomeIcon icon={faCircleUser} size='xl'/>
                </Nav.Link>
                <Nav.Link href="/">
                  <FontAwesomeIcon icon={faSearch} size='xl'/>
                </Nav.Link>
              </Nav>
          </Navbar.Collapse>
      </Navbar>
    </div>
    
  );
}

export default MainNavbar;