const express = require("express");
const { userMiddleware } = require("../middlewares/user.middleware");
const { createJobController } = require("../controllers/job.controller");

const router = express.Router();

// Create job post api
router.post("/create/post",userMiddleware, createJobController );


module.exports = router;