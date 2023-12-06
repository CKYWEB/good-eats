
"use client";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

export default function Loading() {
  return (
    <Container>
      <Row className="d-flex justify-content-center align-items-center flex-column vh-100">
        <Col className="col-10">
          <Image
            src="/images/loader.gif"
            alt="Loader animation"
            fluid
          />
        </Col>
        <Col
          className="col-5 ps-4"
        >
          <h4 className="text-left">
            page cooking...
          </h4>
        </Col>
      </Row>
    </Container>
  );
}