const express = require("express")
const router = express.Router()
const authCtrl = require("../controllers/authCtrl")
const passport = require("passport")

router.get("/signup", authCtrl.signup)

router.post("/signup", authCtrl.signupCtrl)

router.get("/login", authCtrl.loginForm)

router.post("/login", passport.authenticate("local",{
   successRedirect: "/home",
   failureRedirect: "/home" 
}))

router.get("/logout", authCtrl.logOut)

module.exports = router