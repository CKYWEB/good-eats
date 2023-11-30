const express = require("express");
const app = express();
const userRouter = require("./routes/user");
const {USER_PATH} = require("./routes/config");
const cors = require("cors");
const { closeDbConnection } = require("./utils");
const {authMiddleware} = require("./middleware");

app.use(express.json());
app.use(authMiddleware);
app.use(USER_PATH, userRouter);
app.use(cors({
    origin: "https://good-eats-eight-api.vercel.app/"
}));

process.on("SIGINT", closeDbConnection);

module.exports = app;