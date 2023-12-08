const express = require("express");
const app = express();
const userRouter = require("./routes/user");
const { USER_PATH } = require("./routes/config");
const recipeRouter = require("./routes/recipe");
const { RECIPE_PATH } = require("./routes/config");
const profileRouter = require("./routes/profile"); //Profile
const { PROFILE_PATH } = require("./routes/config");
const addRecipeRouter = require("./routes/addrecipe"); //Add a recipe
const { ADDRECIPE_PATH } = require("./routes/config");
const cors = require("cors");
const { closeDbConnection, createDbConnection } = require("./utils");
const { authMiddleware } = require("./middleware");

app.use(express.json());
app.use(authMiddleware);
app.use(USER_PATH, userRouter);
app.use(RECIPE_PATH, recipeRouter);
app.use(PROFILE_PATH, profileRouter);
app.use(ADDRECIPE_PATH, addRecipeRouter);
app.use(cors({
    origin: "https://good-eats-eight-api.vercel.app/"
}));

createDbConnection();
process.on("SIGINT", closeDbConnection);

module.exports = app;