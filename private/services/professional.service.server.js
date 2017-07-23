/**
 * Created by Aadi on 5/15/2017.
 */

module.exports= function (app, professionalModel) {

    app.get('/api/profession/all', getAllProfessions);

    function getAllProfessions(req, res){
        professionalModel.getAllProfessions()
            .then(
                function (err) {
                    res.send(err);
                },
                function (professions) {
                    res.send(professions);
                }
            );
    }
};
