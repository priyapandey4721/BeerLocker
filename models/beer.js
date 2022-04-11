var mongoose = require('mongoose')
const { stringify } = require('nodemon/lib/utils')

var BeerSchema= new mongoose.Schema({
    name :{type:String},
    type:{type:String},
    quantity:{type:Number}
})
module.exports=mongoose.model("beer",BeerSchema)