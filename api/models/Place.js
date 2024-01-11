const mongoose = require('mongoose')
  , Schema = mongoose.Schema


const PlaceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    county: { type: String},
    district: { type: String},
    img: { type: String, required: true },
    categories: { type: Array },
    price: { type: Number, required: true },
    inStock: { type: Boolean, default: true },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
  }
  },
  { timestamps: true }
);

const UserSchema =  new mongoose.Schema({

  username: {
      type:String,
      required:true,
  },

  email: {
      type:String,
      required:true,
      unique:true
  },

  password: {
      type:String,
      required:true,
  },

  isAdmin:{
      type:Boolean,
      default:false
  },

  img:{
      type:String
  },



},{timestamps:true});

const User = mongoose.model('User', UserSchema);
const Place = mongoose.model('Place', PlaceSchema);
module.exports = {
 User, Place
}