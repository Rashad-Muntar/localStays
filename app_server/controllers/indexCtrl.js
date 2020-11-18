const home = (req, res) => {
    res.render("index")
}

const aboutUs = (req, res)=>{
    res.render("products/aboutUs")
}

const insight = (req, res) =>{
    res.render("products/insight")
}

const hiwks = (req, res)=>{
    res.render("products/hiwks")
}

const FP = (req, res) =>{
    res.render("products/findProperties")
}

const PC = (req, res) =>{
    res.render("products/propertyContract")
}

const PD = (req, res) =>{
    res.render("products/propertyDesign")
}

const FAQS = (req, res) =>{
    res.render("products/FAQS")
}

const short = (req, res) =>{
    res.render("products/shorLet")
}

const rent = (req, res) =>{
    res.render("products/rent")
}

const buy = (req, res) =>{
    res.render("products/buy")
}

const build = (req, res) =>{
    res.render("products/build")
}

const design = (req, res) =>{
    res.render("products/design")
}

const subscribe =(req, res) =>{
    res.render("products/subscribe")
}

const refer =(req, res) =>{
    res.render("products/ref")
}

const terms =(req, res) =>{
    res.render("products/terms")
}

const privacy =(req, res) =>{
    res.render("products/privacy")
}

const cookies =(req, res) =>{
    res.render("products/cookie")
}

const avhp = (req, res) => {
    res.render("products/averageHousing")
}
const hfs = (req, res) => {
    res.render("products/homeSolutions")
}

const tToCon = (req, res) => {
    res.render("products/thingstoConsider")
}

const guide = (req, res) => {
    res.render("products/guide")
}

module.exports = {
    home,
    aboutUs,
    insight,
    hiwks,
    FP,
    PC,
    PD,
    FAQS,
    short,
    rent,
    buy,
    build,
    design,
    subscribe,
    refer,
    terms,
    privacy,
    cookies,
    avhp,
    guide,
    tToCon,
    hfs
}