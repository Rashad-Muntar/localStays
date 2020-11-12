const User = require("../../app_api/models/userModel")
const passport = require("passport")

const signup= (req, res) => {
    res.render("auth/signup")
}

const signupCtrl = (req, res) => {
    let email = req.body.email
    let username = req.body.username
    let newUser = new User({username:username, email:email})
    User.register(newUser, req.body.password, (err, user) => {
        if(err){
            console.log(err)
        }
        passport.authenticate("local")(req, res, () =>{
            res.redirect("/home")
            console.log(user)
        })
        
    })    
}

const loginForm = (req, res) => {
    res.render("auth/login")
}

const logOut = (req, res) => {
    req.logOut()
    res.redirect("/home")
}

module.exports ={
    signup,
    signupCtrl,
    loginForm,
    logOut
}