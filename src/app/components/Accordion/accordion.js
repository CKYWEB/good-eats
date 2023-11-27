import { Accordion, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import styles from "./accordion.module.scss";

export default function AccordionComponent(props) {
  const { headers, bodies } = props;
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const isAccordionOpen = (index) => activeIndex === index;

  return (
    <div>
      <Accordion>
        {headers.map((header, index) => (
          <Card key={index}>
            <Card.Header
              className={`d-flex justify-content-between styles.accordion-header ${isAccordionOpen(index) ? "active" : ""}`}
              onClick={() => handleAccordionClick(index)}
            >
              {header}
              <FontAwesomeIcon
                icon={isAccordionOpen(index) ? faChevronUp : faChevronDown}
                className={styles.arrow_icon}
              />
            </Card.Header>
            <Accordion.Collapse in={isAccordionOpen(index)}>
              <Card.Body
                className={styles.card_body}
              >
                {bodies[index]}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
    </div>
  );
}