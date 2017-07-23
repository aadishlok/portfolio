/**
 * Created by Aadi on 5/9/2017.
 */
(function(){
    angular.module("portfolio")
        .config(function($routeProvider, $httpProvider){

            $httpProvider.defaults.headers.post['Content-Type']= 'application/json;charset=utf-8';
            $httpProvider.defaults.headers.put['Content-Type']= 'application/json;charset=utf-8';

            $routeProvider
                .when('/',{
                    templateUrl: '/views/Academic/template/academic.view.client.html',
                    controller: 'AcademicController',
                    controllerAs: 'ctrl'
                })
                .when('/professional',{
                    templateUrl: '/views/Professional/template/professional.view.client.html',
                    controller: 'ProfessionalController',
                    controllerAs: 'ctrl'
                })
                .when('/projects',{
                    templateUrl: '/views/Projects/template/projects.view.client.html',
                    controller: 'ProjectsController',
                    controllerAs: 'ctrl'
                })
                .when('/contact',{
                    templateUrl: '/views/Contact/template/contact.view.client.html',
                    controller: 'ContactController',
                    controllerAs: 'ctrl'
                })
                .otherwise({
                    redirectTo: '/'
                });
        });
})();