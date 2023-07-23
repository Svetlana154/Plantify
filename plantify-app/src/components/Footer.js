import Row from "react-bootstrap/esm/Row";
import "../styles/Footer.css";
import Col from "react-bootstrap/esm/Col";
import logoCleanWhite from "../images/logo_clean_white.png";
import Container from "react-bootstrap/esm/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Facebook, Instagram, Twitter } from "react-bootstrap-icons";
import { useTranslation } from 'react-i18next';

function Footer() {
  const {t} = useTranslation();

  return (
    <>  
      <Container fluid className="footer">
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
                  <FontAwesomeIcon icon={faPhone} className="me-2 ms-0"/>
                  <span>
                      +1 (343) 543-3456
                  </span>
              </Container>
              <Container className="footer-socials">
                  <FontAwesomeIcon icon={faEnvelope} className="me-2"/>
                  <span>
                    {t("Email")}
                  </span>
              </Container>
              <Container className="mt-4 mb-5 footer-socials">
                  <a href="https://www.facebook.com/" target="_blank" className="ms-5 me-5 footer-social-link">
                    <Facebook size="20px"/>
                  </a>
                  <a href="https://www.instagram.com/" target="_blank" className="me-5 footer-social-link">
                    <Instagram size="20px"/>
                  </a>
                  <a href="https://www.twitter.com/" target="_blank" className="me-5 footer-social-link">
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