const mongoose = require ("mongoose");

const Schema= mongoose.Schema;
const Review = require("./review.js");
const { ref, required } = require("joi");

const listingSchema= new Schema({
    title:{
        type:String,     
   },
    description:{
        type:String,
    },
    image:{
        type:String,
        default:"https://th.bing.com/th/id/OIP.1hDWf985W8IxAaw88DS06QHaJQ?pid=ImgDet&w=206&h=257&c=7&dpr=1.3",
        Set: (V) => 
        V === ""
        ? "https://th.bing.com/th/id/OIP.1hDWf985W8IxAaw88DS06QHaJQ?pid=ImgDet&w=206&h=257&c=7&dpr=1.3"
        : V,
    },
    price:{
        type:Number,
    },
    location:{
        type:String,
    },
    country:{
        type:String,
    },
    reviews:[
    {
        type: Schema.Types.ObjectId,
        ref : "Review",
    },
  ],
  owner:{
    type: Schema.Types.ObjectId,
    ref : "User",
  },
  geometry:{
    type:{
        type: String,
        enum: ['Point'],
        
    },
    coordinates:{
        type: [Number],
        
    },
  },
  category:{
    type: [String],
    enum:["Trending", "Rooms", "Iconic Cities" ,
         "Mountains", "Castles", "Amazing Pools","Sea",
         "Camping","farms","Arctic","Domes","Boats"],
  },
}); 
 
listingSchema.post("findOneAndDelete",async(listing)=>{
    if(listing){
        await Review.deleteMany({id : {$in: listing.reviews}});
    }
});

const Listing= mongoose.model("Listing",listingSchema);

module.exports= Listing;