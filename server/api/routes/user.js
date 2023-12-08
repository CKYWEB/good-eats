const {
    login,
    createUser,
    getUsers,
    getUserInfo,
    getAuthorInfo,
    deleteUser,
} = require("../controllers/user");
const express = require("express");
const router = express.Router();

router.post("/login", login);
router.post("/create", createUser);
router.get("/getUsers", getUsers);
router.get("/getUserInfo", getUserInfo);
router.get("/getAuthorInfo", getAuthorInfo);
router.delete("/deleteUser", deleteUser);

module.exports = router;