const { login, createUser, getUsers, getUserInfo, getAuthorInfo } = require("../controllers/user");
const express = require("express");
const router = express.Router();

router.post("/login", login);
router.post("/create", createUser);
router.get("/getUsers", getUsers);
router.get("/getUserInfo", getUserInfo);
router.get("/getAuthorInfo", getAuthorInfo);

module.exports = router;