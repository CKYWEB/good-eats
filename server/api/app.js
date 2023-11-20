const express = require("express");
const app = express();
const userRouter = require("./routes/user");

app.use(express.json());
app.use("/user", userRouter);

module.exports = app;