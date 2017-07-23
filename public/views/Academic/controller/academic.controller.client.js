/**
 * Created by Aadi on 5/16/2017.
 */

(function () {
    angular.module('portfolio')
        .controller('AcademicController', function ($scope, AcademicService) {

            var ctrl= $scope;
            ctrl.name= "Aadi Shlok";
            ctrl.college= {
                title: '',
                startDate: '',
                endDate: ''
            };

            function init() {
                console.log('Academic INIT');
                AcademicService.getAllAcademics()
                    .then(
                      function onSuccess(response) {
                          ctrl.colleges= response.data;
                      },
                        function onError(response) {
                            console.log('Unable to get all academics'+response);
                        }
                    );
            }
            init();

        });
})();
