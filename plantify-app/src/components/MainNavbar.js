import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton from 'react-bootstrap/SplitButton';
import "../styles/Navbar.css";

function MainNavbar() {
  return (
    <div className='main-navbar'>
      <div className='top-navbar'>
        This is a top navbar
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
                <NavDropdown.Item href="#action/3.1">Seeds</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Succulents</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Ferns & Shrubs</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Crops</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Flowers</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Trees</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Tools & Accessories
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
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
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
    
  );
}

export default MainNavbar;