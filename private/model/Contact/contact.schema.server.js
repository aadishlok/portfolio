/**
 * Created by Aadi on 5/15/2017.
 */

var mongoose= require('mongoose');

var ContactSchema= new mongoose.Schema({
    firstName: String,
    lastName: String,
    company: String,
    role: String,
    phone: String,
    email: String,
    message: String
},{collection: "contact"});

module.exports= ContactSchema;
