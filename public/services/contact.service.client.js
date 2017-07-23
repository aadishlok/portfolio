/**
 * Created by Aadi on 5/15/2017.
 */

(function () {
    
    angular.module('portfolio')
        .factory('ContactService', function ($http) {

            var api= {
                getAllContacts: getAllContacts,
                createContact: createContact,
                getContactById: getContactById,
                sendMail: sendMail
            }
            return api;

            function getAllContacts() {
                return $http.get('/api/contacts');
            }
            
            function createContact(contact) {
                return $http.post('/api/contact/create', contact);
            }

            function getContactById(id) {
                return $http.get('/api/contact/'+id);
            }

            function sendMail(data){
                console.log('Client Service: '+data.firstName);
                return $http.post('/api/mail',data);
            }

        });
})();
