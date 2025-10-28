const express = require("express");
const profileController = require("../controllers/profile.controller");

const router = express.Router();

// profile api
router.post("/profile", profileController);

module.exports = router;