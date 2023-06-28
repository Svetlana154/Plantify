import Container from "react-bootstrap/esm/Container";
import Accordion from "react-bootstrap/esm/Accordion";
import "../../styles/FAQ.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import faqData from "../../data/faq.json";

function FAQ() {
  const accordionItems = [];

  faqData.forEach(item => {
    accordionItems.push(
      <Accordion.Item eventKey={item.key}>
        <Accordion.Header>{item.header}</Accordion.Header>
        <Accordion.Body>
          {item.body}
        </Accordion.Body>
      </Accordion.Item>
      );
  });

  return (
    <Container className="faq">
      <FontAwesomeIcon icon={faCircleQuestion} size='2xl' className="faq-icon"/>
      <h1>Frequently Asked Questions</h1>
      <Accordion variant="dark" className="faq-content" alwaysOpen>
        {accordionItems}
      </Accordion>
    </Container>
  );
}

export default FAQ;