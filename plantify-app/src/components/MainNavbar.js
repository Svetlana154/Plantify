import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEarthAmericas, faShoppingCart, faSearch, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import "../styles/MainNavbar.css";
import logoClean from "../images/logo_clean.png";
import IconTooltip from './IconTooltip';
import LangContext from '../LangContext'
import { useContext, useEffect } from 'react';
import i18n from '../i18n';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HashLink, NavHashLink } from 'react-router-hash-link';
import { text } from '@fortawesome/fontawesome-svg-core';

const langs = {
  English: {title: 'English'},
  Latin: {title: 'Latinus'}
}

function MainNavbar({promptSignIn}) {

  const navigate = useNavigate();
  
  const selectProductCategory = (eventKey, event) => {
    sessionStorage.setItem("productCategoryRequested", eventKey)
  }

  const {t} = useTranslation();

  const { lang } = useContext(LangContext);

  function changeLang (l) {
    if (lang !== l) {
      i18n.changeLanguage(l);
    }
  }

  const [navbarData, setNavbarData] = useState({});

  useEffect(() => {
    let isSubscribed = true;
    console.log("fetching: "+ t('Navbar'));

    const fetchData = async () => {
      const data = await fetch(t('Navbar'));
      const json = await data.json();
      if (isSubscribed) {
        setNavbarData(json);
      }
    }

    fetchData()
      .catch(console.error);

    return () => isSubscribed = false;

  }, [lang]);

  return (
    <div className='main-navbar' aria-description='This is the navigation bar of the website. It presents several links to help organize all of the content.'>
      <div className='top-navbar'>
        <span className='top-navbar-item'>
          <FontAwesomeIcon icon={faPhone} className='top-navbar-item-icon'/>
          <span aria-description='Phone number:'>
            +1 (343) 543-3456
          </span>
        </span>
        <span className='top-navbar-item'>
          <FontAwesomeIcon icon={faEnvelope} className='top-navbar-item-icon'/>
          <span aria-description='Email:'>
            {t("Email")}
          </span>
        </span>
        <span className='top-navbar-item'>
          <FontAwesomeIcon icon={faEarthAmericas} className='top-navbar-item-icon' />
            <span aria-description='Change language: '>
              {Object.keys(langs).map((lang) => (
                <span key={lang}>
                  <span style={{ margin:"2px", cursor:"pointer", fontWeight: i18n.resolvedLanguage === lang ? 'bold' : 'normal' }} onClick={() => changeLang(lang) }>
                    {langs[lang].title}
                  </span> |
                </span>                
              ))}
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
              <Nav.Link href="/">{navbarData["Home"]}</Nav.Link>
              <Nav.Link href="/AboutUs">{navbarData["AboutUs"]}</Nav.Link>
              <NavDropdown id="basic-nav-dropdown" title={navbarData["Our Products"]} onSelect={selectProductCategory}>
                <NavDropdown.Item eventKey="Seeds" href='/OurProducts'>{navbarData["Seeds"]}</NavDropdown.Item>
                <NavDropdown.Item eventKey="Succulents" href='/OurProducts'>{navbarData["Succulents"]}</NavDropdown.Item>
                <NavDropdown.Item eventKey="Ferns & Shrubs" href='/OurProducts'>{navbarData["Ferns & Shrubs"]}</NavDropdown.Item>
                <NavDropdown.Item eventKey="Crops" href='/OurProducts'>{navbarData["Crops"]}</NavDropdown.Item>
                <NavDropdown.Item eventKey="Flowers" href='/OurProducts'>{navbarData["Flowers"]}</NavDropdown.Item>
                <NavDropdown.Item eventKey="Trees" href='/OurProducts'>{navbarData["Trees"]}</NavDropdown.Item>
                <NavDropdown.Item eventKey="Tools & Accessories" href='/OurProducts'>
                  {navbarData["Tools & Accessories"]}
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="-" href='/OurProducts'>
                  {navbarData["View All"]}
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/FAQ">{navbarData["Contact Us"]}</Nav.Link>
            </Nav>
            <Nav className='ms-auto'>
                <IconTooltip item={
                      <Nav.Link aria-description="Link to location of physical store">
                        <NavHashLink to="/#location" style={{ textDecoration: 'none' }}>
                          <FontAwesomeIcon icon={faLocationDot} size='xl' style={{color: '#575757'}}/>
                        </NavHashLink>
                      </Nav.Link>
                  }
                  text={(navbarData.Tooltips)? navbarData.Tooltips.Location: ""}
                  placement="bottom"
                />
                <IconTooltip item={
                    <Nav.Link href="/ShoppingCart" aria-description="Link to shopping cart">
                      <FontAwesomeIcon icon={faShoppingCart} size='xl' id="navbar-shopping-cart"/>
                    </Nav.Link>
                  }
                  text={(navbarData.Tooltips)? navbarData.Tooltips.ShoppingCart : ""}
                  placement="bottom"
                />
                
                <IconTooltip item={
                    <Nav.Link href="" onClick={() => {(localStorage.getItem("activeAccount")) ? navigate("/Profile") : promptSignIn(true);}} aria-description="Link to profile">
                      <FontAwesomeIcon icon={faCircleUser} size='xl'/>
                    </Nav.Link>
                  }
                  text={(navbarData.Tooltips)? navbarData.Tooltips.Profile: ""}
                    placement="bottom"
                />
              </Nav>
          </Navbar.Collapse>
      </Navbar>
    </div>
    
  );
}

export default MainNavbar;