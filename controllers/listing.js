const { query } = require("express");
const Listing = require("../models/listing");
const mbxGeocoding= require("@mapbox/mapbox-sdk/services/geocoding");
const mapToken = "pk.eyJ1IjoiY2hhcnBlNjc4IiwiYSI6ImNseGl2dXVtaDFpencyanF0eHJvNXVmM24ifQ.U-PtA_gyYq-2_jtL8_S6tw";
const geocodingClient = mbxGeocoding({ accessToken : mapToken });

module.exports.index=async(req,res)=>{
    const allListing=await Listing.find({});
    res.render("listing/index.ejs",{allListing});

};

module.exports.renderNewForm= ((req,res)=>{
 
    res.render("listing/New.ejs")
});

module.exports.showListing= async(req,res)=>{
    let {id}= req.params;
    let ListingInfo = await Listing.findById(id)
    .populate({path:"reviews",
      populate:{path: "author"},
    })
    . populate("owner");
    if(!ListingInfo){
        req.flash("error", "Listing dose not exist!");
        res.redirect("/listing");
    }
    res.render("listing/showInfo.ejs",{ListingInfo});
};


module.exports.createListing= async (req,res,next)=>{
   let responce = await geocodingClient.forwardGeocode({
    query : req.body.listing.location,
    limit : 1,
  })
  .send();
    if(!req.body.listing){
        throw (new ExpressError(404,"Sent a valid data for listing"));
    }
        const newListing= new Listing (req.body.listing);
        newListing.owner= req.user._id;
        newListing.geometry= responce.body.features[0].geometry;
        let savedListing = await newListing.save();
        console.log(savedListing);
        req.flash("success", "New listing created!");
        res.redirect("/listing");   
  };
  
  module.exports.editListing= async (req,res)=>{
    let{id}= req.params;
    let Listings = await Listing.findById(id);
    if(!Listings){
      req.flash("error", "Listing dose not exist!");
      res.redirect("/listing");
  }
    res.render("listing/edit.ejs",{Listings});
  };
  
  module.exports.updateListing= async(req,res)=>{
    let {id}=req.params; 
    let listing=  await Listing.findById(id);
    if(!currUser.id.equals(listing.owner.id)){
    req.flash("error","You are not owner of this Listing");
    return res.redirect(`/listing/${id}/show`);
    }
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    req.flash("success", "New listing Updated!");
    res.redirect(`/listing/${id}/show`);
  };
  
  module.exports.destroyListing= async(req,res)=>{
    let {id}= req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success", "listing DELETED!");
    res.redirect("/listing");
  };

