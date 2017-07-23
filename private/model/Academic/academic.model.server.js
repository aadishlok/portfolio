/**
 * Created by Aadi on 5/15/2017.
 */
var mongoose= require('mongoose');
var q= require('q');

var academicSchema= require('./academic.schema.server');
var academicModel= mongoose.model('academicModel', academicSchema);

module.exports= academicModel;

academicModel.getEducation= function (){
    console.log('Academic MODEL');
    var deferred= q.defer();
    academicModel.find({}, function (err, academics) {
        if(err){
            console.log('Error: '+err);
            deferred.reject(err);
        }else{
            console.log('Acad: '+academics);
            deferred.resolve(academics);
        }
    });
    return deferred.promise;
};

