const express = require("express");
const app = express();
const userRouter = require("./routes/user");
const {USER_PATH} = require("./routes/config");

app.use(express.json());
app.use(USER_PATH, userRouter);

module.exports = app;