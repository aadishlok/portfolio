/**
 * Created by Aadi on 5/15/2017.
 */

var mongoose= require('mongoose');
var q= require('q');

var professionalSchema= require('./professional.schema.server');
var professionalModel= mongoose.model('professionalModel', professionalSchema);

module.exports= professionalModel;

professionalModel.getAllProfessions= getAllProfessions;

function getAllProfessions() {
    var deferred= q.defer();
    professionalModel.find({}, function (err, professions) {
        if(err){
            deferred.reject(err);
        }else{
            deferred.resolve(professions);
        }
    });
    return deferred.promise;
}
