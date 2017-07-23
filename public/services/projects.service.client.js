/**
 * Created by Aadi on 5/15/2017.
 */

(function () {
    angular.module('portfolio')
        .factory('ProjectsService', function ($http) {

            var api= {
                getAllProjects: getAllProjects
            }
            return api;

            function getAllProjects(){
                return $http.get('/api/projects/all');
            }

        });
})();
