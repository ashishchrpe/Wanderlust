const express = require("express");
const router = express.Router();
const User = require("../models/user");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware");
const{isLoggedIn} =require("../middleware.js");

const userControllers = require("../controllers/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
 
router.route("/signup")
.get(userControllers.renderSignupForm)
.post(wrapAsync(userControllers.signup));

router.route("/login")
.get(userControllers.renderLoginForm)
.post(saveRedirectUrl,passport.authenticate("local",
    {failureRedirect: "/login", failureFlash :true, }),
    userControllers.Login
);


router.get("/logout",userControllers.logout);

module.exports = router;

