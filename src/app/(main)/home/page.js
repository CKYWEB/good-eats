"use client";

import React from "react";
import "./home.module.scss";
import CardComponent from "@/app/components/Card/card";
import { Container, Row, Col } from "react-bootstrap";

export default function Home() {
  const handleButtonClickLeft = () => {
    // TODO
    console.log("Left Button clicked!");
  };

  const handleButtonClickRight = () => {
    // TODO
    console.log("Right Button clicked!");
  };

  return (
    <div>
      <Container >
        <Row >
          <Col
            xs={12}
            md={6}
            lg={4}
            className="d-flex justify-content-center py-4"
          >

            <CardComponent
              imageUrl="/images/card-1.webp"
              title="Simple Pasta Salad"
              text="Salad Recipes"
              buttonTextLeft="Introduction"
              onClickLeft={handleButtonClickLeft}
              buttonTextRight="See Recipe"
              onClickRight={handleButtonClickRight}
            />
          </Col>
          <Col
            xs={12}
            md={6}
            lg={4}
            className="d-flex justify-content-center py-4"
          >

            <CardComponent
              imageUrl="/images/card-2.webp"
              title="Cobb Salad"
              text="Salad Recipes"
              buttonTextLeft="Introduction"
              onClickLeft={handleButtonClickLeft}
              buttonTextRight="See Recipe"
              onClickRight={handleButtonClickRight}
            />
          </Col>
          <Col
            xs={12}
            md={6}
            lg={4}
            className="d-flex justify-content-center py-4"
          >
            <CardComponent
              imageUrl="/images/card-3.webp"
              title="The Denver Omelet"
              text="Omelet Recipes"
              buttonTextLeft="Introduction"
              onClickLeft={handleButtonClickLeft}
              buttonTextRight="See Recipe"
              onClickRight={handleButtonClickRight}
            />
          </Col>
          <Col
            xs={12}
            md={6}
            lg={4}
            className="d-flex justify-content-center py-4"
          >

            <CardComponent
              imageUrl="/images/card-4.webp"
              title="Hot Dog Mummies"
              text="Wraps and Rolls"
              buttonTextLeft="Introduction"
              onClickLeft={handleButtonClickLeft}
              buttonTextRight="See Recipe"
              onClickRight={handleButtonClickRight}
            />
          </Col>
          <Col
            xs={12}
            md={6}
            lg={4}
            className="d-flex justify-content-center py-4"
          >

            <CardComponent
              imageUrl="/images/card-5.webp"
              title="Zesty Quinoa Salad"
              text="Quinoa Salad Recipes"
              buttonTextLeft="Introduction"
              onClickLeft={handleButtonClickLeft}
              buttonTextRight="See Recipe"
              onClickRight={handleButtonClickRight}
            />
          </Col>
          <Col
            xs={12}
            md={6}
            lg={4}
            className="d-flex justify-content-center py-4"
          >
            <CardComponent
              imageUrl="/images/card-6.webp"
              title="Garlic Bread Spread"
              text="Garlic Bread Recipes"
              buttonTextLeft="Introduction"
              onClickLeft={handleButtonClickLeft}
              buttonTextRight="See Recipe"
              onClickRight={handleButtonClickRight}
            />
          </Col>
        </Row>
      </Container>
    </div >
  );
}