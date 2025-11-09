const express = require("express");
const { userMiddleware } = require("../middlewares/user.middleware");
const { createJobController, getAlljobcontroller, getMyJobController, deletePostController } = require("../controllers/job.controller");

const router = express.Router();

// Create job post api
router.post("/create/post", userMiddleware, createJobController);

// get all job post api
router.get("/all/post", getAlljobcontroller);

// get the single job post api
router.get("/my-posts", userMiddleware, getMyJobController);

// delete job post api
router.delete("/delete/post/:id", deletePostController);


module.exports = router;