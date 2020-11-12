const home = (req, res) => {
    res.render("index")
}

const aboutUs = (req, res)=>{
    res.render("products/aboutUs")
}

const properties = (req, res) =>{
    res.render("products/properties")
}

const hiwks = (req, res)=>{
    res.render("products/hiwks")
}

module.exports = {
    home,
    aboutUs,
    properties,
    hiwks
}