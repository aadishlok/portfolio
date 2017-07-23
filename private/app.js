/**
 * Created by Aadi on 5/15/2017.
 */
module.exports= function (app) {

    var academicModel= require('./model/Academic/academic.model.server');
    var projectsModel= require('./model/Projects/projects.model.server');
    var professionModel= require('./model/Professional/professional.model.server');
    var contactModel= require('./model/Contact/contact.model.server');

    require('./services/academic.service.server')(app, academicModel);
    require('./services/projects.service.server')(app, projectsModel);
    require('./services/professional.service.server')(app, professionModel);
    require('./services/contact.service.server')(app, contactModel);

};
