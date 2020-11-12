const mongoose = require("mongoose")
const passportLocalMongoose = require("passport-local-mongoose")

const userSchema = new mongoose.Schema({
    username: String,
    email: {type:String, unique:true, required:true},
    password: String,
    createdAt:{type:Date, default:Date.now},
    prdctsViewed:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product"
            }
    ],
    avatar: String,
    shop:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Shop" 
            }
        ],
    products:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product" 
        }
    ],   
})

userSchema.plugin(passportLocalMongoose)
module.exports = mongoose.model("User", userSchema)