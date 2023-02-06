const mongoose = require('mongoose');

async function connect(){
    try{
        await mongoose.connect('mongodb://127.0.0.1/Enghlish_education_dev',{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log("connect successfully!!!")
    }catch(err){
        console.log("connect failure!!!")
    }
}

module.exports={connect};