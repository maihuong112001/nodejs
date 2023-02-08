const { mutipleMongooseToObject } = require("../../util/mongoose");
const Course = require("../models/Course");

class MeControllers {

    //[GET] /me/stored/courses
    storedCourses(req,res,next){
        Course.find({})
            .then(courses=>{
                res.render('me/storedCourses',{
                    courses: mutipleMongooseToObject(courses)
                });
            })
            .catch(next);
    }
}

module.exports=new MeControllers;