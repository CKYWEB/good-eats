"use client";
import styles from "./detail.module.scss";
import Image from "next/image";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { getRecipe } from "@/api/recipe";


export default function RecipeDetail({ params }) {
  const { recipeId } = params;
  const [recipe, setRecipe] = useState(undefined);

  const fetchRecipe = async (recipeId) => {
    try {
      const res = await getRecipe(recipeId);
      const { data } = res;
      setRecipe(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchRecipe(recipeId);
  }, [recipeId]);

  if (recipe) {
    return (
      <div className={"container my-5 w-50"}>
        <h1>
          {recipe.title}
        </h1>

        <div className={`fs-5 ${styles["title-description"]}`}>
          {recipe.description}
        </div>

        <div className="d-flex py-3">
          <div className="d-flex align-items-center">
            <Image
              // src= //TODO: this should obtain from user
              alt="image"
              width={30}
              height={30}
            >
            </Image>

          </div>
          <div>
            <div>
              By
              {" "}
              <a
                href={`/author/${recipe.authorId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-underline"
              >
                {recipe.authorId}
              </a>
            </div>
            <div className={styles["published-date"]}>
              Published
              {" "}
              {new Date(recipe.createdDate).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </div>
          </div>
        </div>

        <Image
          src={`data:image/png;base64,${recipe.image}`}
          alt="image"
          width={650}
          height={500}
        >
        </Image>

        <table className={`my-4 rounded-3 ${styles["time-table"]}`}>
          <tbody>
            <tr>
              <th className="p-3 px-5">
                Prep Time:
              </th>
              <th className="p-3 px-5">
                Cook Time:
              </th>
              <th className="p-3 px-5">
                Total Time:
              </th>
            </tr>
            <tr>
              <td className="p-3 px-5">
                {recipe.time.prepTime}
                {" "}
                mins
              </td>
              <td className="p-3 px-5">
                {recipe.time.cookTime}
                {" "}
                mins
              </td>
              <td className="p-3 px-5">
                {recipe.time.totalTime}
                {" "}
                mins
              </td>
            </tr>
          </tbody>
        </table>

        <h2 className="py-3">
          Ingredients
        </h2>
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

        <h2 className="py-3">
          Directions
        </h2>
        <div>
          {recipe.directions.map((step, order) => (
            <div key={order}>
              <div className="fw-bold fs-5">
                {`Step ${order}`}
              </div>
              <div className="py-2">
                {step.detailInstruction}
              </div>
            </div>
          ))}
        </div>
      </div >
    );
  }

  return null;
}
