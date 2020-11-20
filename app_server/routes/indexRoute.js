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

router.get("/ref", indexCtrl.refer)

router.get("/privacy-policy", indexCtrl.privacy)

router.get("/terms", indexCtrl.terms)

router.get("/cookies", indexCtrl.cookies)

router.get("/average-housing-prices", indexCtrl.avhp)

router.get("/home-finance-solutions", indexCtrl.hfs)

router.get("/things-to-Consider", indexCtrl.tToCon)

router.get("/guide", indexCtrl.guide)

router.get("/sell", indexCtrl.sell)

router.get("/invest", indexCtrl.invest)

router.get("/let", indexCtrl.lettings)

module.exports = router