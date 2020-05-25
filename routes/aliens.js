const express=require('express')
const router=express.Router()

// Not accessing database
// router.get("/", function(){
//     console.log('Get request')
// })

// Access database (model), make sure path is right
const Alien=require("../models/alien")

router.get("/",async(req,res)=>{                     //for https://localhost:9000/aliens
    try{
        const aliens = await Alien.find()
        res.json(aliens)
    }catch(err){
        res.send("Error" + err)
    }
})

//Create
router.post("/",async(req,res)=>{                    //for https://localhost:9000/aliens
    // Create a document
    const alien = new Alien({  
        name:req.body.name,
        tech:req.body.tech,
        sub:req.body.sub
    })

    try{
        const a1 = await alien.save()
        res.json(a1)
    }catch(err){
        res.send("Error" + err)
    }
})

//Read
router.get('/:id',async(req,res)=>{                 //for https://localhost:9000/aliens/<id>
    try{
        const aliens = await Alien.findById(req.params.id)
        res.json(aliens)
    }catch(err){
        res.send("Error" + err)
    }
})

//Update
router.patch("/:id",async(req,res)=>{
    try{
        const alien = await Alien.findById(req.params.id)
        alien.sub = req.body.sub
        const a1 = await alien.save()
        res.json(a1)
    }catch(err){
        res.send("Error" + err)
    }
})

module.exports=router