const express = require("express");
const { userMiddleware } = require("../middlewares/user.middleware");
const { createJobController, getAlljobcontroller, getSingleJobController } = require("../controllers/job.controller");

const router = express.Router();

// Create job post api
router.post("/create/post",userMiddleware, createJobController );

// get all job post api
router.get("/all/post", getAlljobcontroller);

// get the single job post api
router.get("/single/post/:id", getSingleJobController );


module.exports = router;