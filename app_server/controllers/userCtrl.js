const User = require("../../app_api/models/userModel")

const userLanding = (req, res) => {
    User.findById(req.user._id).populate("prdctsViewed").exec((err, foundUser) => {
        if(err){
            console.log(err)
        }
        res.render("userLanding", {user:foundUser})
        console.log(foundUser)
    })
        
}

const profile = (req, res) => {
    res.render("profile")
} 
module.exports = {
    userLanding,
    profile
}