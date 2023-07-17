import Container from "react-bootstrap/esm/Container";
import Accordion from "react-bootstrap/esm/Accordion";
import "../../styles/FAQ.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import faqData from "../../data/faq.json";
import {Bar} from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js"
import ContactUs from "../ContactUs";

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

  const labels = ["Flowers", "Succulents", "Seeds", "Berries", "Vegetables", "Fruit", "Ferns & Shrubs", "Deciduous Trees", "Coniferous Trees", "Nut Trees"];
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Plantify Statistics",
        data: [24, 32, 21, 14, 16, 8, 13, 3, 5, 1],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1
      },
    ],
  };

  return (
    <div className="w-100">
      <Container className="faq">
        <FontAwesomeIcon icon={faCircleQuestion} size='2xl' className="faq-icon"/>
        <h1>Frequently Asked Questions</h1>
        <Accordion variant="dark" className="faq-content" alwaysOpen>
          {accordionItems}
          <Accordion.Item eventKey={faqData.length}>
            <Accordion.Header>What are the most frequently-bought items?</Accordion.Header>
            <Accordion.Body>
              <div className="chart-container">
                <Bar
                  data={chartData}
                  options={{
                    plugins: {
                      title: {
                        display: true,
                        text: "Most Frequently Brought Items By Category"
                      },
                      legend: {
                        display: false
                      }
                    }
                  }}
                />
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
      <ContactUs />
    </div>
  );
}

export default FAQ;