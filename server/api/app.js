const express = require("express");
const app = express();
const userRouter = require("./routes/user");
const { USER_PATH, NEWSLETTER_PATH,RECIPE_PATH } = require("./routes/config");
const recipeRouter = require("./routes/recipe");
const newsletterRouter = require("./routes/newsletter");
const cors = require("cors");
const { closeDbConnection, createDbConnection } = require("./utils");
const { authMiddleware } = require("./middleware");

app.use(express.json());
app.use(authMiddleware);
app.use(USER_PATH, userRouter);
app.use(RECIPE_PATH, recipeRouter);
app.use(NEWSLETTER_PATH, newsletterRouter);
app.use(cors({
    origin: "https://good-eats-eight-api.vercel.app/"
}));

createDbConnection();
process.on("SIGINT", closeDbConnection);

module.exports = app;