const express = require('express')
const router=express.Router();

const siteControllers=require("../app/controllers/SiteController");

// newControllers.index();

router.get("/search",siteControllers.search);
router.get("/",siteControllers.index);

module.exports=router;