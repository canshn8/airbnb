const router = require('express').Router();
const {User} = require("../models/Place")
const CryptoJS = require('crypto-js')
const jwt = require('jsonwebtoken');

//KAYIT OLMA
router.post("/register",async (req,res) => {
    const newUser = new User({
        username:req.body.username, 
        email:req.body.email, 
        password: CryptoJS.AES.encrypt(req.body.password,process.env.PASS_SEC).toString(),
    });
    try{
        const savedUser = await newUser.save();
        res.status(201).json(savedUser)
    }catch(err){
        res.status(500).json(err)
        
    }
})

router.post("/login", async (req,res) => {
    try {
         const user = await User.findOne({username:req.body.username})
         !user && res.status(401).json("Yanlis Kullanici")
 
         const scretPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC)
         const Orgpassword = scretPassword.toString(CryptoJS.enc.Utf8)
 
         Orgpassword !== req.body.password && res.status(401).json("Yanlis Parola")
         
        //  const accessToken = jwt.sign({
        //      id: user._id, 
        //      isAdmin:user.isAdmin,
        //  },process.env.JWT_SEC,{expiresIn: "60"})
          const { ...others} = user._doc;
 
         res.status(200).json({...others})
    }catch(err){
         res.status(500).json(err)
    }
 })



module.exports = router;
