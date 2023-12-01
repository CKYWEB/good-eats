const express = require("express");
const app = express();
const userRouter = require("./routes/user");
const { USER_PATH } = require("./routes/config");
const recipeRouter = require("./routes/recipe");
const { RECIPE_PATH } = require("./routes/config");
const cors = require("cors");

app.use(express.json());
app.use(USER_PATH, userRouter);
app.use(RECIPE_PATH, recipeRouter);
app.use(cors({
    origin: "https://good-eats-eight-api.vercel.app/"
}));

module.exports = app;