const mongoose = require("mongoose");

const Recipe = mongoose.model("Recipe", new mongoose.Schema(
  {
    image: String,
    title: String,
    tag: String,
    description: String,
    author: String,
    createdDate: { type: Date, default: Date.now() },
    time: {
      prepTime: Number,
      cookTime: Number,
      totalTime: Number
    },
    ingredients: {
      // ingredients of recipe
      item: String,
      quantity: Number,
      unit: String
    },
    directions: {
      // steps to cook
      order: Number,
      detailInstruction: String
    },
  },
));

module.exports = Recipe;