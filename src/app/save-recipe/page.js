"use client";
import { useState, useEffect } from "react";
import { getSavedRecipe, getRecipe } from "@/api/recipe";
import toast from "react-hot-toast";
import CardComponent from "@/app/components/Card/card";
import { Container, Row, Col } from "react-bootstrap";


export default function SaveRecipe() {

  const [savedRecipe, setSavedRecipe] = useState(undefined);
  const [recipeDetails, setRecipeDetails] = useState([]);

  const fetchSavedRecipe = async () => {
    try {
      const res = await getSavedRecipe();
      const { data } = res;
      setSavedRecipe(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error(error.message);
    }
  };

  const fetchRecipeDetails = async (recipeId) => {
    try {
      const res = await getRecipe(recipeId);
      const { data } = res;
      setRecipeDetails((prevDetails) => [...prevDetails, data]);
    } catch (error) {
      console.error("Error fetching recipe details:", error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchSavedRecipe();
  }, []);


  useEffect(() => {
    if (savedRecipe) {
      const recipeIds = savedRecipe.split(",");
      recipeIds.forEach((recipeId) => {
        fetchRecipeDetails(recipeId);
      });
    }
  }, [savedRecipe]);

  const cards = recipeDetails.map((recipeItem) => ({
    id: recipeItem._id,
    imageUrl: `data:image/png;base64,${recipeItem.image}`,
    title: recipeItem.title,
    text: recipeItem.tag,
    content: recipeItem.description,
    shouldShowBadge: false,
  }));

  const handleCardBtnClick = () => {

  };

  return (
    <div>
      <h1 className="text-center pt-5">
        Recipe Cards
      </h1>
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
    </div>
  );
}