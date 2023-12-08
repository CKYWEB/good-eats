const { login, createUser, getUsers, getUserInfo, changePassword } = require("../controllers/user");
const express = require("express");
const router = express.Router();

router.post("/login", login);
router.post("/create", createUser);
router.post("/changePassword", changePassword); //Change password
router.get("/getUsers", getUsers);
router.get("/getUserInfo", getUserInfo);

module.exports = router;