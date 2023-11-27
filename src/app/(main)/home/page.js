"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import CardComponent from "@/app/components/Card/card";
import OffcanvasComponent from "@/app/components/Offcanvas/offcanvas";
import AccordionComponent from "@/app/components/Accordion/accordion";
import CarouselComponent from "@/app/components/Carousel/carousel";
import { ButtonGroup } from "react-bootstrap";
import Button from "@/app/components/Button/button";


export default function Home() {

  const carouselItems = [
    {
      imageUrl: "/images/carousel-1.jpg",
      title: "Slide 1",
      description: "Description for Slide 1",
    },
    {
      imageUrl: "/images/carousel-2.jpg",
      title: "Slide 2",
      description: "Description for Slide 2",
    },
    {
      imageUrl: "/images/carousel-3.jpg",
      title: "Slide 2",
      description: "Description for Slide 2",
    },];

  const buttons = [
    {
      id: "1",
      variant: "primary",
      label: "Asia",
    },
    {
      id: "2",
      variant: "primary",
      label: "American",
    },
    {
      id: "3",
      variant: "primary",
      label: "European",
    },];

  const cards = [
    {
      imageUrl: "/images/card-1.webp",
      title: "Simple Pasta Salad",
      text: "Salad Recipes",
      content: "It is very simple worth trying.",
      shouldShowBadge: false,
    },
    {
      imageUrl: "/images/card-2.webp",
      title: "Cobb Salad",
      text: "Salad Recipes",
      content: "A super tasty salad.",
      shouldShowBadge: true,
    }, {
      imageUrl: "/images/card-3.webp",
      title: "The Denver Omelet",
      text: "Omelet Recipes",
      content: "The best omelet.",
      shouldShowBadge: false,
    }, {
      imageUrl: "/images/card-4.webp",
      title: "Hot Dog Mummies",
      text: "Wraps and Rolls",
      content: "A cute hot dog. Fun to make with kids.",
      shouldShowBadge: true,
    },
    {
      imageUrl: "/images/card-5.webp",
      title: "Zesty Quinoa Salad",
      text: "Quinoa Salad Recipes",
      content: "Healthy food for body. It's good to have it after workout.",
      shouldShowBadge: false,
    },
    {
      imageUrl: "/images/card-6.webp",
      title: "Garlic Bread Spread",
      text: "Garlic Bread Recipes",
      content: "Tasty food for every meal. Worth trying.",
      shouldShowBadge: false,
    },
  ];

  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [currentCard, setCurrentCard] = useState({});

  const handleCardBtnClick = (isLeftBtn, card) => {
    if (isLeftBtn) {
      // IF LEFT IS CLICKED
      setCurrentCard(card);
      setShowOffcanvas(true);
    } else {
      // TODO
      console.log("Right Button clicked!");
    }
  };

  const handleBtnGroupClick = () => {
    // TODO
    console.log("Button click!");
  };
  const handleCloseOffcanvas = () => {
    setShowOffcanvas(false);
  };

  const accordionHeaders = ["Does the website allow guest posts?", "What's the easiest way to get all your recipes?", "Does the website promote brands like itself or allow sponsored posts?"];
  const accordionBodies = [
    "Currently do not accept guest posts on Good Eats. If the policy changes it will be updated here.",
    "Just subscribe to our newsletter at the bottom of this page and our recipes will be sent right to your email. New recipes will be sent every week, along with ideas, cooking tips and so much more. Once you've signed up for our newsletter, make sure you confirm your email address.",
    "Yes, we are always on the lookout for fabulous new products and ideas to share with our Good Eats readers. Suggestions are welcome but will only consider those we think would be a good fit for our audience. In addition, we don't provide reviews of the products."
  ];

  return (
    <div>
      <div className="w-75 mx-auto">
        <CarouselComponent items={carouselItems} />
      </div>

      <div className="d-flex justify-content-center p-4">
        <ButtonGroup>
          {buttons.map((button) => (
            <Button
              key={button.id}
              variant={button.variant}
              onClick={() => handleBtnGroupClick(button)}
              style={{ marginRight: "10px", borderRadius: "6px" }}
            >
              {button.label}
            </Button>
          ))}
        </ButtonGroup>
      </div>


      <Container >
        <Row >
          {cards.map(card => {
            return (
              <Col
                key={card.title}
                xs={12}
                md={6}
                lg={4}
                className="d-flex justify-content-center py-4"
              >

                <CardComponent
                  card={card}
                  showBadge={card.shouldShowBadge}
                  badgeText="New"
                  buttonTextLeft="Introduction"
                  buttonTextRight="See Recipe"
                  onBtnClick={handleCardBtnClick}
                />
              </Col>
            );
          })}
        </Row>
      </Container>

      <OffcanvasComponent
        show={showOffcanvas}
        onHide={handleCloseOffcanvas}
        title={currentCard.title}
        content={<p>
          {currentCard.content}
        </p>}
        imageUrl={currentCard.imageUrl}
      />

      <div
        className="w-75 mx-auto"
      >
        <h2 className="text-center">
          FAQ
        </h2>
        <AccordionComponent
          headers={accordionHeaders}
          bodies={accordionBodies}
        />
      </div>

    </div >
  );
}