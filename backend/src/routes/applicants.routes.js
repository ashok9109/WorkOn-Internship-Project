const express =  require("express");
const { userMiddleware } = require("../middlewares/user.middleware");
const { applyJobController, myApplicantsController } = require("../controllers/applicants.controller");


const router = express.Router();


// api for apply jobs 
router.post("/job/apply", userMiddleware, applyJobController);

// api for my applicants
router.get("/my-applicants", userMiddleware, myApplicantsController);



module.exports = router;