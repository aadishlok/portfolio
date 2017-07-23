/**
 * Created by Aadi on 5/15/2017.
 */

module.exports= function (app, projectsModel) {

    app.get('/api/projects/all', getAllProjects);

    function getAllProjects(req, res) {
        projectsModel.getAllProjects()
            .then(
                function (projects) {
                    res.send(projects);
                },
                function (err) {
                    res.send(err);
                }
            );
    }

};