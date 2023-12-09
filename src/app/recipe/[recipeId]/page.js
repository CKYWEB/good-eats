"use client";
import styles from "./detail.module.scss";
import Image from "react-bootstrap/Image";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { getRecipe } from "@/api/recipe";
import { getAuthorInfo } from "@/api/user";
import { Container } from "react-bootstrap";
import { useUserStore } from "@/store/user";
import Button from "@/app/components/Button/button";


export default function RecipeDetail({ params }) {
  const { recipeId } = params;
  const [recipe, setRecipe] = useState(undefined);
  const [authorId, setAuthorId] = useState(undefined);
  const [authorInfo, setAuthorInfo] = useState(undefined);
  const { fetchCurrentUser, currentUser, isLoggedIn, isAdmin } = useUserStore();


  const fetchRecipe = async (recipeId) => {
    try {
      const res = await getRecipe(recipeId);
      const { data } = res;
      setRecipe(data);
      setAuthorId(data.authorId);
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
    fetchRecipe(recipeId);
  }, [recipeId]);

  useEffect(() => {
    fetchAuthorInfo(authorId);
  }, [authorId]);

  useEffect(() => {
    fetchCurrentUser();
  }, [fetchCurrentUser]);

  const defaultProfileImage = "/images/default-profile.png";

  const profileImage = () => {
    if (authorInfo?.image === "") {
      return defaultProfileImage;
    } else {
      return `data:image/png;base64,${authorInfo?.image}`;
    }
  };

  if (recipe && authorInfo) {
    return (
      <Container>
        <div className={`${styles["container-group"]}`}>
          <div className={`${styles["recipe-title"]}`}>
            {recipe.title}
          </div>

          <div className={`fs-5 ${styles["title-description"]}`}>
            {recipe.description}
          </div>

          <div className="d-flex py-3">
            <div className="d-flex align-items-center p-2">
              <Image
                src={profileImage()}
                alt="profile image"
                className={`${styles["profile-image"]}`}
              >
              </Image>
            </div>
            <div className="p-2">
              <div>
                By
                {" "}
                <a
                  href={`/author/${recipe.authorId}`}
                  rel="noopener noreferrer"
                  className="text-decoration-underline"
                >
                  {authorInfo?.firstName}
                  {" "}
                  {authorInfo?.lastName}
                </a>
              </div>
              <div className={styles["published-date"]}>
                Published
                {" "}
                {new Date(recipe.createdDate).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </div>
            </div>
            {((authorId === currentUser.id) || isAdmin()) && (
              <div className="align-self-center">
                <Button className="p-2 ml-auto">
                  Delete
                </Button>
              </div>
            )}

          </div>

          <Image
            src={`data:image/png;base64,${recipe.image}`}
            alt="recipe image"
            className={styles["recipe-image"]}
          >
          </Image>

          <table className={`my-4 rounded-3 ${styles["time-table"]}`}>
            <tbody>
              <tr>
                <th className={`${styles["table-content"]}`}>
                  Prep Time:
                </th>
                <th className={`${styles["table-content"]}`}>
                  Cook Time:
                </th>
                <th className={`${styles["table-content"]}`}>
                  Total Time:
                </th>
              </tr>
              <tr>
                <td className={`${styles["table-content"]}`}>
                  {recipe.time.prepTime}
                  {" "}
                  mins
                </td>
                <td className={`${styles["table-content"]}`}>
                  {recipe.time.cookTime}
                  {" "}
                  mins
                </td>
                <td className={`${styles["table-content"]}`}>
                  {recipe.time.totalTime}
                  {" "}
                  mins
                </td>
              </tr>
            </tbody>
          </table>

          <h2 className="py-2">
            Ingredients
          </h2>
          <hr></hr>
          <ul>
            {recipe.ingredients && recipe.ingredients.map((ingredient, index) => (
              <li
                key={index}
                className="py-1"
              >
                {`${ingredient.quantity} ${ingredient.unit} ${ingredient.item}`}
              </li>
            ))}
          </ul>

          <h2 className="py-2">
            Directions
          </h2>
          <hr></hr>

          <div>
            {recipe.directions.map((step, order) => (
              <div key={order}>
                <div className="fw-bold fs-5">
                  {`Step ${order + 1}`}
                </div>
                <div className="py-2">
                  {step.detailInstruction}
                </div>
              </div>
            ))}
          </div>
        </div >
      </Container >
    );

  }
}