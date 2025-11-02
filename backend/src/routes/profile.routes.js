const express = require("express");
const profileController = require("../controllers/profile.controller");
const upload = require("../db/multer");
const getProfileController = require("../controllers/getprofile.controller");
const { userMiddleware } = require("../middlewares/user.middleware");

const router = express.Router();

// profile api
router.post("/profile", userMiddleware,
    upload.fields([
        { name: "photo", maxCount: 1 },
        { name: "coverImage", maxCount: 1 },
        { name: "resume", maxCount: 1 }
    ])
    , profileController);

router.get("/profile/me",userMiddleware, getProfileController);

module.exports = router;