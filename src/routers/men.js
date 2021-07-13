const express = require("express");
const router = new express.Router();

const MensRanking = require("../models/mains");

router.post("/mens",async (req,res) => {
    try{
        const addingmensrecord = new MensRanking(req.body);
        
        const result = await addingmensrecord.save();
        
        res.status(201).send(result);
        console.log(result);
    }catch(e){
        res.send(e);
    }
})

// now we are going to deal with the get data so for that we are calling the find method 
router.get("/mens",async (req,res) => {
    try{
        
         const result = await MensRanking.find();
        res.status(201).send(result);
        console.log(result);
    }catch(e){
        res.status(400).send(e);
    }
})

// now we are going to find the id with the help of perticular index

router.get("/mens/:id",async (req,res) => {
    try{
        const _id = req.params.id;
         const result = await MensRanking.findById(_id);
        res.status(200).send(result);
        console.log(result);
    }catch(e){
        res.status(400).send(e);
    }
})

// now we are going to patch something 
router.patch("/mens/:id",async (req,res) => {
    try{
        const _id = req.params.id;
         const result = await MensRanking.findByIdAndUpdate(_id , req.body,{new:true});
        res.status(200).send(result);
        console.log(result);
    }catch(e){
        res.status(400).send(e);
    }
})

// here we are going to 

router.delete("/mens/:id",async (req,res) => {
    try{
        const _id = req.params.id;
         const result = await MensRanking.findByIdAndDelete(_id );
        res.status(200).send(result);
        console.log(result);
    }catch(e){
        res.status(400).send(e);
    }
})

module.exports=router;