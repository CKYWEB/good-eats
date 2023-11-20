"use client";

import React from "react";
import "./home.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import CardComponent from "@/app/components/Card/card";
import OffcanvasComponent from "@/app/components/Offcanvas/offcanvas";


export default function Home() {

  const [showOffcanvas1, setShowOffcanvas1] = useState(false);
  const [showOffcanvas2, setShowOffcanvas2] = useState(false);
  const [showOffcanvas3, setShowOffcanvas3] = useState(false);
  const [showOffcanvas4, setShowOffcanvas4] = useState(false);
  const [showOffcanvas5, setShowOffcanvas5] = useState(false);
  const [showOffcanvas6, setShowOffcanvas6] = useState(false);

  const handleButtonClickLeft1 = () => {
    setShowOffcanvas1(true);
  };
  const handleButtonClickLeft2 = () => {
    setShowOffcanvas2(true);
  };
  const handleButtonClickLeft3 = () => {
    setShowOffcanvas3(true);
  };
  const handleButtonClickLeft4 = () => {
    setShowOffcanvas4(true);
  };
  const handleButtonClickLeft5 = () => {
    setShowOffcanvas5(true);
  };
  const handleButtonClickLeft6 = () => {
    setShowOffcanvas6(true);
  };

  const handleButtonClickRight = () => {
    // TODO
    console.log("Right Button clicked!");
  };

  const handleCloseOffcanvas1 = () => {
    setShowOffcanvas1(false);
  };
  const handleCloseOffcanvas2 = () => {
    setShowOffcanvas2(false);
  };
  const handleCloseOffcanvas3 = () => {
    setShowOffcanvas3(false);
  };
  const handleCloseOffcanvas4 = () => {
    setShowOffcanvas4(false);
  };
  const handleCloseOffcanvas5 = () => {
    setShowOffcanvas5(false);
  };
  const handleCloseOffcanvas6 = () => {
    setShowOffcanvas6(false);
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
              onClickLeft={handleButtonClickLeft1}
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
              onClickLeft={handleButtonClickLeft2}
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
              onClickLeft={handleButtonClickLeft3}
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
              onClickLeft={handleButtonClickLeft4}
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
              onClickLeft={handleButtonClickLeft5}
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
              onClickLeft={handleButtonClickLeft6}
              buttonTextRight="See Recipe"
              onClickRight={handleButtonClickRight}
            />
          </Col>
        </Row>
      </Container>
      <OffcanvasComponent
        show={showOffcanvas1}
        onHide={handleCloseOffcanvas1}
        title="Simple Pasta Salad"
        content={<p>
          It is very simple worth trying.
        </p>}
        imageUrl="/images/card-1.webp"
      />
      <OffcanvasComponent
        show={showOffcanvas2}
        onHide={handleCloseOffcanvas2}
        title="Cobb Salad"
        content={<p>
          A super tasty salad.
        </p>}
        imageUrl="/images/card-2.webp"
      />
      <OffcanvasComponent
        show={showOffcanvas3}
        onHide={handleCloseOffcanvas3}
        title="The Denver Omelet"
        content={<p>
          The best omelet.
        </p>}
        imageUrl="/images/card-3.webp"
      />
      <OffcanvasComponent
        show={showOffcanvas4}
        onHide={handleCloseOffcanvas4}
        title="Hot Dog Mummies"
        content={<p>
          A cute hot dog. Fun to make with kids.
        </p>}
        imageUrl="/images/card-4.webp"
      />
      <OffcanvasComponent
        show={showOffcanvas5}
        onHide={handleCloseOffcanvas5}
        title="Zesty Quinoa Salad"
        content={<p>
          Healthy food for body. It is good to have it after workout.
        </p>}
        imageUrl="/images/card-5.webp"
      />
      <OffcanvasComponent
        show={showOffcanvas6}
        onHide={handleCloseOffcanvas6}
        title="Garlic Bread Spread"
        content={<p>
          Tasty food for every meal. Worth trying.
        </p>}
        imageUrl="/images/card-6.webp"
      />

    </div >
  );
}