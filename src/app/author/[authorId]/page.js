"use client";
import { getAuthorRecipe } from "@/api/recipe";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import CardComponent from "@/app/components/Card/card";
import { Container, Row, Col } from "react-bootstrap";
import { useRouter } from "next/navigation";
import OffcanvasComponent from "@/app/components/Offcanvas/offcanvas";

export default function AuthorRecipe({ params }) {

  const { authorId } = params;
  const [recipe, setRecipe] = useState(undefined);

  const fetchAuthorRecipe = async (authorId) => {
    try {
      const res = await getAuthorRecipe(authorId);
      const { data } = res;
      setRecipe(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchAuthorRecipe(authorId);
  }, [authorId]);

  const cards = recipe?.map((recipeItem) => ({
    id: recipeItem._id,
    imageUrl: `data:image/png;base64,${recipeItem.image}`,
    title: recipeItem.title,
    text: recipeItem.tag,
    content: recipeItem.description,
    shouldShowBadge: false,
    shouldShowIcon: false,
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

  if (recipe) {
    return (

      <div>
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

      </div>
    );
  }
}