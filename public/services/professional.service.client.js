/**
 * Created by Aadi on 5/15/2017.
 */

(function () {
    angular.module('portfolio')
        .factory('ProfessionalService', function ($http) {

            var api={
                getAllProfessions: getAllProfessions
            }
            return api;

            function getAllProfessions() {
                return $http.get('/api/profession/all');
            }

        });
})();
