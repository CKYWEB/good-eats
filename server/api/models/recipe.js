const mongoose = require("mongoose");

const Recipe = mongoose.model("Recipe", new mongoose.Schema(
  {
    image: String,
    title: String,
    tag: String,
    description: String,
    author: String,
    createdDate: { type: Date, default: Date.now() },
    prepTime: Number,
    cookTime: Number,
    totalTime: Number,
    ingredients: Array,
    directons: Array,
  },
));

module.exports = Recipe;