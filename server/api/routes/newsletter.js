const { saveSubscriber } = require("../controllers/newsletter");
const express = require("express");
const router = express.Router();

router.post("/subscribe", saveSubscriber);

module.exports = router;