const {login, createUser, getUsers} = require("../controllers/user");
const express = require("express");
const router = express.Router();

router.post("/login", login);
router.post("/create", createUser);
router.get("/getUsers", getUsers);

module.exports = router;