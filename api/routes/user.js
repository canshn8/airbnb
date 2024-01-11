const router = require('express').Router();
const {User} = require("../models/Place");
const CryptoJS = require('crypto-js');



router.delete("/:id", async (req,res) => {
    try{
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("Kullanıcı Silindi")
    }
    catch(err){
        res.status(500).json(err)
    }
})

router.put("/:id", async (req,res) => {
    if(req.params.id){
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString()
    }try{
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,{
                $set : req.body
            },
            {new:true}
        )
        res.status(200).json(updatedUser)
    }
    catch(err){
        res.status(500).json(err)
    }
})

router.get("/:id", async (req,res) => {
    try {
        const user = await User.findById(req.params.id);
        const {password, ...others} = user._doc
        res.status(200).json(others)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get("/", async (req,res) => {
    
    const query = req.query.new;

    try {
        const users = query ? await User.find().sort()({_id: -1}).limit(1) : await User.find();
        res.status(200).json(users)

    } catch (err){
        res.status(500).json(err)
    }
})


 module.exports = router;
