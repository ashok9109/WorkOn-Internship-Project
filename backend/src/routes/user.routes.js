const express = require("express");
const { signupController, loginController } = require("../controllers/user.controller");
const { authuser } = require("../middlewares/user.middleware");


const router = express.Router();


router.get("/me", authuser, (req, res)=>{
    return res.status(200).json({
        message:"user is logged in",
        user:req.user
    })
} )

// user Router
router.post("/signup", signupController);
router.post("/login", loginController);



module.exports = router;




