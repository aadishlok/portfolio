/**
 * Created by Aadi on 5/15/2017.
 */

(function () {
    
    angular.module('portfolio')
        .controller('ContactController', function ($scope, ContactService) {

            var ctrl= this;
            ctrl.contact= {
                firstName: '',
                lastName: '',
                company: '',
                role: '',
                phone: '',
                email: '',
                message: ''
            };

            ctrl.contacts= {};
            ctrl.contextMessage= "Hello";

            function init() {
                ContactService.getAllContacts()
                    .then(
                        function onSuccess(response) {
                            console.log(response.data);
                            ctrl.contacts= response.data;
                        },
                        function onError(response) {
                            console.log('Unable to get all contacts');
                        }
                    );
            }
            init();

            ctrl.submitForm= function () {
                console.log('Contact Data: '+ctrl.contact.firstName);
                ContactService.sendMail(ctrl.contact)
                    .then(
                        function onSuccess(response){
                            console.log('Response Successful: '+response.data);
                            console.log(response);
                            console.log(angular.toJson(response.data));
                        },
                        function onError(response) {
                            console.log('Error: '+response.data)
                        }
                    );
              /*ContactService.createContact(contact)
                  .then(
                      function onSuccess(response) {
                            console.log(response.data);
                      },
                      function onError(response) {
                          console.log(response.data+' Unable to create contact');
                      }
                  );*/
            };

            ctrl.getContactById= function (id) {
                ContactService.getContactById(id)
                    .then(
                        function onSuccess(response) {
                            console.log(response.data);
                            ctrl.contact= response.data;
                        },
                        function onError(response) {
                            console.log('Unable to get contact\n'+response);
                        }
                    );
            };
            
        });
})();
