"use client";
import { useState, useEffect } from "react";
import { getSavedRecipe } from "@/api/recipe";
import toast from "react-hot-toast";
import CardComponent from "@/app/components/Card/card";
import { Container, Row, Col } from "react-bootstrap";
import { useRouter } from "next/navigation";
import OffcanvasComponent from "@/app/components/Offcanvas/offcanvas";
import { useUserStore } from "@/store/user";

export default function SavedRecipes() {
  const { currentUser } = useUserStore();
  const [recipeDetails, setRecipeDetails] = useState([]);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const { savedRecipe } = currentUser;
        const res = await getSavedRecipe(savedRecipe);
        const { data } = res;
        console.log("Recipe Details:", data);
        setRecipeDetails(data);
      } catch (error) {
        console.error("Error fetching recipe details:", error);
        toast.error(error.message);
      }
    };

    fetchRecipeDetails();
  }, [currentUser]);

  const cards = recipeDetails?.map((recipeItem) => ({
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

  return (
    <div>
      <Container>
        <p className="text-center pt-5 fs-2 fw-bold">
          All Saved Recipes
        </p>
        <p className="text-center fs-5">
          All your favorite content in one place!
        </p>
        <hr />

        <Row className="mb-3">
          <Col>
            <p>
              {recipeDetails?.length || 0}
              {" "}
              Items
            </p>
          </Col>
        </Row>

        <Container>
          <Row>
            {cards?.length > 0 ? (
              cards.map((card) => (
                <Col
                  key={card.id}
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
              ))
            ) : (
              <Col
                xs={12}
                className="text-center py-4"
              >
                <p>
                  You have no favorite recipe
                </p>
              </Col>
            )}
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
      </Container>
    </div>
  );
}