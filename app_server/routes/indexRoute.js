const express = require("express")
const router = express.Router()
const indexCtrl = require("../controllers/indexCtrl")

router.get("/home", indexCtrl.home)

router.get("/", (req, res) => {
    res.redirect("/home")
})

router.get("/about-us", indexCtrl.aboutUs)

router.get("/properties", indexCtrl.properties)

router.get("/how-it-works", indexCtrl.hiwks)

module.exports = router