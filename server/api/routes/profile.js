const express = require("express");
const router = express.Router();
const { updateProfile } = require("../controllers/profile");
const { authMiddleware } = require("../middleware");

router.use(authMiddleware);

router.post("/updateProfile", updateProfile);

module.exports = router;