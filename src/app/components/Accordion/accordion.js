import Accordion from "react-bootstrap/Accordion";

export default function AccordionComponent(props) {
  const { headers, bodies } = props;

  return (
    <div>
      <Accordion defaultActiveKey="0">
        {headers.map((header, index) => (
          <Accordion.Item
            key={index}
            eventKey={index.toString()}
          >
            <Accordion.Header>
              {header}
            </Accordion.Header>
            <Accordion.Body>
              {bodies[index]}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}