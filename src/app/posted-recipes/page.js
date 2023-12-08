"use client";
import { useState, useEffect } from "react";
import { fetchUserInfo } from "@/api/user";
import { getAuthorRecipe } from "@/api/recipe";
import toast from "react-hot-toast";
import CardComponent from "@/app/components/Card/card";
import OffcanvasComponent from "@/app/components/Offcanvas/offcanvas";
import Image from "react-bootstrap/Image";
import styles from "./posted.module.scss";
import { useRouter } from "next/navigation";
import { Container, Row, Col } from "react-bootstrap";


export default function PostedRecipes() {

  const [userInfo, setUserInfo] = useState();
  const [userId, setUserId] = useState();
  const [recipes, setRecipes] = useState([]);

  const getUserInfo = async () => {
    try {
      const res = await fetchUserInfo();
      setUserInfo(res.data);
      setUserId(res.data._id);
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error(error.message);
    }
  };

  const fetchUserRecipes = async (userId) => {
    try {
      const res = await getAuthorRecipe(userId);
      const { data } = res;
      setRecipes(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error(error.message);
    }
  };

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
  useEffect(() => {
    getUserInfo();
  }, []);

  useEffect(() => {
    fetchUserRecipes(userId);
  }, [userId]);

  const defaultProfileImage = "/images/default-profile.png";

  const profileImage = () => {
    if (userInfo.image === "") {
      return defaultProfileImage;
    } else {
      return `data:image/png;base64,${userInfo.image}`;
    }
  };

  if (userInfo) {
    return (
      <div>
        <Container
          fluid
          className={`${styles["profile-background"]}`}
        >
          <div className={`fs-3 ${styles["profile-group"]}`}>
            <Image
              src={profileImage()}
              rounded
              className={`${styles["profile-image"]}`}
              alt="User Image"
            />
            {userInfo.firstName}
            {" "}
            {userInfo.lastName}
          </div>

          <div className={`${styles["profile-description"]}`}>
            {userInfo.description}
          </div>
        </Container>

        <Container >
          <div className={`fs-5 ${styles["recipe-title"]}`}>
            Latest from
            {" "}
            {userInfo.firstName}
            {" "}
            {userInfo.lastName}
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
          content={(
            <p>
              {currentCard.content}
            </p>
          )}
          imageUrl={currentCard.imageUrl}
        />

      </div>
    );
  }

}