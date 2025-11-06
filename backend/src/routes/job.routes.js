const express = require("express");
const { userMiddleware } = require("../middlewares/user.middleware");
const { createJobController, getAlljobcontroller } = require("../controllers/job.controller");

const router = express.Router();

// Create job post api
router.post("/create/post",userMiddleware, createJobController );

// get job post api
router.get("/all/post", getAlljobcontroller);


module.exports = router;