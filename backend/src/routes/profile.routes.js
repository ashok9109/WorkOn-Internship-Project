const express = require("express");
const profileController = require("../controllers/profile.controller");
const upload = require("../db/multer");

const router = express.Router();

// profile api
router.post("/profile",
    upload.fields([
        { name: "photo", maxCount: 1 },
        { name: "coverImage", maxCount: 1 },
        { name: "resume", maxCount: 1 }
    ])
    , profileController);

module.exports = router;