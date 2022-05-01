const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose')

mongoose.connect('mongodb://localhost:27017/library')

const UserSchema = new Schema({
    name: String,
    username: {type: String, required:true, unique:true},
    email: {type: String, required:true, unique:true},
    admin: {type: Boolean, default:false},
});

UserSchema.plugin(passportLocalMongoose);

var userdata = mongoose.model('userdata',UserSchema)

module.exports = userdata;