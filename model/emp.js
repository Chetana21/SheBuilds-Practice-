const mongoose = require("mongoose")

const sheBuildsEmployer = new mongoose.Schema({
    name:{
        type:String,
        required :[true,"Please provide your name"]  
    },
    work:{
        type:String,
        required :[true,"Please provide your Type of work"]  
    },
    salary:{
        type:Number,
        required :[true,"Please provide your salary"]  
    },
    workmode :{
        type:String,
        required :[true,"Please provide your workmode"] ,
        // possibleValues:["Home","Work","Remote"],
    },
    address:{
        type:String,
        required :[true,"Please provide your address"]  
    },
    workid:{
        type:Number,
        required :[true,"Please provide your workid"]  

    },
    key:{
        type:String
    },
    location:{
        type:{
            type:String
          },
        coordinates:{
            type:Array
        },
        
    }

});
const Employer = mongoose.model("sheBuildsEmp",sheBuildsEmployer); 
module.exports = Employer