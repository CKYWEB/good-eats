"use client";

import React, { useState } from "react";
import styles from "./addrecipe.module.scss";

const AddRecipe = () => {
  const [recipeName, setRecipeName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  const handleAddRecipe = () => {
    console.log("Adding Recipe:", { recipeName, ingredients, instructions });
  };

  return (
    <div className={styles.addRecipeContainer}>
      <h1>
        Add Your Recipes Here!
      </h1>
      <form>
        <div className="mb-3">
          <label
            htmlFor="recipeName"
            className="form-label"
          >
            Recipe Name
          </label>
          <input
            type="text"
            className="form-control"
            id="recipeName"
            value={recipeName}
            onChange={(e) => setRecipeName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="ingredients"
            className="form-label"
          >
            Ingredients
          </label>
          <textarea
            className="form-control"
            id="ingredients"
            rows="3"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          >
          </textarea>
        </div>
        <div className="mb-3">
          <label
            htmlFor="instructions"
            className="form-label"
          >
            Instructions
          </label>
          <textarea
            className="form-control"
            id="instructions"
            rows="5"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          >
          </textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleAddRecipe}
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipe;