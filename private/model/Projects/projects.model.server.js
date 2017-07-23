/**
 * Created by Aadi on 5/15/2017.
 */

var mongoose= require('mongoose');
var q= require('q');

var projectsSchema= require('./projects.schema.server');
var projectsModel= mongoose.model('projectsModel', projectsSchema);

module.exports= projectsModel;

projectsModel.getAllProjects= getAllProjects;

function getAllProjects() {
    var deferred= q.defer();
    projectsModel.find({}, function (err, projects) {
        if(err){
            deferred.reject(err);
        }else{
            deferred.resolve(projects);
        }
    });
    return deferred.promise;
}
