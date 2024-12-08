const express = require("express");
const router = express.Router();
const {body} = require("express-validator");
const captionController = require("../controllers/caption.controller");
const authMiddleWare = require("../middlewares/auth.middleware");

router.post("/register" , [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname.firstname").isLength({min:6}).withMessage("Firstname must be at least 6 character"),
    body("password").isLength({min:6}).withMessage("Password must be at least 6 character"),
    body("vehical.color").isLength({min:3}).withMessage("Color must be at least 3 charater"),
    body("vehical.plate").isLength({min:3}).withMessage("Plate must be at least 3 charecter"),
    body("vehical.capacity").isLength({min:1}).withMessage("Capacity must be at least 1"),
    body("vehical.vehicalType").isIn(["car","motorcycal","auto"]).withMessage("Invalid vehical"),
],captionController.registerCaption)


router.post("/login",[
    body("email").isEmail().withMessage("Invalid Email"),
    body("password").isLength({min:6}).withMessage("Password Must Be at Least 6 charecter")
],
captionController.loginCaption
)

router.get("/profile",authMiddleWare.authCaption , captionController.getCaptionProfile);
router.get("/logout", authMiddleWare.authCaption , captionController.logoutCaption);
module.exports = router;