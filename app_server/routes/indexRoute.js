const express = require("express")
const router = express.Router()
const indexCtrl = require("../controllers/indexCtrl")

router.get("/home", indexCtrl.home)

router.get("/", (req, res) => {
    res.redirect("/home")
})

router.get("/about-us", indexCtrl.aboutUs)

router.get("/insight", indexCtrl.insight)

router.get("/about-services", indexCtrl.aboutService)

router.get("/about-services-tabs", indexCtrl.aboutServiceTabs)

router.get("/how-it-works", indexCtrl.howItWorks)

router.get("/why-it-works", indexCtrl.whyItWorks)

router.get("/get-started", indexCtrl.getStarted)

router.get("/what-is-included", indexCtrl.WhatsIncluded)

router.get("/what-is-included-2", indexCtrl.includedTwo)

router.get("/how-much-to-save", indexCtrl.moneyToSave)

router.get("/about-our-fees", indexCtrl.aboutFees)

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

router.get("/find-out-more", indexCtrl.knowMore)

module.exports = router