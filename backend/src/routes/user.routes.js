const express = require("express");
const { signupController, loginController, logoutController } = require("../controllers/user.controller");
const { userMiddleware } = require("../middlewares/user.middleware");

const router = express.Router();

router.get("/me", userMiddleware, (req, res) => {
    return res.status(200).json({
        message: "user is logged in",
        user: req.user
    })
})

// user Router
router.post("/signup", signupController);
router.post("/login", loginController);
router.post("/logout", userMiddleware ,  logoutController);


module.exports = router;




