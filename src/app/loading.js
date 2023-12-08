"use client";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

export default function Loading() {
  return (
    <Container>
      <Row className="vh-100 align-items-center gap-0">
        <Col
          xs={12}
          className="d-flex justify-content-center"
        >
          <Image
            src="/images/loader.gif"
            alt="Loader animation"
            fluid
          />
        </Col>
      </Row>
    </Container>
  );
}