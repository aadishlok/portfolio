/**
 * Created by Aadi on 5/9/2017.
 */
(function(){
    angular.module("portfolio")
        .config(function($routeProvider, $sceDelegateProvider, $qProvider){
            $sceDelegateProvider.resourceUrlWhitelist([
                'self',
                'https://api.linkedin.com/v1/people/~:(id,first-name,last-name,location,headline,picture-url,' +
                'industry,summary,specialties,positions:(id,title,summary,start-date,end-date,is-current,' +
                'company:(id,name,type,size,industry,ticker)),educations:(id,school-name,field-of-study,start-date,' +
                'end-date,degree,activities,notes),associations,interests,num-recommenders,date-of-birth,' +
                'publications:(id,title,publisher:(name),authors:(id,name),date,url,summary),' +
                'patents:(id,title,summary,number,status:(id,name),office:(name),inventors:(id,name),date,url),' +
                'languages:(id,language:(name),proficiency:(level,name)),skills:(id,skill:(name)),' +
                'certifications:(id,name,authority:(name),number,start-date,end-date),courses:(id,name,number),' +
                'recommendations-received:(id,recommendation-type,recommendation-text,recommender),honors-awards,' +
                'three-current-positions,three-past-positions,volunteer)?' +
                'oauth2_access_token=AQW7SN09utzSntAPzmd9C4TAg6LJhJjajkmR1BP6JfQZitfViKPay-OYMCvUo3WC5D7' +
                'hUcJLdmROqROVAiCtcqgMQ7diC22MQO8dkBHdeFb3B7eYcIXXtYzpaooJAJtD0l4zHDPQb17qW4alqa42Qhqlh9_' +
                'lo7uUt3RuKI9cOAzn9dvSbzY&format=json'
            ]);
            $qProvider.errorOnUnhandledRejections(false);
            $routeProvider
                .when('/',{
                    templateUrl: 'academic.html',
                    controller: 'MainController',
                    controllerAs: 'ctrl'
                })
                .when('/professional',{
                    templateUrl: 'professional.html',
                    controller: 'MainController',
                    controllerAs: 'ctrl'
                })
                .when('/projects',{
                    templateUrl: 'projects.html',
                    controller: 'MainController',
                    controllerAs: 'ctrl'
                })
                .when('/contact',{
                    templateUrl: 'contact.html',
                    controller: 'MainController',
                    controllerAs: 'ctrl'
                })
                .otherwise({
                    redirectTo: '/'
                });
        })
        .run()
})();
/**
 * Created by Aadi on 5/16/2017.
 */
