/**
 * Created by Aadi on 5/15/2017.
 */

(function () {
    angular.module('portfolio')
        .controller('ProfessionalController', function ($scope, ProfessionalService) {

            var ctrl= $scope;
            ctrl.companies= {
                title: '',
                role: '',
                startDate: '',
                endDate: '',
                company: '',
                description: []
            };

            function init() {
                ProfessionalService.getAllProfessions()
                    .then(
                        function onSuccess(response) {
                            console.log(response.data);
                            ctrl.companies= response.data;
                        },
                        function onError(response) {
                            console.log('Unable to get all professions');
                        }
                    );
            }
            init();

        });
})();
