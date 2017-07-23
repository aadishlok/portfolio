/**
 * Created by Aadi on 5/15/2017.
 */

var mongoose= require('mongoose');

var ProjectSchema= new mongoose.Schema({
    title: String,
    description: [{
        type: String
    }]
},{collection: "project"});

module.exports= ProjectSchema;
