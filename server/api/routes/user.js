const {login, createUser} = require("../controllers/user");
const express = require("express");
const router = express.Router();

router.post("/login", login);
router.post("/create", createUser);

module.exports = router;