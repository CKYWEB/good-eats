import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "./components/Errors/not-found.scss";

 
export default function NotFound() {
  return (
    <Container>
      <Row>
        <Col>
          <div className="error-with-image">
            <Image
              src="/images/empty-meal.png"
              alt="Error Image"
              fluid
              className="error-image"
            />
            <div className="error-message">
              <h1>
                404 - Not Found
              </h1>
              <p>
                Sorry, the page you are looking for cannot be found.
              </p>
            </div>
          </div>
        </Col>
      </Row>
     
      
    </Container>
  );
}