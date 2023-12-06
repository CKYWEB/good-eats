

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import "./components/Errors/not-found.scss";

 
export default function NotFound() {
  return (
    <Container>
      <Row className="d-flex justify-content-center align-items-center flex-column flex-md-row vh-100">
        <Col
          md={4}
          className="d-flex align-items-center justify-content-center justify-content-md-end mv-250"
        >
          <Image
            src="/images/empty-meal.png"
            alt="Error Image"
            fluid
            width="250px"
          />
        </Col>
        <Col
          className="error-message col-8 col-md-4"
        >
          <h1>
            Ooops!
          </h1>
          <p>
            Sorry, the page you are looking for cannot be found. Use this 
            {" "}
            <a
              className="text-decoration-underline text-primary"
              href="/"
            >
              link
            </a>
            {" "}
            to go to homepage.
          </p>
        </Col>
      </Row>
    </Container>
  );
}