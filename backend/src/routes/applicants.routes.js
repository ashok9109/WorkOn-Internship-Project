const express =  require("express");
const { userMiddleware } = require("../middlewares/user.middleware");
const { applyJobController } = require("../controllers/applicants.controller");


const router = express.Router();


// api for apply jobs 
router.post("/job/apply", userMiddleware, applyJobController);



module.exports = router;