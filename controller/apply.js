// for adding experiance and to apply for job/work

const express =require("express");
const ejs=require("ejs");
const app = express();
const bodyParser = require("body-parser")
const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config();
//different schema 
const User = require('../model/User')

const AppError = require("../utils/AppError")
const tryCatch = require("../utils/tryCatch")
const jsonParser = bodyParser.json()

// Body-parser middleware
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


// exports.postApply = tryCatch(async(req,res,next)=>{
//     console.log(req.body)
//     const newUser= new User(req.body);
//     console.log(newUser.name);
//     if(
//         !newUser.name ||
//         !newUser.age ||
//         !newUser.email ||
//         !newUser.phoneNo || 
//         !newUser.username ||
//         !newUser.password
//     ){
        
//         throw new AppError(300,"input field not provided",404)

//     }
    

//     newUser.save();
//     res.render("landing");
// })


// exports.getApply = tryCatch(async(req,res,next)=>{
    
//    res.render("register")
// })


















