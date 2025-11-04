const express = require("express");
const profileController = require("../controllers/profile.controller");
const upload = require("../db/multer");
const getProfileController = require("../controllers/getprofile.controller");
const { userMiddleware } = require("../middlewares/user.middleware");
const updateProfileController = require("../controllers/udateprofile.controller");

const router = express.Router();

// create profile api
router.post("/profile/create", userMiddleware,
    upload.fields([
        { name: "photo", maxCount: 1 },
        { name: "coverImage", maxCount: 1 },
        { name: "resume", maxCount: 1 }
    ])
    , profileController);


// get profile api
router.get("/profile/me", userMiddleware, getProfileController);

// update profile api
router.put("/profile/update", userMiddleware,
    upload.fields([
        { name: "photo", maxCount: 1 },
        { name: "coverImage", maxCount: 1 },
        { name: "resume", maxCount: 1 }
    ]),
    updateProfileController
);



module.exports = router;