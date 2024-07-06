const  express  = require ("express");
const router = express.Router();

const wrapAsync=require("../utils/wrapAsync.js");
const ExpressError=require("../utils/expressError.js");
const {listingSchema ,reviewSchema}= require("../schema.js");
const Listing= require("../models/listing.js");
const{isLoggedIn,isOwner,validateListing} =require("../middleware.js");

const listingController= require("../controllers/listing.js");
const filterController= require("../controllers/filter.js");

 
router.route("/")
.get(wrapAsync(listingController.index))
.post(isLoggedIn,validateListing,wrapAsync(listingController.createListing));

router.get ("/New",isLoggedIn,(listingController.renderNewForm));


router.route("/:id")
.delete(isLoggedIn,isOwner,wrapAsync(listingController.destroyListing))
.put(isLoggedIn,isOwner,validateListing,wrapAsync(listingController.updateListing));



router.get ("/:id/show",wrapAsync(listingController.showListing));

router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingController.editListing));


// filters
router.route("/Country")
.post(wrapAsync(filterController.Country));
router.get("/Trending",wrapAsync(filterController.Trending));
router.get("/Rooms",wrapAsync(filterController.Rooms));
router.get("/IconicCities",wrapAsync(filterController.IconicCities));
router.get("/Mountains",wrapAsync(filterController.Mountains));
router.get("/Castles",wrapAsync(filterController.Castles));
router.get("/AmazingPools",wrapAsync(filterController.AmazingPools));
router.get("/Sea",wrapAsync(filterController.Sea));
router.get("/Camping",wrapAsync(filterController.Camping));
router.get("/farms",wrapAsync(filterController.farms));
router.get("/Arctic",wrapAsync(filterController.Arctic));
router.get("/Domes",wrapAsync(filterController.Domes));
router.get("/Boats",wrapAsync(filterController.Boats));


module.exports= router;