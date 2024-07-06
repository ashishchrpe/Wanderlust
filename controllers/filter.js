const { query } = require("express");
const Listing = require("../models/listing");



module.exports.Country=async(req,res)=>{
  let {listing} = req.body;
  let countryName = listing.country;
  const allListing=await Listing.find({});
  res.render("filters/Country.ejs",{allListing,countryName});
}

// filters

module.exports.Trending= async(req,res)=>{
    
    const allListing=await Listing.find({});
    res.render("filters/Trending.ejs",{allListing});
    
  }


  module.exports.Rooms= async(req,res)=>{
    
    const allListing=await Listing.find({});
    res.render("filters/Rooms.ejs",{allListing});
    
  }

  module.exports.IconicCities= async(req,res)=>{
    
    const allListing=await Listing.find({});
    res.render("filters/IconicCities.ejs",{allListing});
    
  }


  module.exports.Mountains= async(req,res)=>{
    
    const allListing=await Listing.find({});
    res.render("filters/Mountains.ejs",{allListing});
    
  }

  module.exports.Castles= async(req,res)=>{
    
    const allListing=await Listing.find({});
    res.render("filters/Castles.ejs",{allListing});
    
  }


  module.exports.AmazingPools= async(req,res)=>{
    
    const allListing=await Listing.find({});
    res.render("filters/AmazingPools.ejs",{allListing});
    
  }

  module.exports.Sea= async(req,res)=>{
    
    const allListing=await Listing.find({});
    res.render("filters/Sea.ejs",{allListing});
    
  }


  module.exports.Camping= async(req,res)=>{
    
    const allListing=await Listing.find({});
    res.render("filters/Camping.ejs",{allListing});
    
  }

  module.exports.farms= async(req,res)=>{
    
    const allListing=await Listing.find({});
    res.render("filters/farms.ejs",{allListing});
    
  }


  module.exports.Arctic= async(req,res)=>{
    
    const allListing=await Listing.find({});
    res.render("filters/Arctic.ejs",{allListing});
    
  }

  module.exports.Domes= async(req,res)=>{
    
    const allListing=await Listing.find({});
    res.render("filters/Domes.ejs",{allListing});
    
  }


  module.exports.Boats= async(req,res)=>{
     
    const allListing=await Listing.find({});
    res.render("filters/Boats.ejs",{allListing});
    
  }