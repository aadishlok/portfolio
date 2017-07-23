/**
 * Created by Aadi on 5/9/2017.
 */
(function(){
    angular.module('portfolio')
        .factory('AcademicService', function ($http) {

            var api= {
                getAllAcademics: getAllAcademics
            }
            return api;

            function getAllAcademics(){
                console.log('Academic SERVICE');
                return $http.get('/api/academic/all');
            }
        });
})();
