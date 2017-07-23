/**
 * Created by Aadi on 5/15/2017.
 */

var mongoose= require('mongoose');

var ProfessionSchema= new mongoose.Schema({
    title: String,
    role: String,
    startDate: Date,
    endDate: Date,
    company: String,
    description: [{
        type: String
    }]
},{collection: "profession"});

module.exports= ProfessionSchema;
