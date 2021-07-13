const express = require("express");
const mongoose = require("mongoose");


// this one is the Schema only 
const menSchema = new mongoose.Schema({
    ranking:{
        type:Number,
        require:true,
        trim:true
    },
    name:{
        type:String,
        require:true,
        trim:true
    },
    dob:{
        type:Date,
        require:true,
        trim:true
    },
    country:{
        type:String,
        require:true,
        trim:true
    },
    score:{
        type:Number,
        require:true,
        trim:true
        
    },
    event:{
        type:String,
        default:"100m"
    }
})


// now we are going to describe the model and create a new collection 

const MensRanking = new mongoose.model("MenRanking",menSchema);

// now we are going to exports this service 
module.exports = MensRanking;