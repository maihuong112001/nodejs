const { mutipleMongooseToObject } = require("../../util/mongoose");
const Course = require("../models/Course");

class SiteControllers {

    //[GET] /news
    index(req,res,next){
        Course.find({})
            .then(courses=>{
                res.render('home',{
                    courses: mutipleMongooseToObject(courses)
                });
            })
            .catch(next);
        // res.render('home');
    }

    //[GET] /search
    search(req,res){
        res.render('search');
    }
}

module.exports=new SiteControllers;