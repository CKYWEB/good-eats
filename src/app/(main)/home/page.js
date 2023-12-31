"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import CardComponent from "@/app/components/Card/card";
import OffcanvasComponent from "@/app/components/Offcanvas/offcanvas";
import AccordionComponent from "@/app/components/Accordion/accordion";
import CarouselComponent from "@/app/components/Carousel/carousel";
import { getAllRecipes } from "@/api/recipe";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { parseISO, differenceInDays } from "date-fns";
import Loading from "@/app/components/Loading";

export default function Home() {
  const [recipe, setRecipe] = useState(undefined);

  const fetchRecipe = async () => {
    try {
      const res = await getAllRecipes();
      const { data } = res;
      setRecipe(data?.slice(0, 6));
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchRecipe();
  }, []);

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

  const cards = recipe?.map((recipeItem) => ({
    id: recipeItem._id,
    imageUrl: `data:image/png;base64,${recipeItem.image}`,
    title: recipeItem.title,
    text: recipeItem.tag,
    content: recipeItem.description,
    shouldShowBadge: differenceInDays(new Date(), parseISO(recipeItem.createdDate)) < 3,
    shouldShowIcon: true,
  }));

  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [currentCard, setCurrentCard] = useState({});
  const router = useRouter();

  const handleCardBtnClick = (isLeftBtn, card) => {
    if (isLeftBtn) {
      // IF LEFT IS CLICKED
      setCurrentCard(card);
      setShowOffcanvas(true);
    } else {
      router.push(`/recipe/${card.id}`);
    }
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


  if (recipe) {
    return (
      <div>
        <div className="w-75 mx-auto">
          <CarouselComponent items={carouselItems} />
        </div>


        <Container className="my-5">
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
          className="w-75 mx-auto my-5"
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
  return (
    <Container className="my-5 d-flex justify-content-center">
      <div>
        <Loading />
      </div>
    </Container>)
  ;
}