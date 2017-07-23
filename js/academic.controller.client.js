/**
 * Created by Aadi on 5/9/2017.
 */
(function(){
    angular.module('portfolio')
        .controller('MainController',['$location', '$rootScope', '$scope', '$http', '$sce',
            function($location, $rootScope, $scope, $http, $sce){
            console.log("Main Controller");
            var ctrl= this;
            ctrl.name;

            var init= function(){
                console.log("init");

                $http.jsonp($sce.trustAsResourceUrl(
                    'https://api.linkedin.com/v1/people/~:(id,first-name,last-name,location,headline,picture-url,industry' +
                    ',summary,specialties,positions:(id,title,summary,start-date,end-date,is-current,company:(id,name,type,size,industry,ticker))' +
                    ',educations:(id,school-name,field-of-study,start-date,end-date,degree,activities,notes),associations,interests,' +
                    'num-recommenders,date-of-birth,publications:(id,title,publisher:(name),authors:(id,name),date,url,summary),' +
                    'patents:(id,title,summary,number,status:(id,name),office:(name),inventors:(id,name),date,url),' +
                    'languages:(id,language:(name),proficiency:(level,name)),skills:(id,skill:(name)),certifications:(id,name,authority:(name),' +
                    'number,start-date,end-date),courses:(id,name,number),recommendations-received:(id,recommendation-type,recommendation-text,' +
                    'recommender),honors-awards,three-current-positions,three-past-positions,volunteer)?oauth2_access_token=' +
                    'AQW7SN09utzSntAPzmd9C4TAg6LJhJjajkmR1BP6JfQZitfViKPay-OYMCvUo3WC5D7hUcJLdmROqROVAiCtcqgMQ7diC22MQO8dkBHdeFb3' +
                    'B7eYcIXXtYzpaooJAJtD0l4zHDPQb17q' +
                    'W4alqa42Qhqlh9_lo7uUt3RuKI9cOAzn9dvSbzY&format=jsonp'
                ))
                    .then(
                        function onSuccess(response){
                            ctrl.name= response.data.firstName+" "+response.data.lastName;
                            console.log(ctrl.name);
                        },
                        function onError(response) {
                            console.log('Error'+response);
                        });

            };
            init();

        }])


})();
