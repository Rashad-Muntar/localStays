const express = require("express")
const router = express.Router()
const indexCtrl = require("../controllers/indexCtrl")

router.get("/home", indexCtrl.home)

router.get("/", (req, res) => {
    res.redirect("/home")
})

router.get("/about-us", indexCtrl.aboutUs)

router.get("/insight", indexCtrl.insight)

router.get("/how-it-works", indexCtrl.hiwks)

router.get("/find-property", indexCtrl.FP)

router.get("/property-Contracting", indexCtrl.PC)

router.get("/property-design", indexCtrl.PD)

router.get("/FAQS", indexCtrl.FAQS)

router.get("/short-let", indexCtrl.short)

router.get("/rent", indexCtrl.rent)

router.get("/buy", indexCtrl.buy)

router.get("/build", indexCtrl.build)

router.get("/design", indexCtrl.design)

router.get("/subscribe", indexCtrl.subscribe)

module.exports = router