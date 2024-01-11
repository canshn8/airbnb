const {Place} = require("../models/Place");
const router = require('express').Router();

router.post("/",  async (req, res) => {
  const user = req.body.user
  console.log(user)
  const newPlace = new Place({
    title:req.body.title,
    desc:req.body.desc,
    county:req.body.county,
    district:req.body.district,
    img:req.body.img,
    categories:req.body.categories,
    price:req.body.price,
    inStock:req.body.inStock,
    creator:user
  });

  try {
    const savedPlace = await newPlace.save();
    res.status(200).json(savedPlace);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.put("/:id", async (req,res) => {
    try {
    const updatedPlace = await Place.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body
        },
        {new:true}
        ) 
        res.status(200).json(updatedPlace)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.delete("/:id" ,async (req,res) => {
    try {   
        await Place.findByIdAndDelete(req.params.id)        
        res.status(200).json("Yerleşke Silindi")

    } catch (err) {
        res.status(500).json(err)
    }
})

router.get("/find/:id", async (req,res) => {
    try {
        const place = await Place.findById(req.params.id).populate('creator');
        res.status(200).json(place)
    } catch (err) {
        res.status(500).json(err)
    }
})




router.get("/", async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try {
      let places;
  
      if (qNew) {
        places = await Place.find().sort({ createdAt: -1 }).limit(1);
      } else if (qCategory) {
        places = await Place.find({
          categories: {
            $in: [qCategory],
          },
        });
      } else {
        places = await Place.find();
      }
  
      res.status(200).json(places);
    } catch (err) {
      res.status(500).json(err);
    }
  });




module.exports = router