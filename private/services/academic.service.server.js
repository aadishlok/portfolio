/**
 * Created by Aadi on 5/15/2017.
 */

module.exports= function (app, academicModel) {

    app.get('/api/academic/all', getAllAcademics);

    function getAllAcademics(req, res){
        console.log('Academic Server: ');
        academicModel.getEducation()
            .then(
                function (academics) {
                    console.log('Acad '+academics);
                    res.send(academics);
                },
                function (err) {
                    console.log('Error '+err);
                    res.send(err);
                }
            );
    }

};