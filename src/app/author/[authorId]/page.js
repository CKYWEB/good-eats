"use client";
import { getAuthorRecipe } from "@/api/recipe";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import CardComponent from "@/app/components/Card/card";
import { Container, Row, Col } from "react-bootstrap";
import { useRouter } from "next/navigation";
import OffcanvasComponent from "@/app/components/Offcanvas/offcanvas";
import { getAuthorInfo } from "@/api/user";
import Image from "react-bootstrap/Image";
import styles from "./author.module.scss";

export default function AuthorRecipe({ params }) {

  const { authorId } = params;
  const [recipes, setRecipes] = useState([]);
  const [authorInfo, setAuthorInfo] = useState(undefined);

  const fetchAuthorRecipe = async (authorId) => {
    try {
      const res = await getAuthorRecipe(authorId);
      const { data } = res;
      setRecipes(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error(error.message);
    }
  };

  const fetchAuthorInfo = async (authorId) => {
    try {
      const res = await getAuthorInfo(authorId);
      const { data } = res;
      setAuthorInfo(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchAuthorRecipe(authorId);
  }, [authorId]);

  useEffect(() => {
    fetchAuthorInfo(authorId);
  }, [authorId]);

  const cards = recipes?.map((recipeItem) => ({
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

  if (recipes.length > 0 && authorInfo) {
    return (

      <div>
        <Container
          fluid
          className={`${styles["profile-background"]}`}
        >
          <div className={`fs-3 ${styles["profile-group"]}`}>
            <Image
              src={`data:image/png;base64,${authorInfo.image}`}
              rounded
              className={`${styles["profile-image"]}`}
              alt="Author Image"
            />
            {authorInfo.firstName}
            {" "}
            {authorInfo.lastName}
          </div>

          <div className={`${styles["profile-description"]}`}>
            {authorInfo.description}
          </div>
        </Container>

        <Container >
          <div className={`fs-5 ${styles["recipe-title"]}`}>
            Lates from
            {" "}
            {authorInfo.firstName}
            {" "}
            {authorInfo.lastName}
          </div>
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