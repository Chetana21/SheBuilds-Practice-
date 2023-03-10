const express =require("express");
const ejs=require("ejs");
const app = express();
const bodyParser = require("body-parser")
const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config();
const jwt = require("jsonwebtoken");
const Employer = require('../model/emp')
const AppError = require("../utils/AppError")
const User= require("../model/User")
const tryCatch = require("../utils/tryCatch")
const EmployerData = require("../model/employers");
const jsonParser = bodyParser.json()
const cookieParser = require("cookie-parser");
 let num = 0;
// Body-parser middleware
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


exports.postEmployer = tryCatch(async(req,res,next)=>{
    console.log(req.body)
    const newEmployer= new Employer(req.body);
    newEmployer.workid = num;
    num = num +1;
    const user = jwt.verify(req.cookies.access_token,process.env.ACCESS_TOKEN);
    newEmployer.key = user.newUser[0]._id;
    const userData = await User.find({_id:user.newUser[0]._id});
    // console.log(userData[0].location);
    // console.log("this is s")
    
    if(
        !newEmployer.name ||
        !newEmployer.work ||
        !newEmployer.salary ||
        !newEmployer.workmode || 
        !newEmployer.address
    ){
        
        throw new AppError(300,"input field not provided",404)

    }
    newEmployer.location.coordinates[0] = userData[0].location.coordinates[0];
    newEmployer.location.coordinates[1] = userData[0].location.coordinates[1];
    newEmployer.location.type = "Point"
    // console.log(newEmployer);
    newEmployer.save();


    const employerData = await EmployerData.findOneAndUpdate({key:user.newUser[0]._id},{$inc:{jobsposted:1}});
    // console.log(employerData)

   
    

    // res.render("employerprofile")
    res.redirect('/employerprofile')
})


exports.getEmployer = tryCatch(async(req,res,next)=>{
    

    const employeer = jwt.verify(req.cookies.access_token,process.env.ACCESS_TOKEN)
    const data1 = employeer.newUser[0].name;
    const newEmployer = await Employer.find(); 
    res.render("employerpost")
})


















