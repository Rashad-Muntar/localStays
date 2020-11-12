const express = require("express")
const router = express.Router()
const userCtrl = require("../controllers/userCtrl")
const middleware = require("../../app_api/controllers/middleware")

router.get("/", middleware.isloggedIn, userCtrl.userLanding)

router.get("/profile", middleware.isloggedIn, userCtrl.profile)



module.exports = router