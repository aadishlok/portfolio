/**
 * Created by Aadi on 5/15/2017.
 */
module.exports= function (app, contactModel) {

    app.post('/api/contact/create', createContact);
    app.get('/api/contact/:contactId', getContactById);
    app.get('/api/contacts', getAllContacts);
    app.post('/api/mail', sendMail);

    function sendMail(req, res) {
        console.log('Backend Server Service Reached: '+req.body);
        var contactDetails= req.body;
        contactModel.sendMail(contactDetails)
            .then(
                function (err) {
                    res.sendStatus(404).send(err);
                },
                function (success) {
                    console.log('Service Server Successful'+success);
                    res.json(success);
                }
            );
    }
    
    function createContact(req, res){
        var newContact= req.body;
        contactModel.createContact(newContact)
            .then(
                function (err) {
                    res.send(404).send(err);
                },
                function (contact) {
                    res.json(contact);
                }
            );
    }
    
    function getContactById(req, res) {
        var contactId= req.params.contactId;
        contactModel.getContactById(contactId)
            .then(
                function (contact) {
                    res.send(contact);
                },
                function (err) {
                    res.send(404).send(err);
                }
            );
    }

    function getAllContacts(req, res) {
        contactModel.getAllContacts()
            .then(
                function (err) {
                    res.send(err).send(404);
                },
                function (contacts) {
                    res.send(contacts);
                }
            );
    }

};
