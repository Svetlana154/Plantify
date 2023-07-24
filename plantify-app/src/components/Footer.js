import Row from "react-bootstrap/esm/Row";
import "../styles/Footer.css";
import Col from "react-bootstrap/esm/Col";
import logoCleanWhite from "../images/logo_clean_white.png";
import Container from "react-bootstrap/esm/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { Facebook, Instagram, Twitter } from "react-bootstrap-icons";
import { useTranslation } from 'react-i18next';

function Footer() {
  const {t} = useTranslation();

  return (
    <>  
      <Container fluid className="footer" aria-description='This is the footer of the website.'>
        <Row className="footer-row">
          <Col md={5} className="mt-5 mb-5">
            <img src={logoCleanWhite} alt="Plantify" width="200px"/>
            <div className="footer-logo-text">
              <i>
                &copy; {t("Footer")}
              </i>
            </div>
          </Col>
          <Col md={3}>

          </Col>
          <Col className="mt-5 mb-5 footer-content">
              <Container className="footer-socials">
                  <FontAwesomeIcon icon={faPhone} className="me-2 ms-0" aria-description='Phone number'/>
                  <span aria-description="Phone number:">
                      +1 (343) 543-3456
                  </span>
              </Container>
              <Container className="footer-socials">
                  <FontAwesomeIcon icon={faEnvelope} className="me-2" aria-description='Email'/>
                  <span aria-description="Email:">
                    {t("Email")}
                  </span>
              </Container>
              <Container className="mt-4 mb-5 footer-socials">
                  <a href="https://www.facebook.com/" target="_blank" className="ms-5 me-5 footer-social-link" aria-description="Link to Facebook">
                    <Facebook size="20px"/>
                  </a>
                  <a href="https://www.instagram.com/" target="_blank" className="me-5 footer-social-link" aria-description="Link to Instagram">
                    <Instagram size="20px"/>
                  </a>
                  <a href="https://www.twitter.com/" target="_blank" className="me-5 footer-social-link" aria-description="Link to Twitter">
                    <Twitter size="20px"/>
                  </a>
              </Container>
          </Col>
        </Row>
      </Container>
    </>
    
  );
}

export default Footer;