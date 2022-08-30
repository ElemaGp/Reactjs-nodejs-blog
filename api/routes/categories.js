const router = require("express").Router(); //importing express
const Category = require("../models/Category"); //importing the User model (schema) 

router.post("/", async (req, res) =>{
    const newCat = new Category(req.body);
    try{
        const savedCat = await newCat.save(); //creating a new Category
        res.status(200).json(savedCat);
    }catch(err){
        res.status(500).json(err);
    }
});

router.get("/", async (req, res) =>{
    try{
        const cats = await Category.find(); //finding all the categories using the Category model
        res.status(200).json(cats); //displaying all categories
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;

