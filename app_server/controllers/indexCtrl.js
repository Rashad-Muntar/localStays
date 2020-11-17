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
    res.render("products/shortLet")
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
    subscribe
}