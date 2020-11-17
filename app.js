const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000
const path = require("path")
const mongoose = require("mongoose")
const bodyParser  = require("body-parser")
const User = require("./app_api/models/userModel")
const passport = require("passport")
const localStrategy = require("passport-local")
const passportLocalMongoose = require("passport-local-mongoose")

let url = process.env.dburl || "mongodb://localhost/EXCELZ"
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})
.then(() =>{
    console.log("mongo connected")
})
.catch((err) => {
    console.log("Could not connect to database")
})


app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({extended:true}))
app.set("views", path.join(__dirname, "app_server", "views"))
app.use(express.static(path.join(__dirname + '/public')))
app.use(require("express-session")({
    secret: "thjghdgfd",
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())

passport.use(new localStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.use((req, res, next) => {
    res.locals.currentUser = req.user
    next()
})

const indexRouter = require("./app_server/routes/indexRoute")
const authRouter = require("./app_server/routes/authRoute")
const userRouter = require("./app_server/routes/userRoute")


app.use(indexRouter)
app.use("/xcelzs", authRouter)
app.use("/xcelzs/user", userRouter)








app.listen(PORT, () =>{
    console.log("server running")
})