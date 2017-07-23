/**
 * Created by Aadi on 5/15/2017.
 */

var mongoose= require('mongoose');

var academicSchema= new mongoose.Schema({
    college: String,
    startDate: Date,
    endDate: Date
},{collection: "education"});

module.exports= academicSchema;


