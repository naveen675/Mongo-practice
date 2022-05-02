const mangoose = require('mongoose');
const {Schema} = mangoose;


const blog = new Schema({
    name : String,
    age : Number
})

module.exports = mangoose.model('Blog',blog);