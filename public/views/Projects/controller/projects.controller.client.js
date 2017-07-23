/**
 * Created by Aadi on 5/15/2017.
 */

(function () {

    angular.module('portfolio')
        .controller('ProjectsController', function ($scope, ProjectsService) {

            var ctrl= $scope;
            ctrl.projects= {};

            function init(){
                ProjectsService.getAllProjects()
                    .then(
                        function onSuccess(response){
                            console.log(response.data);
                            ctrl.projects= response.data;
                        },
                        function onError(response) {
                            console.log("Unable to get all projects");
                        }
                    );
            }
            init();

        });

})();
